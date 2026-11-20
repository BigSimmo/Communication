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
      className="fixed inset-x-0 px-4 pointer-events-none"
      style={{ bottom, zIndex: "var(--z-header)" as unknown as number }}
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
