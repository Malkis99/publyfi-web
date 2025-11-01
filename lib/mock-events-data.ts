// lib/mock-events-data.ts

export interface ActiveQuest {
  id: string;
  title: string;
  progress: number;
  goal: number;
  unit?: string;
}

export interface DailyTask {
  id: string;
  title: string;
  icon: string; // Icon name from lucide-react or custom SVG key
}

export interface EventObjective {
  id: string;
  description: string;
  completed: boolean;
}

export interface EventReward {
  id: string;
  name: string;
  type: 'NFT' | 'Badge' | 'Token' | 'Title' | 'Cosmetic' | 'Item Pack';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  icon: string;
}

export interface PlatformEvent {
  id: string;
  title: string;
  duration: string;
  tag: string;
  description: string;
  objectives: EventObjective[];
  rewards: EventReward[];
  countdownEnd: Date;
  isFeatured?: boolean;
}

export interface StreamerActivity {
    id: string;
    name: string;
    event: string;
    progress?: number;
    isLive: boolean;
}

export const activeQuests: ActiveQuest[] = [
  { id: 'aq1', title: 'Complete 3 event challenges', progress: 2, goal: 3 },
  { id: 'aq2', title: 'Earn 200 Valor Points this week', progress: 146, goal: 200, unit: 'VP' },
  { id: 'aq3', title: 'Watch 60 minutes of any Prime stream', progress: 14, goal: 60, unit: 'min' },
];

export const dailyTasks: DailyTask[] = [
  { id: 'dt1', title: 'Join one ongoing event', icon: 'Gamepad2' },
  { id: 'dt2', title: 'Claim 3 daily login rewards', icon: 'Gem' },
  { id: 'dt3', title: 'Participate in a Seasonal Challenge', icon: 'Flame' },
  { id: 'dt4', title: 'Deal 10,000 total damage in connected games via GameSync', icon: 'Sword' },
];

const now = new Date();

export const platformEvents: PlatformEvent[] = [
  {
    id: 'pe1',
    title: 'Trial of Ember',
    duration: '12 days remaining',
    tag: 'Limited Event / Combat Mastery',
    description: 'The Ember Core is reawakening beneath the digital wastelands. Players must complete arena battles, survival runs, or any GameSync-connected combat challenge to feed the core with Valor Energy. Each action earns Ember Points — the higher your total, the greater your standing in the Trial.',
    objectives: [
      { id: 'pe1o1', description: 'Win 10 connected matches (verified via GameSync)', completed: false },
      { id: 'pe1o2', description: 'Deal 50,000 total damage', completed: false },
      { id: 'pe1o3', description: 'Defeat 3 elite AI bosses', completed: true },
    ],
    rewards: [
      { id: 'pe1r1', name: 'Flameborn Armor Fragment', type: 'NFT', rarity: 'Epic', icon: 'ArmorFragment' },
      { id: 'pe1r2', name: 'Ember Core Sigil', type: 'Badge', rarity: 'Epic', icon: 'Sigil' },
      { id: 'pe1r3', name: '500 Valor Tokens', type: 'Token', rarity: 'Rare', icon: 'Token' },
      { id: 'pe1r4', name: '“Ember Ascendant” Title', type: 'Title', rarity: 'Legendary', icon: 'Title' },
    ],
    countdownEnd: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000),
    isFeatured: true,
  },
  {
    id: 'pe2',
    title: 'Season of Valor: Chapter II – The Rising Trial',
    duration: '24 days remaining',
    tag: 'Seasonal Progression',
    description: 'The world enters a new cycle of Valor — a test of persistence, teamwork, and glory. Every completed quest, stream watched, or NFT traded adds to your Seasonal Valor Score. Season tiers unlock automatically in the Vault of Valor below.',
    objectives: [
      { id: 'pe2o1', description: 'Earn Valor Points from any source', completed: true },
      { id: 'pe2o2', description: 'Reach Rank 3 Reputation', completed: false },
      { id: 'pe2o3', description: 'Complete 10 daily quests', completed: false },
    ],
    rewards: [
        { id: 'pe2r1', name: 'Valor Case', type: 'Item Pack', rarity: 'Rare', icon: 'Chest' },
        { id: 'pe2r2', name: 'Elite Valor Chest', type: 'Item Pack', rarity: 'Legendary', icon: 'Chest' },
        { id: 'pe2r3', name: 'Mythic Relic', type: 'NFT', rarity: 'Mythic', icon: 'Relic' },
    ],
    countdownEnd: new Date(now.getTime() + 24 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'pe3',
    title: 'Echoes of the Prime Dawn',
    duration: '7 days remaining',
    tag: 'Prime User Exclusive',
    description: 'Prime users are invited to a limited-time challenge that celebrates the dawn of PublyFi’s ecosystem. Complete specific social tasks and earn exclusive collectibles tied to the first season.',
    objectives: [
        { id: 'pe3o1', description: 'Post 3 clips to the community feed', completed: false },
        { id: 'pe3o2', description: 'Complete 2 streamer quests', completed: true },
        { id: 'pe3o3', description: 'Earn 100 community likes', completed: false },
    ],
    rewards: [
        { id: 'pe3r1', name: 'Prime Dawn Emblem', type: 'NFT', rarity: 'Epic', icon: 'Emblem' },
        { id: 'pe3r2', name: '“Early Flame” Community Icon', type: 'Cosmetic', rarity: 'Rare', icon: 'Icon' },
        { id: 'pe3r3', name: '“Founding Spark” Title', type: 'Title', rarity: 'Legendary', icon: 'Title' },
    ],
    countdownEnd: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'pe4',
    title: 'Vault Awakening',
    duration: '30 days remaining',
    tag: 'Global Event / Platform Quest',
    description: 'The Vault of Valor is awakening — ancient digital relics begin to surface. Players across the world must join together to power the Vault by completing quests, watching streams, and trading NFTs.',
    objectives: [
        { id: 'pe4o1', description: 'Earn 5000 Valor Points collectively', completed: true },
        { id: 'pe4o2', description: 'Complete 20 Platform Quests', completed: false },
        { id: 'pe4o3', description: 'Participate in 3 daily logins', completed: false },
    ],
    rewards: [
        { id: 'pe4r1', name: '1000 $PUBL Token Drop', type: 'Token', rarity: 'Legendary', icon: 'Token' },
        { id: 'pe4r2', name: '“Vaultlight Cape” Animated Cosmetic', type: 'NFT', rarity: 'Mythic', icon: 'Cosmetic' },
        { id: 'pe4r3', name: '“Keeper of the Vault” Rank Emblem', type: 'Badge', rarity: 'Mythic', icon: 'Emblem' },
    ],
    countdownEnd: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
  },
];

export const streamerActivities: StreamerActivity[] = [
    { id: 'sa1', name: 'StreamerA', event: 'Trial of Ember', progress: 78, isLive: true },
    { id: 'sa2', name: 'StreamerB', event: 'Vault Awakening', isLive: true },
    { id: 'sa3', name: 'StreamerC', event: 'Echoes of the Prime Dawn', progress: 45, isLive: false },
];
