"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MarketplaceHero = () => {
  return (
    <div className="text-center py-16 px-6 relative overflow-hidden bg-transparent border-y border-purple-900/50">
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
          style={{ textShadow: '0 0 15px rgba(163, 138, 209, 0.5), 0 0 30px rgba(163, 138, 209, 0.3)' }}
        >
          Welcome to the PublyFi Marketplace
        </motion.h1>
      </div>
    </div>
  );
};

export default MarketplaceHero;