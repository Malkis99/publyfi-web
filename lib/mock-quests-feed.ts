import { Quest, mockQuests } from './quests-mock-data';

export enum FeedItemType {
  Lore,
  StreamerActivity,
  TopQuest,
  PlayerActivity,
  FeaturedQuest,
  LimitedTime,
  LiveStreamerPanel,
  CommunityHighlights,
  GuildBriefing,
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

export interface LiveStreamerPanelData {
    id: string;
    type: FeedItemType.LiveStreamerPanel;
    streamers: {
        name: string;
        avatar: string;
        quest: Quest;
    }[];
}

export interface CommunityHighlightsData {
    id: string;
    type: FeedItemType.CommunityHighlights;
    highlights: {
        player: string;
        action: string;
    }[];
}

export interface GuildBriefingData {
    id: string;
    type: FeedItemType.GuildBriefing;
    briefing: string;
}

export type FeedItem = LoreFeedItem | StreamerActivityFeedItem | TopQuestFeedItem | PlayerActivityFeedItem | FeaturedQuestFeedItem | LiveStreamerPanelData | CommunityHighlightsData | GuildBriefingData;

// Helper function to create a feed item and ensure the quest exists
const createFeedItem = (item: any): FeedItem | null => {
    if (item.type === FeedItemType.LiveStreamerPanel) {
        const streamersWithQuests = item.streamers.map((s: any) => {
            const quest = mockQuests.find(q => q.id === s.questId);
            if (!quest) return null;
            return { ...s, quest };
        }).filter(Boolean); // Filter out nulls if a quest wasn't found

        if (streamersWithQuests.length !== item.streamers.length) return null; // In case some quests were not found
        return { ...item, streamers: streamersWithQuests };
    }

    if (item.questId) {
        const quest = mockQuests.find(q => q.id === item.questId);
        if (!quest) {
            console.warn(`Quest with id "${item.questId}" not found for feed item "${item.id}". Skipping.`);
            return null;
        }
        const { questId, ...rest } = item;
        return { ...rest, quest };
    }
    return item;
};


const feedItemDefinitions = [
  {
    type: FeedItemType.Lore,
    id: 'lore-1',
    title: 'The Veil Thinning',
    text: "Whispers from the Void grow louder. The Guild calls upon its most steadfast champions to investigate the anomalies and restore balance before the shadows consume everything. Your journey begins now.",
  },
  createFeedItem({
        id: 'live-streamers-1',
        type: FeedItemType.LiveStreamerPanel,
        streamers: [
            { name: "NiraX", avatar: "NX", questId: 'rare002' },
            { name: "Liora", avatar: "LI", questId: 'epic002' },
        ]
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
    {
        id: 'community-highlights-1',
        type: FeedItemType.CommunityHighlights,
        highlights: [
            { player: "Echo", action: "completed a Mythic Quest — shared new strategy insights." },
            { player: "Liora", action: "discovered a hidden chain quest: 'Echo Protocol.'" },
        ]
    },
  createFeedItem({
    type: FeedItemType.StreamerActivity,
    id: 'streamer-1',
    streamer: { name: 'RavenX', avatar: 'R' },
    action: 'has launched a new Legendary Quest',
    questId: 'legendary001',
  }),
  createFeedItem({
    type: FeedItemType.PlayerActivity,
    id: 'player-1',
    player: { name: 'Zephyr' },
    action: 'completed a Mythic Quest',
    questId: 'mythic001',
    details: 'and shared a rare drop: Void Shard!',
  }),
    {
        id: 'guild-briefing-1',
        type: FeedItemType.GuildBriefing,
        briefing: "Rumor: A new Mythic Contract will appear at midnight. Prepare your squads."
    },
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
