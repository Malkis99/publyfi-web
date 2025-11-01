import { Eye, Code, ShieldCheck, TrendingUp, GitMerge, Award, Users, MessageSquare, Heart, GitCommitHorizontal, ThumbsUp, Flame, Smile, Newspaper, Calendar, Headset } from 'lucide-react';

// --- TYPE DEFINITIONS ---

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'Prime' | 'PRO' | 'Moderator' | 'Member';
  reputation: number;
  stats: {
    posts: number;
    likes: number;
    rank: number;
  };
}

export type ReactionType = 'thumbsup' | 'flame' | 'heart' | 'smile';

export interface TopicBadge {
  id: 'prime' | 'featured' | 'guide' | 'dao' | 'trending' | 'news' | 'event' | 'support';
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

export interface CommentReaction {
  emoji: ReactionType;
  count: number;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  reactions: CommentReaction[];
  replies: Comment[];
  timestamp: string;
  likeCount?: number;
}

export interface FeedItem {
  id: string;
  type: 'discussion' | 'guide' | 'poll' | 'dao' | 'event' | 'system' | 'news' | 'support';
  author?: User;
  title?: string;
  content?: string;
  badges?: TopicBadge[];
  comments?: Comment[];
  timestamp: string;
  likeCount?: number;
  shareCount?: number;
  // Poll specific
  pollOptions?: { text:string; votes: number }[];
  // DAO specific
  forVotes?: number;
  againstVotes?: number;
  // Event specific
  eventDate?: string;
  // System specific
  systemMessage?: string;
}

export interface Guide {
  id: string;
  title: string;
  author: User;
  thumbnail: string;
  category: string;
}

export interface TrendingItem {
  id: string;
  title: string;
  category: string;
  type: 'Discussion' | 'Guide' | 'DAO Proposal';
}

export interface ActivityStats {
  posts: number;
  replies: number;
  likesGiven: number;
  likesReceived: number;
  daoVotes: number;
}

export interface UpcomingPoll {
  id: string;
  title: string;
  type: 'DAO' | 'Community';
  endDate: string;
}

// --- MOCK DATA ---

export const mockUsers: Record<string, User> = {
  'user-1': { id: 'user-1', name: 'Nova', avatar: 'https://i.postimg.cc/8PqCy2c6/pexels-andrea-piacquadio-774909.jpg', role: 'Prime', reputation: 1250, stats: { posts: 42, likes: 1.2, rank: 1 } },
  'user-2': { id: 'user-2', name: 'Erevan', avatar: 'https://i.postimg.cc/Bv2k8vJg/pexels-creation-hill-1681010.jpg', role: 'PRO', reputation: 2500, stats: { posts: 12, likes: 4.1, rank: 2 } },
  'user-3': { id: 'user-3', name: 'Cygnus', avatar: 'https://i.postimg.cc/pTjWn45x/pexels-christina-morillo-1181686.jpg', role: 'Moderator', reputation: 5000, stats: { posts: 112, likes: 8.9, rank: 3 } },
  'user-4': { id: 'user-4', name: 'Orion', avatar: 'https://i.postimg.cc/k4z2QzJg/pexels-daniel-xavier-1239291.jpg', role: 'Member', reputation: 250, stats: { posts: 5, likes: 0.1, rank: 10 } },
  'system': { id: 'system', name: 'PublyFi System', avatar: '', role: 'Member', reputation: 0, stats: { posts: 0, likes: 0, rank: 0 } },
};

export const topicBadges: Record<string, TopicBadge> = {
  prime: { id: 'prime', label: 'Prime', description: 'This is a Prime-only discussion.', icon: ShieldCheck, color: 'text-purple-400', bgColor: 'bg-purple-900/50' },
  featured: { id: 'featured', label: 'Featured', description: 'Featured by the PublyFi team.', icon: Award, color: 'text-yellow-400', bgColor: 'bg-yellow-900/50' },
  guide: { id: 'guide', label: 'Guide', description: 'A community-created guide.', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-900/50' },
  dao: { id: 'dao', label: 'DAO', description: 'DAO-related proposal or discussion.', icon: GitMerge, color: 'text-green-400', bgColor: 'bg-green-900/50' },
  trending: { id: 'trending', label: 'Trending', description: 'This topic is currently trending.', icon: TrendingUp, color: 'text-red-400', bgColor: 'bg-red-900/50' },
  news: { id: 'news', label: 'News', description: 'Platform news and updates.', icon: Newspaper, color: 'text-cyan-400', bgColor: 'bg-cyan-900/50' },
  event: { id: 'event', label: 'Event', description: 'Upcoming community events.', icon: Calendar, color: 'text-orange-400', bgColor: 'bg-orange-900/50' },
  support: { id: 'support', label: 'Support', description: 'Get help from the community.', icon: Headset, color: 'text-pink-400', bgColor: 'bg-pink-900/50' },
};

const mockComments: Comment[] = [
  {
    id: 'comment-1',
    author: mockUsers['user-2'],
    content: 'This is a fantastic breakdown. The section on quest rewards completely changed my strategy. Thanks!',
    reactions: [
      { emoji: 'flame', count: 5 },
    ],
    likeCount: 12,
    timestamp: '2h ago',
    replies: [
      {
        id: 'reply-1',
        author: mockUsers['user-1'],
        content: 'Glad it helped! The rewards from the "Starlight Shard" quest are underrated.',
        reactions: [{ emoji: 'heart', count: 3 }],
        likeCount: 4,
        timestamp: '1h ago',
        replies: [],
      }
    ]
  },
  {
    id: 'comment-2',
    author: mockUsers['user-4'],
    content: 'Does anyone have tips for the final boss in the "Void-Touched" dungeon?',
    reactions: [{ emoji: 'smile', count: 2 }],
    likeCount: 1,
    timestamp: '5h ago',
    replies: [],
  }
];

export const mockFeedItems: FeedItem[] = [
  {
    id: 'feed-1',
    type: 'discussion',
    author: mockUsers['user-1'],
    title: 'Best Quest Rewards for Mid-Game Players?',
    content: `
I've been grinding for a while and feel like I've hit a plateau. What are the must-have quest rewards that give the best bang for your buck? I'm currently Level 45.

- **Current Gear:** Full set of Starlight Armor.
- **Main Weapon:** Sunken Trident.
- **Goal:** Increase my DPS for the upcoming raid.

Mentioning **$PUBL** value is a plus! Let's discuss.
    `,
    badges: [topicBadges.trending, topicBadges.prime],
    comments: mockComments,
    timestamp: '15m ago',
    likeCount: 128,
    shareCount: 12,
  },
  {
    id: 'feed-2',
    type: 'guide',
    author: mockUsers['user-2'],
    title: 'Ultimate Guide to Crafting Legendary Items',
    content: `
A comprehensive guide covering material farming, optimal crafting rotations, and how to maximize your chances of a legendary proc. Includes spreadsheets and video examples.

### Key Sections:
1.  **Material Hotspots:** Best locations for farming Void Crystals and Starfire Ore.
2.  **Crafting Rotations:** Step-by-step process to ensure quality.
3.  **The #NFTName: The Smith's Hammer:** Why this item is crucial.

I hope this helps you on your journey to crafting greatness!
    `,
    badges: [topicBadges.guide, topicBadges.featured],
    comments: [...mockComments].reverse(),
    timestamp: '3h ago',
    likeCount: 340,
    shareCount: 45,
  },
  {
    id: 'feed-3',
    type: 'dao',
    author: mockUsers['user-3'],
    title: 'DAO Proposal #12: Adjust Liquidity Pool Rewards',
    content: `
Proposal to rebalance the rewards for the **$PUBL-ETH liquidity pool** to incentivize long-term holding.

### Summary of Changes:
- **Current:** 1.5x multiplier for the first month.
- **Proposed:** 1.2x multiplier, but with a 3-month lock-in period for bonus rewards.
- **Reasoning:** This change aims to reduce farm-and-dump behavior and promote stability.

See the full proposal document for details on the new emission schedule. Let's discuss the pros and cons.
    `,
    badges: [topicBadges.dao],
    forVotes: 6800,
    againstVotes: 3200,
    comments: [mockComments[0]],
    timestamp: '1d ago',
  },
  {
    id: 'feed-4',
    type: 'news',
    author: mockUsers['system'],
    title: 'Platform Update v2.5 is Now Live!',
    content: `
We are excited to announce that platform update v2.5 has been successfully deployed. This update includes major performance improvements, a new questline, and various bug fixes.

### Highlights:
- **New Questline:** "The Shadow Syndicate" is now available for all players level 50+.
- **Performance:** Optimized asset loading, reducing load times by up to 30%.
- **Bug Fixes:** Resolved over 50 community-reported bugs, including the infamous "invisible wall" in the Crystal Caverns.

Check out the full patch notes in our official documentation. Thank you for your continued support!
    `,
    badges: [topicBadges.news],
    comments: [mockComments[1]],
    timestamp: '1d ago',
    likeCount: 560,
    shareCount: 88,
  },
  {
    id: 'feed-5',
    type: 'event',
    author: mockUsers['user-3'],
    title: 'Community Game Night: Friday at 8 PM EST',
    content: `
Join us for our monthly community game night! This month, we'll be playing **"Galaxy Racers"**.

### Event Details:
- **Prizes:** Top 3 racers win rare NFTs and **$PUBL** tokens.
- **How to Join:** RSVP in the #events channel on our Discord.
- **Special Rule:** All racers must use the "Comet" model ship for a fair race.

It's going to be a blast! See you on the track.
    `,
    badges: [topicBadges.event],
    comments: [],
    timestamp: '2d ago',
    likeCount: 150,
    shareCount: 23,
  },
  {
    id: 'feed-6',
    type: 'poll',
    author: mockUsers['user-3'],
    title: 'Community Poll: What should be the next cosmetic theme?',
    content: `
The art team is looking for feedback on the next cosmetic set. What theme are you most excited about? Cast your vote below!

The winning theme will be developed in Q4 and will include armor, weapon skins, and a unique mount.
    `,
    badges: [],
    pollOptions: [
      { text: 'Cosmic Horror', votes: 450 },
      { text: 'Steampunk', votes: 820 },
      { text: 'High Fantasy', votes: 610 },
    ],
    comments: [],
    timestamp: '2d ago',
  },
  {
    id: 'feed-7',
    type: 'support',
    author: mockUsers['user-4'],
    title: 'Help! My wallet won\'t connect.',
    content: `
I've been trying to connect my wallet for the past hour and keep getting a "Connection Failed" error.

### What I've tried:
- Clearing my browser cache and cookies.
- Using a different browser (Chrome, Firefox).
- Disabling my VPN.

I'm using a Ledger wallet. Has anyone else experienced this? Thanks in advance.
    `,
    badges: [topicBadges.support],
    comments: [mockComments[0]],
    timestamp: '3d ago',
    likeCount: 5,
    shareCount: 2,
  },
];

export const guideOfTheWeek: Guide = {
  id: 'guide-1',
  title: 'Mastering the Marketplace: A Trader\'s Handbook',
  author: mockUsers['user-2'],
  thumbnail: 'https://i.postimg.cc/d16pLd2N/image.png', // Placeholder thumbnail
  category: 'Economy & Trading',
};

export const trendingNowItems: TrendingItem[] = [
  { id: 'trending-1', title: 'The Future of the $PUBL Token', category: 'Tokenomics', type: 'Discussion' },
  { id: 'trending-2', title: 'Guide: Soloing the Final Encounter', category: 'Guides', type: 'Guide' },
  { id: 'trending-3', title: 'DAO Vote: Community Treasury Allocation', category: 'DAO', type: 'DAO Proposal' },
];

export const myActivityStats: ActivityStats = {
  posts: 12,
  replies: 45,
  likesGiven: 102,
  likesReceived: 88,
  daoVotes: 5,
};

export const upcomingPolls: UpcomingPoll[] = [
  { id: 'poll-1', title: 'Proposal #14: New Staking Tiers', type: 'DAO', endDate: '3 days' },
  { id: 'poll-2', title: 'Next Community AMA Topic', type: 'Community', endDate: '5 days' },
];