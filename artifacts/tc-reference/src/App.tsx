import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Library from "@/pages/library";
import CardDetail from "@/pages/card-detail";
import Drill from "@/pages/drill";
import Favourites from "@/pages/favourites";
import Phrases from "@/pages/phrases";
import { QuickModeProvider } from "@/lib/quick-mode";
import { FavouritesProvider } from "@/lib/favourites-context";
import { NavProvider } from "@/lib/nav-context";
import { ThemeProvider } from "@/lib/theme";
import { PdfProvider } from "@/lib/pdf-context";
import { AppLayout } from "@/components/app-layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Library} />
      <Route path="/card/:cardId" component={CardDetail} />
      <Route path="/drill" component={Drill} />
      <Route path="/favourites" component={Favourites} />
      <Route path="/phrases" component={Phrases} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PdfProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <AppLayout>
                  <Router />
                </AppLayout>
              </WouterRouter>
            </PdfProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

export default App;
