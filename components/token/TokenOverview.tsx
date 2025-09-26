const TokenOverview = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent animate-title-reveal">Token Overview</h2>
      <p className="text-lg text-center text-text-main/80 mb-8">
        PublyFi’s native token $PUBL powers every core system — from subscriptions and marketplace transactions to quests, crafting, and governance. It is a deflationary, utility-driven, and governance-enabled asset designed for sustainable growth.
      </p>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Key Utilities:</h3>
        <ul className="list-none space-y-2 text-text-main">
          <li>Subscriptions (Prime & Pro)</li>
          <li>Marketplace Purchases & Upgrades</li>
          <li>Quest Escrow Rewards</li>
          <li>Crafting & Fusion Burns</li>
          <li>DAO Voting</li>
          <li>Non-Inflationary Staking</li>
        </ul>
        <p className="mt-8 text-xl font-bold text-highlight">$PUBL = Power + Utility + Burn + Legacy</p>
      </div>
    </section>
  );
};

export default TokenOverview;