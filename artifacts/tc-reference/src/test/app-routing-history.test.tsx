import {
  act,
  cleanup,
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";

// Keep the actual App, lazy routes, card loader and Wouter implementation.
// These stubs supply browser APIs that jsdom does not implement.
beforeEach(() => {
  // Real lazy route imports can exceed Testing Library's 1s default on CI.
  configure({ asyncUtilTimeout: 10000 });
  localStorage.clear();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("scrollTo", vi.fn());
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => true,
  }));
});

afterEach(() => {
  cleanup();
  configure({ asyncUtilTimeout: 1000 });
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("App routing with real Wouter browser history", () => {
  it.each(["/", "/reference/"])(
    "renders links and restores routes with Back/Forward at base %s",
    async (baseUrl) => {
      vi.stubEnv("BASE_URL", baseUrl);
      const base = baseUrl.replace(/\/$/, "");
      window.history.replaceState(null, "", `${base}/`);
      render(<App />);

      const cardLink = await screen.findByTestId("card-link-TC001");
      expect(cardLink).toHaveAttribute("href", `${base}/card/TC001`);
      fireEvent.click(cardLink);
      expect(
        await screen.findByRole("heading", { name: "Live thread follow-ups" }),
      ).toBeInTheDocument();
      expect(window.location.pathname).toBe(`${base}/card/TC001`);

      const savedLink = screen.getByTestId("nav-tab-favourites");
      expect(savedLink).toHaveAttribute("href", `${base}/favourites`);
      fireEvent.click(savedLink);
      expect(
        await screen.findByRole("heading", { name: "Favourites", level: 1 }),
      ).toBeInTheDocument();
      expect(window.location.pathname).toBe(`${base}/favourites`);

      await act(async () => window.history.back());
      await waitFor(() => {
        expect(window.location.pathname).toBe(`${base}/card/TC001`);
        expect(
          screen.getByRole("heading", { name: "Live thread follow-ups" }),
        ).toBeInTheDocument();
      });
      await act(async () => window.history.back());
      await waitFor(() => {
        expect(window.location.pathname).toBe(`${base}/`);
        expect(screen.getByTestId("card-link-TC001")).toBeInTheDocument();
      });
      await act(async () => window.history.forward());
      await waitFor(() => {
        expect(window.location.pathname).toBe(`${base}/card/TC001`);
        expect(
          screen.getByRole("heading", { name: "Live thread follow-ups" }),
        ).toBeInTheDocument();
      });
      await act(async () => window.history.forward());
      await waitFor(() => {
        expect(window.location.pathname).toBe(`${base}/favourites`);
        expect(
          screen.getByRole("heading", { name: "Favourites", level: 1 }),
        ).toBeInTheDocument();
      });

      for (const [destination, heading] of [
        ["phrases", "Phrase Bank"],
        ["playbooks", "Playbooks"],
        ["drill", "Daily Drill"],
      ]) {
        fireEvent.click(screen.getByTestId(`nav-tab-${destination}`));
        await waitFor(() => {
          expect(
            screen.getByRole("heading", { name: heading, level: 1 }),
          ).toBeInTheDocument();
          expect(screen.queryByRole("status")).not.toBeInTheDocument();
          expect(window.location.pathname).toBe(`${base}/${destination}`);
        });
      }

      act(() => window.history.pushState(null, "", `${base}/missing-route`));
      expect(
        await screen.findByRole("heading", { name: "404: Page not found" }),
      ).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Back to Library" }));
      expect(await screen.findByTestId("card-link-TC001")).toBeInTheDocument();
      expect(window.location.pathname).toBe(`${base}/`);
    },
  );
});
