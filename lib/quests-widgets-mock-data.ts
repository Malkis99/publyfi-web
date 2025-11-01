
export interface PlayerReputationData {
  rank: string;
  currentXp: number;
  nextRankXp: number;
  emblemUrl?: string;
}

export const mockPlayerReputation: PlayerReputationData = {
  rank: 'Veteran Adventurer',
  currentXp: 3250,
  nextRankXp: 5000,
};

export interface LeaderboardEntry {
  rank: number;
  name: string;
  questsCompleted: number;
  totalXp: number;
}

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'ShadowHunter', questsCompleted: 152, totalXp: 25800 },
  { rank: 2, name: 'AstraNova', questsCompleted: 145, totalXp: 24100 },
  { rank: 3, name: 'CypherGhost', questsCompleted: 130, totalXp: 22500 },
  { rank: 4, name: 'VexForge', questsCompleted: 121, totalXp: 20900 },
  { rank: 5, name: 'HeliosRift', questsCompleted: 115, totalXp: 19800 },
];

export interface ActivityEvent {
  id: string;
  playerName: string;
  questTitle: string;
  questRarity: 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  reward: string;
}

export const mockActivityFeed: ActivityEvent[] = [
  { id: 'act1', playerName: '@Nova', questTitle: 'Shard of Truth', questRarity: 'Mythic', reward: '500 $PUBL' },
  { id: 'act2', playerName: '@Zephyr', questTitle: 'Data Heist', questRarity: 'Epic', reward: '250 $PUBL' },
  { id: 'act3', playerName: '@Luna', questTitle: 'Starlight Beacon', questRarity: 'Legendary', reward: 'Astro-Gauntlet NFT' },
  { id: 'act4', playerName: '@Rift', questTitle: 'Circuit Breaker', questRarity: 'Rare', reward: '75 $PUBL' },
  { id: 'act5', playerName: '@Helios', questTitle: 'Forge of Destiny', questRarity: 'Mythic', reward: 'Sunforged Plate NFT' },
];
