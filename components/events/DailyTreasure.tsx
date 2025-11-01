// components/events/DailyTreasure.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


const cardVariants: Variants = {
    initial: { scale: 1, boxShadow: '0 0 0px rgba(163, 138, 209, 0)' },
    hover: {
      scale: 1.03,
      boxShadow: '0 0 15px rgba(163, 138, 209, 0.4)',
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
};

const treasureRewards = [
    "100 Valor Tokens",
    "Prime Badge Fragment",
    "Rare Cosmetic Item",
    "250 XP Boost",
    "Epic NFT Chest",
    "$PUBL Token Pack",
    "Mythic Treasure Crate"
];

const DailyTreasure = () => {
  const [streak, setStreak] = useState(0);
  const [lastClaimed, setLastClaimed] = useState<number | null>(null);
  const [cooldown, setCooldown] = useState('');
  const [isClaimable, setIsClaimable] = useState(false);
  const [justClaimed, setJustClaimed] = useState(-1);
  const [streakBroken, setStreakBroken] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let storedStreak = 0;
    let storedLastClaimed = null;

    if (typeof window !== 'undefined') {
        storedStreak = parseInt(localStorage.getItem('dailyTreasureStreak') || '0', 10);
        const lastClaimedStr = localStorage.getItem('dailyTreasureLastClaimed');
        storedLastClaimed = lastClaimedStr ? parseInt(lastClaimedStr, 10) : null;
    }

    if (storedLastClaimed) {
      const hoursSinceLastClaim = (now - storedLastClaimed) / (1000 * 60 * 60);
      if (hoursSinceLastClaim > 48) {
        setStreakBroken(true);
        storedStreak = 0;
        localStorage.setItem('dailyTreasureStreak', '0');
      }
    }

    setStreak(storedStreak);
    setLastClaimed(storedLastClaimed);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (lastClaimed) {
        const nextClaimTime = lastClaimed + (24 * 60 * 60 * 1000);
        if (now >= nextClaimTime) {
          setIsClaimable(true);
          setCooldown('');
        } else {
          setIsClaimable(false);
          const remaining = nextClaimTime - now;
          const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((remaining / 1000 / 60) % 60);
          const seconds = Math.floor((remaining / 1000) % 60);
          setCooldown(`${hours}h ${minutes}m ${seconds}s`);
        }
      } else {
        setIsClaimable(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastClaimed]);

  const handleClaim = () => {
    if (!isClaimable) return;
    const now = Date.now();
    const newStreak = streak === 7 ? 1 : streak + 1;
    setStreak(newStreak);
    setLastClaimed(now);
    setIsClaimable(false);
    setJustClaimed(streak);

    if (typeof window !== 'undefined') {
        localStorage.setItem('dailyTreasureStreak', newStreak.toString());
        localStorage.setItem('dailyTreasureLastClaimed', now.toString());
    }
  };

  return (
    <div>
        <h2 className="text-xl font-bold mb-4 text-white tracking-wider">Daily Treasure</h2>
        <motion.div
            className="bg-[#231d3b]/50 border border-purple-900/30 backdrop-blur-sm rounded-xl p-4"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
        <div className="flex justify-between items-center px-2">
            <AnimatePresence>
            {Array.from({ length: 7 }).map((_, index) => {
              const day = index + 1;
              const isClaimed = day <= streak;
              const isNext = day === streak + 1;

              let nodeState = 'locked';
              if(isClaimed) nodeState = 'claimed';
              if(isNext && isClaimable) nodeState = 'claimable';

              return (
                <TooltipProvider key={index}>
                    <Tooltip>
                        <TooltipTrigger>
                            <motion.div
                                className="flex flex-col items-center space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: streakBroken ? 0.3 : 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <motion.div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 relative`}
                                    variants={{
                                        locked: { borderColor: 'rgba(126, 34, 206, 0.3)', backgroundColor: 'rgba(126, 34, 206, 0.1)' },
                                        claimable: { borderColor: 'rgba(192, 132, 252, 1)', backgroundColor: 'rgba(192, 132, 252, 0.2)', boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)' },
                                        claimed: { borderColor: 'rgba(252, 211, 77, 1)', backgroundColor: 'rgba(252, 211, 77, 0.2)', boxShadow: '0 0 15px rgba(252, 211, 77, 0.5)' }
                                    }}
                                    animate={nodeState}
                                    transition={{ duration: 0.5 }}
                                >
                                    {justClaimed === index && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-yellow-300"
                                            initial={{ scale: 0, opacity: 0.7 }}
                                            animate={{ scale: 1.5, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            onAnimationComplete={() => setJustClaimed(-1)}
                                        />
                                    )}
                                    <Star className={`w-5 h-5 transition-colors duration-300 ${isClaimed ? 'text-yellow-300' : isNext && isClaimable ? 'text-purple-300' : 'text-purple-400/50'}`} />
                                </motion.div>
                                <span className="text-xs text-gray-400">Day {day}</span>
                            </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{treasureRewards[index]}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              );
            })}
            </AnimatePresence>
        </div>
        <motion.button
            onClick={handleClaim}
            whileHover={{ scale: isClaimable ? 1.05 : 1 }}
            whileTap={{ scale: isClaimable ? 0.98 : 1 }}
            className={`w-full mt-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors ${isClaimable ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700/50 cursor-not-allowed'}`}
            disabled={!isClaimable}
        >
            {isClaimable ? (streak === 0 ? 'Claim Day 1' : `Claim Day ${streak + 1}`) : cooldown ? `Claim in ${cooldown}` : 'Claimed Today'}
        </motion.button>
        </motion.div>
    </div>
  );
};

export default DailyTreasure;