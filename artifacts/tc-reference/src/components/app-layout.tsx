import { useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "wouter";
import { useQuickMode } from "@/lib/quick-mode";
// Lazy — the overlay loads and aggregates card content only when Quick Lookup
// is first opened.
const QuickModeOverlay = lazy(() =>
  import("./quick-mode-overlay").then((m) => ({ default: m.QuickModeOverlay })),
);
import { AppHeader } from "./app-header";
import { BottomTabBar } from "./bottom-tab-bar";
import { BookOpen } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { NAV_DESTINATIONS, pageTitle, useNavBadges } from "@/lib/nav-items";

const TOTAL_CARDS = Object.values(LIBRARY_CATEGORIES).flat().length;

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [location] = useLocation();
  const { isOpen } = useQuickMode();
  const badges = useNavBadges();

  useEffect(() => {
    document.title = `${pageTitle(location)} · TC Reference Tool`;
  }, [location]);

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
        <Link
          href="/"
          className="flex items-center gap-2.5 px-5 pt-6 pb-5 rounded-lg"
          aria-label="TC Library home"
        >
          <span
            aria-hidden="true"
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "var(--gradient-active)",
              boxShadow:
                "0 2px 8px color-mix(in srgb, var(--brand) 32%, transparent), inset 0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            <BookOpen
              className="w-4 h-4"
              style={{ color: "var(--brand-contrast)" }}
            />
          </span>
          <span className="min-w-0">
            <span
              className="block text-[16px] font-bold leading-tight"
              style={{ color: "var(--fg-90)" }}
            >
              TC Library
            </span>
            <span
              className="block text-[11px] font-medium mt-0.5"
              style={{ color: "var(--fg-50)" }}
            >
              {TOTAL_CARDS} communication techniques
            </span>
          </span>
        </Link>

        <div className="w-full h-px" style={{ background: "var(--fg-06)" }} />

        {/* Destinations only. Search, Quick and the theme live in the header. */}
        <nav className="flex-1 px-3 pt-3" aria-label="Navigation">
          <ul className="space-y-0.5">
            {NAV_DESTINATIONS.map((item) => {
              const active = item.isActive(location) && !isOpen;
              const badge = badges[item.id] ?? null;
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    data-testid={`nav-sidebar-${item.id}`}
                    className="sidebar-item w-full flex items-center gap-3 rounded-xl px-3 transition-colors duration-150 hover:bg-[var(--fg-05)]"
                    style={{
                      minHeight: 40,
                      background: active
                        ? "color-mix(in srgb, var(--brand) 11%, transparent)"
                        : undefined,
                      color: active ? "var(--brand-text)" : "var(--fg-55)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4 flex-shrink-0"
                      strokeWidth={active ? 2.3 : 1.9}
                      aria-hidden="true"
                    />
                    <span
                      className="flex-1 text-[13px]"
                      style={{ fontWeight: active ? 700 : 600 }}
                    >
                      {item.label}
                    </span>
                    {badge && (
                      <span
                        className="min-w-[18px] h-[18px] px-1.5 rounded-full text-[10px] font-bold leading-none flex items-center justify-center"
                        style={{
                          background: active
                            ? "var(--brand)"
                            : "var(--fg-08)",
                          color: active
                            ? "var(--brand-contrast)"
                            : "var(--fg-60)",
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer: search shortcut hint (theme lives in the header) */}
        <div
          className="px-3 pb-5 pt-3"
          style={{ borderTop: "1px solid var(--fg-06)" }}
        >
          <p
            className="keyboard-hint px-3 pt-1 text-[11px] leading-snug"
            style={{ color: "var(--fg-45)" }}
          >
            <kbd
              className="font-sans font-semibold px-1.5 py-0.5 rounded-md mr-1"
              style={{
                background: "var(--fg-06)",
                border: "1px solid var(--fg-08)",
                color: "var(--fg-60)",
              }}
            >
              {typeof navigator !== "undefined" &&
              /Mac|iPhone|iPad/.test(navigator.platform)
                ? "\u2318K"
                : "Ctrl K"}
            </kbd>
            search everything
          </p>
        </div>
      </aside>

      {/* ── Content wrapper (sidebar offset + shared header) ── */}
      <div className="md:pl-[200px] flex flex-col min-h-[100dvh] w-full min-w-0 overflow-x-clip">
        <AppHeader />
        {/* Bottom padding clears the phone tab bar and the home indicator */}
        <main className="app-main flex-1 min-w-0 overflow-x-clip">
          {children}
        </main>
      </div>

      <BottomTabBar />

      {/* Quick Mode overlay: mounted only while open so its lazy chunk (and the
          heavy card content it needs) loads on first use, not on first paint */}
      {isOpen && (
        <Suspense fallback={null}>
          <QuickModeOverlay />
        </Suspense>
      )}
    </div>
  );
}
