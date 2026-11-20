// Normalize content/** frontmatter to the exact format Nuxt Studio writes.
// Mirrors nuxt-studio/dist/module/runtime/utils/document/{generate,schema}.js:
//   - remark-mdc stringifyFrontMatter with lineWidth: 0
//   - cleanDataKeys: drop null values, empty arrays, empty title/description,
//     and seo when it just repeats title/description
//   - key order: title first, then the remaining keys alphabetically
//     (the order of the content DB columns Studio reads from)
// Only the frontmatter is rewritten; the Markdown body is kept as-is
// (stringifyFrontMatter trims it and ends the file with one newline, as Studio does).
//
// Usage (from project root):
//   node scripts/normalize-frontmatter.mjs .                 dry run, all of content/
//   node scripts/normalize-frontmatter.mjs . --write         rewrite all of content/
//   node scripts/normalize-frontmatter.mjs . path/to/file.md  print normalized file
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(process.argv[2])
const write = process.argv.includes('--write')
const explicit = process.argv.slice(3).filter(a => a !== '--write')

const { parseFrontMatter, stringifyFrontMatter } = await import(
  pathToFileURL(path.join(root, 'node_modules/remark-mdc/dist/index.mjs')).href
)
const { parse: parseYAML } = await import(
  pathToFileURL(path.join(root, 'node_modules/yaml/dist/index.js')).href
)

function clean(data) {
  const out = {}
  const keys = Object.keys(data).filter(k => k !== 'title').sort()
  if ('title' in data) keys.unshift('title')
  for (const k of keys) {
    const v = data[k]
    if (v === null || v === undefined) continue
    if (Array.isArray(v) && v.length === 0) continue
    if ((k === 'title' || k === 'description') && !v) continue
    out[k] = v
  }
  if (out.seo && typeof out.seo === 'object') {
    const s = out.seo
    if ((!s.title || s.title === out.title) && (!s.description || s.description === out.description)) {
      delete out.seo
    }
  }
  return out
}

export function normalize(file, src) {
  if (file.endsWith('.md')) {
    if (!src.startsWith('---\n')) return { out: src, note: 'no frontmatter' }
    if (src.indexOf('\n---', 4) === -1) throw new Error('unterminated frontmatter')
    const { data, content } = parseFrontMatter(src)
    return { out: stringifyFrontMatter(clean(data), content, { lineWidth: 0 }) }
  }
  if (file.endsWith('.yaml') || file.endsWith('.yml')) {
    const data = parseYAML(src)
    return { out: stringifyFrontMatter(clean(data), '', { prefix: '', suffix: '', lineWidth: 0 }) }
  }
  return { out: src, note: 'skipped' }
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name)
    if (e.name.startsWith('.')) return []
    return e.isDirectory() ? walk(p) : [p]
  })
}

const files = explicit.length ? explicit.map(f => path.resolve(root, f)) : walk(path.join(root, 'content'))
let changed = 0
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8')
  let res
  try { res = normalize(f, src) } catch (e) { console.log('ERROR', path.relative(root, f), e.message); continue }
  if (res.note) console.log('NOTE', path.relative(root, f), res.note)
  if (res.out !== src) {
    changed++
    if (write) fs.writeFileSync(f, res.out)
    else if (explicit.length) process.stdout.write(res.out)
  }
}
console.error(`${changed}/${files.length} files ${write ? 'rewritten' : 'would change'}`)
