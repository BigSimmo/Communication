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
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { NAV_DESTINATIONS, pageTitle, useNavBadges } from "@/lib/nav-items";

const TOTAL_CARDS = Object.values(LIBRARY_CATEGORIES).flat().length;
const LOADED_CARDS = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .filter((c) => c.loaded).length;

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
        <div className="px-5 pt-7 pb-5">
          <p
            className="text-[9px] font-bold tracking-[0.18em] uppercase"
            style={{
              color: "color-mix(in srgb, var(--brand-text) 70%, transparent)",
            }}
          >
            Technique Cards
          </p>
          <p
            className="text-[18px] font-bold leading-tight mt-0.5"
            style={{ color: "var(--fg-90)" }}
          >
            TC Library
          </p>
        </div>

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

        {/* Cards loaded */}
        <div className="px-4 pb-6">
          <div
            className="rounded-xl px-3.5 py-3"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-06)",
            }}
          >
            <div className="flex items-baseline justify-between">
              <p
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--fg-40)" }}
              >
                Cards loaded
              </p>
              <p
                className="text-[12px] font-bold"
                style={{ color: "var(--brand-text)" }}
              >
                {LOADED_CARDS}
                <span className="font-medium" style={{ color: "var(--fg-40)" }}>
                  {" "}/ {TOTAL_CARDS}
                </span>
              </p>
            </div>
            <div
              className="mt-2 h-1 rounded-full overflow-hidden"
              style={{ background: "var(--fg-06)" }}
              role="progressbar"
              aria-valuenow={LOADED_CARDS}
              aria-valuemin={0}
              aria-valuemax={TOTAL_CARDS}
              aria-label={`${LOADED_CARDS} of ${TOTAL_CARDS} cards loaded`}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(LOADED_CARDS / TOTAL_CARDS) * 100}%`,
                  background: "var(--brand)",
                }}
              />
            </div>
          </div>
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
