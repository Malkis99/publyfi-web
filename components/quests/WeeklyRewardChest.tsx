"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Shield, Brush, Badge } from 'lucide-react';

const rewards = [
  { name: 'Case', icon: <Box size={28} />, rarity: 'Rare' },
  { name: 'Equipment', icon: <Shield size={28} />, rarity: 'Epic' },
  { name: 'Customization', icon: <Brush size={28} />, rarity: 'Legendary' },
  { name: 'Sticker', icon: <Badge size={28} />, rarity: 'Common' },
];

const rarityColors: { [key: string]: string } = {
  Common: 'border-gray-500/30 hover:border-gray-500/60 hover:shadow-gray-500/20',
  Rare: 'border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20',
  Epic: 'border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20',
  Legendary: 'border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/20',
};

const WeeklyRewardChest = () => {
  return (
    <div className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4">
      <h3 className="font-bold text-lg text-white mb-4 text-center">Guild Reward Chest</h3>
      <div className="grid grid-cols-4 gap-3">
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.name}
            className={`flex flex-col items-center justify-center p-3 rounded-md cursor-pointer
              bg-[#231d3b]/50 border transition-all duration-300
              ${rarityColors[reward.rarity]}
              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-lg
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.05 }}
          >
            <div className="text-purple-300 mb-1.5">{reward.icon}</div>
            <p className="text-xs font-semibold text-gray-300 text-center">{reward.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyRewardChest;
