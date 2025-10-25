import { Quest, mockQuests } from './quests-mock-data';

export enum FeedItemType {
  Lore,
  StreamerActivity,
  TopQuest,
  PlayerActivity,
  FeaturedQuest,
  LimitedTime,
}

export interface LoreFeedItem {
  type: FeedItemType.Lore;
  id: string;
  title: string;
  text: string;
}

export interface StreamerActivityFeedItem {
  type: FeedItemType.StreamerActivity;
  id: string;
  streamer: {
    name: string;
    avatar: string;
  };
  action: string;
  quest: Quest;
}

export interface TopQuestFeedItem {
  type: FeedItemType.TopQuest;
  id: string;
  quest: Quest;
}

export interface PlayerActivityFeedItem {
  type: FeedItemType.PlayerActivity;
  id: string;
  player: {
    name: string;
  };
  action: string;
  quest: Quest;
  details?: string;
}

export interface FeaturedQuestFeedItem {
    type: FeedItemType.FeaturedQuest;
    id: string;
    quest: Quest;
}

export type FeedItem = LoreFeedItem | StreamerActivityFeedItem | TopQuestFeedItem | PlayerActivityFeedItem | FeaturedQuestFeedItem;

// Helper function to create a feed item and ensure the quest exists
const createFeedItem = (item: Omit<StreamerActivityFeedItem, 'quest' | 'id'> & { questId: string, id: string } | Omit<TopQuestFeedItem, 'quest' | 'id'> & { questId: string, id: string } | Omit<PlayerActivityFeedItem, 'quest' | 'id'> & { questId: string, id: string } | Omit<FeaturedQuestFeedItem, 'quest' | 'id'> & { questId: string, id: string } ): FeedItem | null => {
    const quest = mockQuests.find(q => q.id === item.questId);
    if (!quest) {
        console.warn(`Quest with id "${item.questId}" not found for feed item "${item.id}". Skipping.`);
        return null;
    }
    return { ...item, quest };
};

const feedItemDefinitions = [
  {
    type: FeedItemType.Lore,
    id: 'lore-1',
    title: 'The Veil Thinning',
    text: "Whispers from the Void grow louder. The Guild calls upon its most steadfast champions to investigate the anomalies and restore balance before the shadows consume everything. Your journey begins now.",
  },
  createFeedItem({
    type: FeedItemType.StreamerActivity,
    id: 'streamer-1',
    streamer: { name: 'RavenX', avatar: 'R' },
    action: 'has launched a new Legendary Quest',
    questId: 'legendary001',
  }),
  createFeedItem({
    type: FeedItemType.TopQuest,
    id: 'top-quest-1',
    questId: 'epic001',
  }),
    createFeedItem({
    type: FeedItemType.TopQuest,
    id: 'top-quest-2',
    questId: 'epic002',
  }),
  createFeedItem({
    type: FeedItemType.PlayerActivity,
    id: 'player-1',
    player: { name: 'Zephyr' },
    action: 'completed a Mythic Quest',
    questId: 'mythic001',
    details: 'and shared a rare drop: Void Shard!',
  }),
    createFeedItem({
    type: FeedItemType.FeaturedQuest,
    id: 'featured-1',
    questId: 'chain001_3',
  }),
    createFeedItem({
    type: FeedItemType.StreamerActivity,
    id: 'streamer-2',
    streamer: { name: 'LunaW', avatar: 'L' },
    action: 'just went live with a special quest event',
    questId: 'rare001',
  }),
   createFeedItem({
    type: FeedItemType.PlayerActivity,
    id: 'player-2',
    player: { name: 'Ghost' },
    action: 'was the first to complete',
    questId: 'chain001_2',
    details: 'in under an hour!',
  }),
];

export const mockFeedItems: FeedItem[] = feedItemDefinitions.filter((item): item is FeedItem => item !== null);
