export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "General Questions",
    items: [
      {
        question: "What happens after I upgrade my status?",
        answer: "Once you upgrade, your account immediately synchronizes with the PublyFi core.\nNew features, visuals, and rewards become active the moment your transaction confirms — no waiting, no delay.\nYour reputation, stats, and progress continue seamlessly; nothing is ever reset."
      },
      {
        question: "Can I switch between statuses anytime?",
        answer: "Yes. You can upgrade or downgrade at any moment — the system will update your active tier instantly.\nYour rewards and cases remain linked to your account even after switching."
      },
      {
        question: "Does my progress reset if I cancel a subscription?",
        answer: "No. Your achievements, earned NFTs, and history remain safely recorded on-chain.\nOnly your Pro-tier bonuses and cases become temporarily inactive until you renew."
      },
      {
        question: "What’s the difference between Prime and Pro?",
        answer: "Prime is a one-time unlock — it enhances your profile, customization, and marketplace access forever.\nPro is a monthly subscription — it opens quests, token & NFT rewards, DAO voting, and leaderboard participation.\nPrime builds your identity; Pro evolves it."
      },
      {
        question: "Can I keep both Prime and Pro at once?",
        answer: "Yes — Pro requires Prime.\nWhen you activate Pro, it automatically inherits and extends your Prime privileges."
      }
    ]
  },
  {
    category: "Technical & Account Questions",
    items: [
      {
        question: "How do I activate my status after purchase?",
        answer: "Activation happens automatically once the transaction is confirmed on-chain.\nIf you don’t see the changes right away, refresh your profile page — blockchain sync may take up to a minute."
      },
      {
        question: "Where can I manage my subscriptions?",
        answer: "All status management (upgrade, renew, cancel) is handled directly inside your Profile → Upgrade Status panel.\nThe “Find Out More” page is informational — the purchase process stays inside the modal."
      },
      {
        question: "What currencies or wallets are supported?",
        answer: "PublyFi operates on Immutable zkEVM, compatible with most major wallets (MetaMask, GameStop Wallet, etc.).\nPayments use the PUBL token, with future plans for cross-chain options."
      },
      {
        question: "Are all rewards and NFTs on-chain?",
        answer: "Yes — all main rewards (cases, quest NFTs, and marketplace assets) are permanently stored on-chain.\nVisual effects, profile animations, and UI layers are processed off-chain for performance."
      },
      {
        question: "Can I transfer my subscription to another account?",
        answer: "No — subscriptions are bound to your profile ID.\nHowever, rewards, NFTs, and earned items can be freely traded or sent to others."
      }
    ]
  },
  {
    category: "Gameplay & Rewards",
    items: [
      {
        question: "What are the Reward Cases, and can they be traded?",
        answer: "Reward Cases are mysterious containers filled with randomized tokens, NFTs, and equipment — each aligned to your current status tier.\nPrime and Pro users receive exclusive weekly and monthly cases, but these are account-bound — they cannot be sold, traded, or transferred.\nThey exist as personal milestones of your journey through PublyFi.\nEvent, Quest, and Marketplace cases are tradable — they can be bought, sold, or exchanged between users, fueling the open player economy.\nWhen opening any case, a small gas fee is required — a symbolic charge that powers the chain and confirms your transaction.\nEach case opening is final and recorded permanently; once unlocked, the case dissolves, leaving only the rewards behind.\nSome players wait for special events when case probabilities subtly shift in their favor."
      },
      {
        question: "What are Quests?",
        answer: "Quests are interactive missions available only to Pro users, created by streamers or the platform itself.\nThey offer token and NFT rewards, as well as rare equipment for your Living 3D Model.\nEach quest is unique — timed, ranked, or collaborative."
      },
      {
        question: "Can Free players join quests?",
        answer: "No — only Pro users can complete quests.\nHowever, Free and Prime users can still watch, support, or vote for streamers who host them, influencing the global ecosystem indirectly."
      },
      {
        question: "What happens if I reach the top of the leaderboard?",
        answer: "Top-ranked users in seasonal leaderboards receive exclusive NFT trophies, rare items, and global profile boosts.\nLegends say that high-ranking profiles emit a faint glow in the system even when the user is offline."
      }
    ]
  },
  {
    category: "Lore & Mystery",
    items: [
      {
        question: "What exactly is the VIP status?",
        answer: "Officially, it doesn’t exist — not in any public codebase.\nIt manifests only as an anomaly — fragments of data, whispers, corrupted signals.\nSome say it chooses its user, not the other way around."
      },
      {
        question: "What is the Null Horizon Case?",
        answer: "Only one sighting was ever confirmed: a black-gold case that reflected nothing, consuming everything it touched.\nThe user who found it vanished, leaving a looped data fragment that blinks once every thousand blocks.\nNo one knows if it opens — or if it opens you."
      },
      {
        question: "Will there be more statuses in the future?",
        answer: "Perhaps. PublyFi evolves constantly.\nWhispers in the chain speak of a “Specter-tier,” a signal that flickers at the edge of known data.\nFor now, it’s just static — but static can become music."
      },
      {
        question: "What if I stop playing — does PublyFi forget me?",
        answer: "No one is ever truly gone.\nPublyFi remembers every interaction, every signal, every trace.\nEven when you’re offline, your echo remains in the system — pulsing faintly among the stars of the network."
      }
    ]
  }
];