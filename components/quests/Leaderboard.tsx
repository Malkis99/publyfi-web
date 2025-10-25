
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Trophy } from 'lucide-react';
import { mockLeaderboard } from '@/lib/quests-widgets-mock-data';

const rarityColors = [
    'border-yellow-400 text-yellow-400', // Rank 1 (Legendary/Mythic feel)
    'border-purple-400 text-purple-400', // Rank 2 (Epic feel)
    'border-blue-400 text-blue-400',     // Rank 3 (Rare feel)
    'border-gray-500 text-gray-500',      // Rank 4
    'border-gray-600 text-gray-600',      // Rank 5
]

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 3:
        return <Trophy className="w-5 h-5 text-yellow-600" />;
      default:
        return <span className="text-gray-500 w-5 text-center">{rank}</span>;
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-200 mb-4">Top Adventurers</h3>
      <ul className="space-y-3">
        {mockLeaderboard.map((player, index) => (
          <motion.li
            key={player.rank}
            className="flex items-center justify-between p-2 rounded-md transition-colors hover:bg-purple-500/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">{getRankIcon(player.rank)}</div>
              <div className={`w-8 h-8 rounded-full border-2 ${rarityColors[index] || 'border-gray-700'} flex items-center justify-center font-bold text-sm bg-black/20`}>
                {player.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-semibold text-gray-300">@{player.name}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-purple-300">{player.totalXp.toLocaleString()} XP</p>
              <p className="text-xs text-gray-500">{player.questsCompleted} quests</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
