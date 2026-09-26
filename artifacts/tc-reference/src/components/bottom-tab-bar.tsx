import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { NAV_DESTINATIONS, useNavBadges } from "@/lib/nav-items";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

// Text entry that summons the on-screen keyboard. A fixed bottom bar would
// otherwise ride up on top of the keyboard and cover what is being typed.
function isTextEntry(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  if (el.isContentEditable || el.tagName === "TEXTAREA") return true;
  if (el.tagName !== "INPUT") return false;
  const type = (el as HTMLInputElement).type;
  return ![
    "checkbox",
    "radio",
    "button",
    "submit",
    "reset",
    "range",
    "color",
    "file",
  ].includes(type);
}

function useTextEntryFocused(): boolean {
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const onIn = (e: FocusEvent) => setFocused(isTextEntry(e.target));
    const onOut = (e: FocusEvent) => {
      if (!isTextEntry(e.relatedTarget)) setFocused(false);
    };
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);
  return focused;
}

/**
 * Phone navigation (below md). Five fixed destinations, one tap each.
 * Slides out of view while scrolling down so reading gets the full screen,
 * and returns on a deliberate scroll up, near the top, or on a new route.
 */
export function BottomTabBar() {
  const [location] = useLocation();
  const direction = useScrollDirection(24, 12, location);
  const typing = useTextEntryFocused();
  // Keyboard users tabbing through the bar keep it on screen
  const [focusWithin, setFocusWithin] = useState(false);
  const hidden = (direction === "down" || typing) && !focusWithin;

  const badges = useNavBadges();

  return (
    <nav
      aria-label="Main navigation"
      data-testid="bottom-tab-bar"
      data-hidden={hidden}
      className="tab-bar md:hidden fixed inset-x-0 bottom-0"
      onFocus={() => setFocusWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node))
          setFocusWithin(false);
      }}
    >
      <ul className="tab-bar-inner flex items-stretch">
        {NAV_DESTINATIONS.map((item) => {
          const active = item.isActive(location);
          const badge = badges[item.id] ?? null;
          const Icon = item.icon;
          return (
            <li key={item.id} className="flex-1 min-w-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={
                  badge && item.id === "favourites"
                    ? `${item.label}, ${badge} items`
                    : item.label
                }
                data-testid={`nav-tab-${item.id}`}
                tabIndex={hidden ? -1 : undefined}
                onClick={(e) => {
                  // Native pattern: tapping the tab you're on scrolls to top
                  if (location === item.href) {
                    e.preventDefault();
                    const reduce = window.matchMedia?.(
                      "(prefers-reduced-motion: reduce)",
                    ).matches;
                    window.scrollTo({
                      top: 0,
                      behavior: reduce ? "auto" : "smooth",
                    });
                  }
                }}
                className="tab-bar-item h-full w-full flex flex-col items-center justify-center gap-[3px]"
                style={{ color: active ? "var(--brand-text)" : "var(--fg-50)" }}
              >
                <span
                  className="tab-bar-icon relative flex items-center justify-center rounded-full"
                  style={{
                    background: active
                      ? "color-mix(in srgb, var(--brand) 16%, transparent)"
                      : "transparent",
                  }}
                >
                  <Icon
                    className="w-[19px] h-[19px]"
                    strokeWidth={active ? 2.3 : 1.9}
                    fill={
                      active && item.id === "favourites"
                        ? "currentColor"
                        : "none"
                    }
                    aria-hidden="true"
                  />
                  {badge && (
                    <span
                      aria-hidden="true"
                      className="absolute -top-1 left-[calc(50%+6px)] min-w-[15px] h-[15px] px-[3px] rounded-full text-[9px] font-bold leading-none flex items-center justify-center"
                      style={{
                        background: "var(--brand)",
                        color: "var(--brand-contrast)",
                        boxShadow: "0 0 0 1.5px var(--surface-header)",
                      }}
                    >
                      {badge}
                    </span>
                  )}
                </span>
                <span
                  className="tab-bar-label text-[10px] leading-none truncate max-w-full px-1"
                  style={{ fontWeight: active ? 700 : 600 }}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
