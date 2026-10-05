import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import { AppHeader } from "../components/app-header";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { PdfProvider } from "../lib/pdf-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";

// Keep route selection deterministic; render the installed Lucide components.
vi.mock("wouter", () => ({
  useLocation: vi.fn(),
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

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PdfProvider>{children}</PdfProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

function QuickState() {
  const { isOpen } = useQuickMode();
  return <output>{isOpen ? "Quick is open" : "Quick is closed"}</output>;
}

function iconIn(
  control: HTMLElement,
  iconClass: string,
  sizeClasses = "w-4 h-4",
) {
  const svg = control.querySelector("svg");
  if (!svg) throw new Error(`Missing SVG in ${control.outerHTML}`);
  expect(svg).toHaveClass(iconClass, ...sizeClasses.split(" "));
  expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  expect(svg).toHaveAttribute("stroke", "currentColor");
  expect(svg).toHaveAttribute("stroke-width", "2");
  expect(svg).toHaveAttribute("aria-hidden", "true");
  expect(
    svg.querySelector("path, circle, line, polyline, polygon, rect"),
  ).not.toBeNull();
  return svg;
}

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("tc_theme", "dark");
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
});

describe("Lucide migration in header controls", () => {
  it("keeps real filter and Quick icons decorative and their controls usable", () => {
    render(
      <Providers>
        <AppHeader />
        <QuickState />
      </Providers>,
    );

    const filters = screen.getByRole("button", {
      name: "Hide search and filters",
    });
    iconIn(filters, "lucide-sliders-horizontal");
    expect(filters).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(filters);
    expect(filters).toHaveAccessibleName("Show search and filters");
    expect(filters).toHaveAttribute("aria-expanded", "false");

    const quick = screen.getByRole("button", { name: "Open Quick Lookup" });
    iconIn(quick, "lucide-zap");
    fireEvent.click(quick);
    expect(screen.getByText("Quick is open")).toBeInTheDocument();
  });

  it("changes the real theme icon while retaining its size and inherited stroke", () => {
    render(
      <Providers>
        <AppHeader />
      </Providers>,
    );

    const toggle = screen.getByRole("button", { name: "Switch to light mode" });
    iconIn(toggle, "lucide-sun");
    fireEvent.click(toggle);
    expect(toggle).toHaveAccessibleName("Switch to dark mode");
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    iconIn(toggle, "lucide-moon");
    fireEvent.click(toggle);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    iconIn(toggle, "lucide-sun");
  });

  it("keeps card search and Back icons sized and their accessible names intact", () => {
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
    render(
      <Providers>
        <AppHeader />
      </Providers>,
    );

    const back = screen.getByRole("link", { name: "Back to Library" });
    expect(back).toHaveAttribute("href", "/");
    iconIn(back, "lucide-chevron-left", "w-5 h-5");
    const search = screen.getByRole("button", { name: "Open smart search" });
    iconIn(search, "lucide-search");
    expect(search).toHaveAttribute("aria-expanded", "false");
  });

  it("preserves the real heart fill when a card is saved and unsaved", () => {
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
    render(
      <Providers>
        <AppHeader />
      </Providers>,
    );

    const favourite = screen.getByRole("button", {
      name: "Save to favourites",
    });
    expect(iconIn(favourite, "lucide-heart")).toHaveAttribute("fill", "none");
    fireEvent.click(favourite);
    expect(favourite).toHaveAccessibleName("Remove from favourites");
    expect(iconIn(favourite, "lucide-heart")).toHaveAttribute(
      "fill",
      "currentColor",
    );
    fireEvent.click(favourite);
    expect(favourite).toHaveAccessibleName("Save to favourites");
    expect(iconIn(favourite, "lucide-heart")).toHaveAttribute("fill", "none");
  });
});
