const Vesting = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent animate-title-reveal">Control & Vesting (500M Supply)</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">Ecosystem Development</span> Gradual halving-based release (DAO can freeze).</div>
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">Team & Advisors</span> 12-month cliff, 3–4y linear vesting (multisig).</div>
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">Marketing</span> DAO-approved spend, max 5%/month.</div>
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">Liquidity</span> DAO-regulated, smart-contract locks.</div>
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">Reserve</span> Frozen 2y, DAO-unlock, can buy back tokens.</div>
        <div className="border border-accent/20 p-4 rounded-lg"><span className="font-semibold text-accent/80 block mb-2">DAO Governance</span> Distributed via on-chain proposals.</div>
      </div>
      <p className="mt-8 text-xl text-center font-bold text-highlight">Each pool is secured via multisig + DAO oversight, ensuring transparency and anti-dump protection.</p>
    </section>
  );
};

export default Vesting;