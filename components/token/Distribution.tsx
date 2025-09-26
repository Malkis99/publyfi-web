const Distribution = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent animate-title-reveal">Distribution & Flow</h2>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4 text-center font-semibold text-text-main/80 mb-4">
          <div>Allocation</div>
          <div>%</div>
          <div>Purpose</div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-text-main mb-2">
          <div>Ecosystem & Rewards</div>
          <div>70%</div>
          <div>User incentives, cases, quests</div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-text-main mb-2">
          <div>DAO Treasury</div>
          <div>20%</div>
          <div>Governance, funding</div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-text-main">
          <div>Permanent Burns</div>
          <div>10%</div>
          <div>Continuous deflation</div>
        </div>
      </div>
      <p className="mt-8 text-xl text-center font-bold text-highlight">Balanced design ensures healthy liquidity, sustainable growth, and long-term value.</p>
    </section>
  );
};

export default Distribution;