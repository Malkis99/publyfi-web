'use client';

import { motion } from 'framer-motion';

export const AmbientReflection = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-20 z-0"
      style={{
        transform: 'translateY(20px) rotateX(85deg) scale(1.2)',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(150, 180, 255, 0.08) 0%, transparent 60%)',
        filter: 'blur(15px)',
        animation: 'ambient-reflection-shimmer 8s ease-in-out infinite alternate',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.0 }}
    />
  );
};