'use client';

import { motion } from 'framer-motion';

export const PedestalRings = () => {
  return (
    <>
      {/* Static outer ring */}
      <motion.div
        className="absolute inset-[10%]"
        style={{
          transform: 'rotateX(75deg)',
          borderRadius: '50%',
          border: '1px solid rgba(173, 216, 230, 0.2)',
        }}
      />
      {/* Static inner ring */}
      <motion.div
        className="absolute inset-[20%]"
        style={{
          transform: 'rotateX(75deg)',
          borderRadius: '50%',
          border: '1px solid rgba(173, 216, 230, 0.15)',
        }}
      />
    </>
  );
};