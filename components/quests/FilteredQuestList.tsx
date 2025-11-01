"use client";

import React from 'react';
import { QuestCard } from './QuestCard';
import { Quest } from '@/lib/quests-mock-data';

interface FilteredQuestListProps {
  quests: Quest[];
  onQuestClick: (quest: Quest) => void;
  acceptedQuests: string[];
}

const FilteredQuestList: React.FC<FilteredQuestListProps> = ({ quests, onQuestClick, acceptedQuests }) => {
  if (quests.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <p>No quests found for this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
          onClick={() => onQuestClick(quest)}
          isAccepted={acceptedQuests.includes(quest.id)}
        />
      ))}
    </div>
  );
};

export default FilteredQuestList;
