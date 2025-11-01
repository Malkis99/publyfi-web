"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const tabs = ['Home', 'My Quests', 'Streamer Quests', 'Platform Quests'];

interface QuestsNavBarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const QuestsNavBar: React.FC<QuestsNavBarProps> = ({ activeTab, onTabClick }) => {
  return (
    <div aria-label="Quest Categories" className="bg-[#140f22]/50 border-y border-purple-900/30 backdrop-blur-sm sticky top-[64px] z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <Button
                key={tab}
                variant="ghost"
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-purple-300/70 hover:text-white hover:bg-purple-900/30'}`}
                onClick={() => onTabClick(tab)}
              >
                {tab}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="underline"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestsNavBar;
