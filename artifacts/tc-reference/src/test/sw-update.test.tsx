import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { UpdateToast } from "@/components/update-toast";
import {
  __resetSwUpdateForTests,
  registerServiceWorker,
} from "@/lib/sw-update";

class FakeTarget {
  private handlers = new Map<string, Array<() => void>>();
  addEventListener(type: string, fn: () => void) {
    this.handlers.set(type, [...(this.handlers.get(type) ?? []), fn]);
  }
  emit(type: string) {
    for (const fn of this.handlers.get(type) ?? []) fn();
  }
}

class FakeWorker extends FakeTarget {
  state = "installing";
  postMessage = vi.fn();
}

function setup({
  controller = {} as object | null,
  waiting = null as FakeWorker | null,
} = {}) {
  const registration = Object.assign(new FakeTarget(), {
    installing: null as FakeWorker | null,
    waiting,
    update: vi.fn().mockResolvedValue(undefined),
  });
  const container = Object.assign(new FakeTarget(), {
    controller,
    register: vi.fn().mockResolvedValue(registration),
  });
  return { registration, container };
}

afterEach(() => {
  __resetSwUpdateForTests();
  vi.restoreAllMocks();
});

describe("service worker update prompt", () => {
  it("registers sw.js under the app base", async () => {
    const { container } = setup();
    await registerServiceWorker(container as never, "/app/");
    expect(container.register).toHaveBeenCalledWith("/app/sw.js", {
      scope: "/app/",
    });
  });

  it("stays hidden on first install (no controlling worker)", async () => {
    const { container, registration } = setup({ controller: null });
    render(<UpdateToast />);
    await act(async () => {
      await registerServiceWorker(container as never, "/");
      const worker = new FakeWorker();
      registration.installing = worker;
      registration.emit("updatefound");
      worker.state = "installed";
      worker.emit("statechange");
    });
    expect(screen.queryByTestId("update-toast")).toBeNull();
  });

  it("prompts when an update installs, and activates it on Reload", async () => {
    const { container, registration } = setup();
    render(<UpdateToast />);
    const worker = new FakeWorker();
    await act(async () => {
      await registerServiceWorker(container as never, "/");
      registration.installing = worker;
      registration.emit("updatefound");
      worker.state = "installed";
      registration.waiting = worker;
      worker.emit("statechange");
    });
    expect(screen.getByText("A new version is ready.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reload" }));
    expect(worker.postMessage).toHaveBeenCalledWith({ type: "SKIP_WAITING" });
  });

  it("prompts for a worker already waiting at startup, and Later hides it", async () => {
    const waiting = new FakeWorker();
    const { container } = setup({ waiting });
    render(<UpdateToast />);
    await act(async () => {
      await registerServiceWorker(container as never, "/");
    });
    fireEvent.click(screen.getByRole("button", { name: "Later" }));
    expect(screen.queryByTestId("update-toast")).toBeNull();
    expect(waiting.postMessage).not.toHaveBeenCalled();
  });

  it("survives a failed registration", async () => {
    const { container } = setup();
    container.register.mockRejectedValueOnce(new Error("blocked"));
    await expect(
      registerServiceWorker(container as never, "/"),
    ).resolves.toBeNull();
  });
});
