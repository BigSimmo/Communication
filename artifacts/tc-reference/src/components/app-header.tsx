import { useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  ChevronLeft,
  Zap,
  Heart,
  Sun,
  Moon,
  SlidersHorizontal,
  BookOpen,
  FileText,
} from "lucide-react";
import { useNav } from "@/lib/nav-context";
import { useQuickMode } from "@/lib/quick-mode";
import { useFavourites } from "@/lib/favourites-context";
import { useTheme } from "@/lib/theme";
import { usePdf } from "@/lib/pdf-context";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
// Lazily loaded — global search builds its cached aggregate index only after a
// user enters a query.
const SearchModal = lazy(() =>
  import("@/components/search-modal").then((m) => ({ default: m.SearchModal })),
);

const CARD_META: Record<string, { cardTitle: string; cardCategory: string }> = {};
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const card of cards) {
    CARD_META[card.id] = { cardTitle: card.title, cardCategory: category };
  }
}

// Header actions share one quiet style. "brand" tints the icon amber for the
// primary tool (Quick) and saved state; "active" marks an open panel.
function HeaderIconButton({
  label,
  children,
  active = false,
  tone = "default",
  testId,
  expanded,
  controls,
  searchToggle = false,
  onClick,
  className = "inline-flex",
}: {
  label: string;
  children: React.ReactNode;
  active?: boolean;
  tone?: "default" | "brand";
  testId?: string;
  expanded?: boolean;
  controls?: string;
  searchToggle?: boolean;
  onClick: () => void;
  className?: string;
}) {
  const lit = active || tone === "brand";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-pressed={expanded === undefined && active ? true : undefined}
      data-search-toggle={searchToggle ? "true" : undefined}
      data-testid={testId}
      className={`card-header-action h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-95 ${className}`}
      style={{
        background: active
          ? "color-mix(in srgb, var(--brand) 18%, transparent)"
          : lit
            ? "color-mix(in srgb, var(--brand) 9%, transparent)"
            : "var(--fg-05)",
        border: `1px solid ${
          active
            ? "color-mix(in srgb, var(--brand) 45%, transparent)"
            : lit
              ? "color-mix(in srgb, var(--brand) 22%, transparent)"
              : "var(--fg-08)"
        }`,
        color: lit ? "var(--brand-text)" : "var(--fg-60)",
      }}
    >
      {children}
    </button>
  );
}

export function AppHeader() {
  const [location] = useLocation();
  const {
    searchOpen,
    closeSearch,
    toggleSearch,
    headerDetailsOpen,
    toggleHeaderDetails,
    searchQuery,
    setSearchQuery,
  } = useNav();
  const { isOpen: quickOpen, setIsOpen } = useQuickMode();
  const { pdfUrl, pdfOpen, setPdfOpen } = usePdf();
  const { isCardFav, toggleCard } = useFavourites();
  const { theme, toggle } = useTheme();
  // Shrinks to a slim reading bar while scrolling down, restores on the
  // first deliberate scroll up or near the top. The shared hook clamps iOS
  // overscroll so rubber banding can't make the header flicker.
  const compact = useScrollDirection(24, 12, location) === "down";

  const cardId = location.startsWith("/card/") ? location.replace("/card/", "").split("?")[0] : null;
  const mode: "library" | "card" = cardId !== null ? "card" : "library";
  // The brand title is only the page heading on the Library route itself;
  // other pages (Phrases, Drill, Favourites) provide their own h1.
  const TitleTag: "h1" | "p" = location === "/" ? "h1" : "p";
  const cardMeta = cardId ? CARD_META[cardId] ?? null : null;

  // Compact actions shrink to 28px and keep a full height hit area via CSS
  // (see .app-header[data-compact] in index.css).
  const headerHeight = compact ? 34 : 48;

  useEffect(() => {
    // Includes the top safe-area inset so sticky elements offset by this var
    // sit flush below the header when it extends under the status bar
    // (standalone PWA with viewport-fit=cover; env() is 0px elsewhere).
    document.documentElement.style.setProperty(
      "--app-header-height",
      `calc(${headerHeight}px + env(safe-area-inset-top, 0px))`,
    );
  }, [headerHeight]);

  const isLibraryRoute = location === "/";

  const searchButton = (testId: string) => (
    <HeaderIconButton
      label="Open smart search"
      active={searchOpen}
      expanded={searchOpen}
      controls="search-popout-panel"
      testId={testId}
      searchToggle
      onClick={toggleSearch}
    >
      <Search className="w-4 h-4" aria-hidden="true" />
    </HeaderIconButton>
  );

  const quickButton = (
    <HeaderIconButton
      label="Open Quick Lookup"
      testId="button-quick"
      tone="brand"
      active={quickOpen}
      onClick={() => setIsOpen(true)}
    >
      <Zap className="w-4 h-4" aria-hidden="true" />
    </HeaderIconButton>
  );

  // Hidden while the header is compact; it returns on scroll up
  const themeButton = (testId: string, className: string) => (
    <HeaderIconButton
      label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      testId={testId}
      onClick={toggle}
      className={`header-compact-hide ${className}`}
    >
      {theme === "dark"
        ? <Sun className="w-4 h-4" aria-hidden="true" />
        : <Moon className="w-4 h-4" aria-hidden="true" />}
    </HeaderIconButton>
  );

  return (
    <>
      <div
        className="app-header sticky top-0 z-[var(--z-header)] flex-shrink-0"
        style={{
          background: "var(--surface-header)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          borderBottom: "1px solid var(--fg-07)",
          paddingTop: "env(safe-area-inset-top, 0px)",
          height: `calc(${headerHeight}px + env(safe-area-inset-top, 0px))`,
          minHeight: `calc(${headerHeight}px + env(safe-area-inset-top, 0px))`,
          maxHeight: `calc(${headerHeight}px + env(safe-area-inset-top, 0px))`,
          transform: "translateZ(0)",
          contain: "layout paint",
          transition: "height 180ms ease, min-height 180ms ease, max-height 180ms ease",
        }}
        data-testid="app-header"
        data-compact={compact}
      >
        <div
          className="flex items-center h-full [--hdr-px:12px] sm:[--hdr-px:16px] md:[--hdr-px:24px] gap-2.5 md:gap-3 min-w-0"
          style={{
            // Clear the notch in landscape (viewport-fit=cover)
            paddingLeft: "max(var(--hdr-px), env(safe-area-inset-left, 0px))",
            paddingRight: "max(var(--hdr-px), env(safe-area-inset-right, 0px))",
          }}
        >

          {/* ── CARD MODE ── */}
          {mode === "card" && (
            <>
              <Link
                href="/"
                aria-label="Back to Library"
                data-testid="button-back"
                className="card-header-action w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                style={{ background: "var(--fg-05)", color: "var(--fg-70)" }}
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </Link>
              <div className="flex-1 min-w-0 flex items-center gap-2">
                {/* The ID tag gives way to the title on narrow phones */}
                <span
                  className="hidden sm:inline text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ background: "var(--brand)", color: "var(--brand-contrast)" }}
                >
                  {cardId}
                </span>
                <h1
                  className="font-bold leading-tight truncate"
                  style={{
                    color: "var(--fg-90)",
                    fontSize: compact ? 13.5 : 15,
                    transition: "font-size 180ms ease",
                  }}
                  data-testid="card-title"
                >
                  {cardMeta?.cardTitle ?? cardId}
                </h1>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {cardId && (
                  <HeaderIconButton
                    label={isCardFav(cardId) ? "Remove from favourites" : "Save to favourites"}
                    testId="button-fav-card"
                    tone={isCardFav(cardId) ? "brand" : "default"}
                    onClick={() => toggleCard(cardId)}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={isCardFav(cardId) ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  </HeaderIconButton>
                )}
                {pdfUrl && (
                  <HeaderIconButton
                    label="Open printable PDF"
                    testId="button-card-pdf"
                    active={pdfOpen}
                    onClick={() => setPdfOpen(true)}
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                  </HeaderIconButton>
                )}
                {searchButton("button-card-search")}
                {quickButton}
                {themeButton("button-theme-toggle-card", "header-desktop-only")}
              </div>
            </>
          )}

          {/* ── SECTION MODE (Library, Playbooks, Phrases, Saved, Drill) ── */}
          {mode === "library" && (
            <div
              className="flex items-center justify-between flex-1 min-w-0 gap-2"
              data-testid="header-normal-mode"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: compact ? 22 : 30,
                    height: compact ? 22 : 30,
                    borderRadius: compact ? 7 : 9,
                    background: "var(--gradient-active)",
                    boxShadow:
                      "0 1px 4px color-mix(in srgb, var(--brand) 30%, transparent), inset 0 1px 0 rgba(255,255,255,0.3)",
                    transition:
                      "width 180ms ease, height 180ms ease, border-radius 180ms ease",
                  }}
                >
                  <BookOpen
                    className={compact ? "w-3 h-3" : "w-[15px] h-[15px]"}
                    style={{ color: "var(--brand-contrast)" }}
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0 leading-none">
                  <p
                    className="text-[9.5px] font-bold tracking-[0.14em] uppercase leading-none"
                    style={{
                      color: "var(--brand-text)",
                      opacity: compact ? 0 : 0.85,
                      maxHeight: compact ? 0 : 11,
                      marginBottom: compact ? 0 : 2,
                      overflow: "hidden",
                      transition:
                        "opacity 150ms ease, max-height 180ms ease, margin-bottom 180ms ease",
                    }}
                    data-testid="library-subtitle"
                  >
                    Technique Cards
                  </p>
                  <TitleTag
                    className="font-bold leading-none truncate"
                    style={{
                      color: "var(--fg-90)",
                      fontSize: compact ? 14 : 16,
                      transition: "font-size 180ms ease",
                    }}
                    data-testid="library-title"
                  >
                    TC Library
                  </TitleTag>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1.5 sm:gap-2 flex-shrink-0">
                {/* On the Library the filter panel already holds search */}
                {isLibraryRoute ? (
                  <HeaderIconButton
                    label={headerDetailsOpen ? "Hide search and filters" : "Show search and filters"}
                    active={headerDetailsOpen}
                    expanded={headerDetailsOpen}
                    controls="library-header-details"
                    testId="button-header-details-toggle"
                    onClick={toggleHeaderDetails}
                  >
                    <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                  </HeaderIconButton>
                ) : (
                  searchButton("button-header-search")
                )}
                {quickButton}
                {themeButton("button-theme-toggle", "hidden sm:inline-flex")}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search modal rendered as portal; lazy chunk loads on first open */}
      {searchOpen && (
        <Suspense fallback={null}>
          <SearchModal
            query={searchQuery}
            setQuery={setSearchQuery}
            onClose={closeSearch}
          />
        </Suspense>
      )}
    </>
  );
}
