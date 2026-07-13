import { useState, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { Check, Copy, ChevronRight, Zap, ChevronLeft, ChevronDown, Heart, FileText, X, ExternalLink } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { CARD_DATA } from "@/lib/cards";
import { useFavourites } from "@/lib/favourites-context";
import { usePdf } from "@/lib/pdf-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { impactStyleFor } from "@/lib/design-tokens";

const CARD_TITLE_MAP: Record<string, string> = {};
for (const cards of Object.values(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_TITLE_MAP[c.id] = c.title;
}

// Cards without a bundled PDF return null — the nav PDF button and viewer
// only appear when a real document exists.
function getCardPdfUrl(cardId: string): string | null {
  const localPath = CARD_DATA[cardId]?.pdfUrl;
  return localPath ? `${import.meta.env.BASE_URL}${localPath}` : null;
}

type CardSection = "overview" | "why" | "method" | "phrases" | "ladder" | "inpractice" | "tree" | "scenarios" | "chains" | "calibration" | "mistakes" | "recovery" | "practice" | "checklist" | "related" | "resources";

const SECTIONS: { id: CardSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why It Works" },
  { id: "method", label: "The Method" },
  { id: "phrases", label: "Phrases" },
  { id: "ladder", label: "Ladder" },
  { id: "inpractice", label: "In Practice" },
  { id: "tree", label: "Decision Tree" },
  { id: "scenarios", label: "Scenarios" },
  { id: "chains", label: "Chains" },
  { id: "calibration", label: "Calibration" },
  { id: "mistakes", label: "Mistakes" },
  { id: "recovery", label: "Recovery" },
  { id: "practice", label: "Practice" },
  { id: "checklist", label: "Checklist" },
  { id: "related", label: "Related" },
  { id: "resources", label: "Downloads" },
];

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
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);
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

  // Optional sections only render (and only show a nav pill) when the card has data for them.
  const sectionAvailable = (id: CardSection): boolean => {
    switch (id) {
      case "why": return !!cardData.influencePayoff;
      case "method": return !!(cardData.method && cardData.method.length > 0);
      case "chains": return !!(cardData.chains && cardData.chains.length > 0);
      case "mistakes": return !!(cardData.commonMistakes && cardData.commonMistakes.length > 0);
      case "recovery": return !!(cardData.recoveryPhrases && cardData.recoveryPhrases.length > 0);
      case "related": return !!(cardData.relatedTechniques && cardData.relatedTechniques.length > 0);
      case "resources": return !!(cardData.resources && cardData.resources.length > 0);
      default: return true;
    }
  };

  const handleCopy = async (phrase: string) => {
    await copyToClipboard(phrase);
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 1600);
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

  // ── Accordion section wrapper ─────────────────────────────────────────────
  const SectionAccordion = ({
    id, label, color, subtitle, children,
  }: {
    id: CardSection; label: string; color: string; subtitle?: string; children: React.ReactNode;
  }) => {
    const open = openSections.has(id);
    return (
      <div
        id={`section-${id}`}
        className="scroll-mt-44 rounded-2xl overflow-hidden"
        role="tabpanel"
        aria-labelledby={`nav-${id}`}
        style={{ background: "var(--fg-02)", border: "1px solid var(--fg-05)" }}
      >
        <h2 className="m-0">
          <button
            onClick={() => toggleSection(id)}
            aria-expanded={open}
            className="w-full flex items-center gap-3.5 px-5 py-4 text-left transition-colors active:bg-[var(--fg-03)]"
            style={{ minHeight: 56 }}
          >
            <div className="w-1 h-[18px] rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <span className="block text-[14px] font-bold text-foreground/85">{label}</span>
              {subtitle && (
                <span className="block text-[11px] mt-0.5 leading-snug font-normal" style={{ color: "var(--fg-55)" }}>{subtitle}</span>
              )}
            </div>
            <ChevronDown
              className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
              style={{ color: "var(--fg-35)", transform: open ? "rotate(180deg)" : "none" }}
              aria-hidden="true"
            />
          </button>
        </h2>
        {open && (
          <div className="px-5 pb-5 pt-4" style={{ borderTop: "1px solid var(--fg-04)" }}>
            {children}
          </div>
        )}
      </div>
    );
  };

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
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.22)",
            color: "#f59e0b",
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
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.18)",
          }}
        >
          <span className="text-[20px] font-bold" style={{ color: "rgba(245,158,11,0.6)" }}>
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
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.22)",
            color: "#f59e0b",
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
      <button
        onClick={() => { window.scrollTo(0, 0); setLocation(`/card/${prevCard.id}`); }}
        aria-label={`Previous card: ${prevCard.id}`}
        data-testid="button-prev-float"
        className="fixed z-30 left-0 md:left-[200px] flex items-center justify-center transition-all active:scale-95"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 72,
          background: "var(--surface-float)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "0 12px 12px 0",
          border: "1px solid var(--fg-08)",
          borderLeft: "none",
        }}
      >
        <ChevronLeft className="w-4 h-4" style={{ color: "var(--fg-70)" }} />
      </button>
      <button
        onClick={() => { window.scrollTo(0, 0); setLocation(`/card/${nextCard.id}`); }}
        aria-label={`Next card: ${nextCard.id}`}
        data-testid="button-next-float"
        className="fixed z-30 flex items-center justify-center transition-all active:scale-95"
        style={{
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 72,
          background: "var(--surface-float)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px 0 0 12px",
          border: "1px solid var(--fg-08)",
          borderRight: "none",
        }}
      >
        <ChevronRight className="w-4 h-4" style={{ color: "var(--fg-70)" }} />
      </button>
      <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">

      {/* ── Section nav (sticky just below the shared header) ── */}
      <div
        ref={navRef}
        className="sticky z-10"
        style={{
          top: "var(--app-header-height, 56px)",
          background: "var(--surface-header)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--fg-06)",
        }}
      >
        <div className="flex items-center gap-0">
          <div
            className="flex gap-1.5 py-2 px-4 md:px-6 overflow-x-auto flex-1"
            style={{ scrollbarWidth: "none" }}
            role="tablist"
            aria-label="Card sections"
          >
            {SECTIONS.filter(s => sectionAvailable(s.id)).map((s) => (
              <button
                key={s.id}
                id={`nav-${s.id}`}
                role="tab"
                aria-selected={activeSection === s.id}
                aria-controls={`section-${s.id}`}
                onClick={() => scrollSectionIntoView(s.id)}
                data-testid={`nav-${s.id}`}
                className="text-[11px] font-semibold px-3 rounded-full transition-all flex-shrink-0"
                style={{
                  minHeight: 40,
                  background: activeSection === s.id ? "#f59e0b" : "var(--fg-05)",
                  color: activeSection === s.id ? "#0f1724" : "var(--fg-55)",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content — accordion sections */}
      <div className="px-3 md:px-4 pb-12 pt-2 flex flex-col gap-2">

        {/* ── Overview ── */}
        <SectionAccordion
          id="overview"
          label="Overview"
          color="#f59e0b"
          subtitle="Core formula, quick stats & when not to use"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-4">
            <p className="text-[10px] font-bold tracking-widest text-primary/80 uppercase mb-3">Core Formula</p>
            <div className="flex flex-wrap gap-2 items-center">
              {cardData.overview.coreFormula.map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shadow-sm">{step}</span>
                  {i < arr.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
            <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">Minimum Viable Move</p>
            <p className="text-[14px] leading-relaxed text-foreground/80">
              {cardData.overview.minimumViableMove}
            </p>
          </div>

          {!cardData.influencePayoff && (
            <div
              className="rounded-2xl mb-4 overflow-hidden"
              style={{
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.18)",
              }}
            >
              <button
                onClick={() => setWhyOpen(v => !v)}
                className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
                aria-expanded={whyOpen}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(167,139,250,0.8)" }}>Why It Works</p>
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
                  style={{ color: "rgba(167,139,250,0.6)", transform: whyOpen ? "rotate(180deg)" : "none" }}
                  aria-hidden="true"
                />
              </button>
              {whyOpen && (
                <div className="px-5 pb-4">
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--fg-78)" }}>
                    {cardData.whyItWorks}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2.5 flex-wrap mb-4">
            {([
              ["Impact", cardData.overview.impact, impactStyleFor(cardData.overview.impact).color],
              ["Difficulty", cardData.overview.difficulty, "var(--accent-blue)"],
              ["Misuse risk", cardData.overview.misuse, "#f59e0b"],
            ] as [string, string, string][]).map(([k, v, c]) => (
              <div key={k} className="flex items-center gap-2 rounded-full px-3.5 py-1.5" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                <div className="w-2 h-2 rounded-full" style={{ background: c }} aria-hidden="true" />
                <span className="text-[11px] text-foreground/50">{k}</span>
                <span className="text-[11px] font-semibold text-foreground/90">{v}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
            <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">Best for</p>
            <ul className="space-y-2">
              {cardData.overview.bestFor.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[13px] text-foreground/70 leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.16)",
            }}
          >
            <button
              onClick={() => setNotForOpen(v => !v)}
              className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
              aria-expanded={notForOpen}
            >
              <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(248,113,113,0.8)" }}>When Not to Use</p>
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
                style={{ color: "rgba(248,113,113,0.6)", transform: notForOpen ? "rotate(180deg)" : "none" }}
                aria-hidden="true"
              />
            </button>
            {notForOpen && (
              <div className="px-5 pb-4">
                <ul className="space-y-2">
                  {cardData.notFor.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "rgba(239,68,68,0.5)" }} aria-hidden="true" />
                      <p className="text-[13px] leading-snug" style={{ color: "var(--fg-65)" }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </SectionAccordion>

        {/* ── Why It Works ── */}
        {sectionAvailable("why") && (
          <SectionAccordion
            id="why"
            label="Why It Works"
            color="var(--accent-purple)"
            subtitle="Psychological principle & what it builds"
          >
            <div className="rounded-2xl p-5 mb-4" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(167,139,250,0.85)" }}>What they feel</p>
              <p className="text-[15px] font-semibold leading-relaxed" style={{ color: "var(--fg-90)" }}>"{cardData.influencePayoff!.feeling}"</p>
            </div>

            <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
              <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">The principle</p>
              <p className="text-[14px] leading-relaxed text-foreground/80">{cardData.influencePayoff!.principle}</p>
            </div>

            <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
              <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">What it builds</p>
              <div className="flex flex-wrap gap-2">
                {cardData.influencePayoff!.gains.map((g) => (
                  <span key={g} className="text-[12px] font-medium px-3 py-1.5 rounded-full" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "rgba(167,139,250,0.95)" }}>{g}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-5 mb-4" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.14)" }}>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(248,113,113,0.8)" }}>Why most people fail</p>
              <ul className="space-y-2">
                {cardData.influencePayoff!.whyMostFail.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "rgba(239,68,68,0.5)" }} aria-hidden="true" />
                    <p className="text-[13px] leading-snug" style={{ color: "var(--fg-65)" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {cardData.whatItIsNot && cardData.whatItIsNot.length > 0 && (
              <div className="rounded-2xl p-5" style={{ background: "var(--fg-02)", border: "1px solid var(--fg-04)" }}>
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">What it is not</p>
                <ul className="space-y-2.5">
                  {cardData.whatItIsNot.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "var(--fg-30)" }} aria-hidden="true" />
                      <p className="text-[13px] leading-snug text-foreground/70">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SectionAccordion>
        )}

        {/* ── The Method ── */}
        {sectionAvailable("method") && (
          <SectionAccordion
            id="method"
            label="The Method"
            color="#f59e0b"
            subtitle={`${cardData.method?.length ?? 0}-step execution guide`}
          >
            {cardData.fieldTip && (
              <div className="rounded-2xl p-5 mb-5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(245,158,11,0.85)" }}>Guiding principle</p>
                <p className="text-[15px] font-bold text-foreground/90 mb-1.5 leading-snug">{cardData.fieldTip.headline}</p>
                <p className="text-[13px] leading-relaxed text-foreground/65">{cardData.fieldTip.body}</p>
                {cardData.fieldTip.example && (
                  <div className="mt-3 rounded-xl p-3" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                    <p className="text-[12px] italic text-foreground/60 mb-2">They say {cardData.fieldTip.example}</p>
                    <div className="flex flex-wrap gap-2">
                      {cardData.fieldTip.dont && (
                        <span className="text-[12px] px-3 py-1 rounded-full" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)", color: "rgba(248,113,113,0.9)" }}>Don't: {cardData.fieldTip.dont}</span>
                      )}
                      {cardData.fieldTip.do && (
                        <span className="text-[12px] px-3 py-1 rounded-full" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", color: "rgba(74,222,128,0.95)" }}>Do: {cardData.fieldTip.do}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3 relative pl-7">
              <div className="absolute left-3 top-6 bottom-6 w-px" style={{ background: "var(--fg-08)" }} aria-hidden="true" />
              {cardData.method!.map((m, i) => (
                <div key={m.step} className="relative">
                  <div className="absolute -left-7 top-3 w-6 h-6 rounded-full flex items-center justify-center z-10" style={{ background: "#f59e0b", color: "#0f1724" }} aria-hidden="true">
                    <span className="text-[11px] font-bold">{i + 1}</span>
                  </div>
                  <div className="rounded-2xl p-4 shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b" }}>{m.step}</span>
                      <p className="text-[14px] font-bold text-foreground/90">{m.title}</p>
                    </div>
                    <p className="text-[13px] text-foreground/65 leading-relaxed mb-3">{m.body}</p>
                    {m.examples && m.examples.length > 0 && (
                      <div className="space-y-1.5 rounded-xl p-3" style={{ background: "var(--fg-02)", border: "1px solid var(--fg-04)" }}>
                        {m.examples.map((ex, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <span className="text-[9px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]" style={{ color: "var(--fg-38)" }}>{ex.label}</span>
                            <p className="text-[13px] flex-1" style={{ color: "var(--fg-78)" }}>{ex.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {cardData.liveThreadClues && cardData.liveThreadClues.length > 0 && (
              <div className="rounded-2xl p-5 mt-5" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-1">Live-thread clues</p>
                <p className="text-[12px] text-foreground/50 mb-3">Words that usually mark the thread worth pulling</p>
                <div className="flex flex-wrap gap-2">
                  {cardData.liveThreadClues.map((c) => (
                    <span key={c} className="text-[12px] px-3 py-1.5 rounded-full" style={{ background: "var(--fg-05)", border: "1px solid var(--fg-08)", color: "var(--fg-70)" }}>{c}</span>
                  ))}
                </div>
              </div>
            )}

            {cardData.depthDial && cardData.depthDial.length > 0 && (
              <div className="mt-5">
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-1">The depth dial</p>
                <p className="text-[12px] text-foreground/50 mb-3">Match how deep you go to the level of trust present</p>
                <div className="rounded-2xl overflow-hidden" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
                  {cardData.depthDial.map((row, i) => (
                    <div key={row.depth} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: i < cardData.depthDial!.length - 1 ? "1px solid var(--fg-05)" : "none" }}>
                      <div className="flex-shrink-0 w-[88px]">
                        <p className="text-[13px] font-bold text-foreground/90">{row.depth}</p>
                        <p className="text-[11px] text-foreground/45 leading-tight">{row.useWhen}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(row.phrase)}
                        aria-label={`Copy: ${row.phrase}`}
                        className="flex-1 text-left flex items-center justify-between gap-2 rounded-xl px-3 py-2 transition-all active:scale-[0.98]"
                        style={{ background: copiedPhrase === row.phrase ? "rgba(245,158,11,0.1)" : "var(--fg-03)", border: "1px solid var(--fg-06)" }}
                      >
                        <span className="text-[13px]" style={{ color: copiedPhrase === row.phrase ? "#f59e0b" : "var(--fg-78)" }}>{row.phrase}</span>
                        {copiedPhrase === row.phrase
                          ? <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#f59e0b" }} />
                          : <Copy className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--fg-25)" }} />
                        }
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-foreground/45 mt-3 italic">Most everyday charisma lives in the middle — warm and personal, not overly deep.</p>
              </div>
            )}
          </SectionAccordion>
        )}

        {/* ── Phrase Bank ── */}
        <SectionAccordion
          id="phrases"
          label="Phrase Bank"
          color="var(--accent-blue)"
          subtitle={`${cardData.phraseBank.reduce((a, g) => a + g.phrases.length, 0)} phrases · ${cardData.phraseBank.length} groups`}
        >
          <div className="mb-4">
            <p className="text-[11px] text-foreground/50 mb-2">I am in a...</p>
            <div
              className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5"
              style={{ scrollbarWidth: "none" }}
              role="toolbar"
              aria-label="Filter phrases by situation"
            >
              <button
                onClick={() => setExpandedPhraseGroup(null)}
                aria-pressed={expandedPhraseGroup === null}
                className="flex-shrink-0 text-[11px] font-semibold px-3.5 rounded-full transition-all"
                style={{
                  minHeight: 44,
                  background: expandedPhraseGroup === null ? "#f59e0b" : "var(--fg-06)",
                  color: expandedPhraseGroup === null ? "#0f1724" : "var(--fg-60)",
                }}
              >
                All groups
              </button>
              {cardData.phraseBank.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setExpandedPhraseGroup(expandedPhraseGroup === g.id ? null : g.id)}
                  aria-pressed={expandedPhraseGroup === g.id}
                  className="flex-shrink-0 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
                  style={{
                    minHeight: 44,
                    background: expandedPhraseGroup === g.id ? "#f59e0b" : "var(--fg-06)",
                    color: expandedPhraseGroup === g.id ? "#0f1724" : "var(--fg-60)",
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-[12px] text-foreground/40 mb-3 font-medium">Tap a phrase to copy it</p>

          <div className="space-y-3">
            {cardData.phraseBank.filter((g) => expandedPhraseGroup === null || g.id === expandedPhraseGroup).map((group) => (
              <div key={group.id} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }} data-testid={`phrase-group-${group.id}`}>
                <button
                  onClick={() => setExpandedPhraseGroup(expandedPhraseGroup === group.id ? null : group.id)}
                  aria-expanded={expandedPhraseGroup === group.id}
                  className="w-full flex items-center justify-between px-5 py-4 transition-colors"
                  style={{ minHeight: 60 }}
                >
                  <div className="text-left">
                    <p className="text-[14px] font-bold text-foreground/90">{group.label}</p>
                    <p className="text-[11px] text-foreground/50 mt-1">{group.tag}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-foreground/40 px-2 py-1 rounded-full" style={{ background: "var(--fg-05)" }}>{group.phrases.length}</span>
                    <ChevronRight
                      className="w-4 h-4 text-foreground/40 transition-transform"
                      style={{ transform: expandedPhraseGroup === group.id ? "rotate(90deg)" : "none" }}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                {expandedPhraseGroup === group.id && (
                  <div style={{ borderTop: "1px solid var(--fg-05)" }}>
                    {group.phrases.map((phrase, i) => (
                      <div
                        key={i}
                        className="w-full flex items-center justify-between px-5 py-3 text-left"
                        style={{
                          background: copiedPhrase === phrase ? "rgba(245,158,11,0.07)" : "transparent",
                          borderBottom: i < group.phrases.length - 1 ? "1px solid var(--fg-03)" : "none",
                          minHeight: 52,
                        }}
                      >
                        <p
                          className="text-[13px] leading-snug pr-3 flex-1"
                          style={{ color: copiedPhrase === phrase ? "#f59e0b" : "var(--fg-78)" }}
                        >
                          {phrase}
                        </p>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            onClick={() => togglePhrase({ cardId, cardTitle: CARD_TITLE_MAP[cardId] ?? cardId, groupLabel: group.label, text: phrase })}
                            aria-label={isPhrasesFav(cardId, phrase) ? "Remove from favourites" : "Save phrase"}
                            data-testid={`phrase-fav-${group.id}-${i}`}
                            className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                            style={{ background: isPhrasesFav(cardId, phrase) ? "rgba(245,158,11,0.1)" : "transparent" }}
                          >
                            <Heart
                              className="w-3.5 h-3.5"
                              style={{ color: isPhrasesFav(cardId, phrase) ? "#f59e0b" : "var(--fg-20)" }}
                              fill={isPhrasesFav(cardId, phrase) ? "#f59e0b" : "none"}
                            />
                          </button>
                          <button
                            onClick={() => handleCopy(phrase)}
                            aria-label={`Copy: ${phrase}`}
                            data-testid={`phrase-copy-${group.id}-${i}`}
                            className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                          >
                            {copiedPhrase === phrase
                              ? <Check className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
                              : <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-18)" }} />
                            }
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* ── Ladder ── */}
        <SectionAccordion
          id="ladder"
          label="Weak → Better → Best"
          color="var(--accent-orange)"
          subtitle={`${cardData.ladder.length} upgrade examples`}
        >
          <div className="space-y-4">
            {cardData.ladder.map((row, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm flex flex-col" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
                <div className="flex" style={{ borderBottom: "1px solid var(--fg-05)" }}>
                  <div className="flex-1 p-4 bg-red-500/5" style={{ borderRight: "1px solid var(--fg-05)" }}>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--accent-red)" }}>Weak</p>
                    <p className="text-[12px] text-foreground/60 leading-snug">{row.weak}</p>
                  </div>
                  <div className="flex-1 p-4 bg-blue-500/5">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--accent-blue)" }}>Better</p>
                    <p className="text-[12px] text-foreground/70 leading-snug">{row.better}</p>
                  </div>
                </div>
                <div className="p-4 bg-green-500/5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--accent-green)" }}>Best</p>
                      <p className="text-[13px] font-medium text-foreground/90 leading-snug">{row.best}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 mt-5">
                      <button
                        onClick={() => togglePhrase({ cardId, cardTitle: CARD_TITLE_MAP[cardId] ?? cardId, groupLabel: "Ladder", text: row.best })}
                        aria-label={isPhrasesFav(cardId, row.best) ? "Remove from favourites" : "Save phrase"}
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                        style={{ background: isPhrasesFav(cardId, row.best) ? "rgba(245,158,11,0.1)" : "transparent" }}
                      >
                        <Heart
                          className="w-3.5 h-3.5"
                          style={{ color: isPhrasesFav(cardId, row.best) ? "#f59e0b" : "var(--fg-25)" }}
                          fill={isPhrasesFav(cardId, row.best) ? "#f59e0b" : "none"}
                        />
                      </button>
                      <button
                        onClick={() => handleCopy(row.best)}
                        aria-label={`Copy: ${row.best}`}
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                      >
                        {copiedPhrase === row.best
                          ? <Check className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
                          : <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-25)" }} />
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* ── In Practice ── */}
        <SectionAccordion
          id="inpractice"
          label="In Practice"
          color="var(--accent-green)"
          subtitle="Without vs. with — see the difference"
        >
          <div className="space-y-3">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(239,68,68,0.18)" }}
            >
              <div
                className="px-4 py-2.5"
                style={{ background: "rgba(239,68,68,0.08)" }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(248,113,113,0.85)" }}>Without this technique</p>
              </div>
              <div
                className="px-4 pb-4 pt-3 space-y-2"
                style={{ background: "rgba(239,68,68,0.04)" }}
              >
                {cardData.example.without.map((line, i) => (
                  <p key={i} className="text-[13px] leading-relaxed" style={{ color: "var(--fg-65)" }}>{line}</p>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(34,197,94,0.18)" }}
            >
              <div
                className="px-4 py-2.5"
                style={{ background: "rgba(34,197,94,0.08)" }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(74,222,128,0.85)" }}>With this technique</p>
              </div>
              <div
                className="px-4 pb-4 pt-3 space-y-2"
                style={{ background: "rgba(34,197,94,0.04)" }}
              >
                {cardData.example.with.map((line, i) => (
                  <p key={i} className="text-[13px] leading-relaxed" style={{ color: "var(--fg-78)" }}>{line}</p>
                ))}
              </div>
            </div>

            {cardData.example.note && (
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(245,158,11,0.06)",
                  border: "1px solid rgba(245,158,11,0.14)",
                }}
              >
                <p className="text-[12px] italic" style={{ color: "rgba(245,158,11,0.7)" }}>{cardData.example.note}</p>
              </div>
            )}
          </div>
        </SectionAccordion>

        {/* ── Decision Tree ── */}
        <SectionAccordion
          id="tree"
          label="Decision Tree"
          color="var(--accent-purple)"
          subtitle={`${cardData.decisionTree.length} situation → action paths`}
        >
          <div className="space-y-3 relative pl-6">
            <div className="absolute left-2.5 top-6 bottom-6 w-px" style={{ background: "var(--fg-08)" }} aria-hidden="true" />
            {cardData.decisionTree.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-background border border-primary/40 flex items-center justify-center z-10" aria-hidden="true">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="rounded-2xl p-4 shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                  <p className="text-[14px] font-bold text-foreground/90 mb-1.5">{item.condition}</p>
                  <p className="text-[13px] text-foreground/60 mb-3 leading-snug">{item.action}</p>
                  {item.phrase && (
                    <button
                      onClick={() => handleCopy(item.phrase)}
                      aria-label={`Copy: ${item.phrase}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full border transition-all"
                      style={{
                        background: copiedPhrase === item.phrase ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.06)",
                        border: copiedPhrase === item.phrase ? "1px solid rgba(245,158,11,0.35)" : "1px solid rgba(245,158,11,0.15)",
                        color: "#f59e0b",
                        minHeight: 44,
                      }}
                    >
                      {copiedPhrase === item.phrase && <Check className="w-3.5 h-3.5" />}
                      "{item.phrase}"
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* ── Scenarios ── */}
        <SectionAccordion
          id="scenarios"
          label="Scenario Playbook"
          color="var(--accent-teal)"
          subtitle={`${cardData.scenarios.length} real-world entries`}
        >
          <div className="space-y-3">
            {cardData.scenarios.map((s, i) => (
              <div key={i} className="rounded-2xl p-5 shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                <p className="text-[14px] font-bold text-foreground/90 mb-1.5">{s.situation}</p>
                <p className="text-[13px] text-foreground/60 mb-3 italic">"{s.move}"</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => handleCopy(s.phrase)}
                    aria-label={`Copy: ${s.phrase}`}
                    className="inline-flex items-center gap-2 text-[12px] font-medium px-4 py-2 rounded-full border transition-all"
                    style={{
                      background: copiedPhrase === s.phrase ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.08)",
                      border: copiedPhrase === s.phrase ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(245,158,11,0.18)",
                      color: "#f59e0b",
                      minHeight: 44,
                    }}
                  >
                    {copiedPhrase === s.phrase ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="truncate max-w-[220px]">{s.phrase}</span>
                  </button>
                  <button
                    onClick={() => togglePhrase({ cardId, cardTitle: CARD_TITLE_MAP[cardId] ?? cardId, groupLabel: "Scenario", text: s.phrase })}
                    aria-label={isPhrasesFav(cardId, s.phrase) ? "Remove from favourites" : "Save phrase"}
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                    style={{ background: isPhrasesFav(cardId, s.phrase) ? "rgba(245,158,11,0.1)" : "var(--fg-05)" }}
                  >
                    <Heart
                      className="w-4 h-4"
                      style={{ color: isPhrasesFav(cardId, s.phrase) ? "#f59e0b" : "var(--fg-30)" }}
                      fill={isPhrasesFav(cardId, s.phrase) ? "#f59e0b" : "none"}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* ── Chains ── */}
        {sectionAvailable("chains") && (
          <SectionAccordion
            id="chains"
            label="Technique Chains"
            color="var(--accent-indigo)"
            subtitle="Combine this move into longer sequences"
          >
            <div className="space-y-4">
              {cardData.chains!.map((chain) => (
                <div key={chain.label} className="rounded-2xl p-5 shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
                  <p className="text-[14px] font-bold text-foreground/90 mb-2">{chain.label}</p>
                  <p className="text-[12px] leading-relaxed mb-4" style={{ color: "rgba(129,140,248,0.95)" }}>{chain.sequence}</p>
                  <div className="space-y-2.5 relative pl-5">
                    <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "var(--fg-08)" }} aria-hidden="true" />
                    {chain.example.map((line, j) => (
                      <div key={j} className="relative">
                        <div className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full" style={{ background: "rgba(129,140,248,0.5)" }} aria-hidden="true" />
                        <p className="text-[13px] leading-snug text-foreground/75">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionAccordion>
        )}

        {/* ── Calibration ── */}
        <SectionAccordion
          id="calibration"
          label="Calibration"
          color="var(--accent-rose)"
          subtitle="Is it working? When to adjust"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5" style={{ color: "var(--accent-green)" }} aria-hidden="true" />
                <p className="text-[14px] font-bold uppercase tracking-wide" style={{ color: "var(--accent-green)" }}>It is working if...</p>
              </div>
              <ul className="space-y-3">
                {cardData.calibration.working.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                    <span className="mt-0.5" style={{ color: "var(--accent-green)", opacity: 0.5 }} aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5" style={{ color: "var(--accent-red)" }} aria-hidden="true" />
                <p className="text-[14px] font-bold uppercase tracking-wide" style={{ color: "var(--accent-red)" }}>Adjust if...</p>
              </div>
              <ul className="space-y-3">
                {cardData.calibration.adjust.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                    <span className="mt-0.5" style={{ color: "var(--accent-red)", opacity: 0.5 }} aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionAccordion>

        {/* ── Common Mistakes ── */}
        {sectionAvailable("mistakes") && (
          <SectionAccordion
            id="mistakes"
            label="Common Mistakes"
            color="var(--accent-red)"
            subtitle={`${cardData.commonMistakes?.length ?? 0} pitfalls + fixes`}
          >
            <div className="space-y-3">
              {cardData.commonMistakes!.map((m) => (
                <div key={m.mistake} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
                  <div className="px-4 py-3" style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid var(--fg-05)" }}>
                    <p className="text-[13px] font-bold text-foreground/90">{m.mistake}</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[9px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]" style={{ color: "rgba(248,113,113,0.85)" }}>Sounds like</span>
                      <p className="text-[13px] flex-1 italic" style={{ color: "var(--fg-60)" }}>{m.soundsLike}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[9px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]" style={{ color: "rgba(74,222,128,0.9)" }}>Better</span>
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <p className="text-[13px]" style={{ color: "var(--fg-85)" }}>{m.better}</p>
                        <button
                          onClick={() => handleCopy(m.better)}
                          aria-label={`Copy: ${m.better}`}
                          className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                        >
                          {copiedPhrase === m.better
                            ? <Check className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
                            : <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-20)" }} />
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionAccordion>
        )}

        {/* ── Recovery ── */}
        {sectionAvailable("recovery") && (
          <SectionAccordion
            id="recovery"
            label="Recovery"
            color="var(--accent-emerald)"
            subtitle="When you've pushed too far — reset scripts"
          >
            {cardData.bestRecoveryLine && (
              <div className="rounded-2xl p-5 mb-4" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(52,211,153,0.9)" }}>Best all-purpose line</p>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[14px] font-semibold leading-relaxed text-foreground/90 flex-1">{cardData.bestRecoveryLine}</p>
                  <button
                    onClick={() => handleCopy(cardData.bestRecoveryLine!)}
                    aria-label={`Copy: ${cardData.bestRecoveryLine}`}
                    className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                    style={{ background: "rgba(52,211,153,0.12)" }}
                  >
                    {copiedPhrase === cardData.bestRecoveryLine
                      ? <Check className="w-4 h-4" style={{ color: "#34d399" }} />
                      : <Copy className="w-4 h-4" style={{ color: "rgba(52,211,153,0.8)" }} />
                    }
                  </button>
                </div>
              </div>
            )}

            <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
              {cardData.recoveryPhrases!.map((phrase, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-between px-5 py-3"
                  style={{ background: copiedPhrase === phrase ? "rgba(245,158,11,0.07)" : "transparent", borderBottom: i < cardData.recoveryPhrases!.length - 1 ? "1px solid var(--fg-04)" : "none", minHeight: 52 }}
                >
                  <p className="text-[13px] leading-snug pr-3 flex-1" style={{ color: copiedPhrase === phrase ? "#f59e0b" : "var(--fg-78)" }}>{phrase}</p>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => togglePhrase({ cardId, cardTitle: CARD_TITLE_MAP[cardId] ?? cardId, groupLabel: "Recovery", text: phrase })}
                      aria-label={isPhrasesFav(cardId, phrase) ? "Remove from favourites" : "Save phrase"}
                      className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                      style={{ background: isPhrasesFav(cardId, phrase) ? "rgba(245,158,11,0.1)" : "transparent" }}
                    >
                      <Heart
                        className="w-3.5 h-3.5"
                        style={{ color: isPhrasesFav(cardId, phrase) ? "#f59e0b" : "var(--fg-20)" }}
                        fill={isPhrasesFav(cardId, phrase) ? "#f59e0b" : "none"}
                      />
                    </button>
                    <button
                      onClick={() => handleCopy(phrase)}
                      aria-label={`Copy: ${phrase}`}
                      className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                    >
                      {copiedPhrase === phrase
                        ? <Check className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
                        : <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-18)" }} />
                      }
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SectionAccordion>
        )}

        {/* ── Practice Protocol ── */}
        <SectionAccordion
          id="practice"
          label="Practice Protocol"
          color="var(--accent-sky)"
          subtitle={`${cardData.drill.length}-day program`}
        >
          <div className="space-y-3">
            {cardData.drill.map((d, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-2xl shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--fg-05)", border: "1px solid var(--fg-10)" }}
                  aria-label={d.day}
                >
                  <span className="text-[11px] font-bold text-foreground/50">{d.day}</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-foreground/90 mb-1">{d.title}</p>
                  <p className="text-[13px] text-foreground/60 leading-relaxed">{d.task}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* ── After-Action Checklist ── */}
        <SectionAccordion
          id="checklist"
          label="After-Action Checklist"
          color="var(--accent-emerald)"
          subtitle={`${checkedItems.size} / ${cardData.checklist.length} items checked`}
        >
          <div
            className="mb-4 rounded-full p-1.5 flex items-center gap-3"
            style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}
            role="progressbar"
            aria-valuenow={checkedItems.size}
            aria-valuemin={0}
            aria-valuemax={cardData.checklist.length}
            aria-label={`${checkedItems.size} of ${cardData.checklist.length} items checked`}
          >
            <div className="flex-1 h-2 rounded-full overflow-hidden ml-2" style={{ background: "var(--fg-05)" }}>
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(checkedItems.size / cardData.checklist.length) * 100}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-primary px-2">{checkedItems.size} / {cardData.checklist.length}</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
            {cardData.checklist.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleCheck(i)}
                aria-checked={checkedItems.has(i)}
                role="checkbox"
                data-testid={`checklist-item-${i}`}
                className="w-full flex gap-4 p-4 text-left transition-all"
                style={{
                  background: checkedItems.has(i) ? "rgba(245,158,11,0.04)" : "transparent",
                  borderBottom: i < cardData.checklist.length - 1 ? "1px solid var(--fg-03)" : "none",
                  minHeight: 52,
                }}
                onMouseEnter={(e) => {
                  if (!checkedItems.has(i))
                    (e.currentTarget as HTMLElement).style.background = "var(--fg-02)";
                }}
                onMouseLeave={(e) => {
                  if (!checkedItems.has(i))
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                  style={{
                    background: checkedItems.has(i) ? "#f59e0b" : "var(--fg-05)",
                    border: checkedItems.has(i) ? "none" : "1px solid var(--fg-10)",
                  }}
                  aria-hidden="true"
                >
                  {checkedItems.has(i) && <Check className="w-3.5 h-3.5" style={{ color: "#0f1724" }} />}
                </div>
                <span
                  className="text-[13px] leading-snug transition-colors"
                  style={{
                    color: checkedItems.has(i) ? "var(--fg-35)" : "var(--fg-78)",
                    textDecoration: checkedItems.has(i) ? "line-through" : "none",
                  }}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>
        </SectionAccordion>

        {/* ── Related Techniques ── */}
        {sectionAvailable("related") && (
          <SectionAccordion
            id="related"
            label="Related Techniques"
            color="var(--accent-indigo)"
            subtitle={`${cardData.relatedTechniques?.length ?? 0} paired techniques`}
          >
            <div className="space-y-2">
              {cardData.relatedTechniques!.map((rt) => (
                <button
                  key={rt.id}
                  onClick={() => { window.scrollTo(0, 0); setLocation(`/card/${rt.id}`); }}
                  data-testid={`related-${rt.id}`}
                  className="w-full text-left flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98]"
                  style={{ background: "var(--fg-03)", border: "1px solid var(--fg-07)" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--accent-indigo) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-indigo) 20%, transparent)" }} aria-hidden="true">
                    <span className="text-[11px] font-bold" style={{ color: "var(--accent-indigo)" }}>{rt.id.replace(/^TC/, "")}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-foreground/90">{CARD_TITLE_MAP[rt.id] ?? rt.id}</p>
                    <p className="text-[12px] mt-0.5 leading-snug" style={{ color: "var(--fg-50)" }}>{rt.reason}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: "var(--fg-30)" }} aria-hidden="true" />
                </button>
              ))}
            </div>
          </SectionAccordion>
        )}

        {/* ── Downloads ── */}
        {sectionAvailable("resources") && (
          <SectionAccordion
            id="resources"
            label="Downloads"
            color="var(--accent-purple)"
            subtitle="PDFs & reference files"
          >
            <div className="rounded-2xl px-4 py-3 mb-5 flex items-start gap-3" style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.14)" }}>
              <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(167,139,250,0.65)" }} aria-hidden="true" />
              <p className="text-[12px] leading-relaxed" style={{ color: "var(--fg-55)" }}>
                The visual card PDF can also be viewed in-app via the PDF button in the app navigation.
              </p>
            </div>

            {(["Visual Cards", "Written Guides", "Practice Tools"] as const).map(group => {
              const items = cardData.resources!.filter(r => r.group === group);
              if (items.length === 0) return null;
              const typeStyle: Record<string, { bg: string; color: string }> = {
                pdf:  { bg: "rgba(239,68,68,0.09)",   color: "rgba(248,113,113,0.85)" },
                docx: { bg: "rgba(59,130,246,0.09)",  color: "rgba(96,165,250,0.85)"  },
                png:  { bg: "rgba(16,185,129,0.09)",  color: "rgba(52,211,153,0.85)"  },
                csv:  { bg: "rgba(245,158,11,0.09)",  color: "rgba(245,158,11,0.85)"  },
              };
              return (
                <div key={group} className="mb-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--fg-35)" }}>{group}</p>
                  <div className="space-y-2">
                    {items.map(resource => {
                      const ts = typeStyle[resource.type] ?? typeStyle.pdf;
                      const href = `${import.meta.env.BASE_URL}${resource.href}`;
                      const isDownload = resource.type === "docx" || resource.type === "csv";
                      return (
                        <a
                          key={resource.href}
                          href={href}
                          {...(isDownload ? { download: true } : {})}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98]"
                          style={{ background: "var(--fg-03)", border: "1px solid var(--fg-07)" }}
                        >
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: ts.bg }}
                            aria-hidden="true"
                          >
                            <FileText className="w-4 h-4" style={{ color: ts.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold" style={{ color: "var(--fg-85)" }}>{resource.label}</p>
                            <p className="text-[11px] mt-0.5" style={{ color: "var(--fg-42)" }}>{resource.description}</p>
                          </div>
                          <span
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 ml-1"
                            style={{ background: ts.bg, color: ts.color }}
                          >
                            {resource.type}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </SectionAccordion>
        )}

      </div>

    </div>

      {/* ── PDF Viewer Modal / Bottom Sheet ── */}
      {pdfOpen && pdfUrl && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0"
              style={{ background: "rgba(0,0,0,0.60)", zIndex: "var(--z-modal)" }}
              onClick={() => setPdfOpen(false)}
              aria-hidden="true"
            />
            {/* Sheet */}
            <div
              ref={pdfSheetRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${cardId} Reference PDF`}
              className="pdf-modal flex flex-col"
              style={{
                zIndex: "var(--z-modal)",
                background: "var(--surface-float)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid var(--fg-08)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
                style={{ borderBottom: "1px solid var(--fg-08)" }}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" style={{ color: "#f59e0b" }} />
                  <span className="text-[13px] font-semibold" style={{ color: "var(--fg-70)" }}>
                    {cardId} — Reference PDF
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open PDF in new tab"
                    title="Open PDF in new tab"
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                    style={{ background: "var(--fg-06)" }}
                  >
                    <ExternalLink className="w-4 h-4" style={{ color: "var(--fg-55)" }} />
                  </a>
                  <button
                    ref={pdfCloseRef}
                    onClick={() => setPdfOpen(false)}
                    aria-label="Close PDF viewer"
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                    style={{ background: "var(--fg-06)" }}
                  >
                    <X className="w-4 h-4" style={{ color: "var(--fg-55)" }} />
                  </button>
                </div>
              </div>
              {/* PDF iframe / fallback
                   Detection strategy:
                   • onError  → immediate failure (network error)
                   • 10 s timeout → catches X-Frame-Options / CSP blocks where
                     browsers fire onLoad (or nothing) instead of onError
                   • "Open in new tab" is always visible so users are never stuck */}
              {pdfError ? (
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(239,68,68,0.07)",
                      border: "1px solid rgba(239,68,68,0.16)",
                    }}
                  >
                    <FileText className="w-6 h-6" style={{ color: "rgba(239,68,68,0.5)" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-foreground/80 mb-2">Couldn't display the PDF</p>
                    <p
                      className="text-[13px] leading-relaxed max-w-[300px]"
                      style={{ color: "var(--fg-42)" }}
                    >
                      Your browser blocked the document — this can happen on mobile or when third-party content is restricted.
                    </p>
                  </div>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] font-semibold px-5 rounded-full transition-all active:scale-95"
                    style={{
                      minHeight: 44,
                      background: "rgba(245,158,11,0.12)",
                      border: "1px solid rgba(245,158,11,0.22)",
                      color: "#f59e0b",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in new tab
                  </a>
                </div>
              ) : (
                <>
                  {!pdfLoaded && (
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                      <div
                        className="w-8 h-8 rounded-full border-2 animate-spin"
                        style={{ borderColor: "var(--fg-10)", borderTopColor: "#f59e0b" }}
                        aria-hidden="true"
                      />
                      <p className="text-[13px]" style={{ color: "var(--fg-35)" }}>Loading PDF…</p>
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[12px] font-medium rounded-full px-4 transition-all active:scale-95"
                        style={{
                          minHeight: 36,
                          color: "var(--fg-42)",
                          border: "1px solid var(--fg-08)",
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open in new tab instead
                      </a>
                    </div>
                  )}
                  <iframe
                    src={pdfUrl}
                    className="w-full border-0"
                    title="Technique PDF"
                    style={{ display: pdfLoaded ? "block" : "none", flex: "1 1 auto" }}
                    onLoad={() => {
                      pdfLoadedRef.current = true;
                      setPdfLoaded(true);
                    }}
                    onError={() => setPdfError(true)}
                  />
                </>
              )}
            </div>
          </>
      )}
    </>
  );
}
