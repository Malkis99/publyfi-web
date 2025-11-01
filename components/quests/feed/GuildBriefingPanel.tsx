"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GuildBriefingFeedItem } from '@/lib/mock-quests-feed';
import { Rss } from 'lucide-react';

const GuildBriefingPanel: React.FC<{ item: GuildBriefingFeedItem }> = ({ item }) => (
  <motion.div
    className="bg-transparent border border-purple-900/20 rounded-lg p-3 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="flex items-center justify-center space-x-2">
        <Rss className="text-purple-500/50" size={16} />
        <p className="text-gray-400 text-xs italic">{item.text}</p>
    </div>

  </motion.div>
);

export default GuildBriefingPanel;
