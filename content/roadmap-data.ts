export type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

export interface MilestoneItem {
  text: string;
  status: MilestoneStatus;
}

export interface QuarterData {
  title: string;
  description: string;
  milestones: MilestoneItem[];
  isCheckpoint?: boolean;
}

export const roadmapData: QuarterData[] = [
  {
    title: 'Q1 2026 — Foundation & Blockchain Base',
    description: 'Where PublyFi begins its pulse — establishing the core blockchain spine: $PUBL smart contracts, Immutable zkEVM, and DAO architecture. The ecosystem’s heart starts beating with real utility.',
    milestones: [
      { text: 'Launch PublyFi Web Infrastructure (Landing, Token, Waitlist)', status: 'completed' },
      { text: 'Deploy $PUBL Smart Contracts (ERC-20, Burn Vault, Escrow)', status: 'in-progress' },
      { text: 'Immutable zkEVM Setup + DAO Testnet', status: 'planned' },
      { text: 'KYC / Tiered Access (FaceID Integration)', status: 'planned' },
      { text: 'Smart Contract Audit (Token + Marketplace Base)', status: 'planned' },
      { text: 'Legal Formation + DAO Wrapper + Compliance Opinion', status: 'planned' },
      { text: 'Tokenomics Finalization & Pre-Listing Treasury', status: 'planned' },
      { text: 'MVP Systems: Profile, Inventory, Avatar Customization', status: 'planned' },
    ],
    isCheckpoint: true,
  },
  {
    title: 'Q2 2026 — Core Platform Rollout (Alpha)',
    description: 'The first breath of the platform — streams, reels, and quests unite under one social layer. Identity, progression, and interactivity converge into a playable alpha.',
    milestones: [
      { text: 'Core Platform (Alpha): Home Feed, Streams, Reels, Quests, Navigation', status: 'in-progress' },
      { text: 'Streamer Quest System (v1) — Escrow-based Rewards', status: 'planned' },
      { text: 'Subscription Tiers (Free, Prime, Pro) — $PUBL Integration', status: 'planned' },
      { text: 'NFT Marketplace (Alpha) — Base Trading & Cosmetics', status: 'planned' },
      { text: 'Security Layer — FaceID / WebAuthn', status: 'planned' },
      { text: 'Creator Tools (v1) — Basic NFT Minting for Verified Streamers', status: 'planned' },
      { text: 'In-Platform XP & Reward Cases (Weekly, Monthly)', status: 'planned' },
    ],
    isCheckpoint: true,
  },
  {
    title: 'Q3 2026 — NFT Ecosystem & Pre-Listing Phase',
    description: 'A living economy takes shape — NFT marketplace, cases, and cosmetic drops awaken. Players craft identity through ownership while token readiness nears completion.',
    milestones: [
        { text: 'Marketplace Expansion (v2): Filters, Upgrades, Fusion Burns', status: 'in-progress' },
        { text: 'Launch of First NFT Collections (Base Sets, Cosmetics, Avatars)', status: 'in-progress' },
        { text: 'Prime & Pro Reward Loops — Case Rewards, Reputation Boosts', status: 'planned' },
        { text: 'Community Hub — Guilds, Forums, Mentorship', status: 'planned' },
        { text: 'Seasonal Events — Limited Drops, Themed Quests', status: 'planned' },
        { text: 'Points → $PUBL Conversion (Early Users)', status: 'planned' },
        { text: 'Reputation & Leaderboards System', status: 'planned' },
        { text: 'Liquidity Setup + Final Token Audit', status: 'planned' },
    ],
    isCheckpoint: true,
  },
  {
    title: 'Q4 2026 — Token Launch & Governance',
    description: '$PUBL emerges as the fuel of creation — token integration, burn vault, and DAO governance ignite the economic cycle. Every action gains meaning through deflation and decision.',
    milestones: [
      { text: 'Official Token Listing (CEX + DEX)', status: 'planned' },
      { text: 'Integrate $PUBL Throughout Platform — Replace Points', status: 'planned' },
      { text: 'Activate Burn Vault + Buyback System', status: 'planned' },
      { text: 'DAO v1 Launch — Governance Portal', status: 'planned' },
      { text: 'Anti-Farming & AML Systems Activation', status: 'planned' },
      { text: 'Referral & Growth System', status: 'planned' },
      { text: 'Public Beta Launch (Full Platform Access)', status: 'planned' },
      { text: 'Marketing Push + Influencer Partnerships', status: 'planned' },
      { text: 'First DAO Vote — Tokenomics & Roadmap Review', status: 'planned' },
    ],
    isCheckpoint: true,
  },
  {
    title: 'Q1 2027 — Expansion & Partnerships',
    description: 'PublyFi grows beyond its orbit — multichain rollout, mobile access, creator tools, and esports alliances expand the frontier. The network begins to breathe globally.',
    milestones: [
      { text: 'Multichain Expansion (Polygon, Solana, BNB)', status: 'planned' },
      { text: 'Advanced Marketplace (Auctions, Bidding, Bundles)', status: 'planned' },
      { text: 'Mobile Apps (iOS / Android) — React Native', status: 'planned' },
      { text: 'GameSync (v1) — Progress & Activity Integration', status: 'planned' },
      { text: 'Creator Tools (v2) — Custom Cases, Events', status: 'planned' },
      { text: 'Esports & Tournament Framework', status: 'planned' },
      { text: 'DAO Treasury Grants for Creators', status: 'planned' },
      { text: 'Brand Collaborations (NFT Drops, Crossovers)', status: 'planned' },
    ],
    isCheckpoint: true,
  },
  {
    title: 'Q2 2027 — Living 3D Avatars & Social Integration',
    description: 'Identity evolves — every user becomes a living 3D avatar. Profiles transform into dynamic personas with traits, gear, and emotion. The platform becomes self-aware — social, expressive, alive.',
    milestones: [
        { text: 'Launch Living 3D Avatar System — personalized, real-time NFT-based user models', status: 'in-progress'},
        { text: 'Avatar Customization 2.0 — outfits, gear, animations, idle poses', status: 'planned'},
        { text: 'GameSync Integration — cross-content quest & reward tracking', status: 'planned'},
        { text: 'Identity Engine v2 — persistent traits, visual memory, user evolution', status: 'planned'},
        { text: 'Profile Fusion — integrate avatar view directly in profile page', status: 'planned'},
        { text: 'Creator Badges & Titles — earned visual ranks inside profiles', status: 'planned'},
        { text: 'DAO Identity Sync — avatar traits reflected in governance reputation', status: 'planned'},
    ],
    isCheckpoint: true,
  },
  {
    title: '2028+ — PublyVerse Expansion',
    description: 'The world awakens — VR and AR bridges open, AI companions learn, and creators build within an open SDK. PublyFi transcends platform into universe — a DAO-guided realm of infinite stories.',
    milestones: [
        { text: 'PublyVerse Core Launch — immersive 3D world with VR/AR support', status: 'planned'},
        { text: 'Living AI Avatars — behavior-driven companions', status: 'planned'},
        { text: 'Open Developer SDK — tools for custom extensions & spaces', status: 'planned'},
        { text: 'GameSync 2.0 — cross-realm quests & meta-progression', status: 'planned'},
        { text: 'Cross-Platform Integration — external game & partner worlds', status: 'planned'},
        { text: 'DAO 2.0 Governance — community-led world evolution', status: 'planned'},
        { text: 'Long-Term Sustainability & Treasury Expansion', status: 'planned'},
    ],
    isCheckpoint: true,
  }
];