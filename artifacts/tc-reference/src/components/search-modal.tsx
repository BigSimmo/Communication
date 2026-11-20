import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  SEARCH_ENTRY_STATE,
  SEARCH_INPUT_ID,
  SEARCH_PATH,
  searchHref,
} from "@/components/search/search-nav";

interface SearchModalProps {
  query: string;
  setQuery: (q: string) => void;
  onClose: () => void;
}

/**
 * Search used to open as a popout under the header. It is now the
 * full-screen /search route (pages/search.tsx), and this is what is left of
 * the popout: when the header's search button, the Library's search field
 * or Ctrl/Cmd+K "opens" it, it sends the reader to the search screen and
 * closes again. Anything already typed goes along.
 *
 * New code should link to the screen directly with `searchHref()`.
 */
export function SearchModal({ query, setQuery, onClose }: SearchModalProps) {
  const [location, navigate] = useLocation();
  const handedOver = useRef(false);

  useEffect(() => {
    if (handedOver.current) return;
    handedOver.current = true;
    if (location === SEARCH_PATH) {
      // Already searching: the shortcut puts the cursor back in the field.
      document.getElementById(SEARCH_INPUT_ID)?.focus();
    } else {
      navigate(searchHref({ q: query }), { state: SEARCH_ENTRY_STATE });
      // The search screen owns the query now; don't leave the Library
      // filtered by it.
      if (query) setQuery("");
    }
    onClose();
  }, [location, navigate, query, setQuery, onClose]);

  return null;
}
