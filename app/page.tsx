import CosmicButton from '@/components/CosmicButton';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-text-main tracking-tighter mb-4 fade-in">
          PublyFi
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          Play. Stream. Earn. Evolve.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-main/80 mb-6 fade-in" style={{ animationDelay: '0.4s' }}>
          PublyFi is a next-generation Web3 social-gaming platform combining streaming, quests, NFT marketplace, and DAO governance. Built on Immutable zkEVM with deflationary $PUBL tokenomics.
        </p>
        <p className="text-sm text-text-main/60 mb-10 fade-in" style={{ animationDelay: '0.6s' }}>
          ⚙️ Platform is under active development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style={{ animationDelay: '0.8s' }}>
          <CosmicButton
            label="Whitepaper"
            href="/whitepaper"
            variant="outline"
          />
          <CosmicButton
            label="Join Waitlist"
            href="/waitlist"
            variant="solid"
          />
        </div>
      </div>
      <footer className="absolute bottom-4 text-center text-text-main/50 text-sm">
        © {new Date().getFullYear()} PublyFi — All rights reserved.
      </footer>
    </div>
  );
}