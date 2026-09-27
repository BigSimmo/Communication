import { useState, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { copyToClipboard } from "@/lib/utils";
import { loadCard } from "@/lib/card-loader";
import type { CardData } from "@/lib/card-types";
import { usePdf } from "@/lib/pdf-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useCardSectionScroll } from "@/hooks/use-card-section-scroll";
import { useCardPdf } from "@/hooks/use-card-pdf";
import {
  ALL_CARD_IDS,
  LOADED_CARD_IDS,
  LOADED_CARDS_NAV,
  SECTIONS,
  isSectionAvailable,
  type CardSection,
} from "@/components/card-detail/card-sections";
import { AccordionContext } from "@/components/card-detail/section-accordion";
import {
  CardNotFound,
  CardComingSoon,
} from "@/components/card-detail/card-status";
import { CardHeader } from "@/components/card-detail/card-header";
import { SectionNav } from "@/components/card-detail/section-nav";
import {
  FloatingPrevNext,
  PrevNextNav,
} from "@/components/card-detail/prev-next-buttons";
import { PdfViewerModal } from "@/components/card-detail/pdf-viewer-modal";
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

export default function CardDetail() {
  const [, params] = useRoute("/card/:cardId");
  const [, setLocation] = useLocation();
  const cardId = params?.cardId ?? "";
  const isKnownCard = ALL_CARD_IDS.has(cardId);
  const isLoaded = LOADED_CARD_IDS.has(cardId);
  const [loadedCard, setLoadedCard] = useState<{
    cardId: string;
    data: CardData | null;
  } | null>(null);
  const [loadFailedCardId, setLoadFailedCardId] = useState<string | null>(null);
  const cardData = loadedCard?.cardId === cardId ? loadedCard.data : null;

  const [expandedPhraseGroup, setExpandedPhraseGroup] = useState<string | null>(
    null,
  );
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [whyOpen, setWhyOpen] = useState(false);
  // Open by default: knowing when not to use a move is safety-relevant.
  const [notForOpen, setNotForOpen] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const pdfSheetRef = useRef<HTMLDivElement>(null);

  // Publish the section nav's height so accordion scroll-margin matches it.
  useEffect(() => {
    const el = navRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--card-nav-height",
        `${el.offsetHeight}px`,
      );
    });
    ro.observe(el);
    return () => ro.disconnect();
  });
  const { pdfOpen, setPdfOpen, setPdfUrl } = usePdf();
  useFocusTrap(pdfOpen, pdfSheetRef);
  useBodyScrollLock(pdfOpen);

  useEffect(() => {
    if (!isKnownCard || !isLoaded) return;
    let active = true;
    setLoadFailedCardId(null);
    loadCard(cardId).then(
      (data) => {
        if (!active) return;
        setLoadedCard({ cardId, data });
        if (!data) setLoadFailedCardId(cardId);
      },
      () => {
        if (active) setLoadFailedCardId(cardId);
      },
    );
    return () => {
      active = false;
    };
  }, [cardId, isKnownCard, isLoaded]);

  // Prev/next navigation follows LIBRARY_CATEGORIES order
  const loadedCardIdx = LOADED_CARDS_NAV.findIndex((c) => c.id === cardId);
  const prevCard =
    loadedCardIdx > 0
      ? LOADED_CARDS_NAV[loadedCardIdx - 1]
      : LOADED_CARDS_NAV[LOADED_CARDS_NAV.length - 1];
  const nextCard =
    loadedCardIdx >= 0 && loadedCardIdx < LOADED_CARDS_NAV.length - 1
      ? LOADED_CARDS_NAV[loadedCardIdx + 1]
      : LOADED_CARDS_NAV[0];

  // Optional sections only render (and only show a nav pill) when the card has data for them.
  const sectionAvailable = (id: CardSection): boolean =>
    isSectionAvailable(cardData, id);

  const handleCopy = async (phrase: string) => {
    await copyToClipboard(phrase);
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 1600);
  };

  const toggleCheck = (i: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  // Accordion open state, scroll-spy and per-card section/scroll memory
  const {
    activeSection,
    openSections,
    setOpenSections,
    toggleSection,
    scrollSectionIntoView,
  } = useCardSectionScroll({ cardId, cardData, sectionAvailable, navRef });

  // PDF URL publishing, close on card change / Escape, iframe load tracking
  const { pdfError, pdfLoaded, onPdfLoad, onPdfError } = useCardPdf({
    cardId,
    cardData,
    pdfOpen,
    setPdfOpen,
    setPdfUrl,
  });

  // Left/right arrow keys step through cards on keyboard devices. Ignored
  // while typing, with modifiers held, on the section nav, or when any
  // dialog is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (
        e.defaultPrevented ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      )
        return;
      const target = e.target;
      if (
        target instanceof Element &&
        target.closest(
          'input, textarea, select, [contenteditable="true"], [role="listbox"], nav[aria-label="Card sections"]',
        )
      )
        return;
      if (document.querySelector('[role="dialog"]')) return;
      const card = e.key === "ArrowLeft" ? prevCard : nextCard;
      if (!card || card.id === cardId) return;
      e.preventDefault();
      window.scrollTo(0, 0);
      setLocation(`/card/${card.id}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cardId, prevCard, nextCard, setLocation]);

  // ── Unknown card ID — not in the library at all ──
  if (!isKnownCard) {
    return <CardNotFound cardId={cardId} setLocation={setLocation} />;
  }

  // ── Graceful placeholder for cards without full content ──
  if (!isLoaded) {
    return <CardComingSoon cardId={cardId} setLocation={setLocation} />;
  }

  if (!cardData) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh] px-8 text-center"
        role="status"
        aria-live="polite"
        aria-busy={loadFailedCardId !== cardId}
      >
        {loadFailedCardId === cardId
          ? "Card content is unavailable right now."
          : "Loading card…"}
      </div>
    );
  }

  const copyProps = { copiedPhrase, handleCopy };

  return (
    <AccordionContext.Provider value={{ openSections, toggleSection }}>
      <FloatingPrevNext
        prevCard={prevCard}
        nextCard={nextCard}
        setLocation={setLocation}
      />
      <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">
        <CardHeader cardId={cardId} cardData={cardData} />

        <SectionNav
          navRef={navRef}
          activeSection={activeSection}
          sectionAvailable={sectionAvailable}
          scrollSectionIntoView={scrollSectionIntoView}
        />

        {/* Content — accordion sections */}
        <div className="px-3 md:px-4 pb-12 pt-2 flex flex-col gap-2">
          {(() => {
            const available = SECTIONS.filter((sec) =>
              sectionAvailable(sec.id),
            );
            const allOpen = available.every((sec) => openSections.has(sec.id));
            return (
              <div className="flex items-center justify-between px-1 pt-1">
                <p className="text-[12px]" style={{ color: "var(--fg-50)" }}>
                  {available.length} sections
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setOpenSections(
                      allOpen
                        ? new Set<CardSection>()
                        : new Set(available.map((sec) => sec.id)),
                    )
                  }
                  data-testid="button-toggle-all-sections"
                  className="tap-target-y text-[12px] font-semibold px-2 rounded-lg transition-colors hover:bg-[var(--fg-05)]"
                  style={{ color: "var(--brand-text)", minHeight: 32 }}
                >
                  {allOpen ? "Collapse all" : "Expand all"}
                </button>
              </div>
            );
          })()}
          <OverviewSection
            cardData={cardData}
            whyOpen={whyOpen}
            setWhyOpen={setWhyOpen}
            notForOpen={notForOpen}
            setNotForOpen={setNotForOpen}
          />
          {sectionAvailable("why") && <WhySection cardData={cardData} />}
          {sectionAvailable("method") && (
            <MethodSection cardData={cardData} {...copyProps} />
          )}
          <PhrasesSection
            cardId={cardId}
            cardData={cardData}
            expandedPhraseGroup={expandedPhraseGroup}
            setExpandedPhraseGroup={setExpandedPhraseGroup}
            {...copyProps}
          />
          <LadderSection cardId={cardId} cardData={cardData} {...copyProps} />
          <InPracticeSection cardData={cardData} />
          <TreeSection cardData={cardData} {...copyProps} />
          <ScenariosSection
            cardId={cardId}
            cardData={cardData}
            {...copyProps}
          />
          {sectionAvailable("chains") && <ChainsSection cardData={cardData} />}
          <CalibrationSection cardData={cardData} />
          {sectionAvailable("mistakes") && (
            <MistakesSection cardData={cardData} {...copyProps} />
          )}
          {sectionAvailable("recovery") && (
            <RecoverySection
              cardId={cardId}
              cardData={cardData}
              {...copyProps}
            />
          )}
          <PracticeSection cardData={cardData} />
          <ChecklistSection
            cardData={cardData}
            checkedItems={checkedItems}
            toggleCheck={toggleCheck}
          />
          {sectionAvailable("related") && (
            <RelatedSection cardData={cardData} setLocation={setLocation} />
          )}
          {sectionAvailable("resources") && (
            <ResourcesSection cardData={cardData} />
          )}

          <PrevNextNav
            prevCard={prevCard}
            nextCard={nextCard}
            setLocation={setLocation}
          />
        </div>
      </div>

      {pdfOpen && (
        <PdfViewerModal
          cardId={cardId}
          cardData={cardData}
          sheetRef={pdfSheetRef}
          pdfError={pdfError}
          pdfLoaded={pdfLoaded}
          onClose={() => setPdfOpen(false)}
          onLoad={onPdfLoad}
          onError={onPdfError}
        />
      )}
    </AccordionContext.Provider>
  );
}
