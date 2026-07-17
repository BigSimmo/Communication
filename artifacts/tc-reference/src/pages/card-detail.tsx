import { useState, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { CARD_DATA } from "@/lib/cards";
import type { CardResource } from "@/lib/cards";
import { useFavourites } from "@/lib/favourites-context";
import { usePdf } from "@/lib/pdf-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";
import { SECTIONS, type CardSection } from "@/components/card-detail/section-accordion";
import { OverviewSection } from "@/components/card-detail/overview-section";
import { WhySection } from "@/components/card-detail/why-section";
import { MethodSection } from "@/components/card-detail/method-section";
import { PhrasesSection } from "@/components/card-detail/phrases-section";
import { LadderSection } from "@/components/card-detail/ladder-section";
import { InPracticeSection } from "@/components/card-detail/inpractice-section";
import { TreeSection } from "@/components/card-detail/tree-section";
import { ScenariosSection } from "@/components/card-detail/scenarios-section";
import { ChainsSection } from "@/components/card-detail/chains-section";
import { CalibrationSection } from "@/components/card-detail/calibration-section";
import { MistakesSection } from "@/components/card-detail/mistakes-section";
import { RecoverySection } from "@/components/card-detail/recovery-section";
import { PracticeSection } from "@/components/card-detail/practice-section";
import { ChecklistSection } from "@/components/card-detail/checklist-section";
import { RelatedSection } from "@/components/card-detail/related-section";
import { ResourcesSection } from "@/components/card-detail/resources-section";
import { PdfViewerModal } from "@/components/card-detail/pdf-viewer-modal";
import { PrevNextButtons } from "@/components/card-detail/prev-next-buttons";
import { SectionNav } from "@/components/card-detail/section-nav";

// Cards without a bundled PDF return null — the nav PDF button and viewer
// only appear when a real document exists.
function getCardPdfUrl(cardId: string): string | null {
  const localPath = CARD_DATA[cardId]?.pdfUrl;
  return localPath ? `${import.meta.env.BASE_URL}${localPath}` : null;
}

// In-session memory: remembers which section and scroll position the user last viewed per card
const cardSectionMemory = new Map<string, { section: CardSection; scrollY: number }>();

// Live header height — set on <html> by AppHeader (56px expanded, 46px compact).
// Falls back to 56 when AppHeader isn't mounted (e.g. bare test renders).
function getHeaderHeight(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--app-header-height");
  return parseInt(raw, 10) || 56;
}

// All card IDs in the library (loaded or not)
const ALL_CARD_IDS = new Set(Object.values(LIBRARY_CATEGORIES).flat().map(c => c.id));

// Set of cards that have full content loaded
const LOADED_CARD_IDS = new Set(
  Object.values(LIBRARY_CATEGORIES).flat().filter(c => c.loaded).map(c => c.id)
);

// Flat ordered list for prev/next navigation (follows LIBRARY_CATEGORIES order)
const LOADED_CARDS_NAV = Object.values(LIBRARY_CATEGORIES).flat().filter(c => c.loaded);

export default function CardDetail() {
  const [, params] = useRoute("/card/:cardId");
  const [, setLocation] = useLocation();
  const cardId = params?.cardId ?? "";
  const isKnownCard = ALL_CARD_IDS.has(cardId);
  const isLoaded = LOADED_CARD_IDS.has(cardId);
  const cardData = CARD_DATA[cardId] ?? CARD_DATA["TC031"];

  const [activeSection, setActiveSection] = useState<CardSection>(
    () => cardSectionMemory.get(cardId)?.section ?? "overview"
  );
  // Ref updated synchronously on every render so persist effect never lags behind cardId
  const cardIdRef = useRef(cardId);
  cardIdRef.current = cardId;
  const [openSections, setOpenSections] = useState<Set<CardSection>>(
    () => new Set<CardSection>(["overview"])
  );
  const [expandedPhraseGroup, setExpandedPhraseGroup] = useState<string | null>(null);
  const { copied: copiedPhrase, copy: handleCopy } = useCopyFeedback();
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [whyOpen, setWhyOpen] = useState(false);
  const [notForOpen, setNotForOpen] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const pdfLoadedRef = useRef(false);
  const pdfSheetRef = useRef<HTMLDivElement>(null);
  const pdfCloseRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollLockRef = useRef<string | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());
  // Tracks the latest window.scrollY via a passive listener so the cleanup
  // can persist the exact position even after window.scrollTo(0,0) is called
  // in the same event handler (browser dispatches the resulting scroll event
  // asynchronously, after React's synchronous cleanup has already run).
  const scrollYRef = useRef(0);
  const { isPhrasesFav, togglePhrase } = useFavourites();
  const { pdfOpen, setPdfOpen, pdfUrl, setPdfUrl } = usePdf();

  // Prev/next navigation follows LIBRARY_CATEGORIES order
  const loadedCardIdx = LOADED_CARDS_NAV.findIndex(c => c.id === cardId);
  const prevCard = loadedCardIdx > 0 ? LOADED_CARDS_NAV[loadedCardIdx - 1] : LOADED_CARDS_NAV[LOADED_CARDS_NAV.length - 1];
  const nextCard = loadedCardIdx >= 0 && loadedCardIdx < LOADED_CARDS_NAV.length - 1 ? LOADED_CARDS_NAV[loadedCardIdx + 1] : LOADED_CARDS_NAV[0];

  // Downloads: cards without a curated resource list still expose their
  // reference PDF as a single download entry
  const resourceItems: CardResource[] = cardData.resources ?? (cardData.pdfUrl
    ? [{
        label: "Reference Card (PDF)",
        description: "Printable quick reference generated from this card's content",
        href: cardData.pdfUrl,
        type: "pdf",
        group: "Visual Cards",
      }]
    : []);

  // Optional sections only render (and only show a nav pill) when the card has data for them.
  const sectionAvailable = (id: CardSection): boolean => {
    switch (id) {
      case "why": return !!cardData.influencePayoff;
      case "method": return !!(cardData.method && cardData.method.length > 0);
      case "chains": return !!(cardData.chains && cardData.chains.length > 0);
      case "mistakes": return !!(cardData.commonMistakes && cardData.commonMistakes.length > 0);
      case "recovery": return !!(cardData.recoveryPhrases && cardData.recoveryPhrases.length > 0);
      case "related": return !!(cardData.relatedTechniques && cardData.relatedTechniques.length > 0);
      case "resources": return resourceItems.length > 0;
      default: return true;
    }
  };

  const toggleCheck = (i: number) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  // Expand a section (no-op if already open)
  const expandSection = (id: CardSection) => {
    setOpenSections(prev => prev.has(id) ? prev : new Set([...prev, id]));
  };

  // Toggle open/closed state for a section
  const toggleSection = (id: CardSection) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
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
        const y = el.getBoundingClientRect().top + window.scrollY - getHeaderHeight() - navH - 4;
        scrollLockRef.current = s;
        window.scrollTo({ top: y, behavior: "smooth" });
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
        entries.forEach(entry => {
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
        const visible = SECTIONS.filter(s => intersectingRef.current.has(s.id));
        if (visible.length > 0) {
          setActiveSection(visible[0].id);
        }
      },
      {
        // Exclude the sticky header + section nav from the top; count a
        // section as "active" when it occupies the top 50% of remaining
        // viewport. Header height is snapshotted per card — a ~10px drift
        // while the header is compacted is acceptable (the -50% bottom
        // margin already makes the zone fuzzy).
        rootMargin: `${-(getHeaderHeight() + navH)}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    // Only observe sections that actually render for this card
    SECTIONS.filter(s => sectionAvailable(s.id)).forEach(s => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cardId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep scrollYRef in sync so the cleanup below can read the latest value
  useEffect(() => {
    const onScroll = () => { scrollYRef.current = window.scrollY; };
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
  }, [activeSection]); // eslint-disable-line react-hooks/exhaustive-deps

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
          window.scrollTo({ top: saved.scrollY, behavior: "instant" as ScrollBehavior });
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
        cardSectionMemory.set(cardId, { ...existing, scrollY: scrollYRef.current });
      }
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [cardId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setPdfUrl(getCardPdfUrl(cardId));
    setPdfOpen(false);
    return () => {
      setPdfUrl(null);
      setPdfOpen(false);
    };
  }, [cardId]);

  useEffect(() => {
    if (!pdfOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPdfOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pdfOpen]);

  // Keep keyboard focus inside the PDF sheet while it's open; restore on close
  useFocusTrap(pdfOpen && pdfUrl !== null, pdfSheetRef, { initialFocusRef: pdfCloseRef });

  useEffect(() => {
    if (!pdfOpen) return;
    setPdfError(false);
    setPdfLoaded(false);
    pdfLoadedRef.current = false;
    // Timeout fallback: many browsers fire onLoad (or nothing) instead of
    // onError when a PDF is blocked by X-Frame-Options or CSP. If the iframe
    // hasn't signalled a successful load within 10 s, surface the fallback.
    const timer = setTimeout(() => {
      if (!pdfLoadedRef.current) setPdfError(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [pdfOpen]);

  // ── Unknown card ID — not in the library at all ──
  if (!isKnownCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: "hsl(var(--destructive) / 0.08)",
            border: "1px solid hsl(var(--destructive) / 0.18)",
          }}
        >
          <span className="text-[20px] font-bold" style={{ color: "hsl(var(--destructive) / 0.6)" }}>?</span>
        </div>
        <h2 className="text-[20px] font-bold text-foreground mb-2">Card not found</h2>
        <p
          className="text-[14px] leading-relaxed mb-6 max-w-[280px]"
          style={{ color: "var(--fg-42)" }}
        >
          No technique card with ID <strong style={{ color: "var(--fg-60)" }}>{cardId || "unknown"}</strong> exists in the library.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
          style={{
            background: "color-mix(in srgb, var(--brand) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
            color: "var(--brand-text)",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Library
        </button>
      </div>
    );
  }

  // ── Graceful placeholder for cards without full content ──
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: "color-mix(in srgb, var(--brand) 8%, transparent)",
            border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
          }}
        >
          <span className="text-[20px] font-bold" style={{ color: "color-mix(in srgb, var(--brand-text) 60%, transparent)" }}>
            {cardId?.slice(2)}
          </span>
        </div>
        <h2 className="text-[20px] font-bold text-foreground mb-2">Coming soon</h2>
        <p
          className="text-[14px] leading-relaxed mb-6 max-w-[280px]"
          style={{ color: "var(--fg-42)" }}
        >
          Full content for this card is being prepared. Browse the library to find a fully loaded card.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
          style={{
            background: "color-mix(in srgb, var(--brand) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
            color: "var(--brand-text)",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <>
      <PrevNextButtons prevCard={prevCard} nextCard={nextCard} setLocation={setLocation} />
      <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">

      {/* ── Section nav (sticky just below the shared header) ── */}
      <SectionNav
        navRef={navRef}
        activeSection={activeSection}
        sectionAvailable={sectionAvailable}
        scrollSectionIntoView={scrollSectionIntoView}
      />

      {/* Content — accordion sections */}
      <div className="px-3 md:px-4 pb-12 pt-2 flex flex-col gap-2">

        {/* ── Overview ── */}
        <OverviewSection cardData={cardData} open={openSections.has("overview")} onToggle={toggleSection}
          whyOpen={whyOpen} setWhyOpen={setWhyOpen} notForOpen={notForOpen} setNotForOpen={setNotForOpen} />

        {/* ── Why It Works ── */}
        {sectionAvailable("why") && (
          <WhySection cardData={cardData} open={openSections.has("why")} onToggle={toggleSection} />
        )}

        {/* ── The Method ── */}
        {sectionAvailable("method") && (
          <MethodSection cardData={cardData} open={openSections.has("method")} onToggle={toggleSection}
            copiedPhrase={copiedPhrase} handleCopy={handleCopy} />
        )}

        {/* ── Phrase Bank ── */}
        <PhrasesSection cardData={cardData} cardId={cardId} open={openSections.has("phrases")} onToggle={toggleSection}
          copiedPhrase={copiedPhrase} handleCopy={handleCopy} isPhrasesFav={isPhrasesFav} togglePhrase={togglePhrase}
          expandedPhraseGroup={expandedPhraseGroup} setExpandedPhraseGroup={setExpandedPhraseGroup} />

        {/* ── Ladder ── */}
        <LadderSection cardData={cardData} cardId={cardId} open={openSections.has("ladder")} onToggle={toggleSection}
          copiedPhrase={copiedPhrase} handleCopy={handleCopy} isPhrasesFav={isPhrasesFav} togglePhrase={togglePhrase} />

        {/* ── In Practice ── */}
        <InPracticeSection cardData={cardData} open={openSections.has("inpractice")} onToggle={toggleSection} />

        {/* ── Decision Tree ── */}
        <TreeSection cardData={cardData} open={openSections.has("tree")} onToggle={toggleSection}
          copiedPhrase={copiedPhrase} handleCopy={handleCopy} />

        {/* ── Scenarios ── */}
        <ScenariosSection cardData={cardData} cardId={cardId} open={openSections.has("scenarios")} onToggle={toggleSection}
          copiedPhrase={copiedPhrase} handleCopy={handleCopy} isPhrasesFav={isPhrasesFav} togglePhrase={togglePhrase} />

        {/* ── Chains ── */}
        {sectionAvailable("chains") && (
          <ChainsSection cardData={cardData} open={openSections.has("chains")} onToggle={toggleSection} />
        )}

        {/* ── Calibration ── */}
        <CalibrationSection cardData={cardData} open={openSections.has("calibration")} onToggle={toggleSection} />

        {/* ── Common Mistakes ── */}
        {sectionAvailable("mistakes") && (
          <MistakesSection cardData={cardData} open={openSections.has("mistakes")} onToggle={toggleSection}
            copiedPhrase={copiedPhrase} handleCopy={handleCopy} />
        )}

        {/* ── Recovery ── */}
        {sectionAvailable("recovery") && (
          <RecoverySection cardData={cardData} cardId={cardId} open={openSections.has("recovery")} onToggle={toggleSection}
            copiedPhrase={copiedPhrase} handleCopy={handleCopy} isPhrasesFav={isPhrasesFav} togglePhrase={togglePhrase} />
        )}

        {/* ── Practice Protocol ── */}
        <PracticeSection cardData={cardData} open={openSections.has("practice")} onToggle={toggleSection} />

        {/* ── After-Action Checklist ── */}
        <ChecklistSection cardData={cardData} open={openSections.has("checklist")} onToggle={toggleSection}
          checkedItems={checkedItems} toggleCheck={toggleCheck} />

        {/* ── Related Techniques ── */}
        {sectionAvailable("related") && (
          <RelatedSection cardData={cardData} open={openSections.has("related")} onToggle={toggleSection}
            setLocation={setLocation} />
        )}

        {/* ── Downloads ── */}
        {sectionAvailable("resources") && (
          <ResourcesSection resourceItems={resourceItems} open={openSections.has("resources")} onToggle={toggleSection} />
        )}

      </div>

    </div>

      {/* ── PDF Viewer Modal / Bottom Sheet ── */}
      {pdfOpen && pdfUrl && (
        <PdfViewerModal
          cardId={cardId}
          pdfUrl={pdfUrl}
          pdfSheetRef={pdfSheetRef}
          pdfCloseRef={pdfCloseRef}
          pdfError={pdfError}
          pdfLoaded={pdfLoaded}
          pdfLoadedRef={pdfLoadedRef}
          setPdfOpen={setPdfOpen}
          setPdfLoaded={setPdfLoaded}
          setPdfError={setPdfError}
        />
      )}
    </>
  );
}
