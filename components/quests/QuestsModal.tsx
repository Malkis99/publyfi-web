"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Zap, Award, Shield, ChevronsRight, FileText, MessageSquare, CheckCircle } from 'lucide-react';
import { Quest, Reward, RewardType } from '@/lib/quests-mock-data';
import CosmicButton from '../CosmicButton';
import StaticStarfield from '../StaticStarfield';
import { useState, useLayoutEffect, useEffect, useRef } from 'react';

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

const QuestsModal: React.FC<QuestsModalProps> = ({ quest, onClose, onAccept, isAccepted: isAlreadyAccepted }) => {
  const [isAccepting, setIsAccepting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(isAlreadyAccepted);
  const [isFinalized, setIsFinalized] = useState(false); // New state to control final message
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [modalTop, setModalTop] = useState(0);

  useEffect(() => {
    // Reset local accepting state if the opened quest changes
    setIsAccepting(false);
    setIsAccepted(isAlreadyAccepted);
    setIsFinalized(false);
    setShowCheckmark(false);
  }, [quest, isAlreadyAccepted]);

  useLayoutEffect(() => {
    if (quest) {
      const originalStyle = window.getComputedStyle(document.documentElement).overflow;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      setModalTop(window.scrollY);

      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.documentElement.style.overflow = originalStyle;
        document.body.style.paddingRight = '';
      };
    }
  }, [quest]);

  useEffect(() => {
    if (isFinalized) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500); // Auto-close after the "In Progress" message is shown
      return () => clearTimeout(timer);
    }
  }, [isFinalized, onClose]);

  if (!quest) return null;

  const handleAcceptClick = () => {
    if (!quest || isAccepting) return;

    setIsAccepting(true);
    onAccept(quest.id);

    setShowCheckmark(true);
    setTimeout(() => setShowCheckmark(false), 800); // Hide checkmark after 0.8s

    // After the initial "Accepted" animation, move to the "In Progress" state
    setTimeout(() => {
        setIsAccepted(true);
        setIsFinalized(true); // Trigger the final state and auto-close
    }, 1200);
  };

  const styles = rarityStyles[quest.rarity];

  return (
    <AnimatePresence>
      {quest && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative w-full max-w-2xl bg-[#140f22] border ${styles.border} ${styles.glow} rounded-lg overflow-hidden max-h-[90vh] flex flex-col mx-auto`}
            style={{ top: `${modalTop + (window.innerHeight * 0.05)}px` }} // Centered with 5vh margin
            onClick={(e) => e.stopPropagation()}
          >
            <StaticStarfield className="absolute top-0 left-0 w-full h-full opacity-30" />
            <div className="relative z-10 p-8 overflow-y-auto custom-scrollbar">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20">
                    <X size={24} />
                </button>

                <div className="text-center mb-6">
                    <p className={`font-bold text-lg ${styles.text}`}>{quest.rarity} Quest</p>
                    <h2 className="text-4xl font-bold text-white tracking-wider my-2">{quest.title}</h2>
                    <p className="text-sm text-gray-400">Issued by {quest.giver.name}</p>
                </div>

                <div className="space-y-4 my-6 text-left">
                  {/* Description */}
                  <div>
                      <div className="flex items-center mb-2">
                          <FileText className="w-5 h-5 mr-3 text-purple-300" />
                          <h3 className="text-lg font-semibold text-white">Description</h3>
                      </div>
                      <p className="text-gray-400 text-sm pl-8">{quest.fullDescription || quest.description}</p>
                  </div>

                  {/* Streamer Comments */}
                  {quest.streamerComments && quest.streamerComments.length > 0 && (
                    <div>
                        <div className="flex items-center mb-2">
                            <MessageSquare className="w-5 h-5 mr-3 text-purple-300" />
                            <h3 className="text-lg font-semibold text-white">Streamer / Platform Comments</h3>
                        </div>
                        <div className="pl-8 space-y-2">
                          {quest.streamerComments.map((comment, index) => (
                            <p key={index} className="text-gray-400 text-sm italic">&quot;{comment}&quot;</p>
                          ))}
                        </div>
                    </div>
                  )}

                  {/* Objectives */}
                  {quest.objectives && quest.objectives.length > 0 && (
                      <div>
                          <div className="flex items-center mb-2">
                              <CheckCircle className="w-5 h-5 mr-3 text-purple-300" />
                              <h3 className="text-lg font-semibold text-white">Objectives</h3>
                          </div>
                          <ul className="pl-8 space-y-2">
                              {quest.objectives.map((obj, index) => (
                                  <li key={index} className={`flex items-center text-sm ${obj.completed ? 'text-green-400' : 'text-gray-300'}`}>
                                      <span className={`mr-2 ${obj.completed ? 'line-through' : ''}`}>{obj.text}</span>
                                      {obj.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  )}
                </div>

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

                <div className="mt-8 text-center h-12 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!isAccepted && !isAccepting && (
                            <motion.div
                              key="button"
                              className="relative w-1/2"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-purple-500"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={isAccepting ? { scale: 2.5, opacity: [0.6, 0] } : {}}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                />
                                <AnimatePresence>
                                    {showCheckmark && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, y: -50, scale: 1.1 }}
                                            exit={{ opacity: 0, y: -60, scale: 0.9 }}
                                            transition={{ duration: 0.3, ease: 'backOut' }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2"
                                        >
                                            <CheckCircle className="w-10 h-10 text-green-400" style={{ filter: 'drop-shadow(0 0 8px rgba(134, 239, 172, 0.7))' }} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <CosmicButton
                                    label="Accept Quest"
                                    variant="solid"
                                    onClick={handleAcceptClick}
                                    className="w-full relative" // relative is needed for the pulse to be behind
                                />
                            </motion.div>
                        )}

                        {isAccepting && !isAccepted && (
                             <motion.div
                                key="accepted"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'backOut' } }}
                                exit={{ opacity: 0, scale: 0.8, transition: {duration: 0.2} }}
                                className="flex items-center space-x-2"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0, transition: { delay: 0.1, duration: 0.3, ease: 'backOut' } }}
                                >
                                    <CheckCircle className="w-7 h-7 text-green-400" />
                                </motion.div>
                                <span className="font-bold text-xl text-green-300">Quest Accepted</span>
                            </motion.div>
                        )}

                        {isAccepted && (
                            <motion.div
                                key="progress"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                                className="flex flex-col items-center"
                            >
                                <p className="font-semibold text-lg text-green-300">Quest In Progress</p>
                                <p className="text-xs text-gray-400">Track your objectives in the My Quests tab.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestsModal;
