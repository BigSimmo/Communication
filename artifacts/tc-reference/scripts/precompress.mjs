// Writes .br and .gz siblings for compressible build output so server.mjs
// (sirv with brotli/gzip on) can serve them without compressing per request.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

const COMPRESSIBLE = /\.(js|mjs|css|html|svg|json|webmanifest|txt|csv|xml)$/;
const MIN_BYTES = 1024;

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

export function precompress(root) {
  let files = 0;
  let before = 0;
  let after = 0;
  for (const file of walk(root)) {
    if (!COMPRESSIBLE.test(file)) continue;
    const size = statSync(file).size;
    if (size < MIN_BYTES) continue;
    const data = readFileSync(file);
    const br = brotliCompressSync(data, {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: 11,
        [constants.BROTLI_PARAM_SIZE_HINT]: size,
      },
    });
    const gz = gzipSync(data, { level: 9 });
    // Only keep a variant that actually saves bytes.
    if (br.length < size) writeFileSync(`${file}.br`, br);
    if (gz.length < size) writeFileSync(`${file}.gz`, gz);
    files += 1;
    before += size;
    after += Math.min(br.length, size);
  }
  return { files, before, after };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "dist",
    "public",
  );
  const { files, before, after } = precompress(root);
  console.log(
    `PRECOMPRESS: ${files} files, ${(before / 1024).toFixed(0)} KiB -> ${(after / 1024).toFixed(0)} KiB brotli`,
  );
}
