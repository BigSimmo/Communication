import { useLayoutEffect } from "react";
import type { RefObject } from "react";

/**
 * Keeps a full-screen element inside the part of the screen the on-screen
 * keyboard leaves visible, so a field pinned to its bottom edge sits on top
 * of the keyboard instead of underneath it.
 *
 * iPhone and Android keyboards cover the page without resizing it; only the
 * visual viewport shrinks. This follows that viewport: the element's top and
 * height track it, and `--bottom-inset` is set to 0px on the element while
 * the keyboard is up, for padding that otherwise clears the home indicator
 * (which the keyboard covers).
 *
 * Without the Visual Viewport API, or while the page is pinch-zoomed, the
 * element keeps its stylesheet size.
 */
export function useKeyboardViewport(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const element = ref.current;
    const viewport = window.visualViewport;
    if (!element || !viewport) return;

    const clear = () => {
      element.style.removeProperty("top");
      element.style.removeProperty("height");
      element.style.removeProperty("--bottom-inset");
    };

    const apply = () => {
      if (Math.abs(viewport.scale - 1) > 0.01) {
        clear();
        return;
      }
      element.style.top = `${viewport.offsetTop}px`;
      element.style.height = `${viewport.height}px`;
      // A keyboard takes a third of the screen or more; browser toolbars
      // sliding in and out take far less.
      if (window.innerHeight - viewport.height > 120)
        element.style.setProperty("--bottom-inset", "0px");
      else element.style.removeProperty("--bottom-inset");
    };

    apply();
    viewport.addEventListener("resize", apply);
    viewport.addEventListener("scroll", apply);
    return () => {
      viewport.removeEventListener("resize", apply);
      viewport.removeEventListener("scroll", apply);
      clear();
    };
  }, [ref]);
}
