import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

const OPTIONS = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
] as const;

// Phones keep the header light, so the theme lives here with the other
// device settings. Desktop still has the header toggle.
export function AppearanceSection() {
  const { theme, toggle } = useTheme();
  return (
    <section
      aria-labelledby="appearance-heading"
      className="mt-8 px-1"
      data-testid="appearance-section"
    >
      <h2
        id="appearance-heading"
        className="text-[11px] font-bold tracking-widest uppercase mb-2.5"
        style={{ color: "var(--fg-55)" }}
      >
        Appearance
      </h2>
      <div
        role="group"
        aria-label="Theme"
        className="grid grid-cols-2 gap-1 p-1 rounded-2xl"
        style={{
          background: "var(--fg-04)",
          border: "1px solid var(--fg-07)",
        }}
      >
        {OPTIONS.map(({ value, label, Icon }) => {
          const active = theme === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => {
                if (!active) toggle();
              }}
              data-testid={`appearance-${value}`}
              className="flex items-center justify-center gap-2 min-h-11 rounded-xl text-[13px] font-semibold transition-colors"
              style={{
                background: active ? "var(--surface-card)" : "transparent",
                boxShadow: active ? "var(--shadow-card)" : "none",
                color: active ? "var(--fg-90)" : "var(--fg-60)",
              }}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
