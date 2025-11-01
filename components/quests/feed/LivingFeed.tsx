"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FeedItem, mockFeedItems, FeedItemType, LoreFeedItem, StreamerActivityFeedItem, TopQuestFeedItem, PlayerActivityFeedItem, FeaturedQuestFeedItem, LiveStreamerFeedItem, CommunityHighlightFeedItem, GuildBriefingFeedItem } from '@/lib/mock-quests-feed';
import { Quest, mockQuests } from '@/lib/quests-mock-data';
import { QuestCard } from '../QuestCard';
import { Users, Video, Award, Star } from 'lucide-react';
import TopQuestSpotlight from './TopQuestSpotlight';
import LiveStreamerPanel from './LiveStreamerPanel';
import CommunityHighlightPanel from './CommunityHighlightPanel';
import GuildBriefingPanel from './GuildBriefingPanel';
import QuestChainPreview from './QuestChainPreview';

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
  // Separate Top Quests from the rest of the feed
  const topQuests = mockFeedItems.filter(item => item.type === FeedItemType.TopQuest) as TopQuestFeedItem[];
  const otherFeedItems = mockFeedItems.filter(item => item.type !== FeedItemType.TopQuest);

  // Get the first quest chain for the preview
  const questChainName = mockQuests.find(q => q.chain)?.chain?.name;
  const questChainQuests = questChainName ? mockQuests.filter(q => q.chain?.name === questChainName) : [];


  const renderFeedItem = (item: FeedItem) => {
    switch (item.type) {
      case FeedItemType.Lore:
        return <LoreBlock item={item} />;
      case FeedItemType.StreamerActivity:
        return <StreamerActivityBlock item={item} />;
      case FeedItemType.PlayerActivity:
        return <PlayerActivityBlock item={item} />;
      case FeedItemType.FeaturedQuest:
        return <FeaturedQuestBlock item={item} onQuestClick={onQuestClick} acceptedQuests={acceptedQuests} />;
      case FeedItemType.LiveStreamer:
        return <LiveStreamerPanel item={item as LiveStreamerFeedItem} />;
      case FeedItemType.CommunityHighlight:
        return <CommunityHighlightPanel item={item as CommunityHighlightFeedItem} />;
      case FeedItemType.GuildBriefing:
        return <GuildBriefingPanel item={item as GuildBriefingFeedItem} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Render the consolidated Top Quest Spotlight first */}
      <TopQuestSpotlight items={topQuests} onQuestClick={onQuestClick} acceptedQuests={acceptedQuests} />

      {questChainName && (
        <QuestChainPreview
            chainName={questChainName}
            quests={questChainQuests}
            acceptedQuests={acceptedQuests}
        />
      )}

      {/* Render the rest of the feed */}
      {otherFeedItems.map(item => (
        <div key={item.id}>
          {renderFeedItem(item)}
        </div>
      ))}
    </div>
  );
};

export default LivingFeed;
