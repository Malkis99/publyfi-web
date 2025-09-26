const Halving = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent">Halving in PublyFi Tokenomics (500M PUBL)</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">1. Frequency:</h3>
          <p className="text-lg text-text-main/80">Once per year. This creates a more dynamic and fast-moving model for our social gaming ecosystem.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. What gets reduced:</h3>
          <p className="text-lg text-text-main/80">Emission from the Ecosystem Development pool (loot cases, rewards, NFT drops). Each year, the amount of available rewards and drops is reduced by 1.5x.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">3. Effect:</h3>
          <p className="text-lg text-text-main/80">As the user base grows, demand remains high while supply decreases → token becomes more valuable. A scarcity effect is created, encouraging users to hold PUBL instead of dumping it.</p>
        </div>
      </div>
    </section>
  );
};

export default Halving;