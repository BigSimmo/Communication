import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import { AppLayout } from "../components/app-layout";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { PdfProvider } from "../lib/pdf-context";
import { PlaybookProvider } from "../lib/playbook-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import Drill from "../pages/drill";
import Library from "../pages/library";
import Playbooks from "../pages/playbooks";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
  Link: ({ href, children, ...props }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PlaybookProvider>
              <PdfProvider>{children}</PdfProvider>
            </PlaybookProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

function QuickModeState() {
  const { isOpen } = useQuickMode();
  return <output>{isOpen ? "Quick is open" : "Quick is closed"}</output>;
}

beforeEach(() => {
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

describe("core accessibility contracts", () => {
  it("uses semantic links for route navigation", () => {
    render(
      <AppProviders>
        <AppLayout><Library /></AppLayout>
      </AppProviders>,
    );

    const libraryLink = screen.getByTestId("nav-sidebar-library");
    expect(libraryLink.tagName).toBe("A");
    expect(libraryLink).toHaveAttribute("href", "/");
    for (const [testId, href] of [
      ["nav-sidebar-playbooks", "/playbooks"],
      ["nav-sidebar-phrases", "/phrases"],
      ["nav-sidebar-favourites", "/favourites"],
      ["nav-sidebar-drill", "/drill"],
    ]) {
      const link = screen.getByTestId(testId);
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", href);
    }
    expect(screen.getByTestId("nav-sidebar-quick").tagName).toBe("BUTTON");
    expect(screen.getByTestId("nav-sidebar-search").tagName).toBe("BUTTON");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(document.title).toBe("Library · TC Reference Tool");
  });

  it.each([
    ["/", "Library"],
    ["/drill", "Daily Drill"],
    ["/favourites", "Favourites"],
    ["/phrases", "Phrase Bank"],
    ["/playbooks", "Playbooks"],
    ["/card/TC001", "Live Thread Follow-Ups"],
    ["/card/not-a-card", "Card not found"],
    ["/not-a-route", "Page not found"],
  ])("sets the route-aware document title for %s", (location, title) => {
    vi.mocked(useLocation).mockReturnValue([location, vi.fn()]);

    render(
      <AppProviders>
        <AppLayout><div /></AppLayout>
      </AppProviders>,
    );

    expect(document.title).toBe(`${title} · TC Reference Tool`);
  });

  it("keeps Quick as a button that opens from the mobile menu", async () => {
    render(
      <AppProviders>
        <AppLayout><Library /></AppLayout>
        <QuickModeState />
      </AppProviders>,
    );

    fireEvent.click(screen.getByTestId("button-header-menu"));
    const quick = screen.getByTestId("nav-tab-quick");
    expect(quick.tagName).toBe("BUTTON");

    fireEvent.click(quick);
    expect(await screen.findByText("Quick is open")).toBeInTheDocument();
  });

  it("uses readable semantic colors and sibling actions for library cards", () => {
    render(
      <AppProviders>
        <Library />
      </AppProviders>,
    );

    const card = screen.getByTestId("card-link-TC001");
    expect(card.tagName).toBe("A");
    expect(card).toHaveAttribute("href", "/card/TC001");
    expect(within(card).queryByRole("button")).not.toBeInTheDocument();
    expect(within(card).getByText(/^TC001/)).toHaveStyle({
      color: "var(--brand-text)",
    });
  });

  it("associates playbook labels with their fields", () => {
    render(
      <PlaybookProvider>
        <Playbooks />
      </PlaybookProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Create" }));
    expect(screen.getByLabelText("Name")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Description").tagName).toBe("TEXTAREA");
  });

  it("announces drill completion and exposes a page heading", async () => {
    render(<Drill />);

    expect(screen.getByRole("heading", { level: 1, name: "Daily Drill" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Hard (Soon)" }));

    const completion = screen.getByRole("status");
    expect(completion).toHaveTextContent(
      "Great work — come back tomorrow",
    );
    await waitFor(() => expect(document.activeElement).toBe(completion));
  });
});
