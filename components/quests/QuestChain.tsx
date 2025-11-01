"use client";
import { Quest, QuestRarity } from '@/lib/quests-mock-data';
import { motion } from 'framer-motion';
import { getRarityColor } from '@/lib/rarity-colors';
import { Milestone, CheckCircle, CircleDotDashed, Diamond } from 'lucide-react';
import React, { useState } from 'react';

interface QuestChainProps {
  chainName: string;
  quests: Quest[];
  onQuestClick: (quest: Quest) => void;
  variant?: 'default' | 'compact';
  acceptedQuests?: string[];
  isModalOpen?: boolean;
}

const rarityGlows: Record<QuestRarity, string> = {
    Common: 'shadow-[0_0_12px_2px_rgba(107,114,128,0.5)]',
    Rare: 'shadow-[0_0_12px_2px_rgba(59,130,246,0.5)]',
    Epic: 'shadow-[0_0_12px_2px_rgba(168,85,247,0.5)]',
    Legendary: 'shadow-[0_0_12px_2px_rgba(234,179,8,0.5)]',
    Mythic: 'shadow-[0_0_12px_2px_rgba(239,68,68,0.5)]',
};

const chainQuotes: Record<string, string> = {
    "The Acolyte's Path": "A journey of awakening — each step unlocking the next layer of truth.",
    "Initiation": "Your first steps into a larger world.",
};

const ConnectionLine: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
    return (
        <div className="absolute left-4 top-0 h-full w-0.5" style={{ transform: 'translateZ(0)' }}>
            <div className="h-full w-full bg-purple-900/20" />
            <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-purple-500/30 via-purple-700/40 to-transparent"
                style={{ backgroundSize: '100% 200%' }}
                animate={{
                    opacity: isHovered ? [0.9, 1, 0.9] : [0.5, 0.7, 0.5],
                    backgroundPositionY: ['0%', '-100%'],
                }}
                transition={{
                    backgroundPositionY: {
                        duration: isHovered ? 4 : 8,
                        repeat: Infinity,
                        ease: 'linear'
                    },
                    opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }}
            />
        </div>
    );
};


interface QuestNodeProps {
  quest: Quest;
  chainName: string;
  onQuestClick: () => void;
  isCompleted: boolean;
  isNext: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const QuestNode: React.FC<QuestNodeProps> = ({ quest, chainName, onQuestClick, isCompleted, isNext, onHoverStart, onHoverEnd }) => {
    const rarityColor = getRarityColor(quest.rarity);

    // Special handling for "Initiation" quest chain's first step
    const isFirstInitiationQuest = chainName === "Initiation" && (quest.chain?.currentStep || 0) <= 1;
    const isTrulyCompleted = isFirstInitiationQuest ? isCompleted : (quest.status === 'completed' || isCompleted);
    const isActive = isNext && !isTrulyCompleted;

    const completedColor = '#0ea5e9'; // A soft, constant blue for completed nodes

    const nodeState = isTrulyCompleted ? 'completed' : isActive ? 'active' : 'default';

    const nodeAnimate = {
        completed: {
            borderColor: completedColor,
            backgroundColor: '#1e1b2e',
            boxShadow: `0 0 12px 2px ${completedColor}60`,
        },
        active: {
            borderColor: rarityColor,
            backgroundColor: '#231d3b',
            boxShadow: [
                `0 0 10px 1px ${rarityColor}40`,
                `0 0 16px 3px ${rarityColor}70`,
                `0 0 10px 1px ${rarityColor}40`,
            ],
        },
        default: {
            borderColor: '#4b5563',
            backgroundColor: '#111827',
            boxShadow: `0 0 0px 0px #00000000`,
        }
    };

    return (
        <motion.div
            className="relative w-full pl-12 group cursor-pointer"
            onClick={onQuestClick}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
        >
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300"
                animate={nodeState}
                variants={nodeAnimate}
                whileHover={{
                    boxShadow: `0 0 20px 4px ${isActive ? rarityColor : '#a38ad1'}90`,
                }}
                transition={{
                    boxShadow: {
                        duration: isActive ? 2.5 : 0.3,
                        repeat: isActive ? Infinity : 0,
                        ease: 'easeInOut',
                    }
                }}
            >
                {isTrulyCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                    <CircleDotDashed className={`w-4 h-4 transition-colors ${isActive ? 'text-purple-300' : 'text-gray-500'}`} />
                )}
            </motion.div>
            <div className={`py-2 rounded-lg transition-opacity duration-300 ${isTrulyCompleted ? 'opacity-60' : ''}`}>
                <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors">{quest.title}</h4>
                <p className="text-sm text-gray-400">{quest.rarity}</p>
            </div>
        </motion.div>
    );
};

const QuestChain: React.FC<QuestChainProps> = ({ chainName, quests, onQuestClick, variant = 'default', acceptedQuests = [], isModalOpen }) => {
  const isCompact = variant === 'compact';
  const sortedQuests = quests.sort((a, b) => (a.chain?.currentStep || 0) - (b.chain?.currentStep || 0));
  const completedCount = sortedQuests.filter(q => acceptedQuests.includes(q.id) || q.status === 'completed').length;
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  if (isCompact) {
    return (
        <motion.div
            animate={{ filter: isModalOpen ? 'blur(4px) brightness(0.6)' : 'blur(0px) brightness(1)' }}
            transition={{ duration: 0.3 }}
        >
            <div className="mb-4 pl-1">
                <div className="flex items-center space-x-2">
                    <Diamond className="w-4 h-4 text-purple-400" />
                    <h3 className="text-lg font-bold text-purple-300 tracking-wide">{chainName}</h3>
                </div>
                <p className="text-xs text-gray-400 italic mt-1 pl-6">&quot;{chainQuotes[chainName]}&quot;</p>
            </div>
            <div className="relative">
                <ConnectionLine isHovered={!!hoveredNode} />
                <div className="space-y-4">
                    {sortedQuests.map((quest, index) => {
                        const isCompleted = acceptedQuests.includes(quest.id) || quest.status === 'completed';
                        const isNext = completedCount === index;
                        return (
                            <QuestNode
                                key={quest.id}
                                quest={quest}
                                chainName={chainName}
                                onQuestClick={() => onQuestClick(quest)}
                                isCompleted={isCompleted}
                                isNext={isNext}
                                onHoverStart={() => setHoveredNode(quest.id)}
                                onHoverEnd={() => setHoveredNode(null)}
                            />
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-purple-300 tracking-wide mb-4">{chainName}</h3>
      {sortedQuests.map(q => <p key={q.id} className="text-white">{q.title}</p>)}
    </div>
  );
};

export default QuestChain;
