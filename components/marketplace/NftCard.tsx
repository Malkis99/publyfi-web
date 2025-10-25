"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { NftItem, Rarity } from '@/lib/marketplace-data';
import { Button } from '@/components/ui/button';

const rarityConfig: { [key in Rarity]: { color: string; glow: string; shimmerColor: string; flickerColor: string } } = {
  Common: { color: 'border-gray-600', glow: 'hover:shadow-[0_0_15px_rgba(173,216,230,0.5)]', shimmerColor: 'rgba(173,216,230,0.3)', flickerColor: 'rgba(173,216,230,0.6)' }, // Silver-blue
  Rare: { color: 'border-cyan-500', glow: 'hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]', shimmerColor: 'rgba(0,255,255,0.4)', flickerColor: 'rgba(0,255,255,0.7)' }, // Cyan
  Epic: { color: 'border-violet-500', glow: 'hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]', shimmerColor: 'rgba(138,43,226,0.4)', flickerColor: 'rgba(138,43,226,0.7)' }, // Violet
  Legendary: { color: 'border-amber-400', glow: 'hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]', shimmerColor: 'rgba(255,215,0,0.4)', flickerColor: 'rgba(255,215,0,0.8)' }, // Gold
  Mythic: { color: 'border-[#6B0F1A]', glow: 'hover:shadow-[0_0_20px_#A60F2D]', shimmerColor: 'rgba(166,15,45,0.5)', flickerColor: 'rgba(166,15,45,0.8)' }, // Crimson
};

interface NftCardProps {
  item: NftItem;
  onViewDetails: () => void;
  variants?: Variants;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const NftCard = ({ item, onViewDetails, variants = cardVariants }: NftCardProps) => {
  const config = rarityConfig[item.rarity];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`relative group bg-black/30 rounded-lg overflow-hidden border-2 ${config.color} ${config.glow} transition-all duration-300 ease-in-out`}
    >
      <div className="aspect-square w-full bg-gray-900/50" />

      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
        <p className="text-sm text-gray-400">{item.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-xl font-bold text-white">{item.price} <span className="text-sm text-amber-400">PUBL</span></p>
          <span className={`px-2 py-1 text-xs font-bold rounded-full bg-black/50 text-white`}>
            {item.rarity}
          </span>
        </div>
      </div>

      {/* Hover overlay for actions */}
      <motion.div
        className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button variant="secondary" className="mb-2 w-3/4" onClick={onViewDetails}>View Details</Button>
        <Button variant="default" className="w-3/4">Buy</Button>
      </motion.div>

      {/* Shimmer Effect */}
      <div
        className="absolute top-0 left-[-100%] w-full h-full bg-shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shimmer z-10"
        style={{ '--shimmer-color': config.shimmerColor } as React.CSSProperties}
      />

      {/* Idle Flicker Effect */}
      <div
        className="absolute inset-0 rounded-lg border-2 border-transparent animate-flicker"
        style={{
          borderColor: config.flickerColor,
          animationDelay: `${item.id * 0.2}s` // Stagger animation
        } as React.CSSProperties}
      />

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(0) skewX(-30deg); }
          100% { transform: translateX(200%) skewX(-30deg); }
        }
        .animate-shimmer {
          animation: shimmer 1s ease-in-out;
        }
        .bg-shimmer {
          background: linear-gradient(90deg, transparent, var(--shimmer-color), transparent);
        }
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
          60% { opacity: 0; }
          70% { opacity: 0.8; }
          80% { opacity: 0; }
        }
        .animate-flicker {
          animation: flicker 4s infinite ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default NftCard;