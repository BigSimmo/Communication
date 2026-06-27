import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

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
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerDetailsOpen, setHeaderDetailsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((open) => !open);
  };

  const openHeaderDetails = () => {
    setHeaderDetailsOpen(true);
  };

  const closeHeaderDetails = () => {
    setHeaderDetailsOpen(false);
  };

  const toggleHeaderDetails = () => {
    setHeaderDetailsOpen((open) => !open);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (searchOpen) {
          closeSearch();
        } else {
          openSearch();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen]);

  return (
    <NavContext.Provider
      value={{
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
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
