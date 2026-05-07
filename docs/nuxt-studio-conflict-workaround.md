# NuxtStudio False Conflict Detection — Workaround

## Known manifestations

Two confirmed variants of this bug affect this project:

1. **Key ordering** — Studio shows conflicts when YAML property order differs from NuxtContent's normalized order, even though data is identical. Fixable by reordering YAML files (see below).
2. **Integer quoting** — Studio displays integer values (e.g. `1`) as quoted strings (`"1"`) in its diff view. This is caused by `z.number().int()` fields being stored as SQLite `INTEGER` columns, which Studio's API serializes differently from `REAL` (float) columns. Changing to `z.number()` to force `REAL` storage breaks NuxtContent's schema mapper (`no such column: NaN` error). **Not fixable** at the schema level. Treat these as false conflicts and accept the "website version" in Studio to dismiss them.

---

## The bug

NuxtStudio compares content in two ways:

- **GitHub version** — the raw YAML/MD file as stored in the repository
- **Website version** — the content as processed by @nuxt/content (normalized, stored in SQLite, served via API)

@nuxt/content normalizes content during build (key ordering, format cleanup). If the raw file on GitHub has a different property order than the normalized output, Studio flags a conflict — even though the data is identical.

This is a known bug: [nuxt-content/nuxt-studio#385](https://github.com/nuxt-content/nuxt-studio/discussions/385)

---

## Quick fix (one-time, per conflicted file)

In Studio's conflict split view, choose **"Use website version"** for every conflicted file. This writes the schema-normalized key order back to GitHub, aligning both sides permanently.

> Choosing "website version" is safe — the data is identical, only the key order differs.

If Studio has a bulk "resolve all" option, use that. Otherwise resolve file by file.

---

## Permanent fix via dev server (if conflicts recur)

Use this approach to reorder the YAML files on GitHub to exactly match @nuxt/content's normalized output, preventing future false conflicts.

### 1. Start the local dev server

```bash
npm run dev
```

### 2. Query the normalized key order

Open `http://localhost:3000` and run in the browser DevTools console:

```js
// Replace 'congresos' with any conflicted collection name
await $fetch('/_content/query', {
  method: 'POST',
  body: { collection: 'congresos', first: true }
})
```

The returned JSON object shows the exact key order @nuxt/content uses internally.

> If `/_content/query` returns 404, check the Nuxt/Content version — the endpoint path may differ. Try `/_nuxt_content/query` or inspect network requests in the Studio editor at `/_studio`.

### 3. Note the key order

Compare the API response keys against one of the conflicted YAML files. The difference in order is what Studio is flagging.

### 4. Rewrite YAML files in the correct order

Write a Node.js script using `js-yaml` to parse and re-serialize each file with keys in the correct order:

```js
import { readFileSync, writeFileSync } from 'fs'
import { globSync } from 'glob'
import yaml from 'js-yaml'

const KEY_ORDER = ['title', 'slug', 'year', 'dateFrom', 'dateTo', 'url', 'lugar', 'sede', 'image', 'actas', 'nacional_num', 'internacional_num', 'hispano_num', 'lat', 'lng', 'descripcion']
// Adjust KEY_ORDER to match the order observed in step 2

function reorder(obj, order) {
  const result = {}
  for (const key of order) {
    if (key in obj) result[key] = obj[key]
  }
  // append any keys not in the order list
  for (const key of Object.keys(obj)) {
    if (!(key in result)) result[key] = obj[key]
  }
  return result
}

for (const file of globSync('content/congresos/*.yaml')) {
  const raw = yaml.load(readFileSync(file, 'utf8'))
  const reordered = reorder(raw, KEY_ORDER)
  writeFileSync(file, yaml.dump(reordered, { lineWidth: -1 }))
}
```

Run separately for each collection (`revista`, `temas`, `congresos`), adjusting `KEY_ORDER` for each schema.

> **Gotcha — colons in unquoted strings**: if a YAML value contains `: ` (colon + space), the parser treats it as a nested mapping key and throws `YAMLParseError: Nested mappings are not allowed`. Fix by converting those values to block scalar syntax before running the script:
> ```yaml
> # broken
> descripcion: El congreso continúa los objetivos anteriores: promover y difundir...
> # fixed
> descripcion: |
>   El congreso continúa los objetivos anteriores: promover y difundir...
> ```
> Once the script rewrites the file, `stringify` will keep it in block scalar form automatically.

### 5. Push to GitHub and verify in Studio

```bash
git add content/
git commit -m "Normalize YAML key order to match NuxtContent output"
git push
```

After Netlify redeploys, Studio should show no conflicts.

---

## Collections affected (this project)

The following collections were migrated from `type: 'page'` (Markdown) to `type: 'data'` (YAML) in May 2026, which triggered the initial conflict detection:

| Collection | Files | Notes |
|-----------|-------|-------|
| `revista` | 5 | No body content, pure metadata |
| `temas` | 8 | Body was unused duplicate of `desc` field |
| `congresos` | 24 | Body text migrated to `descripcion` field |

`noticias`, `textos`, and `entidades` remain as `type: 'page'` (Markdown) and are not affected.
