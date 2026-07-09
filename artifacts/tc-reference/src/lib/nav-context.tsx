import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface NavContextType {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  headerDetailsOpen: boolean;
  openHeaderDetails: () => void;
  closeHeaderDetails: () => void;
  toggleHeaderDetails: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  searchInputRef: RefObject<HTMLInputElement | null>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerDetailsOpen, setHeaderDetailsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((open) => !open);
  }, []);

  const openHeaderDetails = useCallback(() => {
    setHeaderDetailsOpen(true);
  }, []);

  const closeHeaderDetails = useCallback(() => {
    setHeaderDetailsOpen(false);
  }, []);

  const toggleHeaderDetails = useCallback(() => {
    setHeaderDetailsOpen((open) => !open);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const contextValue = useMemo(
    () => ({
      searchOpen,
      openSearch,
      closeSearch,
      toggleSearch,
      headerDetailsOpen,
      openHeaderDetails,
      closeHeaderDetails,
      toggleHeaderDetails,
      searchQuery,
      setSearchQuery,
      searchInputRef,
    }),
    [
      headerDetailsOpen,
      openHeaderDetails,
      openSearch,
      closeHeaderDetails,
      closeSearch,
      searchInputRef,
      searchOpen,
      searchQuery,
      setSearchQuery,
      toggleHeaderDetails,
      toggleSearch,
    ],
  );

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
