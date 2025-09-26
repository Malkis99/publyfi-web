import Navbar from '@/components/Navbar';
import CosmicButton from '@/components/CosmicButton';

const WhitepaperPage = () => {
  // Helper component for consistent section styling and animation
  const Section = ({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) => (
    <section className="fade-in" style={{ animationDelay: `${delay * 0.1}s` }}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-base sm:text-lg text-text-main/80 leading-relaxed">
        {children}
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight fade-in">
            PublyFi Whitepaper
          </h1>
        </header>

        <div className="space-y-12">
          <Section title="1. Executive Summary" delay={1}>
            <p>PublyFi is a next-generation Web3 social gaming ecosystem that unites streaming, interactive quests, NFTs, and customizable digital identities into one seamless platform. Unlike traditional platforms where creators are underpaid and users remain passive, PublyFi transforms every interaction into value.</p>
            <p>Core Concept: Streamers create quests, users complete them, and both sides earn rewards — tokens ($PUBL) and NFTs with real utility. Every profile evolves into a living RPG-style identity, enhanced by 3D avatars, achievements, and reputation, secured on Immutable zkEVM for scalability and low-cost transactions.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Creators First:</strong> Streamers monetize directly through quests, NFTs, and community-driven economies.</li>
              <li><strong>Users Empowered:</strong> Players and viewers earn meaningful rewards, build digital identities, and truly own their progress.</li>
              <li><strong>Sustainable Economy:</strong> $PUBL tokenomics (halving, burns, staking, DAO governance) ensure long-term value and community alignment.</li>
            </ul>
          </Section>

          <Section title="2. Ecosystem Overview" delay={2}>
            <p>PublyFi creates a unified social-gaming ecosystem where streaming, quests, NFTs, and digital identity converge. It connects creators, players, and the platform into a single economy where every action has value.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Streamers:</strong> Design and launch quests, distribute rewards, and monetize engagement beyond donations.</li>
              <li><strong>Players & Viewers:</strong> Watch content, complete quests, collect NFTs, earn $PUBL, and evolve their living avatars.</li>
              <li><strong>The Platform:</strong> Provides infrastructure (GameSync, marketplace, subscriptions) ensuring fair play, transparency, and scalability.</li>
            </ul>
            <p>Key Features: Living Avatars, NFT Economy, Quest Engine, GameSync Loyalty System, and Community Mechanics with DAO governance.</p>
          </Section>

          <Section title="3. GameSync – The Heart of PublyFi" delay={3}>
            <p>GameSync is the data and loyalty engine of PublyFi — the system that turns every action (watching, playing, trading, questing) into measurable progress, reputation, and rewards.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Activity Tracking:</strong> Monitors streams watched, quests completed, NFTs collected, trades executed.</li>
                <li><strong>Cross-Game Integration:</strong> APIs with Steam, Epic, Battle.net, and Web3 titles allow external progress sync.</li>
                <li><strong>Reputation Engine:</strong> Builds user profiles based on fair play, activity, and community contribution.</li>
            </ul>
            <p>GameSync is the bloodstream of PublyFi — carrying value, reputation, and progress to every part of the ecosystem.</p>
          </Section>

          <Section title="4. Business Model" delay={4}>
            <p>PublyFi combines subscriptions, NFTs, and a quest-driven creator economy into a multi-layered revenue model that scales with user growth.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Free:</strong> Basic access to streams and content.</li>
                <li><strong>Prime ($15 one-time):</strong> Unlocks weekly loot cases and profile perks.</li>
                <li><strong>Pro ($15/month):</strong> Full access to quests, rewards, and DAO power.</li>
                <li><strong>NFT Marketplace:</strong> Trade armor, skins, emotes, backgrounds, and cosmetics with fusion upgrades.</li>
                <li><strong>Streamer Quest Economy:</strong> Streamers fund quests; Pro users complete them for rewards.</li>
                <li><strong>GameSync Loyalty System:</strong> Tracks engagement, rewards activity, and strengthens retention.</li>
            </ul>
          </Section>

          <Section title="5. Market Analysis" delay={5}>
            <p>The global gaming industry surpasses $200B annually with over 3 billion gamers. Streaming platforms dominate content while Web3 introduces true ownership.</p>
            <p>PublyFi unifies streaming, quests, and NFTs, capturing both gaming and Web3/NFT markets — positioning itself as the first social-gaming economy blending entertainment with ownership.</p>
          </Section>

          <Section title="6. Tokenomics – $PUBL" delay={6}>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Utility:</strong> Quests & Rewards, NFT Transactions, Loot Cases, Profile Upgrades, DAO Governance, Staking & Burns.</li>
                <li><strong>Distribution:</strong> 30% Ecosystem, 20% Team, 15% Marketing, 15% Liquidity, 15% Reserve, 5% DAO.</li>
                <li><strong>Deflationary:</strong> Annual halving (×1.5), marketplace burns, NFT fusion sinks.</li>
            </ul>
          </Section>

          <Section title="7. Governance Model" delay={7}>
             <p>PublyFi operates under a DAO where voting power is earned through activity and token ownership. Proposals, emissions, and ecosystem upgrades are voted on by the community.</p>
          </Section>

          <Section title="8. Compliance & Legal Framework" delay={8}>
            <p>PublyFi integrates GDPR-compliant data storage, KYC/AML, DAO legal wrappers, and trademark protections — ensuring long-term viability and trust for users and partners.</p>
          </Section>

          <Section title="9. Token Utility in Depth" delay={9}>
            <p>$PUBL is the access, utility, and governance engine powering PublyFi’s economy. Demand drivers include premium access, creator tools, boosts, and DAO voting; sinks include burns, fusion, and customization fees.</p>
          </Section>

          <Section title="10. Technical Architecture" delay={10}>
            <p>Built with a layered architecture (Frontend, Backend, Blockchain, API/SDK), PublyFi ensures scalability, interoperability, and future-proof performance via Immutable zkEVM.</p>
          </Section>

          <Section title="11. Security & Protection Framework" delay={11}>
            <p>PublyFi ensures trust with audits, multisig treasury, anti-bot AI, progressive KYC, and transparent DAO moderation.</p>
          </Section>

          <Section title="12. Blockchain Economy" delay={12}>
            <p>Immutable zkEVM + multi-chain roadmap (Polygon, Arbitrum, Solana, BNB). True ownership, transparent economy, scalable growth, and global interoperability.</p>
          </Section>

          <Section title="13. Content & Interaction" delay={13}>
            <p>Core formats: Streams, Reels, Quests, Events. Interaction via GameSync, social tools, leaderboards, and seasonal rewards.</p>
          </Section>

          <Section title="Final Statement" delay={14}>
            <p>PublyFi is more than a platform — it’s building a digital civilization where players, streamers, and creators own their progress, identity, and economy.</p>
            <p><strong>PublyFi — the home of gaming freedom.</strong></p>
          </Section>
        </div>

        <div className="mt-20 text-center fade-in" style={{ animationDelay: '1.5s' }}>
          <CosmicButton
            label="Join Waitlist"
            href="/waitlist"
            variant="solid"
            className="inline-block"
          />
        </div>
      </main>
    </div>
  );
};

export default WhitepaperPage;