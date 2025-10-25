"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FeedItem, mockFeedItems, FeedItemType, LoreFeedItem, StreamerActivityFeedItem, TopQuestFeedItem, PlayerActivityFeedItem, FeaturedQuestFeedItem } from '@/lib/mock-quests-feed';
import { Quest } from '@/lib/quests-mock-data';
import { QuestCard } from '../QuestCard';
import { Users, Video, Award, Star } from 'lucide-react';

// --- Sub-components for each Feed Item Type ---

const LoreBlock: React.FC<{ item: LoreFeedItem }> = ({ item }) => (
  <motion.div
    className="relative bg-gradient-to-b from-[#1a162c]/80 to-[#140f22]/60 p-6 rounded-lg border border-purple-900/30 shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    <h2 className="text-2xl font-bold text-purple-300 mb-2">{item.title}</h2>
    <p className="text-gray-300 italic">&quot;{item.text}&quot;</p>
  </motion.div>
);

const rarityColors: { [key: string]: string } = {
  Common: 'ring-gray-500/50',
  Rare: 'ring-blue-500/50',
  Epic: 'ring-purple-500/50',
  Legendary: 'ring-yellow-500/50',
  Mythic: 'ring-red-500/50',
};

const StreamerActivityBlock: React.FC<{ item: StreamerActivityFeedItem }> = ({ item }) => (
  <motion.div
    className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4 flex items-center space-x-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold bg-[#231d3b] text-white ring-2 ${rarityColors[item.quest.rarity]}`}>
      {item.streamer.avatar}
    </div>
    <div>
      <p className="text-gray-300">
        <span className="font-bold text-white">@{item.streamer.name}</span> {item.action}: <span className="text-purple-300 font-semibold">&quot;{item.quest.title}&quot;</span>
      </p>
    </div>
    <Video className="text-red-500 ml-auto flex-shrink-0" size={20} />
  </motion.div>
);

const TopQuestBlock: React.FC<{ item: TopQuestFeedItem, onQuestClick: (quest: Quest) => void, acceptedQuests: string[] }> = ({ item, onQuestClick, acceptedQuests }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-lg font-semibold text-purple-200 mb-2 pl-2 flex items-center"><Star size={18} className="mr-2 text-yellow-400"/> Top Quest Spotlight</h3>
    <QuestCard quest={item.quest} onClick={() => onQuestClick(item.quest)} variant="expanded" isAccepted={acceptedQuests.includes(item.quest.id)} />
  </motion.div>
);

const PlayerActivityBlock: React.FC<{ item: PlayerActivityFeedItem }> = ({ item }) => (
  <motion.div
    className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4 flex items-center space-x-4"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <Award className="text-green-400" size={20} />
    <div>
      <p className="text-gray-300">
        <span className="font-bold text-white">@{item.player.name}</span> {item.action} <span className="text-purple-300 font-semibold">&quot;{item.quest.title}&quot;</span>. {item.details}
      </p>
    </div>
  </motion.div>
);

const FeaturedQuestBlock: React.FC<{ item: FeaturedQuestFeedItem, onQuestClick: (quest: Quest) => void, acceptedQuests: string[] }> = ({ item, onQuestClick, acceptedQuests }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
    >
        <QuestCard quest={item.quest} onClick={() => onQuestClick(item.quest)} variant="compact" isAccepted={acceptedQuests.includes(item.quest.id)} />
    </motion.div>
);

// --- Main LivingFeed Component ---

interface LivingFeedProps {
  onQuestClick: (quest: Quest) => void;
  acceptedQuests: string[];
}

const LivingFeed: React.FC<LivingFeedProps> = ({ onQuestClick, acceptedQuests }) => {
  const renderFeedItem = (item: FeedItem) => {
    switch (item.type) {
      case FeedItemType.Lore:
        return <LoreBlock item={item} />;
      case FeedItemType.StreamerActivity:
        return <StreamerActivityBlock item={item} />;
      case FeedItemType.TopQuest:
        return <TopQuestBlock item={item} onQuestClick={onQuestClick} acceptedQuests={acceptedQuests} />;
      case FeedItemType.PlayerActivity:
        return <PlayerActivityBlock item={item} />;
      case FeedItemType.FeaturedQuest:
        return <FeaturedQuestBlock item={item} onQuestClick={onQuestClick} acceptedQuests={acceptedQuests} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {mockFeedItems.map(item => (
        <div key={item.id}>
          {renderFeedItem(item)}
        </div>
      ))}
    </div>
  );
};

export default LivingFeed;
