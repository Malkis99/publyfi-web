"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface LoreFragmentCardProps {
  text: string;
}

const LoreFragmentCard: React.FC<LoreFragmentCardProps> = ({ text }) => {
  return (
    <motion.div
      className="relative text-center p-4 my-4 bg-black/20 border-y border-purple-800/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <Quote className="absolute top-2 left-2 h-5 w-5 text-purple-400/30 transform rotate-180" />
       <Quote className="absolute bottom-2 right-2 h-5 w-5 text-purple-400/30" />
      <p className="font-serif italic text-purple-200/60 text-base">{text}</p>
    </motion.div>
  );
};

export default LoreFragmentCard;
