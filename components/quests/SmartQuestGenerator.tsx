"use client";

import { Gem, ChevronsRight } from 'lucide-react';
import { Quest, QuestRarity } from '@/lib/quests-mock-data';
import { motion } from 'framer-motion';

interface SmartQuestGeneratorProps {
  quests: Quest[];
}

const rarityStyles: Record<QuestRarity, string> = {
    Common: 'text-gray-400',
    Rare: 'text-blue-400',
    Epic: 'text-purple-400',
    Legendary: 'text-yellow-400',
    Mythic: 'text-red-400',
};

const CompactQuestItem = ({ quest, isLast }: { quest: Quest, isLast: boolean }) => {
    return (
        <motion.li
            className="relative pl-8 py-3"
            whileHover={{ backgroundColor: 'rgba(163, 138, 209, 0.1)' }}
            transition={{ duration: 0.2 }}
        >
            {/* Connecting Line */}
            {!isLast && <div className="absolute top-0 left-3.5 w-0.5 h-full bg-purple-900/50" />}

            {/* Node */}
            <div className="absolute top-5 left-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-purple-700 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <p className={`font-semibold ${rarityStyles[quest.rarity]}`}>{quest.title}</p>
                    <p className="text-xs text-gray-500">{quest.rarity} - Daily Quest</p>
                </div>
                <ChevronsRight className="w-5 h-5 text-gray-600" />
            </div>
        </motion.li>
    );
};


export const SmartQuestGenerator = ({ quests }: SmartQuestGeneratorProps) => {
  const dailyQuests = quests.filter(q => q.questType === 'Daily').slice(0, 5); // Limit for sidebar aesthetics

  return (
    <div className="w-full p-4 rounded-lg bg-[#231d3b]/50 border border-purple-900/30 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4 px-2">
        <Gem className="w-6 h-6 text-cyan-400 animate-pulse" />
        <h3 className="text-xl font-bold text-white tracking-wider">
          Dynamic Quests
        </h3>
      </div>

      <ul className="space-y-1">
        {dailyQuests.map((quest, index) => (
          <CompactQuestItem
            key={quest.id}
            quest={quest}
            isLast={index === dailyQuests.length - 1}
          />
        ))}
      </ul>
       <p className="text-xs text-center text-cyan-400/70 mt-4">New quests in 24h</p>
    </div>
  );
};
