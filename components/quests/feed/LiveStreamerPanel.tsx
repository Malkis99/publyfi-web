"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiveStreamerFeedItem } from '@/lib/mock-quests-feed';
import { Video } from 'lucide-react';

const LiveStreamerPanel: React.FC<{ item: LiveStreamerFeedItem }> = ({ item }) => (
  <motion.div
    className="bg-gradient-to-r from-purple-900/40 via-purple-900/20 to-transparent p-4 rounded-lg border border-purple-700/50 flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold bg-[#231d3b] text-white ring-2 ring-red-500">
      {item.streamer.avatar}
    </div>
    <div className="flex-grow">
      <p className="text-gray-200">
        <span className="font-bold text-white">🎥 @{item.streamer.name}</span> is Live — New Rare Quest: <span className="text-purple-300 font-semibold">&quot;{item.quest.title}&quot;</span>
      </p>
    </div>
    <div className="flex items-center space-x-2 text-red-500 animate-pulse">
      <Video size={20} />
      <span className="font-bold text-sm tracking-wider">LIVE</span>
    </div>
  </motion.div>
);

export default LiveStreamerPanel;
