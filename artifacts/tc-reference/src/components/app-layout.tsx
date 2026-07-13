import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import {
  Home,
  Zap,
  Search,
  BookOpen,
  Dumbbell,
  Heart,
  FileText,
  Menu,
  X,
  LayoutGrid,
  LayoutList,
  MessagesSquare,
} from "lucide-react";
import { useQuickMode } from "@/lib/quick-mode";
import { useNav } from "@/lib/nav-context";
import { QuickModeOverlay } from "./quick-mode-overlay";
import { AppHeader } from "./app-header";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { loadDrillState, isCompletedToday, isStreakActive } from "@/lib/drill-state";
import { useFavourites } from "@/lib/favourites-context";
import { usePdf } from "@/lib/pdf-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";

const TOTAL_CARDS = Object.values(LIBRARY_CATEGORIES).flat().length;
const LOADED_CARDS = Object.values(LIBRARY_CATEGORIES).flat().filter((c) => c.loaded).length;

// Light haptic feedback for a native-app feel — degrades silently when unsupported
function triggerHaptic(pattern: number | number[]) {
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try { navigator.vibrate(pattern); } catch { /* unsupported / blocked — ignore */ }
  }
}

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [location, setLocation] = useLocation();
  const { isOpen, setIsOpen } = useQuickMode();
  const { openSearch, toggleSearch, searchOpen } = useNav();
  const { pdfUrl, pdfOpen, setPdfOpen } = usePdf();

  const isLibrary = location === "/";
  const isDrill = location === "/drill";
  const isFavourites = location === "/favourites";
  const isPhrases = location === "/phrases";
  const isOnCard = location.startsWith("/card/");

  const { totalCount: favCount } = useFavourites();
  const drillState = loadDrillState();
  const drillDone = isCompletedToday(drillState);
  const drillStreakActive = isStreakActive(drillState) && drillState.streak > 0;

  const [fabOpen, setFabOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Layout mode — "stack" (vertical pills, default) or "fan" (radial arc chips).
  const [layoutMode, setLayoutMode] = useState<"stack" | "fan">("stack");
  // Brief label reveal in fan mode: labels fade in on open, then fade out after 1.6s
  const [fanLabelsVisible, setFanLabelsVisible] = useState(false);

  // RTL support — mirror FAB to bottom-left in RTL documents
  const isRtl = document.documentElement.dir === "rtl";
  const fabSideStyle = isRtl ? { left: 18 } : { right: 18 };

  // Short-screen / landscape phone detection
  const [isShortScreen, setIsShortScreen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-height: 580px)");
    setIsShortScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsShortScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Unified close helper — optionally returns focus to the FAB
  const closeFab = useCallback((returnFocus: boolean) => {
    setFabOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => fabRef.current?.focus());
    }
  }, []);

  // Touch gesture — swipe up on/near the FAB to open, swipe down to close
  const swipeTouchStartY = useRef<number | null>(null);

  const handleSwipeTouchStart = useCallback((e: React.TouchEvent) => {
    swipeTouchStartY.current = e.touches[0].clientY;
  }, []);

  const handleSwipeTouchEnd = useCallback((e: React.TouchEvent) => {
    if (swipeTouchStartY.current === null) return;
    const deltaY = e.changedTouches[0].clientY - swipeTouchStartY.current;
    swipeTouchStartY.current = null;
    const SWIPE_THRESHOLD = 30;
    if (deltaY < -SWIPE_THRESHOLD && !fabOpen) {
      triggerHaptic(12);
      setFabOpen(true);
    } else if (deltaY > SWIPE_THRESHOLD && fabOpen) {
      closeFab(false);
    }
  }, [fabOpen, closeFab]);

  // Toggle between stack and fan layouts; persist to localStorage
  const toggleLayoutMode = useCallback(() => {
    setLayoutMode(prev => {
      const next = prev === "stack" ? "fan" : "stack";
      try { localStorage.setItem("fab-layout", next); } catch { /* storage blocked */ }
      return next;
    });
  }, []);

  const toggleFabOpen = useCallback(() => {
    setFabOpen((open) => {
      if (!open) triggerHaptic(12);
      return !open;
    });
  }, []);

  // Escape key + browser back button (popstate) close the menu
  useEffect(() => {
    if (!fabOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeFab(true); };
    const onPop = () => closeFab(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
    };
  }, [fabOpen, closeFab]);

  // Auto-close on route change (covers in-content link taps)
  useEffect(() => {
    setFabOpen(false);
  }, [location]);

  // Body scroll lock — iOS-safe: save scrollY, apply position:fixed, restore on close
  useEffect(() => {
    if (!fabOpen) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
    };
  }, [fabOpen]);

  // Focus management: move focus into the menu on open and keep Tab cycling
  // within it (shared trap; focus return on close is handled by closeFab)
  useFocusTrap(fabOpen, navRef, { restoreFocus: false });

  // Fan layout — brief label reveal: show all labels for 1.6s after opening, then fade
  useEffect(() => {
    if (!fabOpen || layoutMode !== "fan") { setFanLabelsVisible(false); return; }
    setFanLabelsVisible(true);
    const t = setTimeout(() => setFanLabelsVisible(false), 1600);
    return () => clearTimeout(t);
  }, [fabOpen, layoutMode]);

  const handleSearchTab = () => {
    if (!isLibrary) {
      setLocation("/");
      setTimeout(() => openSearch(), 80);
    } else {
      toggleSearch();
    }
  };

  const baseNavItems = [
    {
      id: "library",
      label: "Library",
      icon: Home,
      active: isLibrary && !isOpen && !searchOpen,
      action: () => setLocation("/"),
      testIdDesktop: "nav-sidebar-library",
      testIdMobile: "nav-tab-library",
      badge: null as string | null,
    },
    {
      id: "phrases",
      label: "Phrases",
      icon: MessagesSquare,
      active: isPhrases && !isOpen,
      action: () => setLocation("/phrases"),
      testIdDesktop: "nav-sidebar-phrases",
      testIdMobile: "nav-tab-phrases",
      badge: null as string | null,
    },
    {
      id: "favourites",
      label: "Favourites",
      icon: Heart,
      active: isFavourites && !isOpen,
      action: () => setLocation("/favourites"),
      testIdDesktop: "nav-sidebar-favourites",
      testIdMobile: "nav-tab-favourites",
      badge: favCount > 0 ? String(favCount) : null as string | null,
    },
    {
      id: "drill",
      label: "Drill",
      icon: Dumbbell,
      active: isDrill && !isOpen,
      action: () => setLocation("/drill"),
      testIdDesktop: "nav-sidebar-drill",
      testIdMobile: "nav-tab-drill",
      badge: drillStreakActive ? String(drillState.streak) : drillDone ? "✓" : null,
    },
    {
      id: "quick",
      label: "Quick",
      icon: Zap,
      active: isOpen,
      action: () => setIsOpen(true),
      testIdDesktop: "nav-sidebar-quick",
      testIdMobile: "nav-tab-quick",
      badge: null as string | null,
    },
    {
      id: "search",
      label: "Search",
      icon: Search,
      active: searchOpen,
      action: handleSearchTab,
      testIdDesktop: "nav-sidebar-search",
      testIdMobile: "nav-tab-search",
      badge: null as string | null,
    },
  ];

  const pdfNavItem = {
    id: "pdf",
    label: "PDF",
    icon: FileText,
    active: pdfOpen,
    action: () => setPdfOpen(true),
    testIdDesktop: "nav-sidebar-pdf",
    testIdMobile: "nav-tab-pdf",
    badge: null as string | null,
  };

  const navItems = isOnCard && pdfUrl !== null
    ? [...baseNavItems.slice(0, 3), pdfNavItem, ...baseNavItems.slice(3)]
    : baseNavItems;

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* ── Desktop left sidebar (md+) ── */}
      <aside
        data-testid="sidebar-desktop"
        aria-label="Main navigation"
        className="hidden md:flex fixed left-0 top-0 bottom-0 w-[200px] flex-col z-30"
        style={{
          background: "var(--surface-sidebar)",
          borderRight: "1px solid var(--fg-07)",
        }}
      >
        {/* Brand */}
        <div className="px-5 pt-7 pb-5">
          <p className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(245,158,11,0.65)" }}>
            Technique Cards
          </p>
          <p className="text-[18px] font-bold leading-tight mt-0.5" style={{ color: "var(--fg-90)" }}>TC Library</p>
        </div>

        <div className="w-full h-px" style={{ background: "var(--fg-06)" }} />

        {/* Nav items */}
        <nav className="flex-1 px-3 pt-3 space-y-0.5" aria-label="Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
              data-search-toggle={item.id === "search" ? "true" : undefined}
              data-testid={item.testIdDesktop}
              className="w-full flex items-center gap-2.5 rounded-xl transition-all duration-200 text-left active:scale-[0.98]"
              style={{
                minHeight: 44,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: item.active ? 10 : 12,
                paddingRight: 12,
                background: item.active ? "rgba(245,158,11,0.11)" : "transparent",
                borderLeft: item.active
                  ? "2px solid rgba(245,158,11,0.65)"
                  : "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!item.active)
                  (e.currentTarget as HTMLElement).style.background = "var(--fg-05)";
              }}
              onMouseLeave={(e) => {
                if (!item.active)
                  (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {/* Icon chip — circular, amber gradient when active */}
              <span
                className="relative flex items-center justify-center flex-shrink-0 rounded-full"
                style={{
                  width: 26,
                  height: 26,
                  background: item.active
                    ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
                    : "var(--fg-08)",
                  boxShadow: item.active
                    ? "0 2px 8px rgba(245,158,11,0.45), inset 0 1px 0 rgba(255,255,255,0.35)"
                    : "inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "background 200ms ease, box-shadow 200ms ease",
                }}
              >
                <item.icon
                  className="w-3.5 h-3.5"
                  style={{ color: item.active ? "#0f1724" : "var(--fg-50)" }}
                  aria-hidden="true"
                />
                {/* Badge lives on the chip, matching the mobile pill pattern */}
                {item.badge && (
                  <span
                    className="absolute text-[7px] font-extrabold rounded-full leading-none flex items-center justify-center"
                    style={{
                      top: -2,
                      right: -3,
                      minWidth: 13,
                      height: 13,
                      paddingLeft: 2,
                      paddingRight: 2,
                      background: item.active ? "#0f1724" : "#f59e0b",
                      color: item.active ? "#f59e0b" : "#0f1724",
                      border: "1.5px solid var(--surface-sidebar)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </span>

              <span
                className="text-[13px] font-semibold"
                style={{ color: item.active ? "#f59e0b" : "var(--fg-55)" }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Cards loaded badge */}
        <div className="px-4 pb-6">
          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.13)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-semibold" style={{ color: "var(--fg-35)" }}>
                Cards loaded
              </p>
              <BookOpen className="w-3.5 h-3.5" style={{ color: "rgba(245,158,11,0.45)" }} aria-hidden="true" />
            </div>
            <p className="text-[22px] font-bold" style={{ color: "#f59e0b" }}>
              {LOADED_CARDS}
              <span className="text-[13px] font-normal ml-1" style={{ color: "var(--fg-22)" }}>
                / {TOTAL_CARDS}
              </span>
            </p>
            <div
              className="mt-2 h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--fg-06)" }}
              role="progressbar"
              aria-valuenow={LOADED_CARDS}
              aria-valuemin={0}
              aria-valuemax={TOTAL_CARDS}
              aria-label={`${LOADED_CARDS} of ${TOTAL_CARDS} cards loaded`}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(LOADED_CARDS / TOTAL_CARDS) * 100}%`,
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* ── Content wrapper (sidebar offset + shared header) ── */}
      <div className="md:pl-[200px] flex flex-col min-h-[100dvh] w-full min-w-0 overflow-x-clip">
        <AppHeader
          menuOpen={fabOpen}
          onToggleMenu={toggleFabOpen}
        />
        <main className="flex-1 pb-20 md:pb-0 min-w-0 overflow-x-clip">
          {children}
        </main>
      </div>

      {/* ── Mobile FAB nav (< md) ── */}

      {/* Backdrop — always rendered, fades in/out via opacity transition (no mount/unmount pop) */}
      <div
        aria-hidden="true"
        className="fab-backdrop md:hidden fixed inset-0 z-[38]"
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: fabOpen ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: fabOpen ? "blur(6px)" : "blur(0px)",
          opacity: fabOpen ? 1 : 0,
          pointerEvents: fabOpen ? "auto" : "none",
          transition: "opacity 250ms ease, backdrop-filter 250ms ease, -webkit-backdrop-filter 250ms ease",
        }}
        onClick={() => closeFab(false)}
      />

      {/* ── Stack nav (vertical pills, default) ── */}
      {layoutMode === "stack" && (
        <nav
          id="mobile-organized-menu"
          ref={navRef}
          aria-label="Main navigation"
          aria-hidden={!fabOpen}
          data-open={fabOpen}
          className="fab-nav md:hidden fixed z-[40] flex flex-col items-end"
          style={{
            bottom: "calc(68px + env(safe-area-inset-bottom, 0px))",
            ...fabSideStyle,
            gap: isShortScreen ? 6 : 9,
            maxHeight: isShortScreen ? "calc(100dvh - 120px)" : undefined,
            overflowY: isShortScreen ? "auto" : undefined,
            pointerEvents: fabOpen ? "auto" : "none",
          }}

        >
          {navItems.map((item, i) => {
            const n = navItems.length;
            const enterDelay = (n - 1 - i) * 38;
            const exitDelay = i * 16;
            const pillDelay = fabOpen ? enterDelay : exitDelay;
            const labelDelay = fabOpen ? enterDelay + 55 : exitDelay;
            const chipSize = isShortScreen ? 24 : 28;
            return (
              <button
                key={item.id}
                onClick={() => { triggerHaptic(8); item.action(); closeFab(false); }}
                aria-label={item.label}
                aria-current={item.active ? "page" : undefined}
                data-search-toggle={item.id === "search" ? "true" : undefined}
                data-testid={item.testIdMobile}
                tabIndex={fabOpen ? 0 : -1}
                className="fab-pill flex items-center rounded-full active:scale-95"
                style={{
                  height: isShortScreen ? 36 : 44,
                  paddingLeft: isShortScreen ? 5 : 6,
                  paddingRight: isShortScreen ? 13 : 16,
                  gap: isShortScreen ? 7 : 9,
                  fontSize: isShortScreen ? 12 : 13,
                  background: item.active ? "rgba(245,158,11,0.16)" : "var(--surface-float)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: item.active ? "1px solid rgba(245,158,11,0.42)" : "1px solid var(--fg-10)",
                  boxShadow: item.active
                    ? "0 0 0 1px rgba(245,158,11,0.30), 0 6px 20px rgba(245,158,11,0.24), 0 2px 8px rgba(0,0,0,0.20)"
                    : "0 4px 16px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.06)",
                  opacity: fabOpen ? 1 : 0,
                  transform: fabOpen ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
                  transition: "opacity 200ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1), background 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                  transitionDelay: `${pillDelay}ms`,
                  touchAction: "manipulation",
                }}
              >
                <span
                  className="relative flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{
                    width: chipSize,
                    height: chipSize,
                    background: item.active
                      ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
                      : "var(--fg-08)",
                    boxShadow: item.active
                      ? "0 2px 8px rgba(245,158,11,0.45), inset 0 1px 0 rgba(255,255,255,0.35)"
                      : "inset 0 1px 0 rgba(255,255,255,0.05)",
                    transition: "background 200ms ease, box-shadow 200ms ease",
                  }}
                >
                  <item.icon
                    className="w-4 h-4"
                    style={{ color: item.active ? "#0f1724" : "var(--fg-55)" }}
                    aria-hidden="true"
                  />
                  {item.badge && (
                    <span
                      className="absolute text-[8px] font-extrabold rounded-full leading-none flex items-center justify-center"
                      style={{
                        top: -3,
                        right: -4,
                        minWidth: 14,
                        height: 14,
                        paddingLeft: 3,
                        paddingRight: 3,
                        background: item.active ? "#0f1724" : "#f59e0b",
                        color: item.active ? "#f59e0b" : "#0f1724",
                        border: "1.5px solid var(--surface-float)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.30)",
                        opacity: fabOpen ? 1 : 0,
                        transform: fabOpen ? "scale(1)" : "scale(0.4)",
                        transition: "opacity 160ms ease, transform 260ms cubic-bezier(0.34,1.56,0.64,1)",
                        transitionDelay: `${labelDelay + 30}ms`,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
                <span
                  className="font-semibold whitespace-nowrap"
                  style={{
                    color: item.active ? "#f59e0b" : "var(--fg-78)",
                    opacity: fabOpen ? 1 : 0,
                    transform: fabOpen ? "translateX(0)" : "translateX(-4px)",
                    transition: "opacity 180ms ease, transform 240ms cubic-bezier(0.34,1.56,0.64,1), color 200ms ease",
                    transitionDelay: `${labelDelay}ms`,
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}

      {/* ── Fan nav (radial arc chips) ── */}
      {layoutMode === "fan" && (
        <nav
          id="mobile-organized-menu"
          ref={navRef}
          aria-label="Main navigation"
          aria-hidden={!fabOpen}
          data-open={fabOpen}
          className="fab-nav md:hidden fixed z-[40]"
          style={{
            bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
            ...fabSideStyle,
            width: 48,
            height: 48,
            overflow: "visible",
            pointerEvents: fabOpen ? "auto" : "none",
          }}

        >
          {navItems.map((item, i) => {
            const n = navItems.length;
            // Arc: angle 0° = west (left), 90° = north (up).
            // Item 0 (Library) is leftmost (near-horizontal), item n-1 (Search) is topmost (near-vertical).
            // sweepAngle adapts to item count, capped at 80° to stay within upper-left quadrant.
            const sweepAngle = Math.min(80, Math.max(60, (n - 1) * 18));
            const startAngle = 5; // degrees from west
            const angleI = (startAngle + i * (sweepAngle / Math.max(n - 1, 1))) * (Math.PI / 180);
            const R = isShortScreen ? 88 : 118;
            // In CSS: negative x = leftward, negative y = upward
            const fanX = (isRtl ? 1 : -1) * R * Math.cos(angleI);
            const fanY = -R * Math.sin(angleI);
            // Stagger: leftmost item (i=0) exits first; topmost (i=n-1) enters last
            const enterDelay = fabOpen ? i * 45 : (n - 1 - i) * 22;
            // Labels follow chip with a beat
            const labelEnterDelay = fabOpen ? i * 45 + 60 : 0;
            const chipSize = isShortScreen ? 36 : 40;
            // Labels: always visible for active item; for others fade in for 1.6s then out
            const labelOpacity = fabOpen ? (item.active ? 1 : fanLabelsVisible ? 0.88 : 0) : 0;
            const labelTransition = fanLabelsVisible || item.active
              ? `opacity 220ms ease ${labelEnterDelay}ms`
              : "opacity 350ms ease 0ms";
            return (
              <button
                key={item.id}
                onClick={() => { triggerHaptic(8); item.action(); closeFab(false); }}
                aria-label={item.label}
                aria-current={item.active ? "page" : undefined}
                data-search-toggle={item.id === "search" ? "true" : undefined}
                data-testid={item.testIdMobile}
                tabIndex={fabOpen ? 0 : -1}
                className="fab-fan-item active:scale-95"
                style={{
                  position: "absolute",
                  bottom: 4,
                  [isRtl ? "left" : "right"]: 4,
                  width: chipSize,
                  height: chipSize,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: item.active
                    ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
                    : "var(--surface-float)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: item.active ? "1.5px solid rgba(245,158,11,0.50)" : "1px solid var(--fg-10)",
                  boxShadow: item.active
                    ? "0 0 0 1px rgba(245,158,11,0.22), 0 6px 20px rgba(245,158,11,0.38), 0 2px 8px rgba(0,0,0,0.25)"
                    : "0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                  opacity: fabOpen ? 1 : 0,
                  transform: fabOpen ? `translate(${fanX}px, ${fanY}px) scale(1)` : "translate(0, 0) scale(0.3)",
                  transition: "opacity 200ms ease, transform 400ms cubic-bezier(0.34,1.56,0.64,1), background 200ms ease, box-shadow 200ms ease",
                  transitionDelay: `${enterDelay}ms`,
                  touchAction: "manipulation",
                  cursor: "pointer",
                  // CSS variable used by the reduced-motion rule so items stay at their
                  // arc positions (only opacity animates) instead of collapsing to FAB origin
                  "--fab-fan-item-translate": `translate(${fanX}px, ${fanY}px)`,
                } as React.CSSProperties}
              >
                <item.icon
                  className="w-[18px] h-[18px]"
                  style={{ color: item.active ? "#0f1724" : "var(--fg-65)" }}
                  aria-hidden="true"
                />
                {item.badge && (
                  <span
                    className="absolute text-[7px] font-extrabold rounded-full leading-none flex items-center justify-center"
                    style={{
                      top: -2,
                      [isRtl ? "left" : "right"]: -3,
                      minWidth: 13,
                      height: 13,
                      paddingLeft: 2,
                      paddingRight: 2,
                      background: item.active ? "#0f1724" : "#f59e0b",
                      color: item.active ? "#f59e0b" : "#0f1724",
                      border: "1.5px solid var(--surface-float)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.30)",
                      opacity: fabOpen ? 1 : 0,
                      transform: fabOpen ? "scale(1)" : "scale(0.4)",
                      transition: "opacity 160ms ease, transform 260ms cubic-bezier(0.34,1.56,0.64,1)",
                      transitionDelay: `${enterDelay + 35}ms`,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
                {/* Floating label — to the right of chip in LTR (toward FAB/screen center) */}
                <span
                  className="fab-fan-label"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    [isRtl ? "right" : "left"]: "calc(100% + 7px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    whiteSpace: "nowrap",
                    fontSize: 11,
                    fontWeight: 600,
                    lineHeight: 1,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 20,
                    background: "var(--surface-float)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: item.active ? "1px solid rgba(245,158,11,0.32)" : "1px solid var(--fg-07)",
                    color: item.active ? "#f59e0b" : "var(--fg-75)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                    pointerEvents: "none",
                    opacity: labelOpacity,
                    transition: labelTransition,
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}

      {/* Layout mode toggle — available beside the FAB only while the menu is open */}
      <button
        aria-label={layoutMode === "fan" ? "Switch to list layout" : "Switch to fan layout"}
        onClick={toggleLayoutMode}
        data-testid="button-fab-layout-toggle"
        className="md:hidden fixed z-[41] flex items-center justify-center"
        style={{
          bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
          [isRtl ? "left" : "right"]: 76,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "var(--surface-float)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid var(--fg-10)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          opacity: fabOpen ? 1 : 0,
          transform: fabOpen ? "scale(1)" : "scale(0.6)",
          pointerEvents: fabOpen ? "auto" : "none",
          transition: "opacity 200ms ease, transform 280ms cubic-bezier(0.34,1.56,0.64,1)",
          transitionDelay: fabOpen ? "120ms" : "0ms",
          touchAction: "manipulation",
          cursor: "pointer",
        }}
      >
        {layoutMode === "fan"
          ? <LayoutList className="w-3.5 h-3.5" style={{ color: "var(--fg-55)" }} aria-hidden="true" />
          : <LayoutGrid className="w-3.5 h-3.5" style={{ color: "var(--fg-55)" }} aria-hidden="true" />
        }
      </button>

      {/* Idle attention halo — gentle breathing glow behind the closed FAB */}
      <div
        aria-hidden="true"
        data-open={fabOpen}
        className="fab-halo md:hidden fixed z-[39]"
        style={{
          bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
          ...fabSideStyle,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.55) 0%, rgba(245,158,11,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Transparent swipe zone — extends touch target near the FAB; disabled when menu is open */}
      <div
        aria-hidden="true"
        className="md:hidden fixed z-[37]"
        style={{
          bottom: 0,
          ...(isRtl ? { left: 0 } : { right: 0 }),
          width: 96,
          height: 96,
          touchAction: "none",
          pointerEvents: fabOpen ? "none" : "auto",
        }}
        onTouchStart={handleSwipeTouchStart}
        onTouchEnd={handleSwipeTouchEnd}
      />

      {/* FAB trigger button */}
      {(() => {
        const anyBadge = !fabOpen && navItems.some(item => item.badge !== null);
        return (
          <button
            ref={fabRef}
            data-testid="nav-fab"
            data-open={fabOpen}
            aria-label={fabOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={fabOpen}
            aria-haspopup="true"
            onClick={toggleFabOpen}
            onTouchStart={handleSwipeTouchStart}
            onTouchEnd={handleSwipeTouchEnd}
            className="fab-button md:hidden fixed z-[40] flex items-center justify-center transition-all duration-200 active:scale-90"
            style={{
              bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
              ...fabSideStyle,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: fabOpen
                ? "rgba(245,158,11,0.14)"
                : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 48%, #d97706 100%)",
              border: fabOpen ? "1.5px solid rgba(245,158,11,0.35)" : "none",
              boxShadow: fabOpen
                ? "inset 0 0 0 1px rgba(245,158,11,0.15)"
                : "0 6px 22px rgba(245,158,11,0.50), 0 2px 8px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.40), inset 0 -2px 6px rgba(180,83,9,0.45)",
              backdropFilter: fabOpen ? "blur(16px)" : undefined,
              WebkitBackdropFilter: fabOpen ? "blur(16px)" : undefined,
              touchAction: "manipulation",
            }}
          >
            {/* Cross-fade Menu ↔ X with rotation — reduced motion degrades to opacity-only via CSS */}
            <span className="relative w-5 h-5 flex items-center justify-center">
              <Menu
                className="absolute w-[18px] h-[18px] fab-icon-menu transition-all duration-200"
                style={{
                  color: "#0f1724",
                  opacity: fabOpen ? 0 : 1,
                  transform: fabOpen ? "rotate(90deg) scale(0.7)" : "rotate(0deg) scale(1)",
                }}
                aria-hidden="true"
              />
              <X
                className="absolute w-[18px] h-[18px] fab-icon-close transition-all duration-200"
                style={{
                  color: "#f59e0b",
                  opacity: fabOpen ? 1 : 0,
                  transform: fabOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.7)",
                }}
                aria-hidden="true"
              />
            </span>
            {/* Badge dot — visible when any nav item has a badge and menu is closed */}
            {anyBadge && (
              <span
                className="fab-badge-dot absolute rounded-full"
                aria-hidden="true"
                style={{
                  top: 7,
                  right: 7,
                  width: 9,
                  height: 9,
                  background: "#f59e0b",
                  border: "2px solid hsl(var(--background))",
                }}
              />
            )}
          </button>
        );
      })()}

      {/* Quick Mode overlay rendered once at app level */}
      <QuickModeOverlay />
    </div>
  );
}
