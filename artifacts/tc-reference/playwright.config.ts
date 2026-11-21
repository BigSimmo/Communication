import { defineConfig, devices } from "@playwright/test";

// Real-browser smoke tests against the production build served by server.mjs.
// "iphone-webkit" is the Safari engine (run in CI); "iphone-chromium" is the
// same phone on Chromium, for machines that only have Chromium installed.
//
// The web server builds first. Set E2E_SKIP_BUILD=1 to serve an existing
// dist/public (CI builds in its own step).
const port = Number(process.env.E2E_PORT ?? 4417);
const baseURL = `http://127.0.0.1:${port}`;
const build = process.env.E2E_SKIP_BUILD ? "" : "pnpm run build && ";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["list"], ["github"]] : "list",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    trace: "off",
    screenshot: "only-on-failure",
    serviceWorkers: "allow",
  },
  projects: [
    {
      name: "iphone-webkit",
      use: { ...devices["iPhone 15"], browserName: "webkit" },
    },
    {
      name: "iphone-chromium",
      use: { ...devices["iPhone 15"], browserName: "chromium" },
    },
  ],
  webServer: {
    command: `${build}node server.mjs`,
    url: baseURL,
    env: { PORT: String(port), HOST: "127.0.0.1" },
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
