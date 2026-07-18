import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Library from "@/pages/library";
import CardDetail from "@/pages/card-detail";
import Drill from "@/pages/drill";
import Favourites from "@/pages/favourites";
import Phrases from "@/pages/phrases";
import Playbooks from "@/pages/playbooks";
import { FavouritesProvider } from "@/lib/favourites-context";
import { PlaybookProvider } from "@/lib/playbook-context";
import { NavProvider } from "@/lib/nav-context";
import { QuickModeProvider } from "@/lib/quick-mode";
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
      <Route path="/playbooks" component={Playbooks} />
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
            <PlaybookProvider>
              <PdfProvider>
                <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
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
