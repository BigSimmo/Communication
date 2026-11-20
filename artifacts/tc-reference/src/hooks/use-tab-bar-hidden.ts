import { useSyncExternalStore } from "react";

const tabBar = () =>
  document.querySelector<HTMLElement>('[data-testid="bottom-tab-bar"]');

function subscribe(onChange: () => void) {
  const bar = tabBar();
  if (!bar || typeof MutationObserver === "undefined") return () => {};
  const observer = new MutationObserver(onChange);
  observer.observe(bar, { attributes: true, attributeFilter: ["data-hidden"] });
  return () => observer.disconnect();
}

const getSnapshot = () => tabBar()?.getAttribute("data-hidden") === "true";

/**
 * Whether the phone tab bar is currently slid out of view. Anything docked
 * above the bar reads this to drop down into the space it leaves, rather
 * than float over an empty strip. False where there is no tab bar.
 */
export function useTabBarHidden(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
