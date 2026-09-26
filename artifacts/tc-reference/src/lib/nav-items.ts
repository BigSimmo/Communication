import { Home, BookOpen, MessagesSquare, Heart, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useFavourites } from "@/lib/favourites-context";
import {
  loadDrillState,
  isCompletedToday,
  isStreakActive,
} from "@/lib/drill-state";

export type NavDestinationId =
  | "library"
  | "playbooks"
  | "phrases"
  | "favourites"
  | "drill";

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
    // Cards live inside the Library, so it stays lit while reading one
    isActive: (loc) => loc === "/" || loc.startsWith("/card/"),
  },
  {
    id: "playbooks",
    label: "Playbooks",
    href: "/playbooks",
    icon: BookOpen,
    isActive: (loc) => loc === "/playbooks",
  },
  {
    id: "phrases",
    label: "Phrases",
    href: "/phrases",
    icon: MessagesSquare,
    isActive: (loc) => loc === "/phrases",
  },
  {
    id: "favourites",
    label: "Saved",
    href: "/favourites",
    icon: Heart,
    isActive: (loc) => loc === "/favourites",
  },
  {
    id: "drill",
    label: "Drill",
    href: "/drill",
    icon: Dumbbell,
    isActive: (loc) => loc === "/drill",
  },
];

const PAGE_TITLES: Record<string, string> = {
  "/": "Library",
  "/playbooks": "Playbooks",
  "/phrases": "Phrase Bank",
  "/favourites": "Favourites",
  "/drill": "Daily Drill",
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
  return PAGE_TITLES[location] ?? "Page not found";
}

// Small counters shown on nav items: saved items, and the drill streak (or a
// tick once today's drill is done)
export function useNavBadges(): Partial<Record<NavDestinationId, string>> {
  const { totalCount } = useFavourites();
  const drill = loadDrillState();
  const badges: Partial<Record<NavDestinationId, string>> = {};
  if (totalCount > 0) badges.favourites = totalCount > 99 ? "99+" : String(totalCount);
  if (isStreakActive(drill) && drill.streak > 0) badges.drill = String(drill.streak);
  else if (isCompletedToday(drill)) badges.drill = "✓";
  return badges;
}
