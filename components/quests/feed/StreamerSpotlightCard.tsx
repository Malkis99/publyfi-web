"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Streamer {
    name: string;
    avatarUrl?: string;
}

interface StreamerSpotlightCardProps {
  streamers: Streamer[];
}

const StreamerSpotlightCard: React.FC<StreamerSpotlightCardProps> = ({ streamers }) => {
  return (
    <motion.div
      className="p-4 bg-black/20 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <h5 className="text-center text-sm font-semibold text-purple-200/80 mb-4">Now Hosting Active Quests</h5>
      <div className="flex justify-center items-center space-x-2">
        <TooltipProvider>
            {streamers.map((streamer, index) => (
                 <Tooltip key={index}>
                    <TooltipTrigger>
                        <Avatar>
                            <AvatarFallback className="bg-purple-800/60 text-purple-200 font-bold">
                                {streamer.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>@{streamer.name}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default StreamerSpotlightCard;
