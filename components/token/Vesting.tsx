const Vesting = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent">Control & Vesting (500M Supply)</h2>
      <ul className="list-disc list-inside space-y-4 text-left max-w-2xl mx-auto text-text-main">
        <li><span className="font-semibold">Ecosystem Development</span> — gradual halving-based release (DAO can freeze if overheated)</li>
        <li><span className="font-semibold">Team & Advisors</span> — 12-month cliff, 3–4y linear vesting (multisig control)</li>
        <li><span className="font-semibold">Marketing</span> — DAO-approved spend, max 5%/month</li>
        <li><span className="font-semibold">Liquidity</span> — DAO-regulated, smart-contract locks</li>
        <li><span className="font-semibold">Reserve</span> — frozen 2y, DAO-unlock, can buy back tokens</li>
        <li><span className="font-semibold">DAO Governance</span> — distributed via on-chain proposals</li>
      </ul>
      <p className="mt-8 text-xl text-center font-bold text-highlight">Each pool is secured via multisig + DAO oversight, ensuring transparency and anti-dump protection.</p>
    </section>
  );
};

export default Vesting;