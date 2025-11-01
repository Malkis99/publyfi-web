'use client';

import { usePathname } from 'next/navigation';
import { useSideMenu } from './SideMenuProvider';
import { Menu, X } from 'lucide-react';

const MenuButton = () => {
  const { isOpen, toggleMenu } = useSideMenu();
  const pathname = usePathname();

  // On the profile page, the menu is pinned, so we don't need a button to toggle it.
  if (pathname === '/profile') {
    return null;
  }

  return (
    <button
      onClick={toggleMenu}
      className={`fixed top-4 left-4 z-50 p-2 rounded-full text-white focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 group transition-all duration-300 ease-in-out hover:scale-110 ${isOpen ? 'hidden' : ''}`}
      style={{ filter: 'drop-shadow(0 0 8px rgba(163, 138, 209, 0.7))' }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      data-testid="side-menu-toggle"
    >
      {isOpen ? <X size={26} /> : <Menu size={26} />}
    </button>
  );
};

export default MenuButton;