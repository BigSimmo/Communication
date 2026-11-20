import { X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import {
  CardBlock,
  CopyButton,
  ExpandingRows,
  Label,
  Phrase,
  Surface,
} from "./card-ui";
import { parseSpokenLine } from "./best-line";

// ── Common mistakes ──
export function MistakesSection({ cardData }: { cardData: CardData }) {
  const mistakes = cardData.commonMistakes ?? [];
  return (
    <CardBlock id="mistakes" title="Common mistakes" meta={mistakes.length}>
      <Surface>
        <ExpandingRows
          items={mistakes}
          label="Common mistakes"
          testId="mistakes"
          defaultOpen={-1}
          getKey={(m) => m.mistake}
          renderHeader={(m) => (
            <>
              <X
                className="w-[18px] h-[18px] flex-none"
                style={{ color: "var(--accent-red)" }}
                aria-hidden="true"
              />
              <span
                className="flex-1 min-w-0 text-[16px] font-semibold leading-[1.3]"
                style={{ color: "var(--fg-90)" }}
              >
                {m.mistake}
              </span>
            </>
          )}
          renderBody={(m) => (
            <>
              <span className="flex flex-col gap-0.5">
                <Label color="var(--accent-red)">Sounds like</Label>
                <Phrase size="sm" muted>
                  {m.soundsLike}
                </Phrase>
              </span>
              <span className="flex items-start gap-2">
                <span className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <Label color="var(--accent-green)">Better</Label>
                  <Phrase size="sm">{m.better}</Phrase>
                </span>
                <span className="-mr-2">
                  <CopyButton
                    text={parseSpokenLine(m.better).say || m.better}
                  />
                </span>
              </span>
            </>
          )}
        />
      </Surface>
    </CardBlock>
  );
}
