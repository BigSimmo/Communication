import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

// The iOS large-title pattern: a page shows its own big title at the top,
// and the app header names the page only once that title has scrolled out
// of view. A page marks its visible title with usePageTitleRef(); the
// header reads useHeaderTitleShown().

let current: HTMLElement | null = null;
const listeners = new Set<() => void>();

function setCurrent(el: HTMLElement | null) {
  if (current === el) return;
  current = el;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Ref for a page's large title (its visible h1, or the card's title). */
export function usePageTitleRef<T extends HTMLElement>() {
  const own = useRef<T | null>(null);
  return useCallback((el: T | null) => {
    if (el) {
      own.current = el;
      setCurrent(el);
    } else {
      // Only clear the slot if a newer page has not already taken it
      if (current === own.current) setCurrent(null);
      own.current = null;
    }
  }, []);
}

/** Height of the bar the title has to clear, below any status-bar inset. */
const HEADER_BAR = 52;

/**
 * A title only counts while it is actually drawn: a screen-reader-only h1
 * (phones, where the header names the page) is a 1px box and leaves the
 * header title on.
 */
function isDrawn(rect: DOMRectReadOnly) {
  return rect.height > 4 && rect.width > 4;
}

function titleGone(rect: DOMRectReadOnly) {
  return !isDrawn(rect) || rect.bottom <= HEADER_BAR;
}

/**
 * Whether the header should show the page's name: always when the page has
 * no large title, otherwise once that title has scrolled up under the
 * header. `hasPageTitle` says whether a page title is registered (and so
 * whether the header's copy is redundant for assistive tech).
 */
export function useHeaderTitleShown(): {
  hasPageTitle: boolean;
  shown: boolean;
} {
  const el = useSyncExternalStore(
    subscribe,
    () => current,
    () => null,
  );
  const [gone, setGone] = useState(true);

  // Layout effect: decide before paint, so a page never flashes the header
  // title it is about to hide
  useLayoutEffect(() => {
    if (!el) return;
    const check = () => setGone(titleGone(el.getBoundingClientRect()));
    check();
    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check);
      return () => {
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      };
    }
    const io = new IntersectionObserver(
      ([entry]) => setGone(titleGone(entry.boundingClientRect)),
      { rootMargin: `-${HEADER_BAR}px 0px 0px 0px`, threshold: [0, 1] },
    );
    io.observe(el);
    // The title can switch between drawn and screen-reader-only at a
    // breakpoint without crossing the viewport edge
    window.addEventListener("resize", check);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [el]);

  return { hasPageTitle: !!el, shown: !el || gone };
}
