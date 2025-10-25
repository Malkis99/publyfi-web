'use client';

import { motion } from 'framer-motion';

export const PedestalBase = () => {
  return (
    <>
      {/* Volumetric Glow Layer 1 (Core) */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(75deg) scale(0.8)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.4) 0%, transparent 60%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Volumetric Glow Layer 2 (Mist) */}
      <motion.div
        className="absolute inset-[-20%]"
        style={{
          transform: 'rotateX(75deg) scale(1)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(100, 150, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pedestal-glow-pulse 6s ease-in-out infinite alternate-reverse',
        }}
      />
    </>
  );
};