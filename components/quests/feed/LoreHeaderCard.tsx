"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface LoreHeaderCardProps {
  text: string;
}

const LoreHeaderCard: React.FC<LoreHeaderCardProps> = ({ text }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg p-6 bg-[#231d3b]/30 border border-purple-900/30 text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Luminous glow */}
      <div className="absolute inset-0 bg-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,0.2)]" />

      <p className="relative z-10 text-lg italic text-purple-200/80 font-serif leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};

export default LoreHeaderCard;
