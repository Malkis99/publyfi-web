"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestsHero from '@/components/quests/HeroSection';
import { QuestCard } from '@/components/quests/QuestCard';
import QuestChain from '@/components/quests/QuestChain';
import QuestsNavBar from '@/components/quests/QuestsNavBar';
import LivingFeed from '@/components/quests/feed/LivingFeed';
import { mockQuests, Quest } from '@/lib/quests-mock-data';
import FilteredQuestList from '@/components/quests/FilteredQuestList';
import MyQuestsTab from '@/components/quests/MyQuestsTab';
import { SmartQuestGenerator } from '@/components/quests/SmartQuestGenerator';
import StaticStarfield from '@/components/StaticStarfield';
import DailyQuestSupport from '@/components/quests/DailyQuestSupport';
import WeeklyReward from '@/components/quests/WeeklyReward';
import LimitedTimeQuests from '@/components/quests/LimitedTimeQuests';
import PlayerReputation from '@/components/quests/PlayerReputation';
import Leaderboard from '@/components/quests/Leaderboard';
import ActivityFeed from '@/components/quests/ActivityFeed';
import QuestLimits from '@/components/quests/QuestLimits';
import InfoTerminal from '@/components/quests/InfoTerminal';
import QuestsModal from '@/components/quests/QuestsModal';

const QuestsPage = () => {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [activeTab, setActiveTab] = useState('Home');
  const [acceptedQuests, setAcceptedQuests] = useState<string[]>([]);

  const handleAcceptQuest = (questId: string) => {
    setAcceptedQuests((prev) => {
      if (prev.includes(questId)) {
        return prev;
      }
      return [...prev, questId];
    });
    // The modal will handle its own closing after animation
  };

  // Separate chained quests from standalone quests
  const chainedQuests = mockQuests.filter(q => q.chain);
  const standaloneQuests = mockQuests.filter(q => !q.chain && q.questType !== 'Daily');

  // Group quests by chain name
  const questChains = chainedQuests.reduce((acc, quest) => {
    const chainName = quest.chain!.name;
    if (!acc[chainName]) {
      acc[chainName] = [];
    }
    acc[chainName].push(quest);
    return acc;
  }, {} as Record<string, typeof chainedQuests>);

  const getFilteredQuests = () => {
    switch (activeTab) {
      case 'Streamer Quests':
        return mockQuests.filter(q => q.questType === 'Streamer');
      case 'Platform Quests':
        return mockQuests.filter(q => q.questType === 'Platform');
      default:
        return []; // Home tab is handled separately
    }
  };

  return (
    <main className="relative min-h-screen">
      <StaticStarfield />
       <QuestsModal
        quest={selectedQuest}
        onClose={() => setSelectedQuest(null)}
        onAccept={handleAcceptQuest}
        isAccepted={selectedQuest ? acceptedQuests.includes(selectedQuest.id) : false}
      />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
        <QuestsHero />

        <div className="mb-8">
          <QuestsNavBar activeTab={activeTab} onTabClick={setActiveTab} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,2fr)_1fr] gap-8 items-start">
          {/* Left Sidebar - Dynamic Quests & Chains */}
          <aside>
            <div className="sticky top-24 space-y-8">
              <SmartQuestGenerator quests={mockQuests} />
              {/* Render Quest Chains in Sidebar */}
              {Object.entries(questChains).map(([chainName, quests]) => (
                <QuestChain
                  key={chainName}
                  chainName={chainName}
                  quests={quests}
                  onQuestClick={setSelectedQuest}
                  variant="compact"
                  acceptedQuests={acceptedQuests}
                />
              ))}
              <WeeklyReward />
              <LimitedTimeQuests />
              <DailyQuestSupport />
            </div>
          </aside>

          {/* Main Content - Quest Feed */}
          <section className="space-y-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {activeTab === 'Home' && (
                  <LivingFeed onQuestClick={setSelectedQuest} acceptedQuests={acceptedQuests} />
                )}
                {activeTab === 'My Quests' && (
                  <MyQuestsTab
                    acceptedQuests={mockQuests.filter(q => acceptedQuests.includes(q.id) && q.status !== 'completed')}
                    completedQuests={mockQuests.filter(q => q.status === 'completed')}
                    onQuestClick={setSelectedQuest}
                  />
                )}
                {(activeTab === 'Streamer Quests' || activeTab === 'Platform Quests') && (
                  <FilteredQuestList
                    quests={getFilteredQuests()}
                    onQuestClick={setSelectedQuest}
                    acceptedQuests={acceptedQuests}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* Right Sidebar - Widgets */}
          <aside className="h-full">
            <div className="sticky top-24 h-[calc(100vh-12rem)]">
              <InfoTerminal>
                  <PlayerReputation />
                  <div className="border-t border-purple-900/40" />
                  <QuestLimits />
                  <div className="border-t border-purple-900/40" />
                  <Leaderboard />
                  <div className="border-t border-purple-900/40" />
                  <ActivityFeed />
              </InfoTerminal>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default QuestsPage;
