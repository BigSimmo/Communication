import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation, useRoute } from "wouter";
import { AppLayout } from "../components/app-layout";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { PdfProvider, usePdf } from "../lib/pdf-context";
import { useEffect } from "react";
import { loadCard } from "../lib/card-loader";
import { PlaybookProvider } from "../lib/playbook-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import Drill from "../pages/drill";
import Favourites from "../pages/favourites";
import Library from "../pages/library";
import NotFound from "../pages/not-found";
import Playbooks from "../pages/playbooks";
import Phrases from "../pages/phrases";
import CardDetail from "../pages/card-detail";
import { QuickModeOverlay } from "../components/quick-mode-overlay";
import { loadAllAggregatedPhrases } from "../lib/phrases-data";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
  useRoute: vi.fn(),
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

function CardPdf() {
  const { setPdfUrl } = usePdf();
  useEffect(
    () => setPdfUrl("cards/TC001/TC001_TwoCard_Combined.pdf"),
    [setPdfUrl],
  );
  return null;
}

beforeEach(() => {
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 768,
  });
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
  vi.mocked(useRoute).mockReturnValue([false, null]);
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
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
        <AppLayout>
          <Library />
        </AppLayout>
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
    // Tools live in the header, so the sidebar holds destinations only
    expect(screen.queryByTestId("nav-sidebar-quick")).not.toBeInTheDocument();
    expect(screen.queryByTestId("nav-sidebar-search")).not.toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(document.title).toBe("Library · TC Reference Tool");
  });

  it.each([
    ["/", "Library"],
    ["/drill", "Daily Drill"],
    ["/favourites", "Favourites"],
    ["/phrases", "Phrase Bank"],
    ["/playbooks", "Playbooks"],
    ["/card/TC001", "Live thread follow-ups"],
    ["/card/not-a-card", "Card not found"],
    ["/not-a-route", "Page not found"],
  ])("sets the route-aware document title for %s", (location, title) => {
    vi.mocked(useLocation).mockReturnValue([location, vi.fn()]);

    render(
      <AppProviders>
        <AppLayout>
          <div />
        </AppLayout>
      </AppProviders>,
    );

    expect(document.title).toBe(`${title} · TC Reference Tool`);
  });

  it("keeps Quick as a header button that opens Quick Lookup", async () => {
    render(
      <AppProviders>
        <AppLayout>
          <Library />
        </AppLayout>
        <QuickModeState />
      </AppProviders>,
    );

    const quick = screen.getByTestId("button-quick");
    expect(quick.tagName).toBe("BUTTON");
    expect(quick).toHaveAccessibleName("Open Quick Lookup");

    fireEvent.click(quick);
    expect(await screen.findByText("Quick is open")).toBeInTheDocument();
  });

  it("gives the phone tab bar five one-tap destination links", () => {
    render(
      <AppProviders>
        <AppLayout>
          <div />
        </AppLayout>
      </AppProviders>,
    );

    const bar = screen.getByTestId("bottom-tab-bar");
    expect(bar.tagName).toBe("NAV");
    expect(bar).toHaveAccessibleName("Main navigation");
    const links = within(bar).getAllByRole("link");
    expect(links.map((l) => l.getAttribute("href"))).toEqual([
      "/",
      "/playbooks",
      "/phrases",
      "/favourites",
      "/drill",
    ]);
    expect(screen.getByTestId("nav-tab-library")).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(within(bar).queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryByTestId("nav-fab")).not.toBeInTheDocument();
  });

  it("keeps Library lit in the tab bar while reading a card", () => {
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
    render(
      <AppProviders>
        <AppLayout>
          <div />
        </AppLayout>
      </AppProviders>,
    );
    expect(screen.getByTestId("nav-tab-library")).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByTestId("nav-tab-phrases")).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("offers the card PDF from the header only when one exists", async () => {
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
    const { unmount } = render(
      <AppProviders>
        <AppLayout>
          <div />
        </AppLayout>
      </AppProviders>,
    );
    expect(screen.queryByTestId("button-card-pdf")).not.toBeInTheDocument();
    unmount();

    render(
      <AppProviders>
        <AppLayout>
          <CardPdf />
        </AppLayout>
      </AppProviders>,
    );
    const pdf = await screen.findByTestId("button-card-pdf");
    expect(pdf).toHaveAccessibleName("Open printable PDF");
  });

  it("uses a semantic back link from a card route", () => {
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);

    render(
      <AppProviders>
        <AppLayout>
          <div />
        </AppLayout>
      </AppProviders>,
    );

    const back = screen.getByTestId("button-back");
    expect(back.tagName).toBe("A");
    expect(back).toHaveAttribute("href", "/");
    expect(back).toHaveAccessibleName("Back to Library");
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

  it("enforces Create button contrast and accessible custom delete dialog in Playbooks", () => {
    localStorage.setItem(
      "tc_playbooks",
      JSON.stringify([
        {
          id: "pb_test_1",
          name: "High Stakes Meeting",
          description: "Techniques for tense negotiations",
          cardIds: ["TC001"],
        },
      ]),
    );

    render(
      <PlaybookProvider>
        <Playbooks />
      </PlaybookProvider>,
    );

    const createBtn = screen.getByRole("button", { name: "Create" });
    expect(createBtn).toHaveStyle({ color: "var(--brand-contrast)" });

    const deleteBtn = screen.getByLabelText("Delete playbook");
    fireEvent.click(deleteBtn);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByRole("heading", { name: "Delete playbook?" }),
    ).toBeInTheDocument();
    expect(within(dialog).getByText(/High Stakes Meeting/)).toBeInTheDocument();

    const cancelBtn = within(dialog).getByRole("button", { name: "Cancel" });
    const confirmDeleteBtn = within(dialog).getByRole("button", {
      name: "Delete",
    });
    expect(confirmDeleteBtn).toHaveClass("bg-red-600");

    // Cancel closes dialog without deleting
    fireEvent.click(cancelBtn);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByText("High Stakes Meeting")).toBeInTheDocument();

    // Escape closes dialog
    fireEvent.click(deleteBtn);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // Reopen and confirm delete
    fireEvent.click(deleteBtn);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(
      within(screen.getByRole("dialog")).getByRole("button", {
        name: "Delete",
      }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("High Stakes Meeting")).not.toBeInTheDocument();
  });

  it("clarifies tool positioning and subtitles for Quick Lookup and Phrase Bank", async () => {
    await loadAllAggregatedPhrases();

    const view = render(
      <AppProviders>
        <Phrases />
      </AppProviders>,
    );

    expect(
      await screen.findByText(
        "Browse and study every phrase from every card, filtered by tone.",
        undefined,
        { timeout: 5000 },
      ),
    ).toBeInTheDocument();

    view.unmount();

    function TestQuick() {
      const { setIsOpen } = useQuickMode();
      useEffect(() => {
        setIsOpen(true);
      }, [setIsOpen]);
      return <QuickModeOverlay />;
    }

    render(
      <AppProviders>
        <TestQuick />
      </AppProviders>,
    );

    expect(
      await screen.findByRole("dialog", { name: "Quick Lookup" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "In-conversation phrase cheat-sheet — instant copyable lines grouped by situation.",
      ),
    ).toBeInTheDocument();
  });

  it("announces drill completion and exposes a page heading", async () => {
    // This is a completion/focus test; loading transitions have separate coverage.
    await loadCard("TC001");
    render(<Drill />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Daily Drill" }),
    ).toBeInTheDocument();
    fireEvent.click(
      await screen.findByRole("button", { name: "Hard — review soon" }),
    );

    const completion = screen.getByRole("status");
    expect(completion).toHaveTextContent("Great work — come back tomorrow");
    await waitFor(() => expect(document.activeElement).toBe(completion));
  });

  it("renders exactly one H1 on every non-library route", async () => {
    const routes = [
      ["/favourites", <Favourites />],
      ["/phrases", <Phrases />],
      ["/playbooks", <Playbooks />],
      ["/card/TC001", <CardDetail />, "TC001"],
      ["/card/not-a-card", <CardDetail />, "not-a-card"],
      ["/not-a-route", <NotFound />],
    ] as const;

    for (const [location, page, cardId] of routes) {
      vi.mocked(useLocation).mockReturnValue([location, vi.fn()]);
      vi.mocked(useRoute).mockReturnValue(
        cardId ? [true, { cardId }] : [false, null],
      );
      const view = render(
        <AppProviders>
          <AppLayout>{page}</AppLayout>
        </AppProviders>,
      );

      if (location === "/card/TC001") {
        await waitFor(() =>
          expect(screen.queryByRole("status")).not.toBeInTheDocument(),
        );
      }

      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      view.unmount();
    }
  });
});
