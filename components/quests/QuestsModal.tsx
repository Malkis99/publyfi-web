"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Zap, Award, Shield, ChevronsRight } from 'lucide-react';
import { Quest, Reward, RewardType } from '@/lib/quests-mock-data';
import CosmicButton from '../CosmicButton';
import StaticStarfield from '../StaticStarfield';
import { useState, useEffect, useRef } from 'react';

interface QuestsModalProps {
  quest: Quest | null;
  onClose: () => void;
  onAccept: (questId: string) => void;
  isAccepted: boolean;
}

const rarityStyles = {
    Common: { border: 'border-gray-500/50', text: 'text-gray-200', glow: 'shadow-[0_0_15px_rgba(156,163,175,0.2)]' },
    Rare: { border: 'border-blue-500/50', text: 'text-blue-300', glow: 'shadow-[0_0_15px_rgba(96,165,250,0.3)]' },
    Epic: { border: 'border-purple-500/50', text: 'text-purple-300', glow: 'shadow-[0_0_15px_rgba(192,132,252,0.4)]' },
    Legendary: { border: 'border-yellow-500/50', text: 'text-yellow-300', glow: 'shadow-[0_0_15px_rgba(250,204,21,0.5)]' },
    Mythic: { border: 'border-red-500/50', text: 'text-red-400', glow: 'shadow-[0_0_15px_rgba(248,113,113,0.6)]' },
};

const RewardIcon = ({ type }: { type: RewardType }) => {
    const iconMap: { [key in RewardType]: React.ReactNode } = {
      token: <Award className="w-5 h-5 text-yellow-400" />,
      xp: <Zap className="w-5 h-5 text-green-400" />,
      reputation: <Shield className="w-5 h-5 text-blue-400" />,
      nft: <Star className="w-5 h-5 text-purple-400" />,
      special: <ChevronsRight className="w-5 h-5 text-red-400" />,
    };
    return iconMap[type];
};

const QuestsModal: React.FC<QuestsModalProps> = ({ quest, onClose, onAccept, isAccepted }) => {
  const [isAccepting, setIsAccepting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Reset local accepting state if the opened quest changes
    setIsAccepting(false);
  }, [quest]);

  useEffect(() => {
    if (quest) {
      // Freeze scroll and capture position when modal opens
      setScrollY(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll when modal closes
      const currentScrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (currentScrollY) {
        window.scrollTo(0, parseInt(currentScrollY || '0') * -1);
      }
    }
    // Cleanup on unmount
    return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
    };
  }, [quest]);


  if (!quest) return null;

  const handleAcceptClick = () => {
    setIsAccepting(true);
    onAccept(quest.id);
    setTimeout(() => {
      onClose();
    }, 1500); // Auto-close after 1.5s
  };

  const styles = rarityStyles[quest.rarity];

  return (
    <AnimatePresence>
      {quest && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          style={{ top: 0, left: 0, height: '100vh', overflow: 'hidden' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`relative w-full max-w-2xl bg-[#140f22] border ${styles.border} ${styles.glow} rounded-lg overflow-hidden max-h-[90vh] flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <StaticStarfield className="absolute top-0 left-0 w-full h-full opacity-30" />
            <div className="relative z-10 p-8 overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20">
                    <X size={24} />
                </button>

                <div className="text-center mb-6">
                    <p className={`font-bold text-lg ${styles.text}`}>{quest.rarity} Quest</p>
                    <h2 className="text-4xl font-bold text-white tracking-wider my-2">{quest.title}</h2>
                    <p className="text-sm text-gray-400">Issued by {quest.giver.name}</p>
                </div>

                <p className="text-gray-300 text-center mb-8">{quest.description}</p>

                {quest.lore && <p className="text-purple-200 italic text-center mb-8 text-sm">&quot;{quest.lore}&quot;</p>}

                <div className="flex justify-around items-center mb-8 text-center bg-black/30 p-4 rounded-lg">
                    <div>
                        <p className="text-sm text-gray-400">Difficulty</p>
                        <div className="flex justify-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={20} className={i < quest.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Quest Type</p>
                        <p className="text-lg font-semibold text-white mt-1">{quest.questType}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Rewards</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {quest.rewards.map(reward => (
                            <div key={reward.type} className="bg-black/30 p-3 rounded-md text-center">
                                <div className="flex justify-center mb-2"><RewardIcon type={reward.type} /></div>
                                <p className="font-semibold text-gray-200">{reward.value}</p>
                                <p className="text-xs text-gray-500 capitalize">{reward.type}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center h-12">
                  {isAccepted ? (
                    <div className="flex flex-col items-center">
                      <p className="font-semibold text-lg text-green-300">Progress: 1 / 3 Objectives</p>
                       <p className="text-xs text-gray-400">Placeholder progress indicator</p>
                    </div>
                  ) : (
                    <CosmicButton
                      label={isAccepting ? "Accepted ✔" : "Accept Quest"}
                      variant={isAccepting ? "success" : "solid"}
                      onClick={handleAcceptClick}
                      className="w-1/2"
                      disabled={isAccepting}
                    />
                  )}
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestsModal;
