import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, extname, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', 'public', 'images')

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

const files = await walk(ROOT)
const images = files.filter(f => SUPPORTED.includes(extname(f).toLowerCase()))

console.log(`Found ${images.length} image(s) to convert.\n`)

for (const src of images) {
  const ext = extname(src)
  const out = src.slice(0, -ext.length) + '.webp'
  await sharp(src).webp({ quality: 90 }).toFile(out)
  await unlink(src)
  console.log(`✔  ${basename(src)} → ${basename(out)}`)
}

console.log('\nAll images converted to .webp!')
