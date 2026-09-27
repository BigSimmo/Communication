import { Component, createRef, type ErrorInfo, type ReactNode } from "react";
import { Link } from "wouter";
import { AlertCircle, RefreshCw } from "lucide-react";

const CHUNK_ERROR_PATTERNS = [
  "Failed to fetch dynamically imported module",
  "Importing a module script failed",
  "error loading dynamically imported module",
  "Unable to preload CSS",
];

/** True for errors thrown when a lazily loaded chunk is missing, which
    usually means a new deploy replaced the files this tab expects. */
export function isChunkLoadError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  if (error.name === "ChunkLoadError") return true;
  return CHUNK_ERROR_PATTERNS.some((p) => error.message.includes(p));
}

interface Props {
  children: ReactNode;
  /** Changing this (e.g. the route) clears a caught error. */
  resetKey?: string;
  /** The Library route's header already owns the page h1, so the fallback
      drops to h2 there to keep exactly one h1 on the page. */
  headingLevel?: 1 | 2;
}

interface State {
  error: unknown;
  hasError: boolean;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null, hasError: false };
  private headingRef = createRef<HTMLHeadingElement>();

  static getDerivedStateFromError(error: unknown): State {
    return { error, hasError: true };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error("App crashed", error, info.componentStack);
  }

  componentDidMount() {
    // A crash during the very first render commits the fallback on mount.
    if (this.state.hasError) this.headingRef.current?.focus();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!prevState.hasError && this.state.hasError) {
      this.headingRef.current?.focus();
    } else if (
      this.state.hasError &&
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.setState({ error: null, hasError: false });
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const isUpdate = isChunkLoadError(this.state.error);
    const Heading = this.props.headingLevel === 2 ? "h2" : "h1";

    return (
      <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
        <div
          role="alert"
          className="w-full max-w-sm rounded-2xl p-8 text-center"
          style={{
            background: "var(--fg-02)",
            border: "1px solid var(--fg-06)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{
              background: "color-mix(in srgb, var(--brand) 8%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
            }}
            aria-hidden="true"
          >
            {isUpdate ? (
              <RefreshCw
                className="w-7 h-7"
                style={{ color: "var(--brand-text)" }}
              />
            ) : (
              <AlertCircle
                className="w-7 h-7"
                style={{ color: "var(--brand-text)" }}
              />
            )}
          </div>
          <Heading
            ref={this.headingRef}
            tabIndex={-1}
            className="text-[20px] font-bold text-foreground mb-2 outline-none"
          >
            {isUpdate ? "A new version is available" : "Something went wrong"}
          </Heading>
          <p
            className="text-[13px] leading-relaxed mb-6"
            style={{ color: "var(--fg-55)" }}
          >
            {isUpdate
              ? "The app was updated since this page opened. Reload to get the latest version. Your saved data is safe."
              : "This screen hit an unexpected problem. Reloading usually fixes it. Your saved data is safe."}
          </p>
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-5 min-h-11 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              Reload app
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center text-[13px] font-semibold px-5 min-h-11 rounded-full"
              style={{ color: "var(--fg-65)" }}
            >
              Go to library
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
