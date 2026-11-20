import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "../lib/theme";
import { FavouritesProvider } from "../lib/favourites-context";
import Favourites from "../pages/favourites";
import { PreferencesSync } from "../lib/preferences";

vi.mock("wouter", () => ({
  useLocation: () => ["/favourites", vi.fn()],
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

function renderSaved() {
  return render(
    <ThemeProvider>
      <FavouritesProvider>
        <Favourites />
        <PreferencesSync />
      </FavouritesProvider>
    </ThemeProvider>,
  );
}

const PHRASE = {
  cardId: "TC001",
  cardTitle: "Live thread follow-ups",
  groupLabel: "Openers",
  text: "What was that like?",
};

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem(
    "tc_favourites",
    JSON.stringify({ cardIds: ["TC001", "TC002"], phrases: [PHRASE] }),
  );
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.removeAttribute("data-large-phrases");
});

describe("Saved page", () => {
  it("counts items and splits techniques and phrases into tabs", () => {
    renderSaved();
    expect(
      screen.getByRole("heading", { level: 1, name: "Saved" }),
    ).toBeInTheDocument();
    expect(screen.getByText("3 items · on this device")).toBeInTheDocument();

    const techniques = screen.getByRole("tab", { name: "Techniques · 2" });
    const phrases = screen.getByRole("tab", { name: "Phrases · 1" });
    expect(techniques).toHaveAttribute("aria-selected", "true");
    expect(screen.getByTestId("favourite-card-TC001")).toBeVisible();

    fireEvent.click(phrases);
    expect(phrases).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("button", { name: `Copy: ${PHRASE.text}` }),
    ).toBeVisible();
  });

  it("removes a technique from saved", () => {
    renderSaved();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Remove Live thread follow-ups from saved",
      }),
    );
    expect(screen.queryByTestId("favourite-card-TC001")).toBeNull();
    expect(screen.getByRole("tab", { name: "Techniques · 1" })).toBeVisible();
  });

  it("shares a phrase in two taps, copying where there is no share sheet", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText }, share: undefined });
    renderSaved();
    fireEvent.click(screen.getByRole("tab", { name: "Phrases · 1" }));
    fireEvent.click(
      screen.getByRole("button", { name: `Share: ${PHRASE.text}` }),
    );

    const sheet = screen.getByRole("dialog", { name: "Share" });
    expect(within(sheet).getByTestId("share-preview")).toHaveTextContent(
      PHRASE.text,
    );
    await act(async () => {
      fireEvent.click(within(sheet).getByTestId("share-native"));
    });
    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining(PHRASE.text),
    );
    expect(within(sheet).getByRole("status")).toHaveTextContent("Copied");
  });

  it("offers a link to the technique in the share sheet", () => {
    renderSaved();
    fireEvent.click(screen.getByRole("tab", { name: "Phrases · 1" }));
    fireEvent.click(
      screen.getByRole("button", { name: `Share: ${PHRASE.text}` }),
    );
    const sheet = screen.getByRole("dialog", { name: "Share" });
    fireEvent.click(within(sheet).getByRole("radio", { name: "Link" }));
    expect(within(sheet).getByTestId("share-preview")).toHaveTextContent(
      "/card/TC001",
    );
    // Image and print are for the phrase itself
    expect(within(sheet).queryByTestId("share-print")).toBeNull();
  });

  it("opens Settings with theme, phrase size, drill track, device and backup", () => {
    renderSaved();
    fireEvent.click(screen.getByRole("button", { name: "Settings" }));
    const sheet = screen.getByRole("dialog", { name: "Settings" });

    const theme = within(sheet).getByRole("radiogroup", { name: "Theme" });
    expect(within(theme).getByRole("radio", { name: "System" })).toBeChecked();
    fireEvent.click(within(theme).getByRole("radio", { name: "Light" }));
    expect(localStorage.getItem("tc_theme")).toBe("light");
    fireEvent.click(within(theme).getByRole("radio", { name: "System" }));
    expect(localStorage.getItem("tc_theme")).toBeNull();

    fireEvent.click(
      within(sheet).getByRole("switch", { name: /Larger phrase text/ }),
    );
    expect(document.documentElement).toHaveAttribute(
      "data-large-phrases",
      "true",
    );

    expect(within(sheet).getByTestId("setting-drill-track")).toHaveTextContent(
      "Everything · A week each",
    );
    expect(within(sheet).getByTestId("setting-offline")).toBeInTheDocument();
    expect(
      within(sheet).getByRole("button", { name: /Export backup/ }),
    ).toBeInTheDocument();

    fireEvent.click(within(sheet).getByRole("button", { name: "Done" }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("shows the empty state with nothing saved", () => {
    localStorage.clear();
    renderSaved();
    expect(screen.getByText("Nothing saved yet")).toBeInTheDocument();
    expect(screen.queryByRole("tablist")).toBeNull();
  });
});
