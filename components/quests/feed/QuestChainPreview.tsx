"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';
import { Quest } from '@/lib/quests-mock-data';

interface QuestChainPreviewProps {
  chainName: string;
  quests: Quest[];
  acceptedQuests: string[];
}

const QuestChainPreview: React.FC<QuestChainPreviewProps> = ({ chainName, quests, acceptedQuests }) => {
  const completedSteps = quests.filter(q => acceptedQuests.includes(q.id) || q.status === 'completed').length;
  const totalSteps = quests.length;

  return (
    <motion.div
      className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-purple-300">Quest Chain</p>
          <h4 className="font-bold text-white">{chainName}</h4>
        </div>
        <p className="font-mono text-sm text-gray-300">{completedSteps} / {totalSteps}</p>
      </div>
      <div className="flex items-center space-x-2">
        {quests.map((quest, index) => {
          const isCompleted = acceptedQuests.includes(quest.id) || quest.status === 'completed';
          return (
            <React.Fragment key={quest.id}>
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${isCompleted ? 'border-yellow-400 bg-yellow-400/20' : 'border-gray-600 bg-black/30'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <GitCommit size={16} className={isCompleted ? 'text-yellow-300' : 'text-gray-500'} />
              </motion.div>
              {index < quests.length - 1 && (
                <div className={`flex-1 h-0.5 ${isCompleted ? 'bg-yellow-400/50' : 'bg-gray-600/50'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuestChainPreview;
