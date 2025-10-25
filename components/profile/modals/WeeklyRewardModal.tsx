'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';
import { useProfileState } from '@/lib/profileStateContext';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

const rewardItems = [
    { image: ASSETS.weeklyRewards.case, label: "Reward Case" },
    { image: ASSETS.weeklyRewards.equipment, label: "Equipment NFT" },
    { image: ASSETS.weeklyRewards.customization, label: "Customization" },
    { image: ASSETS.weeklyRewards.sticker, label: "Sticker / Emoji" },
];

// Updated reward item to use images
const RewardItem = ({ image, label, delay, onClick }: { image: string, label: string, delay: number, onClick: () => void }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col items-center text-center p-3 bg-black/20 rounded-lg border border-white/10 cursor-pointer"
  >
    <div className="relative w-20 h-20 mb-2">
        <Image src={image} alt={label} fill style={{ objectFit: 'contain' }} />
    </div>
    <span className="text-xs font-semibold text-white leading-tight">{label}</span>
  </motion.div>
);

// Enhanced particle component from previous step
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 40 }).map((_, i) => {
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 5;
        const size = Math.random() * 2 + 1;
        return (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white/50"
                style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    y: [0, (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 50 + 20)],
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay,
                    ease: "easeInOut"
                }}
            />
        )
    })}
  </div>
);

export const WeeklyRewardModal = ({ onClose }: { onClose: () => void }) => {
  const { claimDailyReward, dailyRewardClaimed } = useProfileState();
  const [enlargedItem, setEnlargedItem] = useState<(typeof rewardItems)[0] | null>(null);

  const handleClaim = () => {
    if (dailyRewardClaimed) return;
    claimDailyReward();
    setTimeout(onClose, 1000);
  };

  return (
    <div className="relative p-6 text-center overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Gift className="w-12 h-12 mx-auto text-yellow-400 mb-3" />
        <h2 className="text-2xl font-bold text-white mb-1">Weekly Reward</h2>
        <p className="text-gray-400 text-sm mb-6">Claim your reward for this week!</p>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {rewardItems.map((item, index) => (
            <RewardItem
              key={item.label}
              {...item}
              delay={(index + 1) * 0.1}
              onClick={() => setEnlargedItem(item)}
            />
          ))}
        </div>

        <button
          onClick={handleClaim}
          disabled={dailyRewardClaimed}
          className="w-full py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
        >
          {dailyRewardClaimed ? 'Already Claimed' : 'Claim Reward'}
        </button>
      </div>

      <AnimatePresence>
        {enlargedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center"
            onClick={() => setEnlargedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-[400px] h-[400px] cursor-pointer"
              onClick={() => setEnlargedItem(null)} // Also close when clicking the image
            >
              <Image
                src={enlargedItem.image}
                alt={enlargedItem.label}
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};