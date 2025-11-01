'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useSideMenu } from './SideMenuProvider';
import Navigation from './Navigation';
import ProfilePanel from './ProfilePanel';
import { StarfieldBackground } from '@/components/StarfieldBackground';
import { X, Settings } from 'lucide-react';

const SideMenu = () => {
  const { isOpen, closeMenu } = useSideMenu();
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isProfilePage = pathname === '/profile';
  const isMenuVisible = isOpen || isProfilePage;

  // Close menu on click outside (disabled on profile page)
  useEffect(() => {
    if (isProfilePage) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.closest('[data-testid="side-menu-toggle"]')) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu, isProfilePage]);

  // Close menu on 'Escape' key press (disabled on profile page)
  useEffect(() => {
    if (isProfilePage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, isProfilePage]);

  return (
    <>
      {/* Overlay for mobile (not shown on profile page) */}
      {!isProfilePage && (
        <div
          className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Side Menu Panel */}
      <aside
        ref={menuRef}
        className={`fixed top-0 left-0 h-full z-40 flex flex-col
                    w-full lg:w-80
                    bg-cosmic-dark
                    border-r border-highlight/30
                    transition-transform duration-400 ease-out
                    ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight animate-breathing-glow pointer-events-none" />
        <StarfieldBackground
          particleCount={50}
          particleColor="rgba(163, 138, 209, 0.5)"
          radiusRange={[0.4, 0.8]}
          opacityRange={[0.25, 0.35]}
          speedRange={[-0.125, 0.125]}
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* Header with close button (hidden on profile page) */}
        {!isProfilePage && (
            <div className="relative z-10 p-4 flex items-center justify-between border-b border-white/10">
            <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 text-text-main/70 transition-all hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(163,138,209,0.7)]"
            >
                <X size={24} />
            </button>
            <button
                aria-label="Settings"
                className="p-2 text-text-main/70 transition-all hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(163,138,209,0.7)]"
            >
                <Settings size={22} />
            </button>
            </div>
        )}
        {/* Placeholder for header on profile page to maintain layout */}
        {isProfilePage && (
            <div className="relative z-10 p-4 h-[65px] flex items-center justify-between border-b border-white/10" />
        )}
        <div data-testid="side-menu-scroll-container" className="relative z-10 p-6 flex-grow flex flex-col overflow-y-auto">
          <div className="flex-grow">
            <Navigation />
          </div>
          <div className="mt-8">
            <ProfilePanel />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;