"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quest, QuestRarity } from '@/lib/quests-mock-data';
import { Star, Zap, Shield, Award } from 'lucide-react';
import { TopQuestFeedItem } from '@/lib/mock-quests-feed';

interface TopQuestSpotlightProps {
  items: TopQuestFeedItem[];
  onQuestClick: (quest: Quest) => void;
  acceptedQuests: string[];
}

const QuestIcon = ({ quest }: { quest: Quest }) => {
    switch(quest.questType) {
        case 'Streamer': return <Zap className="w-5 h-5 text-yellow-300" />;
        case 'Platform': return <Shield className="w-5 h-5 text-blue-300" />;
        case 'Community': return <Award className="w-5 h-5 text-purple-300" />;
        default: return <Star className="w-5 h-5 text-gray-300" />;
    }
};

const SpotlightCard: React.FC<{ quest: Quest; onClick: () => void }> = ({ quest, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative p-3 rounded-lg cursor-pointer border transition-all duration-300 overflow-hidden bg-[rgba(10,10,15,0.7)] hover:shadow-[0_0_15px_rgba(248,113,113,0.3)] border-red-900/50"
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.7, ease: "linear" }}
      />
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <QuestIcon quest={quest} />
        </div>
        <div>
          <h4 className="font-semibold text-white truncate text-sm">{quest.title}</h4>
          <p className="text-xs text-red-400/80">{quest.rarity}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TopQuestSpotlight: React.FC<TopQuestSpotlightProps> = ({ items, onQuestClick }) => {
  if (!items || items.length === 0) {
    return null;
  }

  // Take only the first 3 items to ensure they fit
  const spotlightItems = items.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-purple-200 mb-4 pl-2 flex items-center">
        <Star size={18} className="mr-2 text-yellow-400"/> Top Quest Spotlight
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        {spotlightItems.map((item) => (
          <div key={item.id} className="flex-1 min-w-0">
            <SpotlightCard
              quest={item.quest}
              onClick={() => onQuestClick(item.quest)}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopQuestSpotlight;
