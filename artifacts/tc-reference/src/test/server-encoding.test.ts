// @vitest-environment node
import { describe, expect, it } from "vitest";
// @ts-expect-error plain .mjs server module without type declarations
import { acceptableEncodings } from "../../server-encoding.mjs";

describe("acceptableEncodings", () => {
  it("drops codings refused with q=0", () => {
    expect(acceptableEncodings("gzip, br;q=0")).toBe("gzip");
    expect(acceptableEncodings("gzip;q=0, identity;q=1")).toBe("identity");
    expect(acceptableEncodings("br;q=0.0, gzip;q=0")).toBe("");
  });

  it("keeps codings with a positive quality", () => {
    expect(acceptableEncodings("br;q=0.5, gzip")).toBe("br, gzip");
    expect(acceptableEncodings("gzip, deflate, br, zstd")).toBe(
      "gzip, deflate, br, zstd",
    );
  });

  it("handles a missing header", () => {
    expect(acceptableEncodings(undefined)).toBe("");
  });
});
