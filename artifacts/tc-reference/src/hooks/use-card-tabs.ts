import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { RefObject } from "react";
import {
  TAB_SECTIONS,
  cardTabMemory,
  headerOffset,
  parseCardTarget,
  scrollBehavior,
  sectionScrollTop,
  tabForSection,
  type CardSection,
  type CardTab,
} from "@/components/card-detail/card-sections";

const INSTANT = "instant" as ScrollBehavior;

/**
 * Owns the card page's tab state: which of Use it / Learn it / Practise it is
 * showing, which section the scroll-spy marks in the jump row, and the
 * in-session memory that reopens each card on the tab and scroll position it
 * was left at.
 *
 * Mount one per card (key the caller by card id) once the card's data is on
 * screen: opening state is read on mount and saved on unmount.
 */
export function useCardTabs({
  cardId,
  navRef,
  sentinelRef,
}: {
  cardId: string;
  /** The sticky tabs bar, measured for scroll offsets. */
  navRef: RefObject<HTMLElement | null>;
  /** A zero-height marker just above the tabs bar: where the bar sticks. */
  sentinelRef: RefObject<HTMLElement | null>;
}) {
  // A link that names a tab or section wins over where the card was left.
  const [opening] = useState(() => ({
    target: parseCardTarget(window.location.search, window.location.hash),
    saved: cardTabMemory.get(cardId),
  }));
  const [tab, setTab] = useState<CardTab>(
    opening.target?.tab ?? opening.saved?.tab ?? "use",
  );
  const [activeSection, setActiveSection] = useState<CardSection>(
    opening.target?.section ?? TAB_SECTIONS[tab][0],
  );

  const scrollLockRef = useRef<CardSection | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());
  // What to do once a tab change has been committed to the DOM.
  const afterSwitchRef = useRef<
    { kind: "section"; section: CardSection } | { kind: "top" } | null
  >(null);
  // Latest window.scrollY from a passive listener, so the unmount cleanup can
  // save the position the card was read at even when the navigation that
  // unmounts it has already called window.scrollTo(0, 0) in the same handler.
  const scrollYRef = useRef(0);
  const tabRef = useRef(tab);

  const scrollToSection = useCallback(
    (section: CardSection, behavior: ScrollBehavior) => {
      const el = document.getElementById(`section-${section}`);
      if (!el) return;
      const y = sectionScrollTop(el, navRef.current?.offsetHeight ?? 56);
      scrollLockRef.current = section;
      window.scrollTo({ top: y, behavior });
    },
    [navRef],
  );

  /** Where the page is scrolled when the tabs bar has just become stuck. */
  const stickPoint = useCallback(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return 0;
    return Math.max(
      0,
      sentinel.getBoundingClientRect().top + window.scrollY - headerOffset(),
    );
  }, [sentinelRef]);

  const selectTab = useCallback(
    (next: CardTab) => {
      if (next === tabRef.current) return;
      // Deep in one tab, the next should start at its top, not at the same
      // pixel offset of unrelated content. Near the top, leave the page be.
      afterSwitchRef.current =
        window.scrollY > stickPoint() + 1 ? { kind: "top" } : null;
      setTab(next);
      setActiveSection(TAB_SECTIONS[next][0]);
    },
    [stickPoint],
  );

  /** Open the tab that holds `section` and bring the section into view. */
  const goToSection = useCallback(
    (section: CardSection) => {
      const next = tabForSection(section);
      setActiveSection(section);
      if (next === tabRef.current) {
        scrollToSection(section, scrollBehavior());
        return;
      }
      afterSwitchRef.current = { kind: "section", section };
      setTab(next);
    },
    [scrollToSection],
  );

  // Runs after the new tab's content is in the DOM and before paint, so the
  // reader never sees the old scroll offset applied to the new tab.
  useLayoutEffect(() => {
    tabRef.current = tab;
    const pending = afterSwitchRef.current;
    afterSwitchRef.current = null;
    if (!pending) return;
    if (pending.kind === "section") scrollToSection(pending.section, INSTANT);
    else window.scrollTo({ top: stickPoint(), behavior: INSTANT });
  }, [tab, scrollToSection, stickPoint]);

  // Scroll-spy over the showing tab's sections, for the jump row.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = TAB_SECTIONS[tab];
    const navH = navRef.current?.offsetHeight ?? 56;
    const intersecting = intersectingRef.current;
    intersecting.clear();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id.replace("section-", "");
          if (entry.isIntersecting) intersecting.add(id);
          else intersecting.delete(id);
        });
        // During a programmatic scroll, hold the pill on the target until
        // the target itself arrives.
        if (scrollLockRef.current !== null) {
          if (!intersecting.has(scrollLockRef.current)) return;
          scrollLockRef.current = null;
        }
        const topmost = sections.find((id) => intersecting.has(id));
        if (topmost) setActiveSection(topmost);
      },
      {
        // Below the sticky header and tabs bar, in the top half of what is left.
        rootMargin: `${-Math.round(headerOffset() + navH)}px 0px -50% 0px`,
        threshold: 0,
      },
    );
    sections.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      scrollLockRef.current = null;
    };
  }, [tab, navRef]);

  // Remember the tab as it changes.
  useEffect(() => {
    cardTabMemory.set(cardId, {
      tab,
      scrollY: cardTabMemory.get(cardId)?.scrollY ?? 0,
    });
  }, [cardId, tab]);

  // On open: land on the linked section, or back where the card was left.
  // On close: save the scroll position.
  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let timer: ReturnType<typeof setTimeout> | undefined;
    const { target, saved } = opening;
    if (target?.section) {
      const section = target.section;
      // A beat for the page to lay out under the header before measuring.
      timer = setTimeout(() => scrollToSection(section, INSTANT), 60);
    } else if (!target && saved && saved.scrollY > 0) {
      timer = setTimeout(
        () => window.scrollTo({ top: saved.scrollY, behavior: INSTANT }),
        60,
      );
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer !== undefined) clearTimeout(timer);
      cardTabMemory.set(cardId, {
        tab: tabRef.current,
        scrollY: scrollYRef.current,
      });
    };
  }, [cardId, opening, scrollToSection]);

  return { tab, selectTab, activeSection, goToSection };
}
