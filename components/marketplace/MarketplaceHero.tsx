"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/community/ParticleBackground';

const MarketplaceHero = () => {
  return (
    <div className="text-center py-16 px-6 relative overflow-hidden bg-[#140f22] border-y border-purple-900/50">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 20%, #50348f, transparent 50%)'}}></div>
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140f22] via-[#140f22]/80 to-transparent z-10"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border-rev"></div>

      {/* Subtle decorative lines */}
      <div className="absolute top-4 left-4 w-16 h-px bg-gradient-to-r from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute top-4 left-4 w-px h-16 bg-gradient-to-b from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute bottom-4 right-4 w-16 h-px bg-gradient-to-l from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute bottom-4 right-4 w-px h-16 bg-gradient-to-t from-[#a38ad1]/50 to-transparent"></div>


      <div className="relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl font-bold tracking-tight text-white"
        >
          PublyFi Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base text-purple-300/80 max-w-2xl mx-auto"
        >
          Discover, collect, and trade unique digital assets from across the galaxy.
        </motion.p>
      </div>
    </div>
  );
};

export default MarketplaceHero;