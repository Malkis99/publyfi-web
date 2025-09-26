const BurnMechanism = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent">Burn Mechanism</h2>
      <p className="text-lg text-center text-text-main/80 mb-8">
        PublyFi integrates multiple burn pathways to ensure long-term scarcity and value-driven participation:
      </p>
      <ul className="list-disc list-inside space-y-4 text-left max-w-2xl mx-auto text-text-main">
        <li><span className="font-semibold">Transaction Fee Burn:</span> A fixed portion of all platform fees is automatically burned.</li>
        <li><span className="font-semibold">Voluntary Burns:</span> Players can burn tokens for exclusive cosmetics, badges, and rep boosts.</li>
        <li><span className="font-semibold">Event-Based Burns:</span> Seasonal events allow token burns for rare NFTs and special cases.</li>
      </ul>
      <p className="mt-8 text-xl text-center font-bold text-highlight">Burn = Progress. Deflation = Reward. Every action matters.</p>
    </section>
  );
};

export default BurnMechanism;