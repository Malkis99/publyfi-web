"use client";
import { Quest } from '@/lib/quests-mock-data';
import { QuestCard } from './QuestCard';

interface QuestChainProps {
  chainName: string;
  quests: Quest[];
  onQuestClick: (quest: Quest) => void;
  variant?: 'default' | 'compact';
  acceptedQuests?: string[];
}

const QuestChain: React.FC<QuestChainProps> = ({ chainName, quests, onQuestClick, variant = 'default', acceptedQuests = [] }) => {
  const isCompact = variant === 'compact';
  const sortedQuests = quests.sort((a, b) => (a.chain?.currentStep || 0) - (b.chain?.currentStep || 0));

  if (isCompact) {
    return (
      <div>
        <h3 className="text-lg font-bold text-purple-300 tracking-wide mb-4">{chainName}</h3>
        <div className="relative">
          {/* The main vertical line running behind everything */}
          <div className="absolute left-[11px] top-0 h-full w-0.5 bg-purple-700/30" />
          <div className="space-y-4">
            {sortedQuests.map((quest) => (
              <div key={quest.id} className="relative w-full pl-8">
                {/* Node circle */}
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 border-2 border-purple-600 rounded-full z-10" />
                <QuestCard quest={quest} onClick={() => onQuestClick(quest)} variant="compact" isAccepted={acceptedQuests.includes(quest.id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center text-white tracking-wider mb-8">{chainName}</h2>
      <div className="relative flex flex-col items-center">
        {sortedQuests.map((quest, index) => (
          <div key={quest.id} className="relative w-full md:w-3/4 lg:w-1/2">
            <QuestCard quest={quest} onClick={() => onQuestClick(quest)} />
            {index < sortedQuests.length - 1 && (
              <div className="h-16 w-1 bg-purple-700/50 mx-auto my-4 rounded-full shadow-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestChain;
