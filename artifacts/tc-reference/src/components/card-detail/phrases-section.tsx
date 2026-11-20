import { useState } from "react";
import type { CardData } from "@/lib/card-types";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Chip } from "@/components/ui/chip";
import { speakablePhrases } from "./best-line";
import {
  CardBlock,
  CopyRow,
  EYEBROW,
  Meta,
  PhraseRow,
  Surface,
} from "./card-ui";

/** How many lines "Say this" leads with before the full bank. */
const LEAD_PHRASES = 3;

/**
 * Say this: the first few lines from the phrase bank, each one tap to copy,
 * with the whole bank (every group, save and copy) in a sheet.
 */
export function SayThisSection({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const total = cardData.phraseBank.reduce((n, g) => n + g.phrases.length, 0);
  const lead = speakablePhrases(cardData).slice(0, LEAD_PHRASES);
  const groups = cardData.phraseBank.filter(
    (g) => group === null || g.id === group,
  );

  return (
    <CardBlock
      id="phrases"
      title="Say this"
      action={
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          aria-haspopup="dialog"
          data-testid="button-all-phrases"
          className="tap-band -mr-2 px-2 h-8 rounded-lg text-[13px] font-semibold flex-none transition-colors hover:bg-[var(--fg-05)] active:bg-[var(--fg-05)]"
          style={{ color: "var(--brand-text)" }}
        >
          All {total} phrases
        </button>
      }
    >
      <Surface divided data-testid="say-this">
        {lead.map((phrase, i) => (
          <CopyRow key={phrase} text={phrase} testId={`say-this-copy-${i}`} />
        ))}
      </Surface>

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title={`${total} phrases`}
        testId="phrases-sheet"
      >
        <div
          className="card-section-scroller flex gap-2 overflow-x-auto -mx-5 px-5 pb-3"
          role="toolbar"
          aria-label="Filter phrases by group"
        >
          <Chip selected={group === null} onClick={() => setGroup(null)}>
            All
          </Chip>
          {cardData.phraseBank.map((g) => (
            <Chip
              key={g.id}
              selected={group === g.id}
              count={g.phrases.length}
              onClick={() => setGroup(group === g.id ? null : g.id)}
            >
              {g.label}
            </Chip>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {groups.map((g) => (
            <section
              key={g.id}
              aria-label={g.label}
              className="flex flex-col gap-2"
              data-testid={`phrase-group-${g.id}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className={EYEBROW} style={{ color: "var(--fg-60)" }}>
                  {g.label}
                </h3>
                {/* Many cards reuse the label as the tag; skip the echo */}
                {g.tag && g.tag !== g.label && <Meta>{g.tag}</Meta>}
              </div>
              <Surface divided>
                {g.phrases.map((phrase, i) => (
                  <PhraseRow
                    key={i}
                    cardId={cardId}
                    groupLabel={g.label}
                    text={phrase}
                    size="sm"
                    saveTestId={`phrase-fav-${g.id}-${i}`}
                    copyTestId={`phrase-copy-${g.id}-${i}`}
                  />
                ))}
              </Surface>
            </section>
          ))}
        </div>
      </BottomSheet>
    </CardBlock>
  );
}
