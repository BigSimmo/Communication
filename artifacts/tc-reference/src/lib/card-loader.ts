import type { CardData } from "./card-types";

type CardModule = Record<string, CardData>;
type CardModuleLoader = () => Promise<CardModule>;

export function createCardLoader(
  moduleLoadersById: ReadonlyMap<string, CardModuleLoader>,
) {
  const cardPromiseCache = new Map<string, Promise<CardData | null>>();
  let aggregatePromise: Promise<Readonly<Record<string, CardData>>> | null = null;

  function loadCard(cardId: string): Promise<CardData | null> {
    const cached = cardPromiseCache.get(cardId);
    if (cached) return cached;

    const loader = moduleLoadersById.get(cardId);
    if (!loader) {
      const missing = Promise.resolve(null);
      cardPromiseCache.set(cardId, missing);
      return missing;
    }

    let retryablePromise: Promise<CardData | null>;
    retryablePromise = loader()
      .then((module) => {
        const card = module[cardId];
        if (!card) {
          throw new Error(`Card module ${cardId} does not export ${cardId}`);
        }
        return card;
      })
      .catch((error: unknown) => {
        if (cardPromiseCache.get(cardId) === retryablePromise) {
          cardPromiseCache.delete(cardId);
        }
        throw error;
      });
    cardPromiseCache.set(cardId, retryablePromise);
    return retryablePromise;
  }

  function loadAllCards(): Promise<Readonly<Record<string, CardData>>> {
    if (aggregatePromise) return aggregatePromise;

    let retryablePromise: Promise<Readonly<Record<string, CardData>>>;
    retryablePromise = Promise.all(
      Array.from(moduleLoadersById.keys()).map(async (cardId) => {
        const card = await loadCard(cardId);
        if (!card) throw new Error(`Card module ${cardId} could not be loaded`);
        return [cardId, card] as const;
      }),
    )
      .then((entries) => Object.freeze(Object.fromEntries(entries)))
      .catch((error: unknown) => {
        if (aggregatePromise === retryablePromise) {
          aggregatePromise = null;
        }
        throw error;
      });
    aggregatePromise = retryablePromise;
    return retryablePromise;
  }

  return { loadAllCards, loadCard };
}

const cardModules = import.meta.glob<CardModule>("./cards/TC*.ts");
const moduleLoadersById = new Map<string, CardModuleLoader>();

for (const [path, loader] of Object.entries(cardModules)) {
  const id = path.match(/\/(TC\d{3})\.ts$/)?.[1];
  if (id) moduleLoadersById.set(id, loader);
}

const cardLoader = createCardLoader(moduleLoadersById);

export const loadAllCards = cardLoader.loadAllCards;
export const loadCard = cardLoader.loadCard;
