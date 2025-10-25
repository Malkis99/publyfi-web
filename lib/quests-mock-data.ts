
export type QuestRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
export type QuestType = 'Streamer' | 'Platform' | 'Community' | 'Daily';
export type RewardType = 'token' | 'nft' | 'xp' | 'reputation' | 'special';

export interface Reward {
  type: RewardType;
  value: string | number;
}

export interface Quest {
  id: string;
  title: string;
  giver: {
    name: string;
    avatarUrl?: string;
  };
  questType: QuestType;
  description: string;
  difficulty: number; // 1-5 stars
  rewards: Reward[];
  rarity: QuestRarity;
  lore?: string;
  chain?: {
    name: string;
    currentStep: number;
    totalSteps: number;
  };
  status?: 'accepted' | 'completed';
}

export const mockQuests: Quest[] = [
  // Acolyte's Path Quest Chain
  {
    id: 'chain001_1',
    title: "Acolyte's First Trial",
    giver: { name: 'Guild Mentor' },
    questType: 'Platform',
    description: 'Prove your dedication by completing a basic task for the Guild.',
    difficulty: 1,
    rarity: 'Common',
    rewards: [{ type: 'xp', value: 50 }],
    chain: {
      name: "The Acolyte's Path",
      currentStep: 1,
      totalSteps: 3,
    },
     lore: "Every legend begins with a single step. This is yours."
  },
  {
    id: 'chain001_2',
    title: 'Trial of Diligence',
    giver: { name: 'Guild Mentor' },
    questType: 'Platform',
    description: 'A true adventurer is reliable. Complete 5 daily quests to continue your training.',
    difficulty: 2,
    rarity: 'Rare',
    rewards: [{ type: 'xp', value: 150 }, { type: 'reputation', value: 50 }],
     chain: {
      name: "The Acolyte's Path",
      currentStep: 2,
      totalSteps: 3,
    },
  },
  {
    id: 'chain001_3',
    title: 'The Final Trial',
    giver: { name: 'Guild Mentor' },
    questType: 'Platform',
    description: 'Embark on your first Epic quest and return victorious to earn the rank of Adventurer.',
    difficulty: 3,
    rarity: 'Epic',
    rewards: [{ type: 'token', value: 500 }, { type: 'special', value: 'Adventurer Rank' }],
     chain: {
      name: "The Acolyte's Path",
      currentStep: 3,
      totalSteps: 3,
    },
  },
  {
    id: 'mythic001',
    title: 'The Crimson Void',
    giver: { name: 'The Oracle' },
    questType: 'Platform',
    description: 'Venture into the silent abyss and retrieve the Echo of Creation. This task is not for the faint of heart and its completion will echo through eternity.',
    difficulty: 5,
    lore: "The Oracle's whispers speak of a power that predates the stars. Only the worthy may gaze into the Crimson Void.",
    rewards: [
        { type: 'token', value: 10000 },
        { type: 'nft', value: 'Aegis of the Void' },
        { type: 'xp', value: 5000 },
        { type: 'reputation', value: 1000 }
    ],
    rarity: 'Mythic',
  },
  {
    id: 'legendary001',
    title: 'Starforger\'s Legacy',
    giver: { name: 'Stellaris Guild' },
    questType: 'Community',
    description: 'An ancient forge lies dormant among the stars. Re-ignite its core with a Celestial Ember to craft a legendary artifact and claim your place among the star-forgers.',
    difficulty: 5,
    lore: 'Legends say the Starforger was the first to harness the power of a dying star. Its secrets are locked within the forge.',
    rewards: [
        { type: 'token', value: 5000 },
        { type: 'nft', value: 'Starforged Gauntlet' },
        { type: 'xp', value: 2500 },
        { type: 'reputation', value: 500 }
    ],
    rarity: 'Legendary',
  },
  {
    id: 'epic001',
    title: 'Eclipse Protocol',
    giver: { name: 'Streamer: Cypher' },
    questType: 'Streamer',
    description: 'Infiltrate the Neon Spire during the solar eclipse and extract the data core. Cypher\'s stream holds the key to bypassing the security systems.',
    difficulty: 4,
    lore: 'The Neon Spire is the heart of the city\'s data network. Its security is legendary, but Cypher knows a secret path.',
    rewards: [
        { type: 'token', value: 1500 },
        { type: 'xp', value: 1000 },
        { type: 'reputation', value: 250 }
    ],
    rarity: 'Epic',
  },
  {
    id: 'epic002',
    title: 'Whispers of the Deep',
    giver: { name: 'PublyFi Archives' },
    questType: 'Platform',
    description: 'The Archives have detected a corrupted data stream emanating from a forgotten server. Cleanse the node before the corruption spreads across the network.',
    difficulty: 3,
    rewards: [
        { type: 'token', value: 1000 },
        { type: 'xp', value: 750 },
        { type: 'reputation', value: 150 }
    ],
    rarity: 'Epic',
  },
    {
    id: 'daily001',
    title: 'Daily Check-in',
    giver: { name: 'Guildmaster' },
    questType: 'Daily',
    description: 'Simply log in and claim your daily reward for being an active member of the guild. A small token of appreciation.',
    difficulty: 1,
    rewards: [
        { type: 'xp', value: 50 },
        { type: 'reputation', value: 10 },
    ],
    rarity: 'Common',
  },
  {
    id: 'rare001',
    title: 'Synth-Runner\'s Circuit',
    giver: { name: 'Streamer: Vex' },
    questType: 'Streamer',
    description: 'Complete Vex\'s custom-designed parkour map in under 5 minutes on stream. Agility and precision are key.',
    difficulty: 2,
    rewards: [
        { type: 'token', value: 500 },
        { type: 'xp', value: 300 },
        { type: 'reputation', value: 75 }
    ],
    rarity: 'Rare',
  },
  {
    id: 'rare002',
    title: 'Community Spotlight',
    giver: { name: 'Community Mods' },
    questType: 'Community',
    description: 'Design a new emote for the official PublyFi Discord server. The winning design will be chosen by community vote and implemented.',
    difficulty: 1,
    rewards: [
        { type: 'special', value: 'Featured Designer Role' },
        { type: 'xp', value: 500 },
        { type: 'reputation', value: 100 }
    ],
    rarity: 'Rare',
  },
  {
    id: 'common001',
    title: 'First Contact',
    giver: { name: 'PublyFi Onboarding' },
    questType: 'Platform',
    description: 'Welcome to the Guild! Complete your profile, link a wallet, and follow three streamers to receive your initiation rewards.',
    difficulty: 1,
    rewards: [
        { type: 'token', value: 50 },
        { type: 'xp', value: 100 },
        { type: 'reputation', value: 20 }
    ],
    rarity: 'Common',
    status: 'completed',
    chain: {
      name: "Initiation",
      currentStep: 1,
      totalSteps: 2,
    }
  },
  {
    id: 'common002',
    title: 'Scavenger Hunt',
    giver: { name: 'Streamer: Glitch' },
    questType: 'Streamer',
    description: 'Find the hidden emoji Glitch has placed in their latest three VODs. Report your findings in their channel.',
    difficulty: 1,
    rewards: [
        { type: 'xp', value: 150 },
        { type: 'reputation', value: 30 }
    ],
    rarity: 'Common',
  },
  {
    id: 'streamer003',
    title: 'Speedrun Challenge',
    giver: { name: 'Streamer: Flash' },
    questType: 'Streamer',
    description: 'Beat the first level of "Chrono-Breach" in under 2 minutes. Submit your run to Flash\'s Discord.',
    difficulty: 3,
    rewards: [
        { type: 'token', value: 750 },
        { type: 'xp', value: 500 },
        { type: 'reputation', value: 100 }
    ],
    rarity: 'Epic',
    status: 'completed',
  },
  {
    id: 'streamer004',
    title: 'Lore Hunter',
    giver: { name: 'Streamer: LoreMaster' },
    questType: 'Streamer',
    description: 'Find all 10 hidden lore tablets in the "Whispering Ruins" area. LoreMaster will provide hints on stream.',
    difficulty: 2,
    rewards: [
        { type: 'xp', value: 400 },
        { type: 'reputation', value: 80 }
    ],
    rarity: 'Rare',
  },
    {
    id: 'streamer005',
    title: 'The Unbeatable',
    giver: { name: 'Streamer: Titan' },
    questType: 'Streamer',
    description: 'Challenge Titan to a 1v1 duel in the arena and win. This is a test of true skill.',
    difficulty: 5,
    rewards: [
        { type: 'token', value: 2000 },
        { type: 'reputation', value: 300 },
        { type: 'special', value: 'Titan Slayer Title' }
    ],
    rarity: 'Legendary',
  },
];
