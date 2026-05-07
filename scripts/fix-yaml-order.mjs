import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { parse, stringify } from 'yaml'

function sortKeys(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value
  const result = {}
  if ('title' in value) result.title = sortKeys(value.title)
  for (const key of Object.keys(value).filter(k => k !== 'title').sort()) {
    result[key] = sortKeys(value[key])
  }
  return result
}

const dir = 'content/congresos'
for (const file of readdirSync(dir).filter(f => f.endsWith('.yaml'))) {
  const path = join(dir, file)
  const reordered = sortKeys(parse(readFileSync(path, 'utf8')))
  writeFileSync(path, stringify(reordered, { lineWidth: 0 }))
  console.log(`✓ ${file}`)
}
