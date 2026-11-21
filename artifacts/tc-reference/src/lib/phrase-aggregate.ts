// Pure Phrase Bank aggregation, shared by the app (phrases-data.ts) and the
// build plugin (card-text-index-plugin.ts), which precomputes the phrase count
// so the page can paint its intro before the text index arrives. Keep this
// module free of app-only imports (no "@/" paths, no data.ts).
import { isSpeakablePhrase, inferPhraseTone } from "./card-types";
import type { CanonicalTone } from "./card-types";
import type { CardTextIndex } from "./card-text-index-build";
import { tokenize } from "./search-text";

/** Another card that lists the same line, with its own wording of it. */
export interface PhraseSource {
  cardId: string;
  cardTitle: string;
  text: string;
}

export interface AggregatedPhrase {
  text: string;
  groupId: string;
  groupLabel: string;
  groupTag: string;
  tone: CanonicalTone;
  cardId: string;
  cardTitle: string;
  /**
   * Other cards that list the same line (ignoring case and punctuation). The
   * combined bank shows it once, under the first card; each card's own phrase
   * bank still lists it. Absent when the line is on one card only.
   */
  alsoOn?: ReadonlyArray<PhraseSource>;
  /**
   * Other tones the same line carries on the cards in alsoOn, so a tone
   * filter still finds it. Absent when every copy has the same tone.
   */
  alsoTones?: ReadonlyArray<CanonicalTone>;
}

/**
 * The key two lines share when they say the same words, ignoring case,
 * punctuation and quote marks ("That sounds like it mattered." and "that
 * sounds like it mattered" match).
 */
export function phraseDedupeKey(text: string): string {
  return tokenize(text).join(" ");
}

/** Every speakable line across the cards, each shared line listed once. */
export function aggregatePhrases(
  cards: CardTextIndex,
  titleOf: (cardId: string) => string,
): AggregatedPhrase[] {
  const result: AggregatedPhrase[] = [];
  // Shared stock lines are listed once, under the first card.
  const byKey = new Map<string, AggregatedPhrase>();
  for (const [cardId, card] of Object.entries(cards)) {
    const cardTitle = titleOf(cardId);
    for (const group of card.phraseBank) {
      for (const text of group.phrases) {
        if (!isSpeakablePhrase(text)) continue;
        const key = phraseDedupeKey(text);
        const first = byKey.get(key);
        if (first) {
          const tone = inferPhraseTone(group);
          if (tone !== first.tone && !first.alsoTones?.includes(tone)) {
            first.alsoTones = [...(first.alsoTones ?? []), tone];
          }
          if (
            first.cardId !== cardId &&
            !first.alsoOn?.some((s) => s.cardId === cardId)
          ) {
            first.alsoOn = [
              ...(first.alsoOn ?? []),
              { cardId, cardTitle, text },
            ];
          }
          continue;
        }
        const entry: AggregatedPhrase = {
          text,
          groupId: group.id,
          groupLabel: group.label,
          groupTag: group.tag,
          tone: inferPhraseTone(group),
          cardId,
          cardTitle,
        };
        byKey.set(key, entry);
        result.push(entry);
      }
    }
  }
  return result;
}
