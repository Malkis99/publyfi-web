import CosmicButton from '@/components/CosmicButton';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-text-main tracking-tighter mb-4 fade-in">
          PublyFi
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          The new home of gaming freedom
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-main/80 mb-10 fade-in" style={{ animationDelay: '0.4s' }}>
          A next-generation Web3 social ecosystem uniting streaming, interactive quests, and true digital ownership.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
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
        <p className="mt-8 text-sm text-white/60 fade-in" style={{ animationDelay: '0.8s' }}>
          Play. Stream. Earn. Evolve.
        </p>
      </div>
      <footer className="absolute bottom-4 text-center text-text-main/50 text-sm">
        © {new Date().getFullYear()} PublyFi — All rights reserved.
      </footer>
    </div>
  );
}