// @vitest-environment node
import { mkdtempSync, readFileSync, existsSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { brotliDecompressSync, gunzipSync } from "node:zlib";
import { describe, expect, it } from "vitest";
// @ts-expect-error plain .mjs build script without type declarations
import { precompress } from "../../scripts/precompress.mjs";

describe("precompress", () => {
  it("writes round-tripping .br/.gz for large text assets only", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "precompress-"));
    const big = "const x = 1;\n".repeat(500);
    writeFileSync(path.join(dir, "app.js"), big);
    writeFileSync(path.join(dir, "tiny.css"), "a{}");
    writeFileSync(path.join(dir, "icon.png"), Buffer.alloc(4096));

    const result = precompress(dir);

    expect(result.files).toBe(1);
    expect(
      brotliDecompressSync(
        readFileSync(path.join(dir, "app.js.br")),
      ).toString(),
    ).toBe(big);
    expect(
      gunzipSync(readFileSync(path.join(dir, "app.js.gz"))).toString(),
    ).toBe(big);
    expect(existsSync(path.join(dir, "tiny.css.br"))).toBe(false);
    expect(existsSync(path.join(dir, "icon.png.br"))).toBe(false);
  });
});
