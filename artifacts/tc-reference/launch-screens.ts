import type { Plugin } from "vite";

// iOS launch screens (apple-touch-startup-image). Without one, a Home Screen
// launch shows a blank screen until the first paint. iOS only uses an image
// whose media query matches the device exactly, so there is one per iPhone
// screen size. Portrait only: launches mostly start in portrait, and each
// orientation doubles the files. iPads fall back to the blank screen.
//
// The PNGs live in public/splash/ and are made by
// scripts/generate-launch-screens.ts (rerun it after changing this list or
// the icon). They are deliberately not precached: iOS fetches the matching
// one when the app is added to the Home Screen.

export const LAUNCH_SCREEN_DIR = "splash";
export const LAUNCH_SCREEN_BACKGROUND = "#0f1724";

export interface LaunchScreen {
  /** CSS (portrait) viewport, in points. */
  width: number;
  height: number;
  /** Device pixel ratio. */
  ratio: 2 | 3;
  /** Phones this size covers, for humans. */
  devices: string;
}

export const LAUNCH_SCREENS: readonly LaunchScreen[] = [
  { width: 440, height: 956, ratio: 3, devices: "16 Pro Max, 17 Pro Max" },
  {
    width: 430,
    height: 932,
    ratio: 3,
    devices: "14 Pro Max, 15 Plus/Pro Max, 16 Plus",
  },
  { width: 420, height: 912, ratio: 3, devices: "Air" },
  { width: 402, height: 874, ratio: 3, devices: "16 Pro, 17, 17 Pro" },
  { width: 393, height: 852, ratio: 3, devices: "14 Pro, 15, 15 Pro, 16" },
  { width: 428, height: 926, ratio: 3, devices: "12/13 Pro Max, 14 Plus" },
  {
    width: 390,
    height: 844,
    ratio: 3,
    devices: "12, 12 Pro, 13, 13 Pro, 14, 16e",
  },
  {
    width: 375,
    height: 812,
    ratio: 3,
    devices: "X, XS, 11 Pro, 12 mini, 13 mini",
  },
  { width: 414, height: 896, ratio: 3, devices: "XS Max, 11 Pro Max" },
  { width: 414, height: 896, ratio: 2, devices: "XR, 11" },
  { width: 375, height: 667, ratio: 2, devices: "SE (2nd/3rd gen), 8" },
];

export function launchScreenFile(screen: LaunchScreen): string {
  const w = screen.width * screen.ratio;
  const h = screen.height * screen.ratio;
  return `${LAUNCH_SCREEN_DIR}/launch-${w}x${h}.png`;
}

export function launchScreenMedia(screen: LaunchScreen): string {
  return (
    `(device-width: ${screen.width}px) and (device-height: ${screen.height}px)` +
    ` and (-webkit-device-pixel-ratio: ${screen.ratio})` +
    " and (orientation: portrait)"
  );
}

/** The <link> tags for index.html, with hrefs under the app base. */
export function launchScreenLinks(base: string): string {
  return LAUNCH_SCREENS.map(
    (screen) =>
      `<link rel="apple-touch-startup-image" media="${launchScreenMedia(screen)}" href="${base}${launchScreenFile(screen)}" />`,
  ).join("\n    ");
}

/** Adds the launch screen links to the head of index.html. */
export function launchScreensPlugin(): Plugin {
  let base = "/";
  return {
    name: "tc-launch-screens",
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          "</head>",
          `    ${launchScreenLinks(base)}\n  </head>`,
        );
      },
    },
  };
}
