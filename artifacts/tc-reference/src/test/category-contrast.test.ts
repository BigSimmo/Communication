import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const css = readFileSync("src/index.css", "utf8");
const CATEGORIES = [
  "voice",
  "influence",
  "clarity",
  "connection",
  "resilience",
];

function block(selector: RegExp) {
  return css.match(selector)![1];
}
function token(source: string, name: string) {
  return source.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6});`))![1];
}
function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Page backgrounds: dark is --background 217 42% 10%, light is 210 20% 98%.
const DARK_BG = "#0f1724";
const LIGHT_BG = "#f9fafb";

describe("category colours", () => {
  const dark = block(/:root\s*\{([\s\S]*?)\n\}/);
  const light = block(/\[data-theme="light"\]\s*\{([\s\S]*?)\n\}/);

  it.each(CATEGORIES)("%s label passes AA in both themes", (name) => {
    expect(contrast(token(dark, `--cat-${name}`), DARK_BG)).toBeGreaterThan(
      4.5,
    );
    expect(contrast(token(light, `--cat-${name}`), LIGHT_BG)).toBeGreaterThan(
      4.5,
    );
  });
});
