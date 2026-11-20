import type { FormEvent, RefObject } from "react";
import { Search, X } from "lucide-react";
import { SEARCH_INPUT_ID } from "./search-nav";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  /** The keyboard's search key, or Enter. */
  onSubmit: () => void;
  onCancel: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

/**
 * The search field and Cancel. On a phone this bar sits at the bottom of the
 * screen, in thumb reach and on top of the keyboard; from tablet width up it
 * sits at the top.
 */
export function SearchField({
  value,
  onChange,
  onSubmit,
  onCancel,
  inputRef,
}: SearchFieldProps) {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="flex items-center gap-2.5 mx-auto w-full max-w-[640px]">
      <form
        role="search"
        onSubmit={submit}
        className="flex-1 min-w-0 flex items-center gap-2.5 h-[50px] pl-[18px] pr-2 rounded-full border transition-colors border-[var(--fg-15)] focus-within:border-[var(--brand)] focus-within:shadow-[0_0_0_1px_var(--brand)]"
        style={{ background: "var(--surface-dd)" }}
      >
        <Search
          className="w-[22px] h-[22px] flex-none"
          style={{ color: "var(--fg-60)" }}
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id={SEARCH_INPUT_ID}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          aria-label="Search techniques, phrases and playbooks"
          enterKeyHint="search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          data-testid="search-input"
          // search-modal-input: the pill shows focus, not a ring on the bare input
          className="search-modal-input flex-1 min-w-0 h-full bg-transparent text-[17px] outline-none [&::-webkit-search-cancel-button]:appearance-none"
          style={{ color: "var(--fg-90)" }}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            data-testid="search-clear"
            className="tap-band flex-none w-8 h-8 rounded-full grid place-items-center before:absolute before:-inset-1.5 before:content-['']"
            style={{ background: "var(--fg-08)", color: "var(--fg-70)" }}
          >
            <X className="w-[18px] h-[18px]" aria-hidden="true" />
          </button>
        )}
      </form>
      <button
        type="button"
        onClick={onCancel}
        data-testid="search-cancel"
        className="flex-none h-11 px-1 text-[17px] font-semibold"
        style={{ color: "var(--brand-text)" }}
      >
        Cancel
      </button>
    </div>
  );
}
