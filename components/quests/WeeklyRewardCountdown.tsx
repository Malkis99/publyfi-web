"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift } from 'lucide-react';

const WeeklyRewardCountdown: React.FC = () => {
  return (
    <motion.div
      className="mt-8 p-4 bg-[#231d3b]/30 border border-purple-900/30 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-purple-200">Weekly Reward</h4>
        <div className="flex items-center text-sm text-gray-300">
          <Clock className="h-4 w-4 mr-2 text-purple-400" />
          <span>04d 18h 32m</span>
        </div>
      </div>
      <div className="border-t border-purple-900/40 my-3" />
      <div>
        <div className="flex items-center text-sm text-yellow-300 mb-2">
            <Gift className="h-4 w-4 mr-2 text-yellow-400" />
            <span className="font-semibold">Prime Rewards Available:</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
            Mystery Case, Equipment Piece, Profile Customization Item, Sticker Pack.
        </p>
      </div>
    </motion.div>
  );
};

export default WeeklyRewardCountdown;
