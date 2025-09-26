import RotatingCoin from '@/components/RotatingCoin';
import TokenOverview from '@/components/token/TokenOverview';
import BurnMechanism from '@/components/token/BurnMechanism';
import AntiInflation from '@/components/token/AntiInflation';
import Distribution from '@/components/token/Distribution';
import Vesting from '@/components/token/Vesting';
import Halving from '@/components/token/Halving';
import CosmicButton from '@/components/CosmicButton';

export default function TokenPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center py-16">
        <RotatingCoin />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main mb-4 fade-in">
          The Deflationary Heart of the PublyFi Ecosystem.
        </h1>
        <p className="text-xl sm:text-2xl text-accent mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          Earn. Burn. Evolve. Powering the Social Gaming Economy.
        </p>
        <div className="w-24 h-1 bg-accent/50 rounded-full mb-16 animate-[pulse-glow_4s_infinite]" />
      </div>

      <TokenOverview />
      <BurnMechanism />
      <AntiInflation />
      <Distribution />
      <Vesting />
      <Halving />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-16 fade-in-scroll">
        <CosmicButton
          label="Buy PUBL"
          href="#"
          variant="solid"
        />
        <CosmicButton
          label="View on Explorer"
          href="#"
          variant="outline"
        />
      </div>
    </div>
  );
}