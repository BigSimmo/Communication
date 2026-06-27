import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

/**
 * Returns the current scroll direction, hardened against mobile overscroll
 * (rubber-banding) and momentum/inertial micro-reversals.
 *
 * - Always initialises to "up" on mount so the filter bar is visible on page entry.
 * - Resets to "up" whenever scrollY drops below `threshold` (default 60px).
 * - Clamps the read scroll position to the real scrollable range so transient
 *   negative (top) or beyond-max (bottom) overscroll values can't flip direction.
 * - Uses an accumulator with hysteresis: movement builds up in one direction and
 *   only flips the reported direction once it passes `flipThreshold`px, resetting
 *   when the direction reverses. This stops tiny reversals during momentum
 *   scrolling from toggling the bar.
 * - Reads are throttled with requestAnimationFrame to avoid reacting to every
 *   micro scroll event.
 */
export function useScrollDirection(
  threshold = 60,
  flipThreshold = 12,
): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const lastY = useRef(0);
  const accum = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Largest position the document can actually be scrolled to.
    const getMaxScroll = () =>
      Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );

    // Clamp to the real scrollable range so overscroll (negative at the top,
    // beyond-max at the bottom) doesn't register as movement.
    const clampY = () =>
      Math.max(0, Math.min(window.scrollY, getMaxScroll()));

    // Initialise from the current position so the first scroll event
    // doesn't produce a false "down" jump from 0 → actual scrollY.
    lastY.current = clampY();
    accum.current = 0;
    // Always reset to "up" on mount / remount (i.e. when navigating
    // back to the Library page) so the bar reappears immediately.
    setDirection("up");

    const update = () => {
      ticking.current = false;
      const y = clampY();

      if (y < threshold) {
        accum.current = 0;
        setDirection("up");
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      lastY.current = y;

      if (delta === 0) return;

      // Reset the accumulator whenever the direction of movement reverses,
      // then build up movement in the current direction.
      if ((delta > 0 && accum.current < 0) || (delta < 0 && accum.current > 0)) {
        accum.current = 0;
      }
      accum.current += delta;

      if (accum.current >= flipThreshold) {
        setDirection("down");
        accum.current = 0;
      } else if (accum.current <= -flipThreshold) {
        setDirection("up");
        accum.current = 0;
      }
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, flipThreshold]);

  return direction;
}
