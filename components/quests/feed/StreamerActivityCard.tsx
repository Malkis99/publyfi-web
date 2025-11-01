"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tv } from 'lucide-react';

interface StreamerActivityCardProps {
  streamer: string;
  action: string;
  questName: string;
}

const StreamerActivityCard: React.FC<StreamerActivityCardProps> = ({ streamer, action, questName }) => {
  return (
    <motion.div
      className="flex items-center space-x-4 p-4 bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tv className="h-6 w-6 text-purple-400 flex-shrink-0" />
      <p className="text-sm text-gray-200">
        <span className="font-bold text-white">@{streamer}</span> {action}{' '}
        <span className="font-semibold text-purple-300">&quot;{questName}&quot;</span>
      </p>
    </motion.div>
  );
};

export default StreamerActivityCard;
