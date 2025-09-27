import Navbar from '@/components/Navbar';
import CosmicButton from '@/components/CosmicButton';
import ScrollReveal from '@/components/ScrollReveal';

const WhitepaperPage = () => {
  // Helper component for consistent section styling
  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-[#a38ad1] to-[#50348f] bg-clip-text text-transparent [text-shadow:0_0_12px_rgba(163,138,209,0.3)]">
        {title}
      </h2>
      <div className="space-y-4 text-base sm:text-lg text-[#f3f4f7] leading-relaxed">
        {children}
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal>
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight">
              PublyFi Whitepaper
            </h1>
          </header>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal delay={50}>
            <Section title="1. Executive Summary">
              <p>PublyFi is a next-generation Web3 social gaming ecosystem that unites streaming, interactive quests, NFTs, and customizable digital identities into one seamless platform. Unlike traditional platforms where creators are underpaid and users remain passive, PublyFi transforms every interaction into value.</p>
              <p>Core Concept: Streamers create quests, users complete them, and both sides earn rewards — tokens ($PUBL) and NFTs with real utility. Every profile evolves into a living RPG-style identity, enhanced by 3D avatars, achievements, and reputation, secured on Immutable zkEVM for scalability and low-cost transactions.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Creators First:</strong> Streamers monetize directly through quests, NFTs, and community-driven economies.</li>
                <li><strong>Users Empowered:</strong> Players and viewers earn meaningful rewards, build digital identities, and truly own their progress.</li>
                <li><strong>Sustainable Economy:</strong> $PUBL tokenomics (halving, burns, staking, DAO governance) ensure long-term value and community alignment.</li>
              </ul>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Section title="2. Ecosystem Overview">
              <p>PublyFi creates a unified social-gaming ecosystem where streaming, quests, NFTs, and digital identity converge. It connects creators, players, and the platform into a single economy where every action has value.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Streamers:</strong> Design and launch quests, distribute rewards, and monetize engagement beyond donations.</li>
                <li><strong>Players & Viewers:</strong> Watch content, complete quests, collect NFTs, earn $PUBL, and evolve their living avatars.</li>
                <li><strong>The Platform:</strong> Provides infrastructure (GameSync, marketplace, subscriptions) ensuring fair play, transparency, and scalability.</li>
              </ul>
              <p>Key Features: Living Avatars, NFT Economy, Quest Engine, GameSync Loyalty System, and Community Mechanics with DAO governance.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Section title="3. GameSync – The Heart of PublyFi">
              <p>GameSync is the data and loyalty engine of PublyFi — the system that turns every action (watching, playing, trading, questing) into measurable progress, reputation, and rewards.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Activity Tracking:</strong> Monitors streams watched, quests completed, NFTs collected, trades executed.</li>
                  <li><strong>Cross-Game Integration:</strong> APIs with Steam, Epic, Battle.net, and Web3 titles allow external progress sync.</li>
                  <li><strong>Reputation Engine:</strong> Builds user profiles based on fair play, activity, and community contribution.</li>
              </ul>
              <p>GameSync is the bloodstream of PublyFi — carrying value, reputation, and progress to every part of the ecosystem.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Section title="4. Business Model">
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
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <Section title="5. Market Analysis">
              <p>The global gaming industry surpasses $200B annually with over 3 billion gamers. Streaming platforms dominate content while Web3 introduces true ownership.</p>
              <p>PublyFi unifies streaming, quests, and NFTs, capturing both gaming and Web3/NFT markets — positioning itself as the first social-gaming economy blending entertainment with ownership.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Section title="6. Tokenomics – $PUBL">
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Utility:</strong> Quests & Rewards, NFT Transactions, Loot Cases, Profile Upgrades, DAO Governance, Staking & Burns.</li>
                  <li><strong>Distribution:</strong> 30% Ecosystem, 20% Team, 15% Marketing, 15% Liquidity, 15% Reserve, 5% DAO.</li>
                  <li><strong>Deflationary:</strong> Annual halving (×1.5), marketplace burns, NFT fusion sinks.</li>
              </ul>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <Section title="7. Governance Model">
               <p>PublyFi operates under a DAO where voting power is earned through activity and token ownership. Proposals, emissions, and ecosystem upgrades are voted on by the community.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Section title="8. Compliance & Legal Framework">
              <p>PublyFi integrates GDPR-compliant data storage, KYC/AML, DAO legal wrappers, and trademark protections — ensuring long-term viability and trust for users and partners.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <Section title="9. Token Utility in Depth">
              <p>$PUBL is the access, utility, and governance engine of PublyFi’s economy. Demand drivers include premium access, creator tools, boosts, and DAO voting; sinks include burns, fusion, and customization fees.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Section title="10. Technical Architecture">
              <p>Built with a layered architecture (Frontend, Backend, Blockchain, API/SDK), PublyFi ensures scalability, interoperability, and future-proof performance via Immutable zkEVM.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <Section title="11. Security & Protection Framework">
              <p>PublyFi ensures trust with audits, multisig treasury, anti-bot AI, progressive KYC, and transparent DAO moderation.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <Section title="12. Blockchain Economy">
              <p>Immutable zkEVM + multi-chain roadmap (Polygon, Arbitrum, Solana, BNB). True ownership, transparent economy, scalable growth, and global interoperability.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <Section title="13. Content & Interaction">
              <p>Core formats: Streams, Reels, Quests, Events. Interaction via GameSync, social tools, leaderboards, and seasonal rewards.</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <Section title="Final Statement">
              <p>PublyFi is more than a platform — it’s building a digital civilization where players, streamers, and creators own their progress, identity, and economy.</p>
              <p><strong>PublyFi — the home of gaming freedom.</strong></p>
            </Section>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={750}>
          <div className="mt-20 text-center">
            <CosmicButton
              label="Join Waitlist"
              href="/waitlist"
              variant="solid"
              className="inline-block"
            />
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default WhitepaperPage;