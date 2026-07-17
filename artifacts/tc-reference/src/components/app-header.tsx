import { useEffect, useState } from "react";
import { useLocation } from "wouter";
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
import { SearchModal } from "@/components/search-modal";

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
      className={`h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-95 ${className}`}
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
  const [location, setLocation] = useLocation();
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
  const [compact, setCompact] = useState(false);

  const cardId = location.startsWith("/card/") ? location.replace("/card/", "").split("?")[0] : null;
  const mode: "library" | "card" = cardId !== null ? "card" : "library";
  // The brand title is only the page heading on the Library route itself;
  // other pages (Phrases, Drill, Favourites) provide their own h1.
  const TitleTag: "h1" | "p" = location === "/" ? "h1" : "p";
  const cardMeta = cardId ? CARD_META[cardId] ?? null : null;

  const totalCards = allCards.length;
  const headerHeight = compact ? 42 : 48;

  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;

      if (y < 24) {
        setCompact(false);
      } else if (delta > 8) {
        setCompact(true);
      } else if (delta < -16) {
        setCompact(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
    // Subscribe once — the CSS-var write below tracks headerHeight separately,
    // so compact toggles no longer tear down and re-add the scroll listener
  }, []);

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
        className="sticky top-0 z-[var(--z-header)] flex-shrink-0"
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
        <div className="flex items-center h-full px-3 sm:px-4 md:px-6 gap-2.5 md:gap-3 min-w-0">

          {/* ── CARD MODE ── */}
          {mode === "card" && (
            <>
              <button
                onClick={() => setLocation("/")}
                aria-label="Back to Library"
                data-testid="button-back"
                className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                style={{ background: "var(--fg-05)" }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: "var(--fg-70)" }} />
              </button>
              <div className="flex-1 min-w-0 flex items-center gap-2">
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ background: "var(--brand)", color: "var(--brand-contrast)" }}
                >
                  {cardId}
                </span>
                <h1
                  className="text-[15px] font-bold leading-tight truncate"
                  style={{ color: "var(--fg-90)" }}
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
                  className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                  style={{
                    background: isCardFav(cardId) ? "color-mix(in srgb, var(--brand) 12%, transparent)" : "var(--fg-05)",
                    border: isCardFav(cardId) ? "none" : "1px solid var(--fg-08)"
                  }}
                >
                  <Heart
                    className="w-4 h-4"
                    style={{ color: isCardFav(cardId) ? "var(--brand-text)" : "var(--fg-40)" }}
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
              {onToggleMenu && (
                <HeaderIconButton
                  label={menuOpen ? "Close organized menu" : "Open organized menu"}
                  active={menuOpen}
                  expanded={menuOpen}
                  controls="mobile-organized-menu"
                  testId="button-header-menu-card"
                  onClick={onToggleMenu}
                  className="inline-flex md:hidden"
                >
                  {menuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
                </HeaderIconButton>
              )}
              <HeaderIconButton
                label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                testId="button-theme-toggle-card"
                onClick={toggle}
                className="header-desktop-only"
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
                className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 md:px-3.5 py-2 rounded-full active:scale-95 transition-transform flex-shrink-0"
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
                    width: compact ? 27 : 30,
                    height: compact ? 27 : 30,
                    borderRadius: 9,
                    background: "var(--gradient-active)",
                    boxShadow:
                      "0 2px 8px color-mix(in srgb, var(--brand) 38%, transparent), inset 0 1px 0 rgba(255,255,255,0.35)",
                    transition: "width 180ms ease, height 180ms ease",
                  }}
                >
                  <BookOpen
                    className="w-[15px] h-[15px]"
                    style={{ color: "var(--brand-contrast)" }}
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0 leading-none">
                  <p
                    className="text-[8.5px] font-bold tracking-[0.16em] uppercase leading-none"
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
                      fontSize: compact ? 15 : 16,
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
                  className="hidden sm:inline-flex"
                >
                  {theme === "dark"
                    ? <Sun className="w-4 h-4" aria-hidden="true" />
                    : <Moon className="w-4 h-4" aria-hidden="true" />
                  }
                </HeaderIconButton>
                {/* Library size badge — count of technique cards */}
                <div
                  className="library-progress-full flex-col items-end gap-1"
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

      {/* Search modal rendered as portal */}
      {searchOpen && (
        <SearchModal
          query={searchQuery}
          setQuery={setSearchQuery}
          onClose={closeSearch}
        />
      )}
    </>
  );
}
