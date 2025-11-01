"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, Shield, Zap, Award, Star, ChevronsRight, Info } from 'lucide-react';
import { Quest, QuestRarity, RewardType } from '@/lib/quests-mock-data';

interface QuestCardProps {
  quest: Quest;
  onClick: () => void;
  variant?: 'default' | 'compact' | 'expanded';
  isAccepted?: boolean;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, onClick, variant = 'default', isAccepted = false }) => {
  const isCompact = variant === 'compact';
  const isExpanded = variant === 'expanded';
  const rarityStyles = {
    Common: {
      card: 'border-gray-500/20 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-500/40',
      title: 'text-gray-200',
      glow: 'shadow-[0_0_8px_rgba(156,163,175,0.05)]',
    },
    Rare: {
      card: 'border-blue-500/20 bg-blue-900/30 hover:bg-blue-900/50 hover:border-blue-500/40',
      title: 'text-blue-300',
      glow: 'shadow-[0_0_10px_rgba(96,165,250,0.1)]',
    },
    Epic: {
      card: 'border-purple-500/20 bg-purple-900/40 hover:bg-purple-900/60 hover:border-purple-500/40',
      title: 'text-purple-300',
      glow: 'shadow-[0_0_12px_rgba(192,132,252,0.15)]',
    },
    Legendary: {
      card: 'border-yellow-500/20 bg-yellow-900/40 hover:bg-yellow-900/60 hover:border-yellow-500/40',
      title: 'text-yellow-300',
      glow: 'shadow-[0_0_15px_rgba(250,204,21,0.2)]',
    },
    Mythic: {
      card: 'border-red-500/20 bg-red-900/50 hover:bg-red-900/70 hover:border-red-500/40',
      title: 'text-red-400',
      glow: 'shadow-[0_0_18px_rgba(248,113,113,0.25)]',
    },
  };

  const styles = rarityStyles[quest.rarity];

  const renderGiverIcon = () => {
    if (quest.giver.avatarUrl) {
      return <Image src={quest.giver.avatarUrl} alt={quest.giver.name} width={24} height={24} className="rounded-full" />;
    }
    return quest.questType === 'Platform' ? <Shield className="w-5 h-5 text-indigo-400" /> : <User className="w-5 h-5 text-gray-400" />;
  };

  const renderRewardPreview = () => {
    const primaryReward = quest.rewards[0];
    const iconMap: { [key in RewardType]: React.ReactNode } = {
      token: <Award className="w-4 h-4 text-yellow-400" />,
      xp: <Zap className="w-4 h-4 text-green-400" />,
      reputation: <Shield className="w-4 h-4 text-blue-400" />,
      nft: <Star className="w-4 h-4 text-purple-400" />,
      special: <ChevronsRight className="w-4 h-4 text-red-400" />,
    };
    return (
        <div className="flex items-center gap-2">
            {iconMap[primaryReward.type]}
            <span className="font-semibold">{primaryReward.value} {primaryReward.type === 'xp' ? 'XP' : ''}</span>
            {quest.rewards.length > 1 && <span className="text-xs text-gray-500">+{quest.rewards.length - 1} more</span>}
        </div>
    );
  };

  const cardLayoutClasses = isCompact ? 'p-3' : (isExpanded ? 'p-8 flex-col h-full' : 'p-6 flex-col h-full');

  return (
    <motion.button
      aria-label={`Quest card for ${quest.title}`}
      className={`relative rounded-lg border backdrop-blur-sm bg-black/20 text-left w-full flex transition-all duration-300 ${styles.card} ${styles.glow} overflow-hidden ${cardLayoutClasses}`}
      whileHover={{ scale: isCompact ? 1.03 : 1.02, y: isCompact ? 0 : -5 }}
      onClick={onClick}
    >
      {quest.chain && !isCompact && (
        <div className="absolute top-0 left-0 right-0 bg-black/40 py-1 px-2 text-center text-xs text-amber-300 font-semibold">
          {quest.chain.name} ({quest.chain.currentStep}/{quest.chain.totalSteps})
        </div>
      )}
      <div className={`absolute text-xs font-bold px-2 py-1 rounded-md bg-black/50 ${isCompact ? 'top-2 right-2' : 'top-4 right-4'}`}>{quest.rarity}</div>

      <div className={isCompact ? 'flex-grow flex items-center gap-3' : 'flex-grow'}>
          <div className={`flex items-center ${isCompact ? 'gap-2' : 'gap-3 mb-4'}`}>
            {renderGiverIcon()}
            {!isCompact && (
              <div>
                <h3 className={`${isExpanded ? 'text-3xl' : 'text-xl'} font-bold ${styles.title}`}>{quest.title}</h3>
                <p className="text-sm text-gray-400">Quest by {quest.giver.name}</p>
              </div>
            )}
            {isCompact && (
               <h3 className={`text-base font-bold ${styles.title}`}>{quest.title}</h3>
            )}
          </div>
          {!isCompact && <p className="text-gray-300 text-sm mb-4 line-clamp-2">{quest.description}</p>}
      </div>

      {!isCompact && (
        <div className="flex-shrink-0">
            <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{'★'.repeat(quest.difficulty).padEnd(5, '☆')}</span>
              </div>
              <span>{quest.questType}</span>
            </div>

            <div className="border-t border-gray-700/50 pt-4">
              <h4 className="font-semibold text-gray-200 mb-2 text-xs">REWARDS</h4>
              <div className="text-sm">
                {renderRewardPreview()}
              </div>
            </div>
        </div>
      )}
       {!isCompact && (
        <div className={`absolute bottom-2 right-2 text-xs flex items-center gap-1 ${isAccepted ? 'text-green-400' : 'text-gray-600'}`}>
          {isAccepted ? 'View Progress' : 'Click to view details'}
          <Info className="w-3 h-3" />
        </div>
       )}
    </motion.button>
  );
};
