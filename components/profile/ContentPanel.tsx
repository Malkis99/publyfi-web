'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Clapperboard, Film, Sparkles, ImageIcon, ToyBrick, BarChart3 } from 'lucide-react';

// Import all tab components
import { OverviewTab } from './tabs/OverviewTab';
import { InventoryTab } from './tabs/InventoryTab';
import { StatsTab } from './tabs/StatsTab';
import { StreamsTab } from './tabs/StreamsTab';
import { ReelsTab } from './tabs/ReelsTab';
import { ClipsTab } from './tabs/ClipsTab';
import { GalleryTab } from './tabs/GalleryTab';

const TABS = [
  { id: 'overview', label: 'Overview', icon: Eye, component: OverviewTab },
  { id: 'streams', label: 'Streams', icon: Clapperboard, component: StreamsTab },
  { id: 'reels', label: 'Reels', icon: Film, component: ReelsTab },
  { id: 'clips', label: 'Clips', icon: Sparkles, component: ClipsTab },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon, component: GalleryTab },
  { id: 'inventory', label: 'Inventory', icon: ToyBrick, component: InventoryTab },
  { id: 'stats', label: 'Stats', icon: BarChart3, component: StatsTab },
];

const TabButton = ({ isActive, onClick, label, icon: Icon }: { isActive: boolean, onClick: () => void, label: string, icon: React.ElementType }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -2 }}
    className={`flex-grow flex items-center justify-center space-x-1.5 px-3 py-2.5 text-xs font-semibold rounded-t-lg transition-colors duration-300 relative ${
      isActive
        ? 'text-white'
        : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
    }`}
  >
    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-accent' : ''}`} />
    <span>{label}</span>
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
        style={{ boxShadow: '0 0 8px 0px #a38ad1' }}
        layoutId="underline"
      />
    )}
  </motion.button>
);

export const ContentPanel = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const ActiveComponent = TABS.find(tab => tab.id === activeTab)?.component || OverviewTab;

  return (
    <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="flex justify-between border-b border-purple-500/20">
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            label={tab.label}
            icon={tab.icon}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-grow bg-gray-900/50 rounded-b-lg rounded-tr-lg overflow-y-auto">
        <AnimatePresence mode="wait">
          <ActiveComponent key={activeTab} />
        </AnimatePresence>
      </div>
    </div>
  );
};