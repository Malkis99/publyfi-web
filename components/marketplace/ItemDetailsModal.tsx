"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { NftItem, Rarity } from '@/lib/marketplace-data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Gem, Shield, Tag, User, View } from 'lucide-react';

const rarityConfig: { [key in Rarity]: { color: string; textColor: string; glow: string } } = {
  Common: { color: 'border-gray-500', textColor: 'text-gray-400', glow: 'shadow-[0_0_15px_rgba(107,114,128,0.5)]' },
  Rare: { color: 'border-blue-500', textColor: 'text-blue-400', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.6)]' },
  Epic: { color: 'border-purple-500', textColor: 'text-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.6)]' },
  Legendary: { color: 'border-amber-400', textColor: 'text-amber-400', glow: 'shadow-[0_0_15px_rgba(251,191,36,0.7)]' },
  Mythic: { color: 'border-red-500', textColor: 'text-red-400', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.8)]' },
};

interface ItemDetailsModalProps {
  item: NftItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailsModal = ({ item, isOpen, onClose }: ItemDetailsModalProps) => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!item) return null;
  const config = rarityConfig[item.rarity];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black/50 backdrop-blur-md border-2 border-blue-500/30 text-white p-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
        >
          {/* Left Side: Image Preview */}
          <motion.div
            className={`relative flex items-center justify-center p-8 bg-black/30 border-r border-blue-500/20 ${config.glow}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 800 }}
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>

          {/* Right Side: Details */}
          <div className="p-8 flex flex-col">
            <DialogHeader>
              <DialogTitle className={`text-3xl font-bold ${config.textColor}`}>{item.name}</DialogTitle>
              <DialogDescription className="text-gray-400">
                Created by <span className="text-white font-semibold">{item.creator}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="my-6 space-y-4 text-sm">
              <div className="flex items-center">
                <Gem className={`w-5 h-5 mr-3 ${config.textColor}`} />
                <span className="font-semibold">Rarity:</span>
                <span className={`ml-2 font-bold ${config.textColor}`}>{item.rarity}</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-3 text-gray-400" />
                <span className="font-semibold">Category:</span>
                <span className="ml-2 text-gray-300">{item.category}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A standard-issue helmet from CyberCorp, offering basic protection and a sleek, minimalist design. A reliable choice for any operative starting their journey.
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-blue-500/20">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400">Price:</p>
                <p className="text-3xl font-bold text-white">{item.price} <span className="text-xl text-amber-400">PUBL</span></p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full"><View className="mr-2 h-4 w-4"/> View on Explorer</Button>
                <Button variant="default" className="w-full">Purchase</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailsModal;