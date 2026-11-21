import { useEffect, useReducer } from "react";
import { Home, BookOpen, MessagesSquare, Heart, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useFavourites } from "@/lib/favourites-context";
import {
  DRILL_STATE_EVENT,
  getDueCardsCount,
  loadDrillState,
  isCompletedToday,
  isStreakActive,
} from "@/lib/drill-state";

export type NavDestinationId =
  "library" | "playbooks" | "phrases" | "favourites" | "drill";

export interface NavDestination {
  id: NavDestinationId;
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: (location: string) => boolean;
}

// Single source of truth for the app's top-level destinations. The phone tab
// bar and the desktop sidebar both render from this list.
export const NAV_DESTINATIONS: NavDestination[] = [
  {
    id: "library",
    label: "Library",
    href: "/",
    icon: Home,
    // Cards and the Start here path live inside the Library, so it stays
    // lit while reading them
    isActive: (loc) =>
      loc === "/" || loc === "/start" || loc.startsWith("/card/"),
  },
  {
    id: "phrases",
    label: "Phrases",
    href: "/phrases",
    icon: MessagesSquare,
    isActive: (loc) => loc === "/phrases",
  },
  {
    id: "drill",
    label: "Drill",
    href: "/drill",
    icon: Dumbbell,
    isActive: (loc) => loc === "/drill",
  },
  {
    id: "playbooks",
    label: "Playbooks",
    href: "/playbooks",
    icon: BookOpen,
    isActive: (loc) => loc === "/playbooks",
  },
  {
    id: "favourites",
    label: "Saved",
    href: "/favourites",
    icon: Heart,
    isActive: (loc) => loc === "/favourites",
  },
];

const PAGE_TITLES: Record<string, string> = {
  "/": "Library",
  "/help": "Help me right now",
  "/playbooks": "Playbooks",
  "/phrases": "Phrase Bank",
  "/favourites": "Saved",
  "/drill": "Daily Drill",
  "/search": "Search",
  "/start": "Start here",
};

const CARD_TITLES: Record<string, string> = Object.fromEntries(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => [c.id, c.title]),
);

export function pageTitle(location: string): string {
  if (location.startsWith("/card/")) {
    const cardId = location.split("/")[2]?.split("?")[0] ?? "";
    return CARD_TITLES[cardId] ?? "Card not found";
  }
  if (location.startsWith("/help/")) return "Help me right now";
  return PAGE_TITLES[location] ?? "Page not found";
}

// Small counters shown on nav items: saved items, and for the drill the
// number of reviews due (what needs doing comes first), else a tick once
// today's drill is done, else the running streak.
export function useNavBadges(): Partial<Record<NavDestinationId, string>> {
  const { totalCount } = useFavourites();
  // Re-read when a drill is completed or a review is rated, so the badge
  // does not wait for the next navigation.
  const [, refresh] = useReducer((n: number) => n + 1, 0);
  useEffect(() => {
    window.addEventListener(DRILL_STATE_EVENT, refresh);
    return () => window.removeEventListener(DRILL_STATE_EVENT, refresh);
  }, []);
  const drill = loadDrillState();
  const due = getDueCardsCount();
  const badges: Partial<Record<NavDestinationId, string>> = {};
  if (totalCount > 0)
    badges.favourites = totalCount > 99 ? "99+" : String(totalCount);
  if (due > 0) badges.drill = due > 99 ? "99+" : String(due);
  else if (isCompletedToday(drill)) badges.drill = "✓";
  else if (isStreakActive(drill) && drill.streak > 0)
    badges.drill = String(drill.streak);
  return badges;
}

/**
 * Spoken name for a nav item, with what its badge means. The badge sits
 * before the label in reading order ("3 Saved"), so the name keeps that
 * order: voice control users can then say what they see (WCAG 2.5.3).
 */
export function navItemLabel(
  item: NavDestination,
  badge: string | null,
): string {
  if (!badge || !/\d/.test(badge)) return item.label;
  if (item.id === "favourites")
    return `${badge} ${item.label} ${badge === "1" ? "item" : "items"}`;
  if (item.id === "drill")
    return getDueCardsCount() > 0
      ? `${badge} ${item.label} ${badge === "1" ? "review" : "reviews"} due`
      : `${badge} ${item.label} ${badge === "1" ? "day" : "days"} in a row`;
  return item.label;
}
