import { useEffect, useMemo, useRef } from "react";
import type { TouchEvent } from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const MIN_DISTANCE = 64;
const MAX_DURATION_MS = 600;

/** True when the touch began inside something that scrolls sideways. */
function insideHorizontalScroller(
  target: EventTarget | null,
  stop: Element,
): boolean {
  let el = target instanceof Element ? target : null;
  while (el && el !== stop) {
    if (el.scrollWidth > el.clientWidth + 1) {
      const overflowX = getComputedStyle(el).overflowX;
      if (overflowX === "auto" || overflowX === "scroll") return true;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Touch handlers for a quick, mostly horizontal swipe across an element, for
 * moving between tabs on a phone. Slow drags, mostly vertical moves (page
 * scrolling), multi-finger gestures, text selection and swipes that start in
 * a sideways scroller are left alone. Tabs stay fully usable without it.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const start = useRef<{ x: number; y: number; t: number } | null>(null);
  const latest = useRef({ onSwipeLeft, onSwipeRight });
  useEffect(() => {
    latest.current = { onSwipeLeft, onSwipeRight };
  }, [onSwipeLeft, onSwipeRight]);

  return useMemo(
    () => ({
      onTouchStart: (e: TouchEvent<HTMLElement>) => {
        start.current =
          e.touches.length === 1 &&
          !insideHorizontalScroller(e.target, e.currentTarget)
            ? {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                t: Date.now(),
              }
            : null;
      },
      onTouchEnd: (e: TouchEvent<HTMLElement>) => {
        const from = start.current;
        start.current = null;
        const touch = e.changedTouches[0];
        if (!from || !touch) return;
        const dx = touch.clientX - from.x;
        const dy = touch.clientY - from.y;
        if (
          Date.now() - from.t > MAX_DURATION_MS ||
          Math.abs(dx) < MIN_DISTANCE ||
          Math.abs(dx) < Math.abs(dy) * 2 ||
          !window.getSelection()?.isCollapsed
        )
          return;
        if (dx < 0) latest.current.onSwipeLeft?.();
        else latest.current.onSwipeRight?.();
      },
    }),
    [],
  );
}
