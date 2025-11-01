
export type QuestRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
export type QuestType = 'Streamer' | 'Platform' | 'Community' | 'Daily';
export type RewardType = 'token' | 'nft' | 'xp' | 'reputation' | 'special';

export interface Reward {
  type: RewardType;
  value: string | number;
}

export interface QuestObjective {
  text: string;
  completed: boolean;
}

export interface Quest {
  id: string;
  title: string;
  giver: {
    name: string;
    avatarUrl?: string;
  };
  questType: QuestType;
  description: string; // This is the short description for the card
  fullDescription?: string; // This is the immersive summary for the modal
  streamerComments?: string[];
  objectives?: QuestObjective[];
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
    fullDescription: "Every legend begins with a single step. To prove your worth, you must complete a simple task. This will show the Guild your commitment and dedication. Success will open the door to greater challenges and rewards.",
    streamerComments: ["This is where it all starts, folks! Don't skip this one."],
    objectives: [
        { text: 'Complete your profile', completed: false },
        { text: 'Link a wallet', completed: false },
    ],
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
    fullDescription: "Consistency is the hallmark of a true adventurer. The Guild needs members it can rely on. Complete five daily quests to demonstrate your diligence and continue your journey on the Acolyte's Path.",
    streamerComments: ["The daily grind is real, but it's worth it for the rewards!"],
    objectives: [
        { text: 'Complete 5 daily quests', completed: false },
    ],
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
    fullDescription: "You have shown promise, acolyte. Now, face your final trial. Embark on an Epic quest and return victorious. Success will earn you the esteemed rank of Adventurer and the respect of the Guild.",
    streamerComments: ["This is a huge step up! Make sure you're prepared for a real challenge."],
    objectives: [
        { text: 'Complete one Epic quest', completed: false },
        { text: 'Return to the Guild Mentor', completed: false },
    ],
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
    description: 'Venture into the silent abyss and retrieve the Echo of Creation. This task is not for the faint of heart.',
    fullDescription: 'Venture into the silent abyss and retrieve the Echo of Creation. This task is not for the faint of heart and its completion will echo through eternity. The Crimson Void is a place between realities, and you will need to be prepared for anything.',
    streamerComments: ["Don't forget to bring a reality anchor!", "The Echo is guarded by a powerful entity. Be ready for a fight."],
    objectives: [
      { text: 'Enter the Crimson Void', completed: true },
      { text: 'Retrieve the Echo of Creation', completed: false },
      { text: 'Return to the Oracle', completed: false },
    ],
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
    fullDescription: 'Legends say the Starforger was the first to harness the power of a dying star. Its secrets are locked within the forge. Re-ignite its core with a Celestial Ember to craft a legendary artifact and claim your place among the star-forgers.',
    streamerComments: ["This is a community effort, so let's work together to find that Celestial Ember!"],
    objectives: [
        { text: 'Find the Celestial Ember', completed: false },
        { text: 'Re-ignite the Starforge', completed: false },
        { text: 'Craft a legendary artifact', completed: false },
    ],
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
    fullDescription: "The Neon Spire is the heart of the city's data network. Its security is legendary, but Cypher knows a secret path. Infiltrate the spire during the solar eclipse and extract the data core. Cypher's stream holds the key to bypassing the security systems.",
    streamerComments: ["Timing is everything on this one. You have to be in and out before the eclipse ends."],
    objectives: [
        { text: 'Watch Cypher\'s stream for the entry key', completed: false },
        { text: 'Infiltrate the Neon Spire', completed: false },
        { text: 'Extract the data core', completed: false },
    ],
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
    fullDescription: 'A forgotten server has become a source of data corruption, threatening the entire PublyFi network. The Archives require a skilled agent to venture into the digital depths, locate the corrupted node, and cleanse it before the infection spreads.',
    streamerComments: ["This one's a bit spooky. Make sure you have your best firewall up."],
    objectives: [
        { text: 'Locate the corrupted server node', completed: false },
        { text: 'Run the cleansing protocol', completed: false },
        { text: 'Report back to the Archives', completed: false },
    ],
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
    fullDescription: 'The Guild values its active members. Simply check in today to claim a small reward as a token of our appreciation. Your continued presence strengthens the community.',
    streamerComments: ["Easiest quest in the game! Free rewards just for logging in."],
    objectives: [
        { text: 'Log in to PublyFi', completed: true },
        { text: 'Claim reward', completed: false },
    ],
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
    fullDescription: "Vex, the renowned Synth-Runner, has designed a challenging parkour circuit. He's challenging all skilled members of the community to complete it in under five minutes. Watch his stream for tips and tricks.",
    streamerComments: ["Don't forget to practice your wall jumps! The last section is a killer."],
    objectives: [
        { text: 'Complete the parkour map in under 5 minutes', completed: false },
        { text: 'Submit your run to Vex', completed: false },
    ],
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
    fullDescription: 'Our community is the heart of PublyFi, and we want you to leave your mark! Design a new emote for our official Discord server. The winning design will be immortalized for all to use.',
    streamerComments: ["I can't wait to see what you all come up with! Let's get some new memes in here."],
    objectives: [
        { text: 'Design a new Discord emote', completed: false },
        { text: 'Submit your design to the Community Mods', completed: false },
    ],
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
    fullDescription: "Welcome to PublyFi! To get you started, we have a simple set of tasks. Complete your profile, link a wallet, and follow three streamers to receive your initiation rewards. This is the first step on your journey to becoming a legend.",
    streamerComments: ["A great way to get started on the platform. Make sure you follow me!"],
    objectives: [
        { text: 'Complete your profile', completed: true },
        { text: 'Link a wallet', completed: false },
        { text: 'Follow three streamers', completed: false },
    ],
    difficulty: 1,
    rewards: [
        { type: 'token', value: 50 },
        { type: 'xp', value: 100 },
        { type: 'reputation', value: 20 }
    ],
    rarity: 'Common',
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
    fullDescription: "Glitch is known for his mischievous scavenger hunts. He's hidden a secret emoji in his last three VODs. Find them all and report your findings in his Discord channel to claim your reward.",
    streamerComments: ["I'm not going to make it easy for you! Happy hunting!"],
    objectives: [
        { text: 'Find the hidden emoji in VOD 1', completed: false },
        { text: 'Find the hidden emoji in VOD 2', completed: false },
        { text: 'Find the hidden emoji in VOD 3', completed: false },
    ],
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
    fullDescription: 'Flash is the speedrun king, and he\'s issued a challenge to the community. Beat the first level of "Chrono-Breach" in under two minutes and submit your run to his Discord. Only the fastest will be rewarded.',
    streamerComments: ["Think you're fast enough? Prove it."],
    objectives: [
        { text: 'Beat "Chrono-Breach" level 1 in under 2 minutes', completed: false },
        { text: 'Submit video proof to Flash\'s Discord', completed: false },
    ],
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
    fullDescription: "The Whispering Ruins are filled with ancient secrets. LoreMaster has challenged his community to find all ten hidden lore tablets. Tune into his stream for hints and guidance.",
    streamerComments: ["The lore in this game is so deep. I can't wait to see what you all uncover."],
    objectives: [
        { text: 'Find lore tablet 1/10', completed: true },
        { text: 'Find lore tablet 2/10', completed: true },
        { text: 'Find lore tablet 3/10', completed: false },
        { text: 'Find lore tablet 4/10', completed: false },
        { text: 'Find lore tablet 5/10', completed: false },
        { text: 'Find lore tablet 6/10', completed: false },
        { text: 'Find lore tablet 7/10', completed: false },
        { text: 'Find lore tablet 8/10', completed: false },
        { text: 'Find lore tablet 9/10', completed: false },
        { text: 'Find lore tablet 10/10', completed: false },
    ],
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
    fullDescription: "Titan is the undisputed champion of the arena. He has issued an open challenge to anyone who thinks they have what it takes to defeat him. This is a test of pure skill. Are you ready?",
    streamerComments: ["Many have tried, all have failed. Will you be the one to finally defeat me?"],
    objectives: [
        { text: 'Challenge Titan to a duel', completed: false },
        { text: 'Defeat Titan in a 1v1 match', completed: false },
    ],
    difficulty: 5,
    rewards: [
        { type: 'token', value: 2000 },
        { type: 'reputation', value: 300 },
        { type: 'special', value: 'Titan Slayer Title' }
    ],
    rarity: 'Legendary',
  },
];
