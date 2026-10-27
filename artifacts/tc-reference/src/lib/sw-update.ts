import { useEffect, useState } from "react";

// Service worker registration with an explicit "update available" step.
//
// The worker is built in vite-plugin-pwa "prompt" mode: a new version installs
// in the background and then waits. We tell the user, and only on their say-so
// post SKIP_WAITING and reload. Silently swapping the worker under an open tab
// can break lazy chunks that the old page still expects.

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;

type Listener = (waiting: ServiceWorker | null) => void;

let waitingWorker: ServiceWorker | null = null;
let activeRegistration: ServiceWorkerRegistration | null = null;
const listeners = new Set<Listener>();

function setWaiting(worker: ServiceWorker | null) {
  waitingWorker = worker;
  for (const listener of listeners) listener(worker);
}

function trackInstalling(
  registration: ServiceWorkerRegistration,
  container: ServiceWorkerContainer,
) {
  const installing = registration.installing;
  if (!installing) return;
  installing.addEventListener("statechange", () => {
    // Only an *update* needs a prompt; the first install has no controller.
    if (installing.state === "installed" && container.controller) {
      setWaiting(registration.waiting ?? installing);
    }
  });
}

export async function registerServiceWorker(
  container: ServiceWorkerContainer | undefined = typeof navigator !==
  "undefined"
    ? navigator.serviceWorker
    : undefined,
  base: string = import.meta.env.BASE_URL,
): Promise<ServiceWorkerRegistration | null> {
  if (!container) return null;
  let registration: ServiceWorkerRegistration;
  try {
    registration = await container.register(`${base}sw.js`, { scope: base });
  } catch {
    // Offline support is progressive: the app still works without a worker.
    return null;
  }

  activeRegistration = registration;
  if (registration.waiting && container.controller) {
    setWaiting(registration.waiting);
  }
  // An install that began before this resolved (e.g. from another tab) has
  // already fired updatefound, so attach to it directly.
  trackInstalling(registration, container);
  registration.addEventListener("updatefound", () =>
    trackInstalling(registration, container),
  );

  let reloading = false;
  container.addEventListener("controllerchange", () => {
    if (reloading) return;
    reloading = true;
    window.location.reload();
  });

  const checkForUpdate = () => {
    if (document.visibilityState === "visible" && navigator.onLine) {
      registration.update().catch(() => {});
    }
  };
  window.setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL_MS);
  document.addEventListener("visibilitychange", checkForUpdate);

  return registration;
}

/** Activate the waiting worker; the controllerchange listener reloads. */
export function applyUpdate() {
  waitingWorker?.postMessage({ type: "SKIP_WAITING" });
}

export function useUpdateAvailable(): boolean {
  const [available, setAvailable] = useState(waitingWorker !== null);
  useEffect(() => {
    const listener: Listener = (worker) => setAvailable(worker !== null);
    listeners.add(listener);
    listener(waitingWorker);
    return () => {
      listeners.delete(listener);
    };
  }, []);
  return available;
}

/**
 * Reload into the newest build. Used by missing-chunk recovery: in prompt
 * mode a plain reload would be answered by the old worker's precached HTML,
 * which still points at the removed chunk. Looks for a newer worker first and
 * activates it (the controllerchange listener then reloads); otherwise does a
 * normal reload.
 */
export async function reloadToLatest(
  reload: () => void = () => window.location.reload(),
): Promise<void> {
  if (!waitingWorker && activeRegistration) {
    try {
      await activeRegistration.update();
    } catch {
      // Offline or server error: fall through to a plain reload.
    }
    const pending = activeRegistration.waiting;
    if (pending && !waitingWorker) setWaiting(pending);
  }
  if (waitingWorker) {
    applyUpdate();
    return;
  }
  reload();
}

/** Test-only reset of module state. */
export function __resetSwUpdateForTests() {
  waitingWorker = null;
  activeRegistration = null;
  listeners.clear();
}
