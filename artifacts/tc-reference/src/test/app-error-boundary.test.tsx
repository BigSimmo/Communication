import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  AppErrorBoundary,
  isChunkLoadError,
} from "../components/app-error-boundary";

vi.mock("wouter", () => ({
  Link: ({
    href,
    children,
    ...props
  }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

function Thrower({ error }: { error: Error }): never {
  throw error;
}

beforeEach(() => {
  // React logs caught render errors; keep the test output quiet.
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("AppErrorBoundary", () => {
  it("renders children when nothing throws", () => {
    render(
      <AppErrorBoundary>
        <p>All good</p>
      </AppErrorBoundary>,
    );
    expect(screen.getByText("All good")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("shows an accessible fallback with a reload action when a child throws", () => {
    const reload = vi.fn();
    vi.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      reload,
    });

    render(
      <AppErrorBoundary>
        <Thrower error={new Error("boom")} />
      </AppErrorBoundary>,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Something went wrong",
    });
    expect(heading).toHaveFocus();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("link", { name: "Go to library" })).toHaveAttribute(
      "href",
      "/",
    );

    screen.getByRole("button", { name: "Reload app" }).click();
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it("uses update wording for a stale chunk error", () => {
    render(
      <AppErrorBoundary>
        <Thrower
          error={
            new TypeError(
              "Failed to fetch dynamically imported module: https://example.test/assets/drill-abc123.js",
            )
          }
        />
      </AppErrorBoundary>,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A new version is available" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reload app" }),
    ).toBeInTheDocument();
  });

  it("drops to an h2 when the page header already owns the h1", () => {
    render(
      <AppErrorBoundary headingLevel={2}>
        <Thrower error={new Error("boom")} />
      </AppErrorBoundary>,
    );
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Something went wrong" }),
    ).toBeInTheDocument();
  });

  it("clears the error when the reset key changes", () => {
    const { rerender } = render(
      <AppErrorBoundary resetKey="/drill">
        <Thrower error={new Error("boom")} />
      </AppErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    rerender(
      <AppErrorBoundary resetKey="/">
        <p>Library</p>
      </AppErrorBoundary>,
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
  });
});

describe("isChunkLoadError", () => {
  it("recognises the browser and bundler chunk failure messages", () => {
    expect(
      isChunkLoadError(
        new TypeError("Failed to fetch dynamically imported module: /a.js"),
      ),
    ).toBe(true);
    expect(
      isChunkLoadError(new TypeError("Importing a module script failed.")),
    ).toBe(true);
    const named = new Error("Loading chunk 3 failed");
    named.name = "ChunkLoadError";
    expect(isChunkLoadError(named)).toBe(true);
    expect(isChunkLoadError(new Error("boom"))).toBe(false);
    expect(isChunkLoadError("not an error")).toBe(false);
  });
});
