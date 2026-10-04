// Tests only need the generated download files to exist, not to be fresh, so
// skip the slow full regeneration when every card already has its pack.
// `pnpm run test:full` (and every build) still regenerates from scratch.
import { existsSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const cardsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/cards",
);
const ids = readdirSync(cardsDir).filter(
  (id) => /^TC\d{3}$/.test(id) && id !== "TC001",
);
const missing = ids.some(
  (id) =>
    !existsSync(path.join(cardsDir, id, `${id}_Quick_Card.pdf`)) ||
    !existsSync(path.join(cardsDir, id, `${id}_Detailed_Guide.pdf`)),
);

if (ids.length === 0 || missing) {
  execSync("pnpm run generate:downloads", { stdio: "inherit", shell: true });
} else {
  console.log("Card downloads present, skipping regeneration.");
}
