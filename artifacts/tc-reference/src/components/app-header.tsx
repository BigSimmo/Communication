import { useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  ChevronLeft,
  Zap,
  Heart,
  Sun,
  Moon,
  Menu,
  X,
  SlidersHorizontal,
  BookOpen,
} from "lucide-react";
import { useNav } from "@/lib/nav-context";
import { useQuickMode } from "@/lib/quick-mode";
import { useFavourites } from "@/lib/favourites-context";
import { useTheme } from "@/lib/theme";
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

const allCards = Object.entries(LIBRARY_CATEGORIES).flatMap(([cat, cards]) =>
  cards.map((c) => ({ ...c, category: cat }))
);

interface AppHeaderProps {
  menuOpen?: boolean;
  onToggleMenu?: () => void;
}

function HeaderIconButton({
  label,
  children,
  active = false,
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
  testId?: string;
  expanded?: boolean;
  controls?: string;
  searchToggle?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      data-search-toggle={searchToggle ? "true" : undefined}
      data-testid={testId}
      className={`card-header-action h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-95 ${className}`}
      style={{
        background: active
          ? "var(--gradient-active)"
          : "var(--fg-05)",
        border: active ? "1px solid color-mix(in srgb, var(--brand) 55%, transparent)" : "1px solid var(--fg-08)",
        color: active ? "var(--brand-contrast)" : "var(--fg-55)",
        boxShadow: active ? "0 2px 10px color-mix(in srgb, var(--brand) 24%, transparent)" : "none",
      }}
    >
      {children}
    </button>
  );
}

export function AppHeader({
  menuOpen = false,
  onToggleMenu,
}: AppHeaderProps) {
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
  const { setIsOpen } = useQuickMode();
  const { isCardFav, toggleCard } = useFavourites();
  const { theme, toggle } = useTheme();
  // Shrinks to a slim reading bar while scrolling down, restores on the
  // first deliberate scroll up or near the top. The shared hook clamps iOS
  // overscroll so rubber banding can't make the header flicker.
  const compact = useScrollDirection(24) === "down";

  const cardId = location.startsWith("/card/") ? location.replace("/card/", "").split("?")[0] : null;
  const mode: "library" | "card" = cardId !== null ? "card" : "library";
  // The brand title is only the page heading on the Library route itself;
  // other pages (Phrases, Drill, Favourites) provide their own h1.
  const TitleTag: "h1" | "p" = location === "/" ? "h1" : "p";
  const cardMeta = cardId ? CARD_META[cardId] ?? null : null;

  const totalCards = allCards.length;
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
                style={{ background: "var(--fg-05)" }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: "var(--fg-70)" }} />
              </Link>
              <div className="flex-1 min-w-0 flex items-center gap-2">
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
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
              {cardId && (
                <button
                  onClick={() => toggleCard(cardId)}
                  aria-label={isCardFav(cardId) ? "Remove from favourites" : "Save to favourites"}
                  data-testid="button-fav-card"
                  className="card-header-action w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                  style={{
                    background: isCardFav(cardId) ? "color-mix(in srgb, var(--brand) 12%, transparent)" : "var(--fg-05)",
                    border: isCardFav(cardId) ? "none" : "1px solid var(--fg-08)"
                  }}
                >
                  <Heart
                    className="w-4 h-4"
                    style={{ color: isCardFav(cardId) ? "var(--brand-text)" : "var(--fg-55)" }}
                    fill={isCardFav(cardId) ? "var(--brand-text)" : "none"}
                  />
                </button>
              )}
              <HeaderIconButton
                label="Open smart search"
                active={searchOpen}
                expanded={searchOpen}
                controls="search-popout-panel"
                testId="button-card-search"
                searchToggle
                onClick={toggleSearch}
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </HeaderIconButton>
              {/* No header menu button in card mode: on phones the floating
                  menu button already provides it, and dropping it gives the
                  card title room at 375px. */}
              <HeaderIconButton
                label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                testId="button-theme-toggle-card"
                onClick={toggle}
                className="header-desktop-only header-compact-hide"
              >
                {theme === "dark"
                  ? <Sun className="w-4 h-4" aria-hidden="true" />
                  : <Moon className="w-4 h-4" aria-hidden="true" />
                }
              </HeaderIconButton>
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Quick Lookup"
                data-testid="button-quick"
                className="card-header-action flex items-center gap-1.5 text-[11px] font-bold px-2.5 md:px-3.5 py-2 rounded-full active:scale-95 transition-transform flex-shrink-0"
                style={{ background: "var(--brand)", color: "var(--brand-contrast)" }}
              >
                <Zap className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Quick</span>
              </button>
            </>
          )}

          {/* ── LIBRARY MODE ── */}
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
                      "0 2px 8px color-mix(in srgb, var(--brand) 38%, transparent), inset 0 1px 0 rgba(255,255,255,0.35)",
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
              <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 flex-shrink-0">
                <HeaderIconButton
                  label={headerDetailsOpen ? "Hide header details" : "Show header details"}
                  active={headerDetailsOpen}
                  expanded={headerDetailsOpen}
                  controls="library-header-details"
                  testId="button-header-details-toggle"
                  onClick={toggleHeaderDetails}
                >
                  <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                </HeaderIconButton>
                {onToggleMenu && (
                  <HeaderIconButton
                    label={menuOpen ? "Close organized menu" : "Open organized menu"}
                    active={menuOpen}
                    expanded={menuOpen}
                    controls="mobile-organized-menu"
                    testId="button-header-menu"
                    onClick={onToggleMenu}
                    className="inline-flex md:hidden"
                  >
                    {menuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
                  </HeaderIconButton>
                )}
                {/* Theme toggle */}
                <HeaderIconButton
                  label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  testId="button-theme-toggle"
                  onClick={toggle}
                  className="header-compact-hide hidden sm:inline-flex"
                >
                  {theme === "dark"
                    ? <Sun className="w-4 h-4" aria-hidden="true" />
                    : <Moon className="w-4 h-4" aria-hidden="true" />
                  }
                </HeaderIconButton>
                {/* Library size badge — count of technique cards */}
                <div
                  className="library-progress-full header-compact-hide flex-col items-end gap-1"
                  aria-label={`${totalCards} technique cards`}
                  data-testid="library-progress"
                >
                  <div
                    className="flex items-center justify-center gap-1 rounded-lg px-2.5 py-1 leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--brand) 20%, transparent) 0%, color-mix(in srgb, var(--brand) 7%, transparent) 100%)",
                      border: "1px solid color-mix(in srgb, var(--brand) 30%, transparent)",
                      boxShadow: "0 0 12px color-mix(in srgb, var(--brand) 10%, transparent)",
                    }}
                  >
                    <span className="text-[12px] font-bold" style={{ color: "var(--brand-text)" }}>
                      {totalCards}
                    </span>
                    <span className="text-[10px] font-semibold" style={{ color: "var(--fg-55)" }}>
                      cards
                    </span>
                  </div>
                </div>
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
