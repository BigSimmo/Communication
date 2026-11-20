import { useState, useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { recordRecentCard } from "@/lib/recent-cards";
import { markStartCardOpened } from "@/lib/start-path";
import { useRoute, useLocation } from "wouter";
import { loadCard } from "@/lib/card-loader";
import type { CardData } from "@/lib/card-types";
import { usePdf } from "@/lib/pdf-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useCardTabs } from "@/hooks/use-card-tabs";
import { useCardPdf } from "@/hooks/use-card-pdf";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";
import { useTabBarHidden } from "@/hooks/use-tab-bar-hidden";
import { Button } from "@/components/ui/button";
import { DockBar } from "@/components/ui/dock-bar";
import {
  ALL_CARD_IDS,
  LOADED_CARD_IDS,
  LOADED_CARDS_NAV,
  TAB_SECTIONS,
  isSectionAvailable,
  type CardSection,
  type CardTab,
  type NavCard,
} from "@/components/card-detail/card-sections";
import { bestLine } from "@/components/card-detail/best-line";
import { CardCopyProvider } from "@/components/card-detail/card-ui";
import {
  CardNotFound,
  CardComingSoon,
} from "@/components/card-detail/card-status";
import { CardHeader } from "@/components/card-detail/card-header";
import { CardTabsBar } from "@/components/card-detail/card-tabs-bar";
import { PrevNextNav } from "@/components/card-detail/prev-next-buttons";
import { PdfViewerModal } from "@/components/card-detail/pdf-viewer-modal";
import {
  SkipWhenSection,
  WhenToUseSection,
} from "@/components/card-detail/overview-section";
import { WhySection } from "@/components/card-detail/why-section";
import {
  DepthDialSection,
  FieldTipSection,
  MethodSection,
} from "@/components/card-detail/method-section";
import { SayThisSection } from "@/components/card-detail/phrases-section";
import { LadderSection } from "@/components/card-detail/ladder-section";
import { HearDifferenceSection } from "@/components/card-detail/inpractice-section";
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

const PANEL = "px-4 pt-5 flex flex-col gap-7 min-w-0";

/**
 * The card itself, once its data has loaded: the brief, the three tabs and
 * the Copy dock. Keyed by card id by the page below, so each card opens with
 * its own tab, scroll position and checklist.
 */
function CardView({
  cardId,
  cardData,
  prevCard,
  nextCard,
  setLocation,
}: {
  cardId: string;
  cardData: CardData;
  prevCard: NavCard;
  nextCard: NavCard;
  setLocation: (to: string) => void;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { tab, selectTab, activeSection, goToSection } = useCardTabs({
    cardId,
    navRef,
    sentinelRef,
  });
  const { copied, copy } = useCopyFeedback();
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const tabBarHidden = useTabBarHidden();

  // Publish the tabs bar's height so section scroll-margins match it. It is
  // taller on Learn it, where it carries the jump row.
  useEffect(() => {
    const el = navRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--card-nav-height",
        `${el.offsetHeight}px`,
      );
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const available = (id: CardSection) => isSectionAvailable(cardData, id);
  const jumpSections =
    tab === "learn" ? TAB_SECTIONS.learn.filter(available) : [];

  const toggleCheck = (i: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  // The button pressed leaves the page with its tab, so focus moves to the
  // tab that was opened rather than falling back to the document.
  const advance = (next: CardTab) => {
    selectTab(next);
    requestAnimationFrame(() =>
      document
        .getElementById(`card-tab-${next}`)
        ?.focus({ preventScroll: true }),
    );
  };

  const line = bestLine(cardData);
  const lineCopied = copied !== null && copied === line;

  const panelProps = (id: CardTab) => ({
    id: `card-panel-${id}`,
    role: "tabpanel" as const,
    "aria-labelledby": `card-tab-${id}`,
    hidden: tab !== id,
  });

  const prevNext = (
    <PrevNextNav
      prevCard={prevCard}
      nextCard={nextCard}
      setLocation={setLocation}
    />
  );

  return (
    <CardCopyProvider value={{ copied, copy }}>
      <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">
        <CardHeader
          cardId={cardId}
          cardData={cardData}
          compact={tab !== "use"}
        />
        {/* Marks where the tabs bar sticks, for scroll maths. */}
        <div ref={sentinelRef} className="mt-3" aria-hidden="true" />
        <CardTabsBar
          navRef={navRef}
          tab={tab}
          onTabChange={selectTab}
          jumpSections={jumpSections}
          activeSection={activeSection}
          onJump={goToSection}
        />

        {/* Only the showing tab renders its content. The other panels stay
            in the DOM, empty and hidden, so each tab's aria-controls always
            points at something. */}
        <div {...panelProps("use")}>
          {tab === "use" && (
            <div className={`${PANEL} pb-24 md:pb-12`}>
              <HearDifferenceSection cardData={cardData} />
              <SayThisSection cardId={cardId} cardData={cardData} />
              <DepthDialSection cardData={cardData} />
              <WhenToUseSection cardData={cardData} />
              <SkipWhenSection cardData={cardData} />
              {available("recovery") && (
                <RecoverySection cardId={cardId} cardData={cardData} />
              )}
              <FieldTipSection cardData={cardData} />
              <Button
                className="w-full"
                onClick={() => advance("learn")}
                data-testid="button-next-learn"
              >
                Next: learn why it works
              </Button>
              {prevNext}
            </div>
          )}
        </div>

        <div {...panelProps("learn")}>
          {tab === "learn" && (
            <div className={`${PANEL} pb-12`}>
              <WhySection cardData={cardData} />
              {available("method") && <MethodSection cardData={cardData} />}
              <LadderSection cardId={cardId} cardData={cardData} />
              <TreeSection cardData={cardData} />
              <CalibrationSection cardData={cardData} />
              {available("chains") && <ChainsSection cardData={cardData} />}
              {available("mistakes") && <MistakesSection cardData={cardData} />}
              <ScenariosSection cardId={cardId} cardData={cardData} />
              <Button
                className="w-full"
                onClick={() => advance("practise")}
                data-testid="button-next-practise"
              >
                Next: practise it
              </Button>
              {prevNext}
            </div>
          )}
        </div>

        <div {...panelProps("practise")}>
          {tab === "practise" && (
            <div className={`${PANEL} pb-12`}>
              <PracticeSection
                cardId={cardId}
                cardData={cardData}
                setLocation={setLocation}
              />
              <ChecklistSection
                cardData={cardData}
                checkedItems={checkedItems}
                toggleCheck={toggleCheck}
              />
              {available("related") && (
                <RelatedSection cardData={cardData} setLocation={setLocation} />
              )}
              {available("resources") && (
                <ResourcesSection cardData={cardData} />
              )}
              {prevNext}
            </div>
          )}
        </div>
      </div>

      {/* Phones only: the one thing most people open a card for, in thumb
          reach. It drops into the tab bar's place when that slides away. */}
      {tab === "use" && line && (
        <div className="md:hidden">
          <DockBar aboveTabBar={!tabBarHidden}>
            <Button
              variant="primary"
              className="flex-1 min-w-0"
              onClick={() => copy(line)}
              aria-label={`Copy the best line: ${line}`}
              data-testid="dock-copy-best"
            >
              {lineCopied ? (
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
              ) : (
                <Copy size={18} strokeWidth={2.25} aria-hidden="true" />
              )}
              {lineCopied ? "Copied" : "Copy the best line"}
            </Button>
          </DockBar>
        </div>
      )}

      {/* Not role="status": the page's only status is its loading state. */}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </CardCopyProvider>
  );
}

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
  // A new card starts a fresh load: clear any earlier failure during render.
  const [prevCardId, setPrevCardId] = useState(cardId);
  if (cardId !== prevCardId) {
    setPrevCardId(cardId);
    setLoadFailedCardId(null);
  }
  const cardData = loadedCard?.cardId === cardId ? loadedCard.data : null;

  // Remember successfully opened cards for the Library's "Pick up where you
  // left off" strip.
  useEffect(() => {
    if (!cardData) return;
    recordRecentCard(cardId);
    markStartCardOpened(cardId);
  }, [cardData, cardId]);

  const pdfSheetRef = useRef<HTMLDivElement>(null);
  const { pdfOpen, setPdfOpen, setPdfUrl } = usePdf();
  useFocusTrap(pdfOpen, pdfSheetRef);
  useBodyScrollLock(pdfOpen);

  useEffect(() => {
    if (!isKnownCard || !isLoaded) return;
    let active = true;
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

  // PDF URL publishing, close on card change / Escape, iframe load tracking
  const { pdfError, pdfLoaded, onPdfLoad, onPdfError } = useCardPdf({
    cardId,
    cardData,
    pdfOpen,
    setPdfOpen,
    setPdfUrl,
  });

  // Left/right arrow keys step through cards on keyboard devices. Ignored
  // while typing, with modifiers held, on the card's tabs (where the arrows
  // change tab) or jump row, or when any dialog is open.
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
          'input, textarea, select, [contenteditable="true"], [role="listbox"], [role="tablist"], nav[aria-label="Jump to section"]',
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
        className="w-full max-w-2xl mx-auto px-3 md:px-4 pt-4 flex flex-col gap-2"
        role="status"
        aria-live="polite"
        aria-busy={loadFailedCardId !== cardId}
      >
        {loadFailedCardId === cardId ? (
          <p className="py-24 px-8 text-center">
            Card content is unavailable right now.
          </p>
        ) : (
          <>
            {/* Skeleton in the card's own shape so the page doesn't jump */}
            {[176, 40, 64, 64, 64].map((h, i) => (
              <div
                key={i}
                className={`animate-pulse ${i === 1 ? "rounded-full w-2/3 my-1" : "rounded-2xl"}`}
                style={{ height: h, background: "var(--fg-05)" }}
                aria-hidden="true"
              />
            ))}
            <span className="sr-only">Loading card…</span>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <CardView
        key={cardId}
        cardId={cardId}
        cardData={cardData}
        prevCard={prevCard}
        nextCard={nextCard}
        setLocation={setLocation}
      />

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
    </>
  );
}
