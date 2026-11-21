import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  LAUNCH_SCREENS,
  launchScreenFile,
  launchScreenLinks,
  launchScreenMedia,
} from "../../launch-screens";

const publicDir = path.resolve(import.meta.dirname, "../../public");

/** Width and height from a PNG's IHDR chunk. */
function pngSize(file: string) {
  const bytes = readFileSync(file);
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

describe("iOS launch screens", () => {
  it("has one portrait image per screen size, at device pixels", () => {
    for (const screen of LAUNCH_SCREENS) {
      const file = path.join(publicDir, launchScreenFile(screen));
      expect(existsSync(file), file).toBe(true);
      expect(pngSize(file)).toEqual({
        width: screen.width * screen.ratio,
        height: screen.height * screen.ratio,
      });
    }
  });

  it("lists each screen size once, so no two links compete", () => {
    const media = LAUNCH_SCREENS.map(launchScreenMedia);
    expect(new Set(media).size).toBe(media.length);
  });

  it("links every image under the app base with an exact media query", () => {
    const html = launchScreenLinks("/app/");
    const links = html.match(/<link [^>]+>/g) ?? [];
    expect(links).toHaveLength(LAUNCH_SCREENS.length);
    expect(links[0]).toContain('rel="apple-touch-startup-image"');
    expect(links[0]).toMatch(/href="\/app\/splash\/launch-\d+x\d+\.png"/);
    expect(launchScreenMedia(LAUNCH_SCREENS[0])).toBe(
      "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    );
  });
});
