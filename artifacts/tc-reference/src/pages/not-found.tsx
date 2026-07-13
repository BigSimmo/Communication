import { useLocation } from "wouter";
import { AlertCircle, ChevronLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
      <div
        className="w-full max-w-sm rounded-2xl p-8 text-center"
        style={{
          background: "var(--fg-02)",
          border: "1px solid var(--fg-06)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{
            background: "hsl(var(--destructive) / 0.08)",
            border: "1px solid hsl(var(--destructive) / 0.18)",
          }}
        >
          <AlertCircle className="w-7 h-7" style={{ color: "hsl(var(--destructive) / 0.7)" }} />
        </div>
        <h1 className="text-[20px] font-bold text-foreground mb-2">
          404 — Page not found
        </h1>
        <p
          className="text-[13px] leading-relaxed mb-6"
          style={{ color: "var(--fg-45)" }}
        >
          This page doesn't exist. Head back to the library to keep exploring.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
          style={{
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.22)",
            color: "#f59e0b",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Library
        </button>
      </div>
    </div>
  );
}
