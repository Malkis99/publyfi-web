'use client';

import { motion } from 'framer-motion';

export const PedestalScan = () => {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        transform: 'rotateX(75deg)',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute w-full h-full"
        style={{
          maskImage: 'radial-gradient(transparent, black 65%)',
          background: 'conic-gradient(from 0deg, transparent 0%, transparent 50%, rgba(200, 255, 255, 0.8) 55%, transparent 60%)',
        }}
      />
    </motion.div>
  );
};