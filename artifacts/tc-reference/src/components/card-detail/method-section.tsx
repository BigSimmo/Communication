import type { CardData, MethodStep } from "@/lib/card-types";
import {
  CardBlock,
  CopyRow,
  ExpandingRows,
  Label,
  Meta,
  NumberDisc,
  Phrase,
  SayBlock,
  Surface,
} from "./card-ui";
import { CoreFormula } from "./overview-section";

// Field-tip text often already opens with its own label ("Don't open with...",
// "They say: ..."). Only add the label when the text doesn't carry one.
function labelled(label: string, text: string, carries: RegExp): string {
  return carries.test(text.trim()) ? text : `${label}: ${text}`;
}

// ── How deep to go ──
// Each row copies its line; the depth and when to use it sit above it, so
// nothing is squeezed into a narrow side column on a phone.
export function DepthDialSection({ cardData }: { cardData: CardData }) {
  if (!cardData.depthDial || cardData.depthDial.length === 0) return null;
  return (
    <CardBlock title="How deep to go" meta="Match the trust you have">
      <Surface divided data-testid="depth-dial">
        {cardData.depthDial.map((row) => (
          <CopyRow
            key={row.depth}
            text={row.phrase}
            above={
              <span className="flex flex-wrap items-baseline gap-x-2">
                <span
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--fg-90)" }}
                >
                  {row.depth}
                </span>
                <Meta>{row.useWhen}</Meta>
              </span>
            }
          />
        ))}
      </Surface>
    </CardBlock>
  );
}

// ── Field tip ──
export function FieldTipSection({ cardData }: { cardData: CardData }) {
  const tip = cardData.fieldTip;
  if (!tip) return null;
  return (
    <CardBlock title="Field tip">
      <Surface className="p-4 flex flex-col gap-2" data-testid="field-tip">
        <p
          className="text-[17px] font-semibold leading-[1.3]"
          style={{ color: "var(--fg-90)" }}
        >
          {tip.headline}
        </p>
        <p
          className="text-[14px] leading-[1.5] whitespace-pre-line"
          style={{ color: "var(--fg-75)" }}
        >
          {tip.body}
        </p>
        {tip.example && (
          <SayBlock className="mt-1">
            <span
              className="text-[14px] leading-[1.45]"
              style={{ color: "var(--fg-80)" }}
            >
              {labelled(
                "Example",
                tip.example,
                /^(they (say|said)|example)\b/i,
              )}
            </span>
            {tip.dont && (
              <span
                className="text-[14px] leading-[1.45]"
                style={{ color: "var(--accent-red)" }}
              >
                {labelled("Don't", tip.dont, /^(don't|do not)\b/i)}
              </span>
            )}
            {tip.do && (
              <span
                className="text-[14px] leading-[1.45]"
                style={{ color: "var(--accent-green)" }}
              >
                {labelled("Do", tip.do, /^do\b(?! not)/i)}
              </span>
            )}
          </SayBlock>
        )}
      </Surface>
    </CardBlock>
  );
}

function StepBody({ step }: { step: MethodStep }) {
  return (
    <>
      <p
        className="text-[15px] leading-[1.5] whitespace-pre-line"
        style={{ color: "var(--fg-80)" }}
      >
        {step.body}
      </p>
      {step.examples && step.examples.length > 0 && (
        <SayBlock>
          {/* Labels sit above each line, so a long label never collides
              with the text beside it. */}
          {step.examples.map((ex, j) => (
            <span key={j} className="flex flex-col gap-0.5">
              <Label>{ex.label}</Label>
              <Phrase size="sm">{ex.text}</Phrase>
            </span>
          ))}
        </SayBlock>
      )}
    </>
  );
}

// ── The method ──
export function MethodSection({ cardData }: { cardData: CardData }) {
  const steps = cardData.method ?? [];
  return (
    <CardBlock
      id="method"
      title="The method"
      meta={`${steps.length} ${steps.length === 1 ? "step" : "steps"}`}
    >
      <CoreFormula cardData={cardData} />
      <Surface>
        <ExpandingRows
          items={steps}
          ordered
          label="Method steps"
          testId="method-steps"
          getKey={(m) => m.step}
          renderHeader={(m, _i, open) => (
            <>
              <NumberDisc active={open}>{m.step}</NumberDisc>
              <span
                className="flex-1 min-w-0 text-[17px] font-semibold leading-[1.3]"
                style={{ color: "var(--fg-90)" }}
              >
                <span className="sr-only">Step {m.step}: </span>
                {m.title}
              </span>
            </>
          )}
          renderBody={(m) => <StepBody step={m} />}
        />
      </Surface>
      {cardData.liveThreadClues && cardData.liveThreadClues.length > 0 && (
        <Surface className="p-4 flex flex-col gap-2.5">
          <div className="flex flex-col gap-0.5">
            <Label>Clues to listen for</Label>
            <Meta>Words that usually mark the thread worth pulling</Meta>
          </div>
          <ul className="flex flex-wrap gap-2" data-testid="method-clues">
            {cardData.liveThreadClues.map((clue) => (
              <li
                key={clue}
                className="text-[14px] leading-snug px-3 py-1.5 rounded-[14px]"
                style={{ background: "var(--fg-08)", color: "var(--fg-85)" }}
              >
                {clue}
              </li>
            ))}
          </ul>
        </Surface>
      )}
    </CardBlock>
  );
}
