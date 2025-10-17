'use client';

import { motion } from 'framer-motion';

export const EnergyHaze = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1/2 z-5"
      style={{
        background: 'linear-gradient(to top, rgba(100, 150, 255, 0.1) 0%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse at bottom, black 30%, transparent 70%)',
        animation: 'energy-haze-rise 15s linear infinite',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 1.5 }}
    />
  );
};