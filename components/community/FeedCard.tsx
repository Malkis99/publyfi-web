"use client";
import React from 'react';
import { FeedItem, TopicBadge as BadgeType } from '@/lib/community-data';
import Avatar from './Avatar';
import { parseContent } from '@/lib/content-parser';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageSquare, ThumbsUp, ThumbsDown, Share2, Heart, GitMerge, BarChart2 } from 'lucide-react';
import InteractionButton from './InteractionButton';
import CountUp from 'react-countup';
import { useMotionValue, useTransform, animate } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const TopicBadge = ({ badge }: { badge: BadgeType }) => {
  const Icon = badge.icon;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleBadgeClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set('badge', badge.id);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleBadgeClick} className={`flex items-center rounded-full px-2 py-1 text-xs font-bold cursor-pointer transition-all duration-300 ${badge.bgColor} ${badge.color} hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105`}>
            <Icon className="h-4 w-4 mr-1" />
            <span>{badge.label}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{badge.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const AnimatedNumber = ({ value }: { value: number }) => {
    return <CountUp end={value} duration={0.8} decimals={0} suffix="%" preserveValue={true} />;
};

const DaoVoteBar = ({ forVotes, againstVotes }: { forVotes: number, againstVotes: number }) => {
    const forPercentageMV = useMotionValue(50);

    const [targetPercentages, setTargetPercentages] = React.useState({ forP: 50, againstP: 50 });

    React.useEffect(() => {
        const total = forVotes + againstVotes;
        const newForP = total > 0 ? (forVotes / total) * 100 : 50;
        const newAgainstP = 100 - newForP;

        setTargetPercentages({ forP: newForP, againstP: newAgainstP });

        const animation = animate(forPercentageMV, newForP, {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        });

        return () => animation.stop();
    }, [forVotes, againstVotes, forPercentageMV]);

    const againstPercentageMV = useTransform(forPercentageMV, v => 100 - v);
    const forWidth = useTransform(forPercentageMV, value => `${value}%`);
    const againstWidth = useTransform(againstPercentageMV, value => `${value}%`);
    const forGlow = useTransform(forPercentageMV, [0, 50, 80, 100], [0, 4, 12, 16]);
    const againstGlow = useTransform(againstPercentageMV, [0, 50, 80, 100], [0, 4, 12, 16]);

    return (
        <div className="w-full my-3 space-y-2">
            <div className="flex justify-between text-sm font-bold px-1">
                <span className="text-[#50348f] tabular-nums">
                    <AnimatedNumber value={targetPercentages.againstP} /> AGAINST
                </span>
                <span className="text-[#a38ad1] tabular-nums">
                    FOR <AnimatedNumber value={targetPercentages.forP} />
                </span>
            </div>
            <div className="relative h-4 w-full bg-black/30 rounded-full overflow-hidden border border-purple-900/30 flex shadow-inner shadow-black/50">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#3e2a70] to-[#50348f] relative overflow-hidden rounded-l-full"
                    style={{
                        width: againstWidth,
                        boxShadow: useTransform(againstGlow, v => `0 0 ${v}px ${v/4}px #50348f`),
                    }}
                >
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"
                        animate={{ x: ['-120%', '120%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', delay: 0.2 }}
                    />
                </motion.div>
                <motion.div
                    className="h-full bg-gradient-to-l from-[#8a6ecf] to-[#a38ad1] relative overflow-hidden rounded-r-full"
                    style={{
                        width: forWidth,
                        boxShadow: useTransform(forGlow, v => `0 0 ${v}px ${v/4}px #a38ad1`),
                    }}
                >
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"
                        animate={{ x: ['-120%', '120%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                    />
                </motion.div>
            </div>
        </div>
    );
};


import Link from 'next/link';

const FeedCard = ({ item, index }: { item: FeedItem, index: number }) => {
  // DAO Vote State
  const [daoVotes, setDaoVotes] = React.useState({ for: item.forVotes || 52, against: item.againstVotes || 48 });
  const [userVote, setUserVote] = React.useState<'for' | 'against' | null>(null);

  // Poll Vote State
  const [pollVoted, setPollVoted] = React.useState<string | null>(null);
  const [pollResults, setPollResults] = React.useState(item.pollOptions?.map(o => ({ ...o, votes: o.votes || 0 })) || []);

  React.useEffect(() => {
    if (item.type === 'dao') {
      const storedVote = sessionStorage.getItem(`vote_${item.id}`);
      if (storedVote) {
        setUserVote(storedVote as 'for' | 'against');
      }
    }
  }, [item.id, item.type]);

  const handleDaoVote = (type: 'for' | 'against') => {
    if (userVote) return; // Already voted

    setUserVote(type);
    setDaoVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    sessionStorage.setItem(`vote_${item.id}`, type);
  };

  const handlePollVote = (optionText: string) => {
    if (pollVoted) return;

    setPollVoted(optionText);
    setPollResults(results =>
        results.map(r =>
            r.text === optionText ? { ...r, votes: r.votes + 1 } : r
        )
    );
  };

  const totalPollVotes = pollResults.reduce((acc, curr) => acc + curr.votes, 0);

  const renderCardContent = () => {
    switch (item.type) {
      case 'discussion':
      case 'guide':
      case 'news':
      case 'event':
      case 'support':
        return (
            <Link href={`/community/topic/${item.id}`} className="block">
                <div className="flex items-start space-x-4">
                    {item.author && <Avatar user={item.author} size={40} />}
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-white">{item.author?.name} <span className="text-gray-400 font-normal text-sm">· {item.timestamp}</span></p>
                        </div>
                        <h3 className="text-xl font-bold my-2 text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
                        <div className="text-gray-300 text-sm line-clamp-2">{parseContent(item.content!)}</div>
                        <div className="flex items-center space-x-2 mt-4">
                            {item.badges?.map(badge => <TopicBadge key={badge.id} badge={badge} />)}
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-900/50 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                        <InteractionButton icon={ThumbsUp} count={item.likeCount || 0} label="Like" activeColor="bg-blue-500" />
                        <InteractionButton icon={MessageSquare} count={item.comments?.length || 0} label="Comment" activeColor="bg-green-500" />
                        <InteractionButton icon={Share2} count={item.shareCount || 0} label="Share" activeColor="bg-purple-500" />
                    </div>
                </div>
            </Link>
        );
      case 'dao':
        return (
            <>
                <div className="flex items-start space-x-4">
                    {item.author && <Avatar user={item.author} size={40} />}
                    <div className="flex-1">
                         <div className="flex items-center justify-between">
                            <p className="font-semibold text-white">{item.author?.name} <span className="text-gray-400 font-normal text-sm">· {item.timestamp}</span></p>
                            <TopicBadge badge={item.badges![0]} />
                        </div>
                        <h3 className="text-xl font-bold my-2 text-white">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">{item.content}</p>
                        <DaoVoteBar forVotes={daoVotes.for} againstVotes={daoVotes.against} />
                        <div className="flex justify-between items-center mt-4">
                            <Button
                                variant="outline"
                                size="sm"
                                className={`transition-all duration-300 flex-grow mr-2 group ${
                                    userVote === 'against'
                                        ? 'bg-[#50348f] text-white shadow-[0_0_15px_rgba(80,52,143,0.8)] scale-105'
                                        : userVote === 'for'
                                        ? 'opacity-50 border-gray-600'
                                        : 'border-[#50348f] text-[#50348f] hover:bg-[#50348f] hover:text-white'
                                }`}
                                onClick={() => handleDaoVote('against')}
                                disabled={userVote !== null}
                            >
                                <ThumbsDown className="h-4 w-4 mr-2 transform transition-transform duration-300 group-hover:scale-125" /> Against
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className={`transition-all duration-300 flex-grow ml-2 group ${
                                    userVote === 'for'
                                        ? 'bg-[#a38ad1] text-white shadow-[0_0_15px_rgba(163,138,209,0.8)] scale-105'
                                        : userVote === 'against'
                                        ? 'opacity-50 border-gray-600'
                                        : 'border-[#a38ad1] text-[#a38ad1] hover:bg-[#a38ad1] hover:text-white'
                                }`}
                                onClick={() => handleDaoVote('for')}
                                disabled={userVote !== null}
                            >
                                <ThumbsUp className="h-4 w-4 mr-2 transform transition-transform duration-300 group-hover:scale-125" /> For
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-900/50 flex items-center justify-center text-sm text-gray-400">
                     <Button variant="ghost" size="sm" className="hover:bg-purple-900/50 hover:text-white"><GitMerge className="h-4 w-4 mr-2" /> View Proposal Details</Button>
                </div>
            </>
        );
    case 'poll':
        return (
             <>
                <div className="flex items-start space-x-4">
                     {item.author && <Avatar user={item.author} size={40} />}
                    <div className="flex-1">
                        <p className="font-semibold text-white">{item.author?.name} <span className="text-gray-400 font-normal text-sm">· {item.timestamp}</span></p>
                        <h3 className="text-xl font-bold my-2 text-white">{item.title}</h3>
                        <div className="space-y-2 mt-4">
                            {!pollVoted ? (
                                item.pollOptions?.map(option => (
                                    <Button
                                        key={option.text}
                                        variant="outline"
                                        className="w-full justify-start border-purple-800/50 bg-[#140f22]/50 hover:bg-[#a38ad1]/80 hover:border-[#a38ad1] transition-all"
                                        onClick={() => handlePollVote(option.text)}
                                    >
                                        {option.text}
                                    </Button>
                                ))
                            ) : (
                                <div className="space-y-2">
                                    {pollResults.map(option => {
                                        const percentage = totalPollVotes > 0 ? (option.votes / totalPollVotes) * 100 : 0;
                                        return (
                                            <div key={option.text} className="relative w-full p-2 rounded-md border border-purple-800/50 overflow-hidden">
                                                <motion.div
                                                    className="absolute top-0 left-0 h-full bg-[#a38ad1]/50"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${percentage}%`}}
                                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                                />
                                                <div className="relative z-10 flex justify-between items-center text-sm font-semibold">
                                                    <span className={`${pollVoted === option.text ? 'text-white' : 'text-gray-300'}`}>{option.text}</span>
                                                    <span className="text-gray-400">{percentage.toFixed(0)}%</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                 <div className="mt-4 pt-4 border-t border-purple-900/50 flex items-center justify-between text-sm text-gray-400">
                    <p className="font-bold"><BarChart2 className="inline h-4 w-4 mr-2" />{totalPollVotes} Total Votes</p>
                    {pollVoted && <p className="text-purple-400 font-semibold">Vote Cast!</p>}
                </div>
            </>
        );
      case 'system':
          return (
            <div className="flex items-center space-x-3">
                <div className="bg-purple-900/50 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-purple-300" />
                </div>
                <p className="text-sm text-gray-300">{item.systemMessage}</p>
                 <span className="text-gray-500 text-sm">· {item.timestamp}</span>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.01 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-6 hover:border-purple-700/70 transition-all duration-300 group"
    >
      {renderCardContent()}
    </motion.div>
  );
};

export default FeedCard;