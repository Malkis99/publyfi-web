import RotatingCoin from '@/components/RotatingCoin';
import TokenOverview from '@/components/token/TokenOverview';
import BurnMechanism from '@/components/token/BurnMechanism';
import AntiInflation from '@/components/token/AntiInflation';
import Distribution from '@/components/token/Distribution';
import Vesting from '@/components/token/Vesting';
import Halving from '@/components/token/Halving';
import CosmicButton from '@/components/CosmicButton';
import Navbar from '@/components/Navbar';
import { StarfieldBackground } from '@/components/StarfieldBackground';

export default function TokenPage() {
  return (
    <div
      className="relative min-h-screen w-full text-center p-4 overflow-x-hidden"
      style={{ background: 'linear-gradient(to bottom, #0f0b1c, #231d3b)' }}
    >
      <StarfieldBackground particleCount={12} speedRange={[-0.03, 0.03]} opacityRange={[0.2, 0.4]} />
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col items-center pt-16 pb-8 px-4">
        <RotatingCoin />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main mb-3 fade-in">
          The Deflationary Heart of the PublyFi Ecosystem.
        </h1>
        <p className="text-xl sm:text-2xl text-accent mb-6 fade-in">
          Earn. Burn. Evolve. Powering the Social Gaming Economy.
        </p>
        <div className="w-20 h-px bg-accent/30 rounded-full mb-12" />
      </div>

      <TokenOverview />
      <BurnMechanism />
      <AntiInflation />
      <Distribution />
      <Vesting />
      <Halving />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-16 fade-in-up-on-scroll">
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