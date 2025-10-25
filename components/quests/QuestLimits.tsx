"use client";

import { motion, TargetAndTransition } from "framer-motion";
import { Hourglass, Calendar } from "lucide-react";

const QuestLimits = () => {
  const dailyQuests = { completed: 3, total: 5 };
  const weeklyQuests = { completed: 18, total: 25 };

  const dailyPercentage = (dailyQuests.completed / dailyQuests.total) * 100;
  const weeklyPercentage = (weeklyQuests.completed / weeklyQuests.total) * 100;

  const shimmerAnimation: TargetAndTransition = {
    x: ['-100%', '200%'],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 2 // Randomize start time
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-f3f4f7 mb-4">Quest Limits</h3>

      {/* Daily Limit */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-300 mb-1.5 px-1">
          <div className="flex items-center">
            <Hourglass className="w-4 h-4 mr-2 text-purple-300/80" />
            <span>Daily Limit</span>
          </div>
          <span className="font-mono">{dailyQuests.completed} / {dailyQuests.total}</span>
        </div>
        <div className="w-full bg-black/40 rounded-full h-2.5 relative overflow-hidden border border-purple-900/50">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-700/60 to-purple-500/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${dailyPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-1/2 bg-white/20"
              style={{ filter: 'blur(4px)' }}
              animate={shimmerAnimation}
            />
          </motion.div>
        </div>
      </div>

      {/* Weekly Limit */}
      <div>
        <div className="flex items-center justify-between text-sm text-gray-300 mb-1.5 px-1">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-purple-300/80" />
            <span>Weekly Limit</span>
          </div>
          <span className="font-mono">{weeklyQuests.completed} / {weeklyQuests.total}</span>
        </div>
        <div className="w-full bg-black/40 rounded-full h-2.5 relative overflow-hidden border border-purple-900/50">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600/60 to-purple-400/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${weeklyPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-1/2 bg-white/20"
              style={{ filter: 'blur(4px)' }}
              animate={{...shimmerAnimation, transition: {...shimmerAnimation.transition, delay: Math.random() * 2 + 0.5}}}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuestLimits;
