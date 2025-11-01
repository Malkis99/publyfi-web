"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quest } from '@/lib/quests-mock-data';
import { getRarityColor } from '@/lib/rarity-colors';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedQuestCardProps {
  quest: Quest;
  badge: string;
  onClick: () => void;
}

const FeaturedQuestCard: React.FC<FeaturedQuestCardProps> = ({ quest, badge, onClick }) => {
  const rarityColor = getRarityColor(quest.rarity);

  return (
    <motion.div
      className="relative col-span-1 md:col-span-2 bg-[#231d3b]/50 border border-purple-900/30 rounded-lg overflow-hidden group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 h-full w-1" style={{ backgroundColor: rarityColor }} />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-semibold px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full">
              {badge}
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">{quest.title}</h3>
            <p className="text-sm text-gray-400">Posted by @{quest.giver.name}</p>
          </div>
          <div className="text-right">
             <div className="flex items-center justify-end space-x-2">
                {quest.rewards.map((reward, index) => (
                    <div key={index} className="px-2 py-1 text-xs bg-black/30 rounded-md text-purple-200">{reward.type.toUpperCase()}: {reward.value}</div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
            <Button onClick={onClick} variant="ghost" className="text-purple-300 hover:bg-purple-500/10 hover:text-white">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedQuestCard;
