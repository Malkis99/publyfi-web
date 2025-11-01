"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CommunityHighlightFeedItem } from '@/lib/mock-quests-feed';
import { MessageSquare } from 'lucide-react';

const CommunityHighlightPanel: React.FC<{ item: CommunityHighlightFeedItem }> = ({ item }) => (
  <motion.div
    className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4 flex items-center space-x-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <MessageSquare className="text-purple-400" size={20} />
    <div>
      <p className="text-gray-300 italic">{item.text}</p>
    </div>
  </motion.div>
);

export default CommunityHighlightPanel;
