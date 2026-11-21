import type { Plugin } from "vite";

/**
 * Preloads the self-hosted Inter faces that every first screen paints with.
 *
 * The @font-face rules live in CSS and the browser only requests a face once
 * text using it is laid out, which on a cold load is after the app bundle has
 * run. A preload starts those downloads with the HTML instead, so the first
 * render does not paint in the fallback face and then lay out again when Inter
 * arrives. Only the Latin subsets of the weights used above the fold are
 * preloaded; the rest (500, 800 and other scripts) still load on demand.
 */
export function fontPreloadPlugin(weights: readonly number[]): Plugin {
  const pattern = new RegExp(
    `^assets/inter-latin-(${weights.join("|")})-normal-[^/]+\\.woff2$`,
  );
  let base = "/";
  return {
    name: "tc-font-preload",
    apply: "build",
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        if (!ctx.bundle) return;
        return Object.keys(ctx.bundle)
          .filter((fileName) => pattern.test(fileName))
          .sort()
          .map((fileName) => ({
            tag: "link",
            attrs: {
              rel: "preload",
              as: "font",
              type: "font/woff2",
              href: `${base}${fileName}`,
              crossorigin: "",
            },
            injectTo: "head" as const,
          }));
      },
    },
  };
}
