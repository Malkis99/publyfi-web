"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center h-96 bg-black/20 rounded-lg p-8"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <SearchX className="h-24 w-24 text-blue-500/50" />
      </motion.div>
      <h2 className="mt-6 text-2xl font-bold text-white">No Treasures Found</h2>
      <p className="mt-2 text-lg text-gray-400">
        The marketplace is vast, but no items match your current search.
      </p>
      <p className="text-sm text-gray-500">Try adjusting your filters.</p>
    </motion.div>
  );
};

export default EmptyState;