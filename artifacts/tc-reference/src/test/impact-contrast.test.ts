import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import librarySource from "../pages/library.tsx?raw";
import { IMPACT_STYLES } from "../lib/design-tokens";

type Color = [number, number, number, number];
const css = readFileSync("src/index.css", "utf8");

function themeTokens(theme: string) {
  const declarations = (block: string) =>
    Object.fromEntries(
      [...block.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [
        m[1],
        m[2].trim(),
      ]),
    );
  const root = declarations(css.match(/:root\s*\{([\s\S]*?)\}/)![1]);
  return theme === "light"
    ? {
        ...root,
        ...declarations(
          css.match(/\[data-theme="light"\]\s*\{([\s\S]*?)\}/)![1],
        ),
      }
    : root;
}

function color(value: string, tokens: Record<string, string>): Color {
  const variable = value.match(/^var\((--[\w-]+)\)$/);
  if (variable) return color(tokens[variable[1]], tokens);
  const mix = value.match(
    /^color-mix\(in srgb, (.+) ([\d.]+)%, transparent\)$/,
  );
  if (mix) {
    const mixed = color(mix[1], tokens);
    return [mixed[0], mixed[1], mixed[2], (mixed[3] * Number(mix[2])) / 100];
  }
  if (/^#[\da-f]{6}$/i.test(value)) {
    return [1, 3, 5]
      .map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255)
      .concat(1) as Color;
  }
  const rgb = value.match(/^rgba?\(([^)]+)\)$/);
  if (rgb) {
    const channels = rgb[1].split(",").map(Number);
    return [
      channels[0] / 255,
      channels[1] / 255,
      channels[2] / 255,
      channels[3] ?? 1,
    ];
  }
  // The app's --background token uses HSL channels without an hsl() wrapper.
  const hsl = value.match(/^([\d.]+) ([\d.]+)% ([\d.]+)%$/);
  if (hsl) {
    const hue = Number(hsl[1]) / 30;
    const saturation = Number(hsl[2]) / 100;
    const lightness = Number(hsl[3]) / 100;
    const amplitude = saturation * Math.min(lightness, 1 - lightness);
    const channel = (offset: number) => {
      const k = (offset + hue) % 12;
      return lightness - amplitude * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    };
    return [channel(0), channel(8), channel(4), 1];
  }
  throw new Error(`Unsupported contrast-test color: ${value}`);
}

function over(foreground: Color, background: Color): Color {
  return [0, 1, 2]
    .map(
      (i) =>
        foreground[i] * foreground[3] + background[i] * (1 - foreground[3]),
    )
    .concat(1) as Color;
}

function luminance(rgb: Color) {
  const linear = rgb
    .slice(0, 3)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

describe("Library impact badge contrast", () => {
  // Read the actual Library card fill; the badge tint and text also come from
  // production tokens. Composite page -> card -> badge -> text in sRGB.
  const cardFill = librarySource.match(
    /background: "(rgba\(245,158,11,0\.08\))"/,
  )![1];
  const hoverFill = librarySource.match(
    /hover:bg-\[(rgba\(245,158,11,0\.12\))\]/,
  )![1];

  it.each(["dark", "light"])(
    "meets 4.5:1 for every impact in %s theme",
    (theme) => {
      const tokens = themeTokens(theme);
      const page = color(tokens["--background"], tokens);
      for (const [variant, badge] of Object.entries(IMPACT_STYLES)) {
        expect(badge.label.toLowerCase()).toBe(variant);
        for (const fill of [cardFill, hoverFill]) {
          const card = over(color(fill, tokens), page);
          const background = over(color(badge.bg, tokens), card);
          const foreground = over(color(badge.color, tokens), background);
          const [lighter, darker] = [
            luminance(background),
            luminance(foreground),
          ].sort((a, b) => b - a);
          expect(
            (lighter + 0.05) / (darker + 0.05),
            `${theme} ${variant} on ${fill}`,
          ).toBeGreaterThanOrEqual(4.5);
        }
      }
    },
  );
});
