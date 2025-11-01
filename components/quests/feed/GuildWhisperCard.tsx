"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface GuildWhisperCardProps {
  text: string;
}

const GuildWhisperCard: React.FC<GuildWhisperCardProps> = ({ text }) => {
  return (
    <motion.div
      className="text-center py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
      }}
    >
      <p className="text-sm italic text-purple-400/40">{text}</p>
    </motion.div>
  );
};

export default GuildWhisperCard;
