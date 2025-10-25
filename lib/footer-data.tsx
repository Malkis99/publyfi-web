import React from 'react';

export const TradingRulesContent = () => (
  <>
    <p>All NFTs purchased or earned within the PublyFi ecosystem enter a 7-day cooldown period. During this time, they cannot be traded, transferred, merged, or burned.</p>
    <p>The cooldown period ensures transaction security, prevents rapid speculation, and stabilizes the Marketplace economy.</p>
    <p>When you merge NFTs to create a higher rarity item, the resulting NFT’s cooldown resets for another 7 days, regardless of the cooldown status of the source NFTs.</p>
    <p>NFTs acquired from quests, event drops, or loot cases follow the same cooldown policy.</p>
    <p>If you purchase an NFT on the Marketplace, it is bound to your connected wallet until the cooldown expires.</p>
    <p>Once the cooldown ends, the NFT becomes fully tradable and can be sold, gifted, merged, or burned according to your choice.</p>
    <p>Attempting to list or transfer NFTs still under cooldown will show an error message until the timer finishes.</p>
  </>
);

export const FAQContent = () => (
    <>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-violet-400">Q: How do I know when my NFT cooldown has expired?</h4>
          <p>A: Each NFT includes a visible cooldown timer in your Profile → Inventory section. Once it reaches zero, trading options become available.</p>
        </div>
        <div>
          <h4 className="font-bold text-violet-400">Q: Can I sell NFTs obtained from quests or drops?</h4>
          <p>A: Yes — after the 7-day cooldown period ends, all eligible NFTs can be listed or sold on the Marketplace.</p>
        </div>
        <div>
          <h4 className="font-bold text-violet-400">Q: Can I burn NFTs to earn PUBL tokens?</h4>
          <p>A: Absolutely. Burning eligible NFTs rewards PUBL tokens through the Burn PUBL system, but only after the cooldown period ends.</p>
        </div>
        <div>
          <h4 className="font-bold text-violet-400">Q: What are the Marketplace fees?</h4>
          <p>A: Every completed trade includes a 2.5% transaction fee, distributed between the DAO Treasury (1.5%) and the Ecosystem Pool (1%).</p>
        </div>
        <div>
          <h4 className="font-bold text-violet-400">Q: Are transactions recorded on-chain?</h4>
          <p>A: Yes. Every trade, merge, and burn is fully verified and recorded on the Immutable zkEVM blockchain, ensuring transparency and proof of ownership.</p>
        </div>
        <div>
          <h4 className="font-bold text-violet-400">Q: Can I merge NFTs from different categories or rarities?</h4>
          <p>A: No. Only NFTs of the same category and rarity tier can be merged to evolve into the next rarity level.</p>
        </div>
      </div>
    </>
  );

export const RestrictionsContent = () => (
  <ul className="list-disc list-inside space-y-2">
    <li>NFTs obtained through Prime or Pro subscription reward cases cannot be resold or traded. These are exclusive reward items.</li>
    <li>Event NFTs are only tradable during the event period. Once the event ends, they become non-tradable collectibles.</li>
    <li>Some cosmetic NFTs are soulbound, meaning they are permanently tied to your profile and cannot be transferred or sold.</li>
    <li>Cooldown enforcement: Attempting to trade, burn, or merge NFTs before cooldown expiration will be blocked.</li>
    <li>Users must have at least one connected wallet in good standing to participate in Marketplace activity.</li>
    <li>Marketplace activity from flagged or banned accounts will automatically be disabled.</li>
  </ul>
);

export const SecurityContent = () => (
    <ul className="list-disc list-inside space-y-2">
      <li>Every transaction on the PublyFi Marketplace is handled via secure, audited smart contracts — there are no intermediaries or custodial services.</li>
      <li>Always verify wallet connection before confirming any transaction.</li>
      <li>PublyFi will never ask for private keys, seed phrases, or any personal login credentials.</li>
      <li>Only interact through the official PublyFi domain and its verified subdomains.</li>
      <li>Phishing protection: Beware of fake URLs, offers, or pop-ups claiming to be from PublyFi — always double-check wallet prompts before signing.</li>
      <li>For maximum security, consider using a hardware wallet for high-value assets.</li>
      <li>All user activity (purchases, transfers, merges) is recorded immutably on-chain for full transparency.</li>
    </ul>
  );

export const HowToBuyContent = () => (
    <ol className="list-decimal list-inside space-y-2">
        <li>
            <span className="font-bold text-violet-400">Connect Your Wallet:</span> Click “Connect Wallet” in the right-side panel and link your preferred wallet (e.g., MetaMask, WalletConnect).
        </li>
        <li>
            <span className="font-bold text-violet-400">Browse NFTs:</span> Use the category, rarity, and genre filters to explore available NFTs.
        </li>
        <li>
            <span className="font-bold text-violet-400">View Details:</span> Click any NFT card to open its details modal, showing rarity, history, and price.
        </li>
        <li>
            <span className="font-bold text-violet-400">Buy the NFT:</span> Click “Buy Now” and confirm the transaction using your connected wallet.
        </li>
        <li>
            <span className="font-bold text-violet-400">Transaction Confirmation:</span> Wait for the transaction to complete — this may take a few seconds depending on the network.
        </li>
        <li>
            <span className="font-bold text-violet-400">NFT Delivery:</span> Once confirmed, the NFT will appear instantly in your Profile → Inventory tab.
        </li>
        <li>
            <span className="font-bold text-violet-400">Cooldown Period:</span> Newly purchased NFTs are automatically placed under the 7-day cooldown before they can be traded or merged.
        </li>
    </ol>
);

export const CommissionsContent = () => (
    <ul className="list-disc list-inside space-y-2">
      <li><span className="font-bold text-violet-400">Marketplace Fee:</span> 2.5% of every secondary sale transaction.</li>
      <li>
        <span className="font-bold text-violet-400">Distribution:</span>
        <ul className="list-disc list-inside pl-6">
          <li>1.5% → DAO Treasury (supports governance, rewards, and platform growth).</li>
          <li>1% → Ecosystem Fund (used for events, user incentives, and game economy).</li>
        </ul>
      </li>
      <li><span className="font-bold text-violet-400">Primary Sales (Initial Mints):</span> No fees are charged — only secondary trades incur the 2.5% fee.</li>
      <li><span className="font-bold text-violet-400">Gas Fees:</span> Minimal, handled through Immutable zkEVM for near-zero-cost transactions.</li>
      <li><span className="font-bold text-violet-400">Transparency:</span> All commissions are recorded on-chain, visible to users for every sale.</li>
    </ul>
  );