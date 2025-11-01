"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quest } from '@/lib/quests-mock-data';
import { getRarityColor } from '@/lib/rarity-colors';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface LiveQuestAnnouncementCardProps {
  quest: Quest;
  onClick: () => void;
}

const LiveQuestAnnouncementCard: React.FC<LiveQuestAnnouncementCardProps> = ({ quest, onClick }) => {
    const rarityColor = getRarityColor(quest.rarity);

  return (
    <motion.div
      className="relative rounded-lg p-4 bg-gradient-to-r from-purple-900/30 to-black/20 border border-purple-700/50"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
        <div className="absolute top-0 left-0 h-full w-1 bg-purple-400" style={{ backgroundColor: rarityColor }}/>
        <div className="flex justify-between items-center">
            <div>
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider">New Quest Available</p>
                <h4 className="text-lg font-bold text-white">{quest.title}</h4>
            </div>
            <Button onClick={onClick} variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-500/10 hover:text-white">
                View <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
        </div>
    </motion.div>
  );
};

export default LiveQuestAnnouncementCard;
