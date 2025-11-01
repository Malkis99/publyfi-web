"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift, Star } from 'lucide-react';

const DailyQuestSupport: React.FC = () => {
  return (
    <motion.div
      className="mt-8 p-4 bg-[#231d3b]/30 border border-purple-900/30 rounded-lg space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="flex items-center text-sm text-gray-300">
        <Clock className="h-4 w-4 mr-2 text-purple-400" />
        <span>Next reset: 12h 32m</span>
      </div>
      <div className="flex items-center text-sm text-green-300">
        <Gift className="h-4 w-4 mr-2 text-green-400" />
        <span>Daily bonus available</span>
      </div>
       <div className="border-t border-purple-900/40 my-2" />
      <div className="flex items-center text-sm text-purple-200">
        <Star className="h-4 w-4 mr-2 text-yellow-400" />
        <span>Complete 3 dailies for a mystery reward.</span>
      </div>
    </motion.div>
  );
};

export default DailyQuestSupport;
