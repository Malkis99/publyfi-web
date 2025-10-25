
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { mockPlayerReputation } from '@/lib/quests-widgets-mock-data';

const PlayerReputation = () => {
  const { rank, currentXp, nextRankXp } = mockPlayerReputation;
  const progressPercentage = (currentXp / nextRankXp) * 100;

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-purple-400" />
        Player Reputation
      </h3>
      <div className="text-center mb-4">
        <p className="text-purple-300 text-xl font-bold">{rank}</p>
        <p className="text-sm text-gray-400">Current Rank</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
          <span>{currentXp} XP</span>
          <span>{nextRankXp} XP</span>
        </div>
        <div className="w-full bg-black/30 rounded-full h-2.5 overflow-hidden border border-purple-900/50">
          <motion.div
            className="h-full rounded-full bg-purple-500"
            style={{
              boxShadow: '0 0 8px rgba(168, 85, 247, 0.7), 0 0 4px rgba(168, 85, 247, 0.5)',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">Progress to next rank</p>
      </div>
    </div>
  );
};

export default PlayerReputation;
