'use client';

import { motion } from 'framer-motion';

export const PedestalEdge = () => {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        transform: 'rotateX(75deg)',
        borderRadius: '50%',
        border: '1.5px solid rgba(200, 255, 255, 0.4)',
        opacity: 0.6,
      }}
    />
  );
};