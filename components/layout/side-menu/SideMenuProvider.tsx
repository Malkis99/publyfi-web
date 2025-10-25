'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface SideMenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const SideMenuContext = createContext<SideMenuContextType | undefined>(undefined);

export const useSideMenu = () => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error('useSideMenu must be used within a SideMenuProvider');
  }
  return context;
};

export const SideMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = { isOpen, toggleMenu, closeMenu };

  return (
    <SideMenuContext.Provider value={value}>
      {children}
    </SideMenuContext.Provider>
  );
};