"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CosmicButton from '@/components/CosmicButton';

const QuestsHero = () => {
  const title = "PublyFi Quests";

  return (
    <section className="text-center py-16">
      <motion.h1
        className="relative text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="absolute inset-0 text-white/80"
          style={{ filter: 'drop-shadow(0 0 0.5rem rgba(163, 138, 209, 0.5)) drop-shadow(0 0 1rem rgba(80, 52, 143, 0.5))' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {title}
        </motion.span>
        {title}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Choose your mission. Earn glory, rewards, and reputation.
      </motion.p>

    </section>
  );
};

export default QuestsHero;
