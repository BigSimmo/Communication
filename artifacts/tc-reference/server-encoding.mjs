// Accept-Encoding clean-up for server.mjs, kept separate so it can be tested
// without starting the server.

/**
 * sirv picks br/gzip whenever the token appears in Accept-Encoding, even with
 * q=0 ("not acceptable"). Strip refused codings before sirv negotiates.
 */
export function acceptableEncodings(header = "") {
  return header
    .split(",")
    .map((part) => part.trim())
    .filter((part) => {
      const q = /;\s*q\s*=\s*([0-9.]+)/i.exec(part);
      return part && !(q && Number(q[1]) === 0);
    })
    .map((part) => part.split(";")[0].trim())
    .join(", ");
}
