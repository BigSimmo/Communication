import type { ReactNode } from "react";

interface DockBarProps {
  children: ReactNode;
  /** Sits above the phone tab bar (default) or directly above the home indicator. */
  aboveTabBar?: boolean;
}

/**
 * Floating bar pinned in thumb reach at the bottom of a screen: the Library
 * search field, a card's Copy button. A fade behind it keeps list rows from
 * showing through. Give the scrolling content matching bottom padding.
 */
export function DockBar({ children, aboveTabBar = true }: DockBarProps) {
  const bottom = aboveTabBar
    ? "calc(var(--tabbar-height) + var(--tabbar-gap) + 12px)"
    : "max(12px, env(safe-area-inset-bottom, 0px))";
  return (
    <div
      data-testid="dock-bar"
      className="fixed inset-x-0 md:left-[var(--sidebar-w)] pointer-events-none motion-reduce:transition-none"
      style={{
        paddingLeft: "max(1rem, var(--content-safe-left))",
        paddingRight: "max(1rem, var(--safe-right))",
        bottom,
        zIndex: "var(--z-header)" as unknown as number,
        // Matches the tab bar's slide, for docks that follow it down.
        transition: "bottom 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-9 -bottom-3"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)) 58%, transparent)",
        }}
      />
      <div className="relative flex gap-2.5 pointer-events-auto mx-auto max-w-[520px]">
        {children}
      </div>
    </div>
  );
}
