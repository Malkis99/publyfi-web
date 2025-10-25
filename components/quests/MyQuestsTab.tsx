"use client";

import React from 'react';
import { QuestCard } from './QuestCard';
import { Quest } from '@/lib/quests-mock-data';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';

interface MyQuestsTabProps {
  acceptedQuests: Quest[];
  completedQuests: Quest[];
  onQuestClick: (quest: Quest) => void;
}

const CompletedQuestCard: React.FC<{ quest: Quest; onClick: () => void }> = ({ quest, onClick }) => (
    <div
      className="relative bg-[#1a162c]/50 rounded-lg p-4 border border-green-500/20 cursor-pointer transition-all duration-300 hover:bg-[#231d3b]/70"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-gray-400">{quest.title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <CheckCircle size={18} className="text-green-400" />
            <span className="text-sm font-semibold text-green-400">Completed</span>
          </div>
        </div>
        <div className="flex space-x-2">
          {quest.rewards.slice(0, 2).map(reward => (
            <Award key={reward.type} size={20} className="text-yellow-400/70" />
          ))}
        </div>
      </div>
  </div>
);

const MyQuestsTab: React.FC<MyQuestsTabProps> = ({ acceptedQuests, completedQuests, onQuestClick }) => {
  return (
    <div className="space-y-8">
      {/* Active Quests Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Active Quests</h2>
        {acceptedQuests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acceptedQuests.map((quest, index) => (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <QuestCard quest={quest} onClick={() => onQuestClick(quest)} isAccepted={true} variant="default" />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">You have no active quests.</p>
        )}
      </section>

      {/* Separator */}
      <div className="border-t border-purple-900/40 my-12"></div>

      {/* Completed Quests Section */}
      <section>
         <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="h-7 w-7 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Completed Quests</h2>
        </div>
        {completedQuests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-80">
            {completedQuests.map((quest, index) => (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <CompletedQuestCard quest={quest} onClick={() => onQuestClick(quest)} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">You have not completed any quests yet.</p>
        )}
      </section>
    </div>
  );
};

export default MyQuestsTab;
