import { QuestRarity } from './quests-mock-data';

export const getRarityColor = (rarity: QuestRarity): string => {
  switch (rarity) {
    case 'Common':
      return '#9ca3af'; // gray-400
    case 'Rare':
      return '#60a5fa'; // blue-400
    case 'Epic':
      return '#a78bfa'; // violet-400
    case 'Legendary':
      return '#facc15'; // yellow-400
    case 'Mythic':
      return '#ef4444'; // red-500
    default:
      return '#6b7280'; // gray-500
  }
};
