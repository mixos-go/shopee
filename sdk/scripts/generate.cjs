/**
 * Generator: parses every reference doc under `../../references/api` and emits
 * a typed, category-scoped SDK under `../src/generated`.
 *
 * Run: `npm run generate` (from sdk/).
 */
const fs = require('fs')
const path = require('path')

const API_ROOT = path.join(__dirname, '../../references/api')
const OUT_DIR = path.join(__dirname, '../src/generated')

const cats = fs
  .readdirSync(API_ROOT)
  .filter((d) => fs.statSync(path.join(API_ROOT, d)).isDirectory())
  .sort()

// ---------- Markdown helpers ----------

function splitSections(content) {
  const sections = {}
  let cur = null
  for (const line of content.split('\n')) {
    const m = line.match(/^## (.+)/)
    if (m) {
      cur = m[1].trim()
      sections[cur] = []
      continue
    }
    if (cur) sections[cur].push(line)
  }
  return sections
}

function parseTable(lines) {
  const rows = []
  for (const line of lines) {
    const t = line.trim()
    if (!t.startsWith('|')) continue
    const cells = t.split('|').slice(1, -1).map((c) => c.trim())
    if (cells.length === 0) continue
    if (cells.every((c) => /^[-: ]+$/.test(c))) continue
    if (cells[0].replace(/`/g, '') === 'Name') continue
    rows.push(cells)
  }
  return rows
}

function firstJson(lines) {
  if (!lines) return null
  const joined = lines.join('\n')
  const m = joined.match(/```json\s*\n([\s\S]*?)\n```/)
  if (!m) return null
  const candidates = candidatesForJson(m[1])
  for (const src of candidates) {
    try {
      return JSON.parse(src)
    } catch {
      /* try strict next, then tolerant */
    }
  }
  for (const src of candidates) {
    try {
      return parseTolerant(src)
    } catch {
      /* ignore */
    }
  }
  return null
}

function candidatesForJson(src) {
  const out = [src]
  // Some docs wrap the JSON with a stray leading `{` (a lone brace on its own
  // line, i.e. `{\n{...}`). Detect and drop it as a best-effort repair.
  const trimmed = src.trimStart()
  const m = trimmed.match(/^\{[\s]*\r?\n/)
  if (m) {
    out.push(trimmed.slice(m[0].length))
  }
  return out
}

/**
 * Tolerant JSON parser for Shopee's transcription quirk where array elements
 * and objects are wrapped in redundant grouping braces, e.g.
 *   "order_list": [ { { "order_sn": "..." } } ]
 * Strict JSON.parse fails; this parser treats repeated `{`/`}` pairs as
 * transparent grouping wrappers.
 */
function parseTolerant(src) {
  let pos = 0
  const s = src
  const len = s.length

  function ws() {
    while (pos < len && /\s/.test(s[pos])) pos++
  }
  function error(msg) {
    throw new Error(`Shopee tolerant JSON parse error at ${pos}: ${msg}`)
  }
  function peek() {
    ws()
    return pos < len ? s[pos] : null
  }
  function expect(ch) {
    ws()
    if (s[pos] !== ch) error(`expected "${ch}" got "${s[pos]}"`)
    pos++
  }

  function parseString() {
    ws()
    if (s[pos] !== '"') error('expected string')
    let out = ''
    pos++ // opening quote
    while (pos < len) {
      const c = s[pos]
      if (c === '"') {
        pos++
        break
      }
      if (c === '\\') {
        const n = s[pos + 1]
        const map = { '"': '"', '\\': '\\', '/': '/', b: '\b', f: '\f', n: '\n', r: '\r', t: '\t' }
        if (n === 'u') {
          out += String.fromCharCode(parseInt(s.slice(pos + 2, pos + 6), 16))
          pos += 6
        } else {
          out += map[n] ?? n
          pos += 2
        }
      } else {
        out += c
        pos++
      }
    }
    return out
  }

  function parseObject() {
    // consume one `{`, then if another `{` follows (a transparent group), wrap.
    expect('{')
    // transparent grouping brace(s)
    if (peek() === '{') {
      const inner = parseObject() // recursively consumes a full { ... }
      expect('}')
      return inner
    }
    ws()
    const obj = {}
    if (s[pos] === '}') {
      pos++
      return obj
    }
    // handle spurious leading comma
    if (s[pos] === ',') pos++
    for (;;) {
      ws()
      if (s[pos] === '}') {
        pos++
        break
      }
      const key = parseString()
      expect(':')
      let val
      try {
        val = parseValue()
      } catch (e) {
        // skip unparseable value (truncation)
        ws()
        while (pos < len && !/[,}]/.test(s[pos])) pos++
        val = null
      }
      obj[key] = val
      ws()
      const c = s[pos]
      if (c === ',') {
        pos++
        // allow trailing comma
        ws()
        if (s[pos] === '}') {
          pos++
          break
        }
      } else if (c === '}') {
        pos++
        break
      } else if (c === '"') {
        // tolerate a missing comma between properties (doc transcription bug)
        continue
      } else {
        error('expected , or }')
      }
    }
    return obj
  }

  function parseArray() {
    expect('[')
    const arr = []
    ws()
    if (s[pos] === ']') {
      pos++
      return arr
    }
    if (s[pos] === ',') pos++
    for (;;) {
      ws()
      if (s[pos] === ']') {
        pos++
        break
      }
      arr.push(parseValue())
      ws()
      const c = s[pos]
      if (c === ',') {
        pos++
        ws()
        if (s[pos] === ']') {
          pos++
          break
        }
      } else if (c === ']') {
        pos++
        break
      } else {
        error('expected , or ]')
      }
    }
    return arr
  }

  function parseNumber() {
    ws()
    const m = s.slice(pos).match(/^-?\d+(\.\d+)?([eE][+-]?\d+)?/)
    if (!m) error('expected number')
    pos += m[0].length
    return parseFloat(m[0])
  }

  function parseValue() {
    ws()
    const c = s[pos]
    if (c === '"') return parseString()
    if (c === '{') return parseObject()
    if (c === '[') return parseArray()
    if (c === '-' || (c >= '0' && c <= '9')) return parseNumber()
    if (s.startsWith('true', pos)) {
      pos += 4
      return true
    }
    if (s.startsWith('false', pos)) {
      pos += 5
      return false
    }
    if (s.startsWith('null', pos)) {
      pos += 4
      return null
    }
    error('unexpected token')
  }

  const val = parseValue()
  return val
}

// ---------- Naming helpers ----------

function pascal(str) {
  return str
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('')
}

function camel(str) {
  const p = pascal(str)
  return p[0].toLowerCase() + p.slice(1)
}

function safeIdentifier(name) {
  const c = camel(name)
  if (/^[A-Za-z_$]/.test(c)) return c
  return '_' + c
}

function moduleName(cat) {
  return pascal(cat.replace(/[^A-Za-z0-9]+/g, ' '))
}

// ---------- Type mapping (Shopee -> TS) ----------

function mapBaseType(type) {
  const t = (type || '').trim().toLowerCase()
  if (/^(int|int32|int64|long|float|double|number|timestamp|datetime|date)$/.test(t)) return 'number'
  if (t === 'boolean' || t === 'bool') return 'boolean'
  if (/^(string|text|url|enum|date_string)$/.test(t)) return 'string'
  if (t === 'object') return 'Record<string, unknown>'
  if (/\[\]$/.test(t)) {
    const inner = mapBaseType(t.replace(/\[\]$/, ''))
    return `Array<${inner}>`
  }
  return 'unknown'
}

// JSON value -> TS type literal (recursive, inline)
function jsonToTs(value, indent, requiredName) {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'null'
  const t = typeof value
  if (t === 'number') return Number.isInteger(value) ? 'number' : 'number'
  if (t === 'boolean') return 'boolean'
  if (t === 'string') return 'string'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]'
    const inner = jsonToTs(value[0], indent, null)
    return `Array<${inner}>`
  }
  if (t === 'object') {
    const keys = Object.keys(value)
    if (keys.length === 0) return 'Record<string, unknown>'
    const lines = [`{`]
    for (const k of keys) {
      const inner = jsonToTs(value[k], indent + 1, null)
      lines.push(`${pad}  ${JSON.stringify(k)}${inner.startsWith('{') ? '' : '?'}: ${inner},`)
    }
    lines.push(`${pad}}`)
    return lines.join('\n')
  }
  return 'unknown'
}

// Build a flat interface type from a params table (fallback when no JSON).
function flatInterface(name, rows, typeIdx, requiredIdx, hasRequiredCol) {
  const pad = '  '
  const lines = [`export interface ${name} {`]
  const seen = new Set()
  for (const row of rows) {
    const fieldName = row[0]
    if (!fieldName) continue
    if (seen.has(fieldName)) continue
    seen.add(fieldName)
    const ts = mapBaseType(row[typeIdx])
    const req = hasRequiredCol && row[requiredIdx] && String(row[requiredIdx]).toLowerCase() === 'true'
    const desc = row[row.length - 1] || ''
    const sample = row[3] || ''
    const jdoc = []
    if (desc) jdoc.push(desc.replace(/\n/g, ' '))
    if (sample) jdoc.push(`Example: ${sample}`)
    if (jdoc.length) lines.push(`${pad}/** ${jdoc.join(' ')} */`)
    lines.push(`${pad}${JSON.stringify(fieldName)}${req ? '' : '?'}: ${ts},`)
  }
  lines.push(`}`)
  return lines.join('\n')
}

// Build a type from a JSON example (nested), using table required flags.
function jsonInterface(name, json, requiredNames) {
  const pad = '  '
  const lines = [`export interface ${name} {`]
  for (const [k, v] of Object.entries(json || {})) {
    const inner = jsonToTs(v, 1, null)
    const required = requiredNames && requiredNames.has(k)
    lines.push(`${pad}${JSON.stringify(k)}${required && !inner.startsWith('{') ? '' : '?'}: ${inner},`)
  }
  lines.push(`}`)
  return lines.join('\n')
}

// ---------- Doc parsing ----------

function parseDoc(cat, file, content) {
  const sections = splitSections(content)
  const method = ((content.match(/^\*\*Method:\*\*\s*(.+)/m) || [])[1] || 'POST').trim().toUpperCase()
  const httpPath = ((content.match(/^\*\*HTTP Path:\*\*\s*(.+)/m) || [])[1] || '').trim()
  const apiName = file.replace(/\.md$/, '')

  const commonRows = parseTable(sections['Common Request Parameters'] || [])
  const reqRows = parseTable(sections['Request Parameters'] || [])
  const respRows = parseTable(sections['Response Parameters'] || [])

  const reqJson = firstJson(sections['Request Example'])
  const respJson = firstJson(sections['Response Example'])

  // Required names from the request table (only "True").
  const reqRequired = new Set()
  // Detect the Required column: request tables have it as col 2 when present.
  const firstReqRow = (sections['Request Parameters'] || []).find((l) => l.includes('| Name |'))
  const hasReqCol = /Required/i.test(firstReqRow || '')
  for (const row of reqRows) {
    const field = row[0]
    const isReq =
      row.length > 2 &&
      String(row[2]).trim().toLowerCase() === 'true'
    if (field && isReq) reqRequired.add(field)
  }

  const required = { reqRequired, hasReqCol }

  return { cat, file, apiName, method, httpPath, reqRows, respRows, reqJson, respJson, required }
}

// ---------- Emit one category ----------

function emitCategory(cat) {
  const dir = path.join(API_ROOT, cat)
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()

  const mod = moduleName(cat)
  const className = `Shopee${mod}Api`

  const typeParts = []
  const methodParts = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')
    const doc = parseDoc(cat, file, content)
    const { apiName, method, httpPath, reqRows, respRows, reqJson, respJson } = doc

    const Pascal = pascal(apiName)
    let reqType = Pascal
    let respType = Pascal
    if (!/Request$/.test(Pascal)) reqType = `${Pascal}Request`
    if (!/Response$/.test(Pascal)) respType = `${Pascal}Response`

    // ---- request type ----
    let reqOut
    if (method === 'POST' && reqJson && typeof reqJson === 'object' && !Array.isArray(reqJson)) {
      reqOut = jsonInterface(reqType, reqJson, doc.required.reqRequired)
    } else if (reqRows.length) {
      reqOut = flatInterface(reqType, reqRows, 1, 2, doc.required.hasReqCol)
    } else {
      reqOut = `export interface ${reqType} {}\n`
    }

    // ---- response type ----
    let respOut
    if (respJson && typeof respJson === 'object' && !Array.isArray(respJson)) {
      // Typically the envelope has `response` as the payload root.
      respOut = jsonInterface(respType, respJson, null)
    } else if (respRows.length) {
      respOut = flatInterface(respType, respRows, 1, -1, false)
    } else {
      respOut = `export interface ${respType} {}\n`
    }

    typeParts.push(reqOut + '\n' + respOut)

    // ---- spec ----
    let queryKeys, bodyKeys
    if (method === 'GET') {
      queryKeys = reqRows.map((r) => r[0]).filter(Boolean)
      bodyKeys = []
    } else if (reqJson && typeof reqJson === 'object' && !Array.isArray(reqJson)) {
      bodyKeys = Object.keys(reqJson)
      queryKeys = []
    } else {
      bodyKeys = reqRows.map((r) => r[0]).filter(Boolean)
      queryKeys = []
    }

    const m = safeIdentifier(apiName)
    const scope = httpPath.includes('/global/') ? 'merchant' : 'shop'
    const reqTypeName = reqType
    const respTypeName = respType

    const specJson = {
      method,
      path: httpPath,
      query: queryKeys,
      body: bodyKeys,
      scope,
    }

    methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqTypeName}, opts?: ShopeeRequestOptions): Promise<ApiResponse<${respTypeName}>> {
    return this.client.request(${JSON.stringify(specJson)}, params as unknown as Record<string, unknown>, opts)
  }`)
  }

    const fileContent = `// AUTO-GENERATED from Shopee reference docs (references/api/${cat}).
// Do not edit by hand; run \`npm run generate\` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

${typeParts.join('\n')}

export class ${className} {
  constructor(private client: ShopeeClient) {}

${methodParts.join('\n\n')}
}
`

  fs.mkdirSync(path.join(OUT_DIR, mod), { recursive: true })
  fs.writeFileSync(path.join(OUT_DIR, mod, 'index.ts'), fileContent)
  return mod
}

// ---------- Main ----------

function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true })
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const modules = cats.map((cat) => emitCategory(cat))

  // Barrel index
  const barrel = modules
    .map((mod) => `export { Shopee${mod}Api } from './${mod}'`)
    .join('\n')
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.ts'),
    `// AUTO-GENERATED barrel. Run \`npm run generate\`.\n${barrel}\n`,
  )

  console.log(`Generated ${cats.length} category modules (${modules.length}) from ${cats.length} categories`)
  // count APIs
  let apiCount = 0
  for (const cat of cats) {
    apiCount += fs.readdirSync(path.join(API_ROOT, cat)).filter((f) => f.endsWith('.md')).length
  }
  console.log(`APIs covered: ${apiCount}`)
}

module.exports = { parseTolerant, firstJson, candidatesForJson, parseTable, splitSections, mapBaseType, jsonToTs, pascal, camel }

if (require.main === module) {
  main()
}
