import { Quest } from './quests-mock-data';

// 1. Lore Header
export interface LoreHeader {
  id: string;
  type: 'lore-header';
  text: string;
}

// 2. Featured Quest (Extends the base Quest but is identified differently)
export interface FeaturedQuest {
  id: string;
  type: 'featured-quest';
  quest: Quest;
  badge: '⭐ Featured Quest' | '🔥 Trending';
}

// 3. Guild Activity
export interface GuildActivity {
  id: string;
  type: 'guild-activity';
  text: string;
}

// 4. Lore Fragment
export interface LoreFragment {
  id: string;
  type: 'lore-fragment';
  text: string;
}

// 5. Quest Highlight (A regular quest in the feed)
export interface QuestHighlight {
  id: string;
  type: 'quest-highlight';
  quest: Quest;
}

// 6. Guild Whisper
export interface GuildWhisper {
  id: string;
  type: 'guild-whisper';
  text: string;
}

// 7. Streamer Activity
export interface StreamerActivity {
    id: string;
    type: 'streamer-activity';
    streamer: string;
    action: string;
    questName: string;
}

// 8. Live Quest Announcement
export interface LiveQuestAnnouncement {
    id: string;
    type: 'live-quest-announcement';
    quest: Quest;
}

// 9. Guild Highlight
export interface GuildHighlight {
    id: string;
    type: 'guild-highlight';
    text: string;
}

// 10. Streamer Spotlight
export interface StreamerSpotlight {
    id: string;
    type: 'streamer-spotlight';
    streamers: { name: string, avatarUrl?: string }[];
}


// Union type for all possible feed items
export type LivingFeedItem =
  | LoreHeader
  | FeaturedQuest
  | GuildActivity
  | LoreFragment
  | QuestHighlight
  | GuildWhisper
  | StreamerActivity
  | LiveQuestAnnouncement
  | GuildHighlight
  | StreamerSpotlight;

// Mock Data from existing quests
import { mockQuests } from './quests-mock-data';
const legendaryQuest = mockQuests.find(q => q.rarity === 'Legendary');
const mythicQuest = mockQuests.find(q => q.rarity === 'Mythic');
const epicQuest = mockQuests.find(q => q.rarity === 'Epic' && q.id === 'epic001');
const rareQuest = mockQuests.find(q => q.rarity === 'Rare');
const commonQuest = mockQuests.find(q => q.rarity === 'Common');


// Assemble the living feed
export const livingFeedMockData: LivingFeedItem[] = [
  {
    id: 'lore-header-1',
    type: 'lore-header',
    text: 'Across the digital frontier, the Guild stirs once more. Adventurers log in, contracts awaken, and the network hums with new stories to unfold.',
  },
  {
    id: 'featured-quest-1',
    type: 'featured-quest',
    quest: mythicQuest!,
    badge: '🔥 Trending',
  },
  {
    id: 'featured-quest-2',
    type: 'featured-quest',
    quest: legendaryQuest!,
    badge: '⭐ Featured Quest',
  },
  {
    id: 'activity-1',
    type: 'guild-activity',
    text: '@NovaHunt accepted a Mythic contract in the Outlands.',
  },
  {
    id: 'quest-highlight-1',
    type: 'quest-highlight',
    quest: epicQuest!,
  },
  {
    id: 'lore-fragment-1',
    type: 'lore-fragment',
    text: 'They say the old quests remember the ones who failed them.',
  },
  {
    id: 'activity-2',
    type: 'guild-activity',
    text: '@Arcturus reached Level 20 Reputation.',
  },
  {
    id: 'quest-highlight-2',
    type: 'quest-highlight',
    quest: rareQuest!,
  },
  {
    id: 'whisper-1',
    type: 'guild-whisper',
    text: 'A new contract has surfaced in Sector 9…',
  },
    {
    id: 'activity-3',
    type: 'guild-activity',
    text: 'The Echo Vault has been rediscovered.',
  },
  {
    id: 'quest-highlight-3',
    type: 'quest-highlight',
    quest: commonQuest!,
  },
  {
    id: 'lore-fragment-2',
    type: 'lore-fragment',
    text: 'The Guild archives whisper names long forgotten.',
  },
    {
    id: 'whisper-2',
    type: 'guild-whisper',
    text: 'Whispers say the next tournament will change everything…',
  },
  {
    id: 'streamer-activity-1',
    type: 'streamer-activity',
    streamer: 'RavenX',
    action: 'just launched a new Legendary Quest:',
    questName: 'Shadow Circuit',
  },
  {
    id: 'guild-highlight-1',
    type: 'guild-highlight',
    text: 'Top 3 Adventurers this week earned over 1,000 XP.',
  },
  {
    id: 'streamer-spotlight-1',
    type: 'streamer-spotlight',
    streamers: [
        { name: 'AetherKnight' },
        { name: 'NovaHunt' },
        { name: 'Cypher' },
    ],
  },
  {
    id: 'live-quest-announcement-1',
    type: 'live-quest-announcement',
    quest: mockQuests.find(q => q.id === 'epic002')!,
  },
];
