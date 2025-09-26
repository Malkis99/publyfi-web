const BurnMechanism = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 fade-in-scroll">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-accent animate-title-reveal">Burn Mechanism</h2>
      <p className="text-lg text-center text-text-main/80 mb-8">
        PublyFi integrates multiple burn pathways to ensure long-term scarcity and value-driven participation:
      </p>
      <div className="max-w-3xl mx-auto text-center space-y-4 text-text-main">
        <p><span className="font-semibold text-accent/80">Transaction Fee Burn:</span> A fixed portion of all platform fees is automatically burned.</p>
        <p><span className="font-semibold text-accent/80">Voluntary Burns:</span> Players can burn tokens for exclusive cosmetics, badges, and rep boosts.</p>
        <p><span className="font-semibold text-accent/80">Event-Based Burns:</span> Seasonal events allow token burns for rare NFTs and special cases.</p>
      </div>
      <p className="mt-8 text-xl text-center font-bold text-highlight">Burn = Progress. Deflation = Reward. Every action matters.</p>
    </section>
  );
};

export default BurnMechanism;