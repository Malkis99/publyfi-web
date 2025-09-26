import CosmicButton from '@/components/CosmicButton';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-text-main tracking-tighter mb-4 animate-[float_4s_ease-in-out_infinite] fade-in">
          PublyFi
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          The new home of gaming freedom
        </p>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-main/80 mb-8 fade-in" style={{ animationDelay: '0.4s' }}>
          A next-generation Web3 social gaming platform where streaming, quests, and true ownership converge — empowering a new era of gaming freedom, where your profile becomes your living digital reflection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 fade-in" style={{ animationDelay: '0.6s' }}>
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
        <p className="text-sm text-white/60 fade-in" style={{ animationDelay: '0.8s' }}>
          Play. Stream. Earn. Evolve.
        </p>
      </div>
      <footer className="absolute bottom-6 text-center text-text-main/50 text-sm">
        © {new Date().getFullYear()} PublyFi — All rights reserved.
      </footer>
    </div>
  );
}