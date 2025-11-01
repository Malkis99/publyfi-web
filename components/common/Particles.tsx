// components/common/Particles.tsx
'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ParticlesProps {
  count?: number;
}

const Particles = ({ count = 50 }: ParticlesProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      const size = 1 + Math.random() * 2;
      const opacity = 0.1 + Math.random() * 0.2;

      return {
        id: i,
        x,
        y,
        duration,
        delay,
        size,
        opacity,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 8px #00ffff',
          }}
          initial={{ y: `${p.y}%`, opacity: 0 }}
          animate={{
            y: `${p.y - 100}%`,
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
