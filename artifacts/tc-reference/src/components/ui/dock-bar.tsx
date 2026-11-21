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
      className="fixed inset-x-0 md:left-[200px] px-4 pointer-events-none motion-reduce:transition-none"
      style={{
        bottom,
        zIndex: "var(--z-header)" as unknown as number,
        // Matches the tab bar's slide, for docks that follow it down.
        transition: "bottom 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {/* The fade runs to the bottom of the screen, so rows do not show
          through the gap above the tab bar or around its rounded corners. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-9"
        style={{
          bottom: `calc(-1 * (${bottom}))`,
          // Fades in over the 36px above the dock, solid from there down, so
          // a translucent (disabled) button never shows rows through it.
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--background)) 36px)",
        }}
      />
      <div className="relative flex gap-2.5 pointer-events-auto mx-auto max-w-[520px]">
        {children}
      </div>
    </div>
  );
}
