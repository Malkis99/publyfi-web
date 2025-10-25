'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, CheckSquare, Clock, Coins, Flame, Trophy, Gem, Users, MessageSquare, Calendar } from 'lucide-react';

// Updated data with progress percentages
const STATS_DATA = {
  '7d': [
    { icon: Clapperboard, label: 'Total Streams', value: '15', progress: 60 },
    { icon: CheckSquare, label: 'Quests Completed', value: '5', progress: 45 },
    { icon: Clock, label: 'Stream Time', value: '22 hrs', progress: 75 },
    { icon: Coins, label: 'Tokens Earned', value: '15K', progress: 80 },
    { icon: Users, label: 'Followers Gained', value: '1.2K', progress: 70 },
    { icon: MessageSquare, label: 'Engagement', value: '95%', progress: 95 },
  ],
  '30d': [
    { icon: Clapperboard, label: 'Total Streams', value: '62', progress: 70 },
    { icon: CheckSquare, label: 'Quests Completed', value: '21', progress: 65 },
    { icon: Clock, label: 'Stream Time', value: '98 hrs', progress: 85 },
    { icon: Coins, label: 'Tokens Earned', value: '78K', progress: 88 },
    { icon: Users, label: 'Followers Gained', value: '5.4K', progress: 78 },
    { icon: MessageSquare, label: 'Engagement', value: '93%', progress: 93 },
  ],
  'all': [
    { icon: Clapperboard, label: 'Total Streams', value: '1,204', progress: 85 },
    { icon: CheckSquare, label: 'Quests Completed', value: '87', progress: 70 },
    { icon: Clock, label: 'Total Stream Time', value: '3,450 hrs', progress: 90 },
    { icon: Coins, label: 'Tokens Earned', value: '1.2M', progress: 95 },
    { icon: Flame, label: 'Tokens Burned', value: '450K', progress: 50 },
    { icon: Trophy, label: 'Seasonal Rank', value: 'Diamond', progress: 80 },
    { icon: Gem, label: 'NFTs Collected', value: '256', progress: 60 },
    { icon: Users, label: 'Followers Gained', value: '25K', progress: 75 },
    { icon: MessageSquare, label: 'Engagement Score', value: '92%', progress: 92 },
    { icon: Calendar, label: 'Weekly Streaks', value: '12', progress: 98 },
  ],
};

const FILTERS = ['Last 7 days', 'Last 30 days', 'All Time'];
const FILTER_MAP: { [key: string]: '7d' | '30d' | 'all' } = {
  'Last 7 days': '7d',
  'Last 30 days': '30d',
  'All Time': 'all',
};

const FilterPill = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void; }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
        isActive ? 'bg-purple-600 text-white shadow-md' : 'bg-black/20 text-gray-300 hover:bg-white/10'
      }`}
    >
      {label}
    </button>
);

// New StatRow component with animated progress bar
const StatRow = ({ icon: Icon, label, value, progress }: { icon: React.ElementType, label: string, value: string, progress: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="flex items-center space-x-4 py-3"
  >
    <Icon className="w-5 h-5 text-purple-300 flex-shrink-0" />
    <span className="text-sm font-semibold text-gray-300 w-40 truncate">{label}</span>
    <div className="flex-grow h-2 bg-black/30 rounded-full overflow-hidden border border-white/10">
        <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'circOut' }}
        />
    </div>
    <span className="text-sm font-bold text-white w-24 text-right">{value}</span>
  </motion.div>
);

export const StatsTab = () => {
    const [activeFilter, setActiveFilter] = useState('Last 7 days');
    const currentStats = STATS_DATA[FILTER_MAP[activeFilter]];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Profile Statistics</h3>
                <div className="flex items-center gap-2">
                    {FILTERS.map(filter => (
                        <FilterPill
                            key={filter}
                            label={filter}
                            isActive={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col divide-y divide-white/5">
                <AnimatePresence>
                    {currentStats.map((stat, index) => (
                        <motion.div
                            key={`${activeFilter}-${stat.label}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <StatRow {...stat} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};