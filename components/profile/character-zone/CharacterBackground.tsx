'use client';

import { motion, AnimatePresence } from 'framer-motion';

export type BackgroundVariant = 'nebula' | 'energy' | 'dark';

interface CharacterBackgroundProps {
  activeVariant: BackgroundVariant;
}

const backgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const CharacterBackground = ({ activeVariant }: CharacterBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVariant}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {activeVariant === 'nebula' && <NebulaGlow />}
          {activeVariant === 'energy' && <BlueEnergyField />}
          {activeVariant === 'dark' && <DarkGradient />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Enhanced Background Style Components ---

const NebulaGlow = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#100a20] via-[#1e0c3b] to-[#3b1d6d]">
    {/* Base Swirl Layer 1 */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_rgba(120,80,180,0.2)_0%,_transparent_60%)] animate-gas-swirl-1"></div>
    {/* Base Swirl Layer 2 */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_rgba(100,100,200,0.15)_0%,_transparent_50%)] animate-gas-swirl-2"></div>
    {/* Energy Pulse */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(180,150,255,0.1)_0%,_transparent_70%)] animate-energy-pulse"></div>
  </div>
);

const Particles = ({ count, className }: { count: number, className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-1.5 bg-cyan-200/70 rounded-full"
        style={{
          top: '110%', // Start below the view
          left: `${Math.random() * 100}%`,
          animation: `particle-trail ${Math.random() * 8 + 5}s linear infinite`,
          animationDelay: `${Math.random() * 8}s`,
        }}
      />
    ))}
  </div>
);

const BlueEnergyField = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] to-[#004c7d]">
    {/* Energy Ripples */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -inset-1/2 rounded-[50%] border-2 border-cyan-300/50 animate-energy-ripple-1"></div>
      <div className="absolute -inset-1/2 rounded-[50%] border-2 border-cyan-400/50 animate-energy-ripple-2"></div>
    </div>
    <Particles count={50} />
  </div>
);

const DarkGradient = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a1a]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_black)]"></div>
    {/* Light Sweep 1 */}
    <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,_transparent,_rgba(100,100,200,0.03),_transparent)] animate-light-sweep-1"></div>
    {/* Light Sweep 2 */}
    <div className="absolute top-0 right-[-100%] w-full h-full bg-[linear-gradient(-90deg,_transparent,_rgba(100,150,200,0.02),_transparent)] animate-light-sweep-2"></div>
  </div>
);