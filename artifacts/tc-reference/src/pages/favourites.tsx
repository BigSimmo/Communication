import { useState } from "react";
import { useLocation } from "wouter";
import { Heart, Copy, Check, Search, ChevronRight, X } from "lucide-react";
import { useFavourites } from "@/lib/favourites-context";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

const CARD_META: Record<string, { title: string; category: string }> = {};
for (const [cat, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const c of cards) {
    CARD_META[c.id] = { title: c.title, category: cat };
  }
}

export default function Favourites() {
  const { state, toggleCard, togglePhrase } = useFavourites();
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { copied: copiedPhrase, copy: handleCopy } = useCopyFeedback();

  const q = searchQuery.toLowerCase().trim();

  const favCards = state.cardIds.filter((id) => {
    if (!q) return true;
    const meta = CARD_META[id];
    return (
      meta &&
      (id.toLowerCase().includes(q) || meta.title.toLowerCase().includes(q))
    );
  });

  const favPhrases = q
    ? state.phrases.filter(
        (p) =>
          p.text.toLowerCase().includes(q) ||
          p.cardId.toLowerCase().includes(q) ||
          (CARD_META[p.cardId]?.title ?? "").toLowerCase().includes(q) ||
          p.groupLabel.toLowerCase().includes(q),
      )
    : state.phrases;

  const phrasesByCard: Record<string, typeof state.phrases> = {};
  for (const p of favPhrases) {
    if (!phrasesByCard[p.cardId]) phrasesByCard[p.cardId] = [];
    phrasesByCard[p.cardId].push(p);
  }

  const totalSaved = state.cardIds.length + state.phrases.length;
  const hasResults =
    favCards.length > 0 || Object.keys(phrasesByCard).length > 0;

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">
      {/* ── Page header ── */}
      <div className="px-4 md:px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--brand) 18%, transparent) 0%, color-mix(in srgb, var(--brand) 8%, transparent) 100%)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
            }}
          >
            <Heart
              className="w-4 h-4"
              style={{ color: "var(--brand-text)" }}
              fill="var(--brand-text)"
              aria-hidden="true"
            />
          </div>
          <h1
            className="text-[20px] font-bold leading-tight"
            style={{ color: "var(--fg-90)" }}
          >
            Favourites
          </h1>
        </div>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--fg-55)" }}
        >
          Quick access to your saved technique cards and favourite phrases.
        </p>
      </div>

      {/* Sticky search bar */}
      <div
        className="sticky z-10 px-4 md:px-6 py-3"
        style={{
          top: "var(--app-header-height, 56px)",
          background: "var(--surface-header)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--fg-05)",
        }}
      >
        <div className="relative">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{
              color: "color-mix(in srgb, var(--brand-text) 50%, transparent)",
            }}
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your favourites…"
            aria-label="Search favourites"
            className="w-full text-[13px] pl-10 pr-10 py-2.5 rounded-xl outline-none transition-colors"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
              color: "var(--fg-85)",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full"
            >
              <span
                className="w-5 h-5 flex items-center justify-center rounded-full"
                style={{ background: "var(--fg-08)" }}
              >
                <X
                  className="w-3 h-3"
                  style={{ color: "var(--fg-50)" }}
                  aria-hidden="true"
                />
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="px-4 md:px-6 pb-12 pt-5 space-y-8">
        {/* Empty state — nothing saved at all */}
        {totalSaved === 0 && (
          <div className="flex flex-col items-center py-16 px-4 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "color-mix(in srgb, var(--brand) 8%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
              }}
            >
              <Heart
                className="w-6 h-6"
                style={{
                  color:
                    "color-mix(in srgb, var(--brand-text) 50%, transparent)",
                }}
              />
            </div>
            <p
              className="text-[16px] font-semibold mb-2"
              style={{ color: "var(--fg-65)" }}
            >
              No favourites yet
            </p>
            <p
              className="text-[13px] leading-relaxed max-w-[260px] mb-6"
              style={{ color: "var(--fg-55)" }}
            >
              Tap the heart on any technique card or phrase to save it here for
              quick access.
            </p>
            <button
              onClick={() => setLocation("/")}
              className="text-[13px] font-semibold px-5 min-h-11 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              Browse the Library
            </button>
          </div>
        )}

        {/* No search results */}
        {totalSaved > 0 && !hasResults && q && (
          <div className="flex flex-col items-center py-12 text-center">
            <p
              className="text-[14px] font-semibold mb-1.5"
              style={{ color: "var(--fg-45)" }}
            >
              No matches for "{searchQuery}"
            </p>
            <p className="text-[12px]" style={{ color: "var(--fg-55)" }}>
              Try a card name, ID, or phrase keyword.
            </p>
          </div>
        )}

        {/* Techniques section */}
        {totalSaved > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2
                className="text-[11px] font-semibold tracking-widest uppercase"
                style={{ color: "var(--fg-55)" }}
              >
                Techniques
              </h2>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background:
                    "color-mix(in srgb, var(--brand) 12%, transparent)",
                  color: "var(--brand-text)",
                }}
              >
                {state.cardIds.length}
              </span>
            </div>
            {favCards.length === 0 ? (
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "var(--fg-02)",
                  border: "1px solid var(--fg-05)",
                }}
              >
                <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                  {q
                    ? "No matching techniques."
                    : "Tap the heart on any card to save it here."}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {favCards.map((id) => {
                  const meta = CARD_META[id];
                  if (!meta) return null;
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--brand) 8%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
                        minHeight: 64,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                        style={{
                          background: "var(--brand)",
                          color: "var(--brand-contrast)",
                        }}
                      >
                        {id.slice(2)}
                      </div>
                      <button
                        className="flex-1 text-left min-w-0"
                        onClick={() => setLocation(`/card/${id}`)}
                        aria-label={`Open ${meta.title}`}
                      >
                        <p
                          className="text-[14px] font-semibold leading-tight"
                          style={{ color: "var(--fg-90)" }}
                        >
                          {meta.title}
                        </p>
                        <p
                          className="text-[11px] mt-0.5"
                          style={{
                            color:
                              "color-mix(in srgb, var(--brand-text) 70%, transparent)",
                          }}
                        >
                          {id} · {meta.category}
                        </p>
                      </button>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => setLocation(`/card/${id}`)}
                          aria-label={`Open ${id}`}
                          className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                          style={{ background: "var(--fg-05)" }}
                        >
                          <ChevronRight
                            className="w-4 h-4"
                            style={{ color: "var(--fg-40)" }}
                          />
                        </button>
                        <button
                          onClick={() => toggleCard(id)}
                          aria-label="Remove from favourites"
                          className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                          style={{
                            background:
                              "color-mix(in srgb, var(--brand) 12%, transparent)",
                          }}
                        >
                          <Heart
                            className="w-4 h-4"
                            style={{ color: "var(--brand-text)" }}
                            fill="var(--brand-text)"
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Phrases section */}
        {totalSaved > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2
                className="text-[11px] font-semibold tracking-widest uppercase"
                style={{ color: "var(--fg-55)" }}
              >
                Phrases
              </h2>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent-blue) 12%, transparent)",
                  color: "var(--accent-blue)",
                }}
              >
                {state.phrases.length}
              </span>
            </div>
            {Object.keys(phrasesByCard).length === 0 ? (
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "var(--fg-02)",
                  border: "1px solid var(--fg-05)",
                }}
              >
                <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                  {q
                    ? "No matching phrases."
                    : "Tap the heart next to any phrase to save it here."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(phrasesByCard).map(([cardId, phrases]) => {
                  const meta = CARD_META[cardId];
                  return (
                    <div
                      key={cardId}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: "var(--fg-02)",
                        border: "1px solid var(--fg-06)",
                      }}
                    >
                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 min-h-12 text-left transition-colors"
                        onClick={() => setLocation(`/card/${cardId}`)}
                        aria-label={`Open ${meta?.title ?? cardId}`}
                        style={{ borderBottom: "1px solid var(--fg-05)" }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                          style={{
                            background: "var(--brand)",
                            color: "var(--brand-contrast)",
                          }}
                        >
                          {cardId.slice(2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-[12px] font-bold truncate"
                            style={{ color: "var(--fg-80)" }}
                          >
                            {meta?.title ?? cardId}
                          </p>
                          {phrases[0]?.groupLabel && (
                            <p
                              className="text-[11px] mt-0.5"
                              style={{ color: "var(--fg-55)" }}
                            >
                              {phrases.length} phrase
                              {phrases.length !== 1 ? "s" : ""}
                            </p>
                          )}
                        </div>
                        <ChevronRight
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: "var(--fg-45)" }}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        className="divide-y"
                        style={{ borderColor: "var(--fg-04)" }}
                      >
                        {phrases.map((p) => (
                          <div
                            // Rows are removable — index keys would misassociate
                            // DOM/state after a deletion; (cardId, text) is the
                            // favourite's identity
                            key={`${p.cardId}:${p.text}`}
                            onClick={() => handleCopy(p.text)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              // Only respond when the row itself is focused — let the
                              // nested favourite button handle its own keys
                              if (e.target !== e.currentTarget) return;
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                handleCopy(p.text);
                              }
                            }}
                            aria-label={`Copy: ${p.text}`}
                            className="w-full flex items-center gap-3 px-4 py-3 cursor-pointer transition-all"
                            style={{
                              minHeight: 52,
                              background:
                                copiedPhrase === p.text
                                  ? "color-mix(in srgb, var(--brand) 7%, transparent)"
                                  : "transparent",
                            }}
                          >
                            <p
                              className="flex-1 text-[13px] leading-snug"
                              style={{
                                color:
                                  copiedPhrase === p.text
                                    ? "var(--brand-text)"
                                    : "var(--fg-75)",
                              }}
                            >
                              {p.text}
                            </p>
                            <div
                              className="flex items-center gap-1.5 flex-shrink-0"
                              role="presentation"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {copiedPhrase === p.text ? (
                                <Check
                                  className="w-3.5 h-3.5"
                                  style={{ color: "var(--brand-text)" }}
                                />
                              ) : (
                                <Copy
                                  className="w-3.5 h-3.5"
                                  style={{ color: "var(--fg-45)" }}
                                  aria-hidden="true"
                                />
                              )}
                              <button
                                onClick={() => togglePhrase(p)}
                                aria-label="Remove from favourites"
                                className="tap-target w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                                style={{
                                  background:
                                    "color-mix(in srgb, var(--brand) 10%, transparent)",
                                }}
                              >
                                <Heart
                                  className="w-3.5 h-3.5"
                                  style={{ color: "var(--brand-text)" }}
                                  fill="var(--brand-text)"
                                />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
