import Navbar from '@/components/Navbar';
import CosmicButton from '@/components/CosmicButton';

const WhitepaperPage = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'PublyFi is a next-generation Web3 social-gaming platform combining streaming, quests, an NFT marketplace, and DAO governance. Our mission is to create a decentralized, player-owned economy that rewards participation and creativity.',
    },
    {
      title: '2. Blockchain Infrastructure',
      content: 'The platform is built on Immutable zkEVM, a leading scaling solution for Ethereum, ensuring high performance and low transaction costs. We will implement bridges to Polygon, Solana, and BNB Chain to foster cross-chain interoperability.',
    },
    {
      title: '3. Tokenomics',
      content: 'The ecosystem is powered by the $PUBL token, with a total supply of 500 million. Distribution is as follows: Ecosystem (30%), Team (20%), Marketing (15%), Liquidity (15%), Reserve (15%), and DAO Treasury (5%). The tokenomics include periodic halving and burn mechanisms to ensure deflationary pressure.',
    },
    {
      title: '4. Subscriptions',
      content: 'Users can choose from three tiers: Free (basic access), Prime (a $15 one-time fee for exclusive perks), and Pro ($15/month for advanced features, creator tools, and higher earning potential).',
    },
    {
      title: '5. Quests & Rewards',
      content: 'Streamers and creators can design quests for their communities. Users complete these quests to earn $PUBL tokens, rare NFTs, and reputation points, fostering a dynamic and interactive content ecosystem.',
    },
    {
      title: '6. NFT Customization',
      content: 'A core feature is the NFT marketplace where users can buy, sell, and trade unique in-game assets like skins, armor, weapons, and avatars. All assets are fully ownable and tradable on the blockchain.',
    },
    {
      title: '7. Governance',
      content: 'The PublyFi DAO allows $PUBL token holders to vote on key platform decisions, including feature development, treasury allocation, and economic parameters. This ensures community-led governance.',
    },
    {
      title: '8. Future Vision',
      content: 'Our long-term vision includes expanding our streaming capabilities, developing a persistent metaverse for social interaction, and launching a fully-featured, cross-chain NFT marketplace.',
    },
  ];

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
          {sections.map((section, index) => (
            <section key={index} className="fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg text-text-main/80 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center fade-in" style={{ animationDelay: `${sections.length * 0.15}s` }}>
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