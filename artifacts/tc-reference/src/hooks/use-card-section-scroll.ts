import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";
import type { CardData } from "@/lib/card-types";
import {
  SECTIONS,
  cardSectionMemory,
  headerOffset,
  scrollBehavior,
  type CardSection,
} from "@/components/card-detail/card-sections";

/**
 * Owns the card page's section state: which accordion sections are open,
 * which section the scroll-spy marks active, and the in-session memory that
 * restores each card's last section and scroll position.
 */
export function useCardSectionScroll({
  cardId,
  cardData,
  sectionAvailable,
  navRef,
}: {
  cardId: string;
  cardData: CardData | null;
  sectionAvailable: (id: CardSection) => boolean;
  navRef: RefObject<HTMLDivElement | null>;
}) {
  const [activeSection, setActiveSection] = useState<CardSection>(
    () => cardSectionMemory.get(cardId)?.section ?? "overview",
  );
  // Ref updated synchronously on every render so persist effect never lags behind cardId
  const cardIdRef = useRef(cardId);
  cardIdRef.current = cardId;
  const [openSections, setOpenSections] = useState<Set<CardSection>>(
    () => new Set<CardSection>(["overview"]),
  );
  const scrollLockRef = useRef<string | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());
  // Tracks the latest window.scrollY via a passive listener so the cleanup
  // can persist the exact position even after window.scrollTo(0,0) is called
  // in the same event handler (browser dispatches the resulting scroll event
  // asynchronously, after React's synchronous cleanup has already run).
  const scrollYRef = useRef(0);

  // Expand a section (no-op if already open)
  const expandSection = (id: CardSection) => {
    setOpenSections((prev) => (prev.has(id) ? prev : new Set([...prev, id])));
  };

  // Toggle open/closed state for a section
  const toggleSection = (id: CardSection) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Expand section and scroll to it; uses setTimeout so React commits the
  // expanded DOM before we measure scroll position.
  const scrollSectionIntoView = (s: CardSection) => {
    setActiveSection(s);
    expandSection(s);
    setTimeout(() => {
      const el = document.getElementById(`section-${s}`);
      if (el) {
        const navH = navRef.current?.offsetHeight ?? 90;
        const y =
          el.getBoundingClientRect().top +
          window.scrollY -
          headerOffset() -
          navH -
          4;
        scrollLockRef.current = s;
        window.scrollTo({ top: y, behavior: scrollBehavior() });
      }
    }, 30);
  };

  useEffect(() => {
    const navH = navRef.current?.offsetHeight ?? 52;
    // Re-created per card: wouter re-renders this component (no remount) when
    // cardId changes, so the observer must re-observe the new card's sections
    // and discard any state from the card we just left.
    intersectingRef.current.clear();
    scrollLockRef.current = null;
    const observer = new IntersectionObserver(
      (entries) => {
        // Maintain the set of currently-intersecting sections
        entries.forEach((entry) => {
          const id = entry.target.id.replace("section-", "");
          if (entry.isIntersecting) {
            intersectingRef.current.add(id);
          } else {
            intersectingRef.current.delete(id);
          }
        });

        // If we're in a programmatic-scroll lock, only release when the
        // target section actually enters the intersection zone
        if (scrollLockRef.current !== null) {
          if (intersectingRef.current.has(scrollLockRef.current)) {
            scrollLockRef.current = null;
          } else {
            return; // still scrolling toward target — don't override pill
          }
        }

        // Pick the topmost section (by SECTIONS order) that is currently visible
        const visible = SECTIONS.filter((s) =>
          intersectingRef.current.has(s.id),
        );
        if (visible.length > 0) {
          setActiveSection(visible[0].id);
        }
      },
      {
        // Exclude the sticky header + section nav from the top; count a
        // section as "active" when it occupies the top 50% of remaining viewport
        rootMargin: `${-Math.round(headerOffset() + navH)}px 0px -50% 0px`,
        threshold: 0,
      },
    );

    // Only observe sections that actually render for this card
    SECTIONS.filter((s) => sectionAvailable(s.id)).forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cardId, cardData]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep scrollYRef in sync so the cleanup below can read the latest value
  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Persist section changes — cardIdRef (not cardId) as dep so this only fires
  // when the section changes, never when cardId changes (avoids writing the
  // previous card's section under the new card's ID)
  useEffect(() => {
    const prev = cardSectionMemory.get(cardIdRef.current);
    cardSectionMemory.set(cardIdRef.current, {
      section: activeSection,
      scrollY: prev?.scrollY ?? 0,
    });
  }, [activeSection]);

  // Restore the saved section (and scroll position) when the viewed card changes
  useEffect(() => {
    // Reset to overview-only on every card change; restore below may expand more
    setOpenSections(new Set<CardSection>(["overview"]));
    const saved = cardSectionMemory.get(cardId);
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (saved && saved.section !== "overview") {
      timer = setTimeout(() => {
        if (saved.scrollY > 0) {
          // Jump straight to the exact pixel position — instant so there's no
          // jarring animation on top of the page transition
          window.scrollTo({
            top: saved.scrollY,
            behavior: "instant" as ScrollBehavior,
          });
          setActiveSection(saved.section);
          expandSection(saved.section);
        } else {
          scrollSectionIntoView(saved.section);
        }
      }, 60);
    } else {
      setActiveSection("overview");
    }
    return () => {
      // Persist the scroll position for the card we're leaving.
      // scrollYRef.current is the pre-navigation value: window.scrollTo(0,0)
      // fires synchronously in the same event handler, but the browser only
      // dispatches the resulting scroll event asynchronously — after React's
      // synchronous cleanup has already completed.
      const existing = cardSectionMemory.get(cardId);
      if (existing) {
        cardSectionMemory.set(cardId, {
          ...existing,
          scrollY: scrollYRef.current,
        });
      }
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [cardId]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    activeSection,
    openSections,
    setOpenSections,
    toggleSection,
    scrollSectionIntoView,
  };
}
