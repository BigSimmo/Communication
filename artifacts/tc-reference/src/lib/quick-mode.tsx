import { createContext, useContext, useState, ReactNode } from "react";

interface QuickModeContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const QuickModeContext = createContext<QuickModeContextType | undefined>(
  undefined,
);

export function QuickModeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuickModeContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </QuickModeContext.Provider>
  );
}

export function useQuickMode() {
  const context = useContext(QuickModeContext);
  if (context === undefined) {
    throw new Error("useQuickMode must be used within a QuickModeProvider");
  }
  return context;
}
