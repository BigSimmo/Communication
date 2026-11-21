/**
 * Start a cold load's route data while React boots.
 *
 * Opening /card/TC001 or /phrases directly would otherwise fetch in series:
 * the app bundle, then the lazy page chunk once React renders it, then the
 * card or phrase data once that page mounts. Requesting the page chunk and
 * its data up front lets them download alongside the first render. The
 * loaders cache their promises, so the page reuses these requests instead
 * of starting new ones, and a failed warm-up is simply retried by the page.
 */
export function routeToWarm(
  pathname: string,
  base: string,
): { kind: "card"; cardId: string } | { kind: "phrases" } | null {
  const prefix = base.replace(/\/$/, "");
  const path =
    prefix && pathname.startsWith(prefix)
      ? pathname.slice(prefix.length)
      : pathname;
  const card = /^\/card\/(TC\d{3})\/?$/.exec(path);
  if (card) return { kind: "card", cardId: card[1] };
  if (/^\/phrases\/?$/.test(path)) return { kind: "phrases" };
  return null;
}

const ignore = () => {};

export function warmRoute(
  pathname: string = window.location.pathname,
  base: string = import.meta.env.BASE_URL,
): void {
  const route = routeToWarm(pathname, base);
  if (!route) return;
  if (route.kind === "card") {
    import("@/pages/card-detail").catch(ignore);
    import("@/lib/card-loader")
      .then((m) => m.loadCard(route.cardId))
      .catch(ignore);
  } else {
    import("@/pages/phrases").catch(ignore);
    import("@/lib/phrases-data")
      .then((m) => m.loadAllAggregatedPhrases())
      .catch(ignore);
  }
}
