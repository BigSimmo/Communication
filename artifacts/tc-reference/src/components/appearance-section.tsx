import { useId } from "react";
import { useTheme } from "@/lib/theme";
import type { ThemeChoice } from "@/lib/theme";
import { usePreferences } from "@/lib/preferences";

const OPTIONS: { value: ThemeChoice; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

/** Theme (System, Light, Dark) and the larger phrase text switch. */
export function AppearanceSection() {
  const { choice, setChoice } = useTheme();
  const { prefs, update } = usePreferences();
  const switchId = useId();

  return (
    <section
      aria-labelledby="appearance-heading"
      className="flex flex-col gap-2"
      data-testid="appearance-section"
    >
      <h3 id="appearance-heading" className="settings-eyebrow">
        Appearance
      </h3>
      <div
        role="radiogroup"
        aria-label="Theme"
        className="grid grid-cols-3 gap-0 rounded-[14px] p-[3px]"
        style={{ background: "var(--fg-08)" }}
      >
        {OPTIONS.map(({ value, label }) => {
          const active = choice === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setChoice(value)}
              data-testid={`appearance-${value}`}
              className="h-10 rounded-[11px] text-[15px] font-semibold transition-colors"
              style={
                active
                  ? {
                      background: "var(--surface-dd)",
                      color: "var(--fg-90)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    }
                  : { color: "var(--fg-70)" }
              }
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="settings-card">
        <div className="settings-row">
          <label
            htmlFor={switchId}
            className="settings-row-title flex-1 min-w-0 flex flex-col gap-0.5 cursor-pointer"
          >
            Larger phrase text
            <span className="settings-row-meta">
              Easier to read a line at a glance
            </span>
          </label>
          <input
            id={switchId}
            type="checkbox"
            role="switch"
            className="settings-switch"
            checked={prefs.largePhrases}
            onChange={(e) => update({ largePhrases: e.target.checked })}
            data-testid="setting-large-phrases"
          />
        </div>
      </div>
    </section>
  );
}
