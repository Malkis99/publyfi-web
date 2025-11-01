
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockActivityFeed } from '@/lib/quests-widgets-mock-data';
import { Zap } from 'lucide-react';

const rarityColors = {
  Rare: 'text-blue-400',
  Epic: 'text-purple-400',
  Legendary: 'text-yellow-400',
  Mythic: 'text-red-500',
};

const ActivityFeed = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mockActivityFeed.length);
    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentEvent = mockActivityFeed[index];

  return (
    <div className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4 backdrop-blur-lg mt-6">
      <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-green-400" />
        Activity Feed
      </h3>
      <div className="h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-sm"
          >
            <p className="text-gray-300">
              <span className="font-bold text-purple-300">{currentEvent.playerName}</span> completed
              <span className={`font-semibold ${rarityColors[currentEvent.questRarity]}`}> [{currentEvent.questTitle}]</span>
            </p>
            <p className="text-gray-400">and earned {currentEvent.reward}.</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivityFeed;
