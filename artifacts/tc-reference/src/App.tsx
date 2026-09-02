import { Suspense, lazy } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Library from "@/pages/library";
// Non-landing routes stay lazy so route UI loads only when first visited. Card
// content is split again inside those routes by the per-card loader.
const CardDetail = lazy(() => import("@/pages/card-detail"));
const Drill = lazy(() => import("@/pages/drill"));
const Favourites = lazy(() => import("@/pages/favourites"));
const Phrases = lazy(() => import("@/pages/phrases"));
const Playbooks = lazy(() => import("@/pages/playbooks"));
import { FavouritesProvider } from "@/lib/favourites-context";
import { PlaybookProvider } from "@/lib/playbook-context";
import { NavProvider } from "@/lib/nav-context";
import { QuickModeProvider } from "@/lib/quick-mode";
import { ThemeProvider } from "@/lib/theme";
import { PdfProvider } from "@/lib/pdf-context";
import { AppLayout } from "@/components/app-layout";

function RouteFallback() {
  return (
    <div
      className="flex items-center justify-center py-24"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="w-6 h-6 rounded-full border-2 animate-spin"
        style={{ borderColor: "var(--fg-15)", borderTopColor: "var(--brand)" }}
        aria-hidden="true"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Library} />
        <Route path="/card/:cardId" component={CardDetail} />
        <Route path="/drill" component={Drill} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/phrases" component={Phrases} />
        <Route path="/playbooks" component={Playbooks} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PlaybookProvider>
              <PdfProvider>
                <WouterRouter
                  base={import.meta.env.BASE_URL.replace(/\/$/, "")}
                >
                  <AppLayout>
                    <Router />
                  </AppLayout>
                </WouterRouter>
              </PdfProvider>
            </PlaybookProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

export default App;
