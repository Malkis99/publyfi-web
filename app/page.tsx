import CosmicButton from '@/components/CosmicButton';
import AnimatedTitle from '@/components/AnimatedTitle';
import SocialIcons from '@/components/SocialIcons';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-4">
          <AnimatedTitle />
        </div>
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
            className="w-48"
          />
          <CosmicButton
            label="Join Waitlist"
            href="/waitlist"
            variant="solid"
            className="w-48"
          />
          <CosmicButton
            label="Token"
            href="/token"
            variant="outline"
            className="w-48"
          />
        </div>
        <p className="text-sm text-white/60 fade-in" style={{ animationDelay: '0.8s' }}>
          Play. Stream. Earn. Evolve.
        </p>
      </div>
      <SocialIcons />
      <footer className="absolute bottom-6 text-center text-text-main/50 text-sm">
        © {new Date().getFullYear()} PublyFi — All rights reserved.
      </footer>
    </div>
  );
}