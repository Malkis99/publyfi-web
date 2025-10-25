"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface GuildHighlightCardProps {
  text: string;
}

const GuildHighlightCard: React.FC<GuildHighlightCardProps> = ({ text }) => {
  return (
    <motion.div
      className="text-center p-4 my-4 bg-yellow-900/10 border-y border-yellow-500/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <Trophy className="mx-auto h-6 w-6 text-yellow-400/50 mb-2" />
      <p className="font-semibold italic text-yellow-200/80 text-base">{text}</p>
    </motion.div>
  );
};

export default GuildHighlightCard;
