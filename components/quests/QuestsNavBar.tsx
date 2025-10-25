"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Per instructions, "Platform Events" is renamed to "Platform Quests".
const tabs = ['Home', 'My Quests', 'Streamer Quests', 'Platform Quests'];

interface QuestsNavBarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const QuestsNavBar: React.FC<QuestsNavBarProps> = ({ activeTab, onTabClick }) => {
  return (
    <nav className="flex justify-center items-center space-x-4">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`relative rounded-lg px-6 py-3 text-base font-semibold transition-all duration-300 focus:outline-none
            bg-[#231d3b]/50 backdrop-blur-sm border border-purple-900/30
            hover:border-purple-700/50 hover:shadow-[0_0_20px_rgba(163,138,209,0.25)]
            tracking-wider
            ${activeTab === tab
              ? 'text-white'
              : 'text-purple-200/60 hover:text-white'
            }`
          }
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="relative z-10">{tab}</span>
          {activeTab === tab && (
            <motion.div
              layoutId="active-nav-underline"
              className="absolute bottom-[-2px] left-0 right-0 h-1 bg-purple-400/80 shadow-[0_0_10px_rgba(163,138,209,0.8)]"
              style={{ borderRadius: '2px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
};

export default QuestsNavBar;
