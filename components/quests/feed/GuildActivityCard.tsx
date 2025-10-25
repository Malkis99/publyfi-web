"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';

interface GuildActivityCardProps {
  text: string;
}

const GuildActivityCard: React.FC<GuildActivityCardProps> = ({ text }) => {
  return (
    <motion.div
      className="flex items-center space-x-3 p-3 bg-[#231d3b]/20 border-l-2 border-purple-700/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Rss className="h-5 w-5 text-purple-400/80" />
      </motion.div>
      <p className="text-sm text-gray-300 italic">{text}</p>
    </motion.div>
  );
};

export default GuildActivityCard;
