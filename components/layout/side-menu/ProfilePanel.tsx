'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import CreateActionWindow from './CreateActionWindow';
import { useSideMenu } from './SideMenuProvider';

const ProfilePanel = () => {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const createButtonRef = useRef<HTMLButtonElement>(null);
  const { closeMenu } = useSideMenu();

  const toggleCreateMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCreateOpen(prev => !prev);
  };

  const closeCreateMenu = () => {
    setCreateOpen(false);
  };

  return (
    <div className="relative">
      {/* Create Action Window */}
      <CreateActionWindow
        isOpen={isCreateOpen}
        onClose={closeCreateMenu}
        buttonRef={createButtonRef}
      />

      {/* Profile Section */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg">
        <Link href="/profile" onClick={closeMenu} className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full bg-bg-secondary border-2 border-accent shadow-glow transition-all duration-300 group-hover:scale-105 group-hover:shadow-accent/50" />
          <span className="font-medium text-text-main transition-colors duration-300 group-hover:text-white">Profile</span>
        </Link>
        <button
          ref={createButtonRef}
          onClick={toggleCreateMenu}
          className="px-4 py-2 text-sm font-semibold text-text-main rounded-md
                     bg-highlight/50 border border-accent/50
                     hover:bg-accent/70 hover:scale-105 hover:shadow-glow
                     transition-all duration-300"
        >
          + Create
        </button>
      </div>
    </div>
  );
};

export default ProfilePanel;