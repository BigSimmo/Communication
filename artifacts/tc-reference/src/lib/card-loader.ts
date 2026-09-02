import type { CardData } from "./card-types";

type CardModule = Record<string, CardData>;
type CardModuleLoader = () => Promise<CardModule>;

const cardModules = import.meta.glob<CardModule>("./cards/TC*.ts");
const moduleLoadersById = new Map<string, CardModuleLoader>();

for (const [path, loader] of Object.entries(cardModules)) {
  const id = path.match(/\/(TC\d{3})\.ts$/)?.[1];
  if (id) moduleLoadersById.set(id, loader);
}

const cardPromiseCache = new Map<string, Promise<CardData | null>>();
let aggregatePromise: Promise<Readonly<Record<string, CardData>>> | null = null;

export function loadCard(cardId: string): Promise<CardData | null> {
  const cached = cardPromiseCache.get(cardId);
  if (cached) return cached;

  const loader = moduleLoadersById.get(cardId);
  if (!loader) {
    const missing = Promise.resolve(null);
    cardPromiseCache.set(cardId, missing);
    return missing;
  }

  const promise = loader().then((module) => {
    const card = module[cardId];
    if (!card) {
      throw new Error(`Card module ${cardId} does not export ${cardId}`);
    }
    return card;
  });
  cardPromiseCache.set(cardId, promise);
  return promise;
}

export function loadAllCards(): Promise<Readonly<Record<string, CardData>>> {
  if (aggregatePromise) return aggregatePromise;

  aggregatePromise = Promise.all(
    Array.from(moduleLoadersById.keys()).map(async (cardId) => {
      const card = await loadCard(cardId);
      if (!card) throw new Error(`Card module ${cardId} could not be loaded`);
      return [cardId, card] as const;
    }),
  ).then((entries) => Object.freeze(Object.fromEntries(entries)));

  return aggregatePromise;
}
