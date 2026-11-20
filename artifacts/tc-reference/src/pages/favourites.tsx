import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Heart,
  Copy,
  Check,
  Search,
  ChevronRight,
  X,
  Settings,
  Share,
} from "lucide-react";
import { useFavourites } from "@/lib/favourites-context";
import type { FavouritePhrase } from "@/lib/favourites-state";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";
import { categoryStyleFor } from "@/lib/design-tokens";
import { SegmentedTabs } from "@/components/ui/segmented-tabs";
import { ListRow } from "@/components/ui/list-row";
import { Button } from "@/components/ui/button";
import { SettingsSheet } from "@/components/settings-sheet";
import { ShareSheet } from "@/components/share-sheet";
import type { ShareItem } from "@/components/share-sheet";

const CARD_META: Record<
  string,
  { title: string; category: string; difficulty: string }
> = {};
for (const [cat, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const c of cards) {
    CARD_META[c.id] = {
      title: c.title,
      category: cat,
      difficulty: c.difficulty,
    };
  }
}

type SavedTab = "techniques" | "phrases";

function CategoryMeta({ category }: { category: string }) {
  const style = categoryStyleFor(category);
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden="true"
        className="w-2 h-2 rounded-full flex-none"
        style={{ background: style.color }}
      />
      <span>{style.label}</span>
    </span>
  );
}

function EmptyPanel({ children }: { children: string }) {
  return (
    <p
      className="settings-card px-5 py-6 text-center text-[15px]"
      style={{ color: "var(--fg-70)" }}
    >
      {children}
    </p>
  );
}

const iconButton =
  "w-11 h-11 flex-none flex items-center justify-center rounded-full transition-transform active:scale-90 motion-reduce:transition-none";

export default function Favourites() {
  const { state, toggleCard, togglePhrase } = useFavourites();
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shareItem, setShareItem] = useState<ShareItem | null>(null);
  const [tab, setTab] = useState<SavedTab>(() =>
    state.cardIds.length === 0 && state.phrases.length > 0
      ? "phrases"
      : "techniques",
  );
  const { copied, copy } = useCopyFeedback();

  const q = searchQuery.toLowerCase().trim();
  const totalSaved = state.cardIds.length + state.phrases.length;

  const favCards = state.cardIds.filter((id) => {
    const meta = CARD_META[id];
    if (!meta) return false;
    if (!q) return true;
    return id.toLowerCase().includes(q) || meta.title.toLowerCase().includes(q);
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

  const phrasesByCard = new Map<string, FavouritePhrase[]>();
  for (const p of favPhrases) {
    const list = phrasesByCard.get(p.cardId) ?? [];
    list.push(p);
    phrasesByCard.set(p.cardId, list);
  }

  const share = (p: FavouritePhrase) => {
    const meta = CARD_META[p.cardId];
    setShareItem({
      text: p.text,
      cardId: meta ? p.cardId : undefined,
      cardTitle: meta?.title ?? p.cardTitle,
      category: meta?.category,
      hint: p.groupLabel || undefined,
    });
  };

  const tabs = [
    {
      id: "techniques" as const,
      label: `Techniques · ${state.cardIds.length}`,
    },
    { id: "phrases" as const, label: `Phrases · ${state.phrases.length}` },
  ];

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">
      <div className="px-4 md:px-6 pt-4 md:pt-6 pb-3 flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className="text-[13px] font-bold tracking-[0.06em] uppercase"
            style={{ color: "var(--fg-60)" }}
          >
            {totalSaved} {totalSaved === 1 ? "item" : "items"} · on this device
          </span>
          <h1
            className="text-[34px] leading-[1.1] font-extrabold tracking-[-0.02em]"
            style={{ color: "var(--fg-90)" }}
          >
            Saved
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          aria-haspopup="dialog"
          data-testid="open-settings"
          data-print-hide
          className={iconButton}
          style={{ background: "var(--fg-08)", color: "var(--fg-90)" }}
        >
          <Settings className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div className="px-4 md:px-6 pb-12 flex flex-col gap-5">
        {totalSaved === 0 ? (
          <div className="flex flex-col items-center py-14 px-4 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "color-mix(in srgb, var(--brand) 10%, transparent)",
              }}
            >
              <Heart
                className="w-6 h-6"
                style={{ color: "var(--brand-text)" }}
                aria-hidden="true"
              />
            </div>
            <p
              className="text-[20px] font-bold mb-2"
              style={{ color: "var(--fg-90)" }}
            >
              Nothing saved yet
            </p>
            <p
              className="text-[15px] leading-relaxed max-w-[300px] mb-6"
              style={{ color: "var(--fg-70)" }}
            >
              Tap the heart on any technique or phrase to keep it here for quick
              access.
            </p>
            <div className="flex flex-col gap-2 w-full max-w-[280px]">
              <Button variant="primary" onClick={() => setLocation("/")}>
                Browse the Library
              </Button>
              <Button variant="quiet" onClick={() => setLocation("/phrases")}>
                Open the Phrase Bank
              </Button>
            </div>
          </div>
        ) : (
          <>
            <SegmentedTabs<SavedTab>
              tabs={tabs}
              value={tab}
              onChange={setTab}
              label="Saved items"
              idBase="saved"
              className="w-full"
            />

            <div className="relative" data-print-hide>
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "var(--fg-55)" }}
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved items"
                aria-label="Search saved items"
                className="w-full text-[15px] pl-10 pr-11 h-11 rounded-xl outline-none"
                style={{
                  background: "var(--fg-05)",
                  border: "1px solid var(--fg-08)",
                  color: "var(--fg-90)",
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center"
                >
                  <X
                    className="w-4 h-4"
                    style={{ color: "var(--fg-60)" }}
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>

            <div
              role="tabpanel"
              id="saved-panel-techniques"
              aria-labelledby="saved-tab-techniques"
              hidden={tab !== "techniques"}
            >
              {favCards.length === 0 ? (
                <EmptyPanel>
                  {q
                    ? `No saved techniques match "${searchQuery}".`
                    : "Tap the heart on any technique to save it here."}
                </EmptyPanel>
              ) : (
                <ul className="settings-card" aria-label="Saved techniques">
                  {favCards.map((id) => {
                    const meta = CARD_META[id];
                    return (
                      <li key={id} className="flex items-center pr-1.5">
                        <Link
                          href={`/card/${id}`}
                          data-testid={`favourite-card-${id}`}
                          className="flex-1 min-w-0 rounded-2xl"
                        >
                          <ListRow
                            title={meta.title}
                            meta={
                              <span className="flex flex-wrap items-center gap-x-2">
                                <CategoryMeta category={meta.category} />
                                <span aria-hidden="true">·</span>
                                <span>{meta.difficulty}</span>
                              </span>
                            }
                            className="pr-1"
                          />
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleCard(id)}
                          aria-label={`Remove ${meta.title} from saved`}
                          className={iconButton}
                        >
                          <Heart
                            className="w-5 h-5"
                            style={{ color: "var(--brand-text)" }}
                            fill="var(--brand-text)"
                            aria-hidden="true"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div
              role="tabpanel"
              id="saved-panel-phrases"
              aria-labelledby="saved-tab-phrases"
              hidden={tab !== "phrases"}
              className="flex flex-col gap-4"
            >
              {phrasesByCard.size === 0 ? (
                <EmptyPanel>
                  {q
                    ? `No saved phrases match "${searchQuery}".`
                    : "Tap the heart next to any phrase to save it here."}
                </EmptyPanel>
              ) : (
                [...phrasesByCard].map(([cardId, phrases]) => {
                  const meta = CARD_META[cardId];
                  const title = meta?.title ?? phrases[0]?.cardTitle ?? cardId;
                  return (
                    <section
                      key={cardId}
                      aria-label={title}
                      className="settings-card"
                      data-testid={`favourite-phrase-group-${cardId}`}
                    >
                      <Link
                        href={`/card/${cardId}`}
                        className="flex items-center gap-2 px-4 min-h-12"
                      >
                        <span className="flex-1 min-w-0 flex flex-col">
                          <span
                            className="text-[15px] font-semibold truncate"
                            style={{ color: "var(--fg-90)" }}
                          >
                            {title}
                          </span>
                          {meta && (
                            <span
                              className="text-[13px]"
                              style={{ color: "var(--fg-60)" }}
                            >
                              <CategoryMeta category={meta.category} />
                            </span>
                          )}
                        </span>
                        <span className="sr-only">Open technique</span>
                        <ChevronRight
                          className="w-4 h-4 flex-none"
                          style={{ color: "var(--fg-55)" }}
                          aria-hidden="true"
                        />
                      </Link>
                      <ul>
                        {phrases.map((p, i) => {
                          const isCopied = copied === p.text;
                          return (
                            <li
                              // (cardId, text) is the saved phrase's identity
                              key={`${p.cardId}:${p.text}`}
                              className="flex items-center pr-1.5"
                              style={{
                                borderTop:
                                  i > 0 ? "1px solid var(--fg-07)" : undefined,
                                background: isCopied
                                  ? "color-mix(in srgb, var(--brand) 8%, transparent)"
                                  : undefined,
                              }}
                            >
                              <button
                                type="button"
                                onClick={() => copy(p.text)}
                                aria-label={`Copy: ${p.text}`}
                                className="flex-1 min-w-0 flex items-center gap-3 pl-4 pr-1 py-3 min-h-14 text-left"
                              >
                                <span
                                  className="phrase-text flex-1 font-serif text-[17px] leading-snug"
                                  style={{
                                    color: isCopied
                                      ? "var(--brand-text)"
                                      : "var(--fg-90)",
                                  }}
                                >
                                  {p.text}
                                </span>
                                {isCopied ? (
                                  <Check
                                    className="w-4 h-4 flex-none"
                                    style={{ color: "var(--brand-text)" }}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <Copy
                                    className="w-4 h-4 flex-none"
                                    style={{ color: "var(--fg-55)" }}
                                    aria-hidden="true"
                                  />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => share(p)}
                                aria-label={`Share: ${p.text}`}
                                aria-haspopup="dialog"
                                className={iconButton}
                                style={{ color: "var(--fg-70)" }}
                              >
                                <Share
                                  className="w-[18px] h-[18px]"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                onClick={() => togglePhrase(p)}
                                aria-label={`Remove from saved: ${p.text}`}
                                className={iconButton}
                              >
                                <Heart
                                  className="w-[18px] h-[18px]"
                                  style={{ color: "var(--brand-text)" }}
                                  fill="var(--brand-text)"
                                  aria-hidden="true"
                                />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  );
                })
              )}
            </div>
          </>
        )}

        <div
          className="settings-card"
          data-testid="backup-nudge"
          data-print-hide
        >
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            aria-haspopup="dialog"
            className="settings-row w-full text-left"
          >
            <span className="flex-1 min-w-0 flex flex-col gap-0.5">
              <span className="settings-row-title">
                Back up your saved items
              </span>
              <span className="settings-row-meta">
                They live only on this device
              </span>
            </span>
            <ChevronRight
              className="w-4 h-4 flex-none"
              style={{ color: "var(--fg-55)" }}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <SettingsSheet
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <ShareSheet item={shareItem} onClose={() => setShareItem(null)} />
    </div>
  );
}
