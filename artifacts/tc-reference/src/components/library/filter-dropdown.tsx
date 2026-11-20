import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// Segment style inside the single line filter bar: inactive segments sit flat
// on the bar, the active one lifts into an amber pill
const segmentStyle = (active: boolean, open: boolean): React.CSSProperties => ({
  background: active
    ? "var(--gradient-active)"
    : open
      ? "var(--fg-08)"
      : "transparent",
  color: active
    ? "var(--brand-contrast)"
    : open
      ? "var(--fg-90)"
      : "var(--fg-60)",
  boxShadow: active
    ? "0 1px 6px color-mix(in srgb, var(--brand) 30%, transparent)"
    : "none",
});

export interface DropdownOption {
  value: string;
  label: string;
  // Shorter label shown on the trigger once selected (defaults to label)
  short?: string;
}

interface FilterDropdownProps {
  label: string;
  defaultLabel: string;
  options: DropdownOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  testId: string;
  icon?: React.ReactNode;
  align?: "left" | "right";
  labelClassName?: string;
}

// Compact dropdown: a single chip-sized trigger that opens a listbox popover.
// Closes on outside pointer-down, Escape, or selection; supports arrow-key
// navigation between options.
export function FilterDropdown({
  label,
  defaultLabel,
  options,
  value,
  onChange,
  testId,
  icon,
  align = "left",
  labelClassName = "",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    // Close when keyboard focus (e.g. Tab) leaves the dropdown entirely
    const onFocusOut = (e: FocusEvent) => {
      if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
    };
    const rootEl = rootRef.current;
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    rootEl?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      rootEl?.removeEventListener("focusout", onFocusOut);
    };
  }, [open]);

  // Focus the selected option (or the first) when the menu opens
  useEffect(() => {
    if (!open || !listRef.current) return;
    const selected = listRef.current.querySelector<HTMLButtonElement>(
      '[aria-selected="true"]',
    );
    (
      selected ?? listRef.current.querySelector<HTMLButtonElement>("button")
    )?.focus();
  }, [open]);

  const moveFocus = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    );
    const idx = items.indexOf(document.activeElement as HTMLButtonElement);
    const next =
      e.key === "ArrowDown"
        ? items[(idx + 1) % items.length]
        : items[(idx - 1 + items.length) % items.length];
    next?.focus();
  };

  const active = value !== null;
  const selectedOption = active
    ? options.find((o) => o.value === value)
    : undefined;
  const currentLabel = selectedOption?.label ?? label;
  const triggerLabel = selectedOption?.short ?? currentLabel;

  const select = (next: string | null) => {
    onChange(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className="relative flex min-w-0 flex-1">
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label} filter${active ? `: ${currentLabel}` : ""}`}
        title={active ? currentLabel : undefined}
        data-testid={testId}
        className="library-filter-control w-full inline-flex h-full min-w-0 items-center justify-center gap-1 rounded-full px-1.5 text-[11.5px] font-semibold transition-all"
        style={segmentStyle(active, open)}
      >
        {icon}
        <span className={`truncate ${labelClassName}`}>{triggerLabel}</span>
        <ChevronDown
          className="w-2.5 h-2.5 flex-shrink-0 opacity-70 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          onKeyDown={moveFocus}
          className={`absolute top-full mt-2 z-50 w-max min-w-full max-w-[calc(100vw-24px)] max-h-[60vh] overflow-y-auto rounded-xl p-1 ${
            align === "right" ? "right-0" : "left-0"
          }`}
          style={{
            background: "var(--surface-dd)",
            border: "1px solid var(--fg-09)",
            boxShadow: "0 10px 32px rgba(0,0,0,0.35)",
          }}
        >
          {[{ value: null as string | null, label: defaultLabel }]
            .concat(
              options.map((o) => ({
                value: o.value as string | null,
                label: o.label,
              })),
            )
            .map((option) => {
              const selected = value === option.value;
              const slug = (option.value ?? "all")
                .toLowerCase()
                .replace(/[\s/]+/g, "-");
              return (
                <button
                  key={option.value ?? "__all__"}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  onClick={() => select(option.value)}
                  data-testid={`${testId}-option-${slug}`}
                  className="tap-target-y w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors whitespace-nowrap hover:bg-[var(--fg-05)]"
                  style={{
                    color: selected ? "var(--brand-text)" : "var(--fg-60)",
                    background: selected
                      ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                      : "transparent",
                  }}
                >
                  {option.label}
                  {selected && (
                    <Check
                      className="w-3.5 h-3.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}
