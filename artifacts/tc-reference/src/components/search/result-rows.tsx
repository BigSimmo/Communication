import type { ReactNode } from "react";
import { Link } from "wouter";
import { Check, ChevronRight, Copy } from "lucide-react";
import type {
  PhraseResult,
  PlaybookResult,
  RankedResult,
} from "@/lib/search-index";
import { CORE_CARD_SET } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { ListRow } from "@/components/ui/list-row";
import { quoted } from "@/lib/utils";
import { cardSummary } from "./search-starts";
import { CategoryDot, Eyebrow, Highlighted, Surface } from "./search-parts";

// Why a technique is listed when the searched words are not in its title or
// description, where the highlight already explains it.
const MATCH_HINTS: Record<string, string> = {
  formula: "Found in the core formula",
  phrases: "Found in a phrase",
  scenarios: "Found in a scenario",
  explanation: "Found in Why it works",
};

/** Shared by every row that opens something. Marks the row for arrow keys. */
const ROW_LINK =
  "block transition-colors hover:bg-[var(--fg-04)] active:bg-[var(--fg-06)]";

const chevron = (
  <ChevronRight
    className="w-[18px] h-[18px] flex-none"
    style={{ color: "var(--fg-50)" }}
    aria-hidden="true"
  />
);

export interface Highlight {
  query: string;
  correctedQuery?: string | null;
}

function CopyMark({ copied }: { copied: boolean }) {
  return (
    <>
      {copied ? (
        <Check
          className="w-[18px] h-[18px] flex-none"
          style={{ color: "var(--accent-green)" }}
          aria-hidden="true"
        />
      ) : (
        <Copy
          className="w-[18px] h-[18px] flex-none"
          style={{ color: "var(--fg-50)" }}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{copied ? "Copied" : "Copy this line"}</span>
    </>
  );
}

export function TechniqueRow({
  id,
  title,
  category,
  loaded = true,
  matchedIn,
  highlight,
  onOpen,
}: {
  id: string;
  title: string;
  category: string;
  loaded?: boolean;
  matchedIn?: string;
  highlight?: Highlight;
  onOpen?: () => void;
}) {
  const mark = (text: string): ReactNode =>
    highlight ? <Highlighted text={text} {...highlight} /> : text;
  const row = (
    <ListRow
      leading={<CategoryDot category={category} />}
      title={mark(title)}
      description={
        <span className="line-clamp-2">{mark(cardSummary(id))}</span>
      }
      wrap
      meta={matchedIn ? MATCH_HINTS[matchedIn] : undefined}
      trailing={
        loaded ? (
          chevron
        ) : (
          <span
            className="text-[12px] font-bold px-2 py-1 rounded-lg flex-none"
            style={{ background: "var(--fg-08)", color: "var(--fg-70)" }}
          >
            Soon
          </span>
        )
      }
    />
  );
  return (
    <li>
      {loaded ? (
        <Link
          href={`/card/${id}`}
          onClick={onOpen}
          data-search-result
          data-testid={`search-technique-${id}`}
          className={ROW_LINK}
        >
          {row}
        </Link>
      ) : (
        <div className="opacity-60" data-testid={`search-technique-${id}`}>
          {row}
        </div>
      )}
    </li>
  );
}

export function PhraseRow({
  phrase,
  highlight,
  copied,
  onCopy,
}: {
  phrase: PhraseResult;
  highlight: Highlight;
  copied: boolean;
  onCopy: (text: string) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onCopy(phrase.text)}
        data-search-result
        data-testid="search-phrase"
        className={`${ROW_LINK} w-full text-left flex items-center gap-3 px-4 py-[13px] min-h-14`}
      >
        <span className="flex-1 min-w-0 flex flex-col gap-1">
          <span
            className="phrase-text text-[17px] leading-[1.35]"
            style={{ color: "var(--fg-90)" }}
          >
            <Highlighted text={phrase.text} {...highlight} />
          </span>
          <span
            className="flex items-center gap-1.5 text-[13px] leading-[1.35]"
            style={{ color: "var(--fg-60)" }}
          >
            <CategoryDot category={phrase.category} small />
            <span className="truncate">{phrase.cardTitle}</span>
          </span>
        </span>
        <CopyMark copied={copied} />
      </button>
    </li>
  );
}

/** Where a playbook result leads. The Playbooks page lists every template. */
function playbookHref(id: string): string {
  return `/playbooks?template=${encodeURIComponent(id)}`;
}

function stepCount(playbook: PlaybookResult): string {
  const steps = playbook.cardIds.length;
  return `Playbook · ${steps} ${steps === 1 ? "step" : "steps"}`;
}

export function PlaybookRow({
  playbook,
  highlight,
  onOpen,
}: {
  playbook: PlaybookResult;
  highlight: Highlight;
  onOpen: () => void;
}) {
  return (
    <li>
      <Link
        href={playbookHref(playbook.id)}
        onClick={onOpen}
        data-search-result
        data-testid={`search-playbook-${playbook.id}`}
        className={ROW_LINK}
      >
        <ListRow
          title={<Highlighted text={playbook.name} {...highlight} />}
          description={stepCount(playbook)}
          trailing={chevron}
        />
      </Link>
    </li>
  );
}

/** The featured technique: what it is, when to use it and a line to say. */
export function BestTechnique({
  technique,
  phrase,
  highlight,
  copied,
  onOpen,
  onCopy,
}: {
  technique: RankedResult;
  phrase: PhraseResult | null;
  highlight: Highlight;
  copied: boolean;
  onOpen: () => void;
  onCopy: (text: string) => void;
}) {
  const category = categoryStyleFor(technique.category);
  const summary = cardSummary(technique.id);
  return (
    <Surface feature testId="search-best-match">
      <Link
        href={`/card/${technique.id}`}
        onClick={onOpen}
        data-search-result
        data-testid={`search-technique-${technique.id}`}
        className={`${ROW_LINK} flex flex-col gap-2 p-4`}
      >
        <span className="flex items-center justify-between gap-3">
          <Eyebrow accent>Best match</Eyebrow>
          <span
            className="flex items-center gap-1.5 text-[13px]"
            style={{ color: "var(--fg-60)" }}
          >
            <CategoryDot category={technique.category} small />
            {category.short}
            {CORE_CARD_SET.has(technique.id) && " · Start here"}
          </span>
        </span>
        <span className="flex items-center gap-3">
          <span
            className="flex-1 min-w-0 text-[20px] leading-[1.2] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            <Highlighted text={technique.title} {...highlight} />
          </span>
          {chevron}
        </span>
        {summary && (
          <span
            className="text-[14px] leading-[1.45]"
            style={{ color: "var(--fg-70)" }}
          >
            {summary}
          </span>
        )}
      </Link>
      {phrase && (
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={() => onCopy(phrase.text)}
            data-search-result
            data-testid="search-best-phrase"
            className="w-full min-h-11 flex items-center gap-2.5 rounded-[14px] px-3.5 py-3 text-left transition-colors active:bg-[var(--fg-10)]"
            style={{ background: "var(--fg-06)" }}
          >
            <span
              className="phrase-text flex-1 min-w-0 text-[17px] leading-[1.35]"
              style={{ color: "var(--fg-90)" }}
            >
              {quoted(phrase.text)}
            </span>
            <CopyMark copied={copied} />
          </button>
        </div>
      )}
    </Surface>
  );
}

/** The featured playbook, when the search names one. */
export function BestPlaybook({
  playbook,
  highlight,
  onOpen,
}: {
  playbook: PlaybookResult;
  highlight: Highlight;
  onOpen: () => void;
}) {
  return (
    <Surface feature testId="search-best-match">
      <Link
        href={playbookHref(playbook.id)}
        onClick={onOpen}
        data-search-result
        data-testid={`search-playbook-${playbook.id}`}
        className={`${ROW_LINK} flex flex-col gap-2 p-4`}
      >
        <span className="flex items-center justify-between gap-3">
          <Eyebrow accent>Best match</Eyebrow>
          <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
            {stepCount(playbook)}
          </span>
        </span>
        <span className="flex items-center gap-3">
          <span
            className="flex-1 min-w-0 text-[20px] leading-[1.2] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            <Highlighted text={playbook.name} {...highlight} />
          </span>
          {chevron}
        </span>
        <span
          className="text-[14px] leading-[1.45] line-clamp-3"
          style={{ color: "var(--fg-70)" }}
        >
          {playbook.description}
        </span>
      </Link>
    </Surface>
  );
}
