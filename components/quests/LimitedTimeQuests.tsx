"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const mockLimitedTimeQuests = [
  { id: 'ltq-1', title: 'Twilight Heist', expiresIn: 3 * 3600 + 45 * 60 + 22, summary: "Infiltrate the Shadow Syndicate's vault before dawn." },
  { id: 'ltq-2', title: 'Crystal Guardian', expiresIn: 10 * 3600 + 15 * 60 + 5, summary: "Defend the Sunstone Crystal from corrupted elementals." },
  { id: 'ltq-3', title: 'Void Anomaly', expiresIn: 23 * 3600 + 59 * 60 + 59, summary: "Investigate a mysterious portal threatening the outer sectors." },
];

const Countdown = ({ seconds }: { seconds: number }) => {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [remaining]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return <span className="font-mono text-sm text-red-400">{formatTime(remaining)}</span>;
};


const LimitedTimeQuests = () => {
  return (
    <TooltipProvider>
      <div className="bg-[#1a162c]/60 border border-purple-900/30 rounded-lg p-4">
        <h3 className="font-bold text-lg text-white mb-4">Limited-Time Quests</h3>
        <div className="space-y-3">
          {mockLimitedTimeQuests.map(quest => (
             <Tooltip key={quest.id} delayDuration={150}>
                <TooltipTrigger asChild>
                    <motion.div
                      className="relative bg-[#231d3b]/50 p-3 rounded-md overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-200">{quest.title}</p>
                        <div className="flex items-center space-x-2">
                          <Timer size={16} className="text-red-400/80" />
                          <Countdown seconds={quest.expiresIn} />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-red-500/40 animate-pulse" />
                    </motion.div>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-[#140f22] border-purple-900/50 text-white">
                    <p>{quest.summary}</p>
                </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LimitedTimeQuests;
