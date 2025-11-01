'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { LayoutGrid, Sparkles } from 'lucide-react';

// --- Mock Data ---
const INVENTORY_ITEMS = [
  // Cases
  { id: 'case1', name: 'Standard Case', category: 'Cases', rarity: 'Common', image: ASSETS.cases.case1 },
  { id: 'case2', name: 'Standard Case', category: 'Cases', rarity: 'Common', image: ASSETS.cases.case2 },
  { id: 'case3', name: 'Prime Case', category: 'Cases', rarity: 'Rare', image: ASSETS.cases.case3 },
  { id: 'case4', name: 'Prime Case', category: 'Cases', rarity: 'Rare', image: ASSETS.cases.case4 },
  { id: 'case5', name: 'Founders Case', category: 'Cases', rarity: 'Epic', image: ASSETS.cases.case5 },
  { id: 'case6', name: 'Founders Case', category: 'Cases', rarity: 'Epic', image: ASSETS.cases.case6 },
  // Equipment
  { id: 'equip-common', name: 'Basic Armor', category: 'Equipment', rarity: 'Common', image: ASSETS.equipment.common },
  { id: 'equip-epic', name: 'Void Plate', category: 'Equipment', rarity: 'Epic', image: ASSETS.equipment.epic },
  { id: 'equip-legendary', name: 'Galactic Guard', category: 'Equipment', rarity: 'Legendary', image: ASSETS.equipment.legendary },
  // Weapons
  { id: 'weapon-common', name: 'Training Sword', category: 'Weapons', rarity: 'Common', image: ASSETS.weapons.common },
  { id: 'weapon-rare', name: 'Laser Edge', category: 'Weapons', rarity: 'Rare', image: ASSETS.weapons.rare },
  { id: 'weapon-epic', name: 'Plasma Rifle', category: 'Weapons', rarity: 'Epic', image: ASSETS.weapons.epic },
  { id: 'weapon-legendary', name: 'Starforged Blade', category: 'Weapons', rarity: 'Legendary', image: ASSETS.weapons.legendary },
  { id: 'weapon-mythic', name: 'Cosmic Annihilator', category: 'Weapons', rarity: 'Mythic', image: ASSETS.weapons.mythic },
  // Customizations
  { id: 'cust1', name: 'Cosmic Frame', category: 'Customization', rarity: 'Rare', image: ASSETS.customizations.custom1 },
  { id: 'cust2', name: 'Galaxy Banner', category: 'Customization', rarity: 'Epic', image: ASSETS.customizations.custom2 },
  { id: 'cust3', name: 'Nebula Background', category: 'Customization', rarity: 'Legendary', image: ASSETS.customizations.custom3 },
];

const CATEGORIES = ['All', 'Cases', 'Equipment', 'Weapons', 'Customization'];
const RARITIES = ['All', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];

// Restored rarity colors for border and glow effect
const RARITY_STYLES: { [key: string]: { border: string; glow: string } } = {
  Common: { border: 'border-gray-500/60', glow: 'hover:shadow-[0_0_15px_rgba(156,163,175,0.5)] hover:!border-gray-400' },
  Rare: { border: 'border-blue-500/60', glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:!border-blue-400' },
  Epic: { border: 'border-purple-500/60', glow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:!border-purple-400' },
  Legendary: { border: 'border-orange-500/60', glow: 'hover:shadow-[0_0_15px_rgba(249,115,22,0.7)] hover:!border-orange-400' },
  Mythic: { border: 'border-red-600/60', glow: 'hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] hover:!border-red-500' },
};

const FilterButton = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void; }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
      isActive ? 'bg-purple-600 text-white shadow-md' : 'bg-black/20 text-gray-300 hover:bg-white/10'
    }`}
  >
    {label}
  </button>
);

const InventoryCard = ({ item }: { item: typeof INVENTORY_ITEMS[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className={`bg-black/20 rounded-lg overflow-hidden border-2 ${RARITY_STYLES[item.rarity]?.border || 'border-transparent'} group transition-all duration-300 ${RARITY_STYLES[item.rarity]?.glow} hover:scale-105`}
  >
    <div className="relative w-full aspect-square flex items-center justify-center p-2">
      <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
    </div>
    <div className="p-2 text-center">
      <p className="text-xs font-bold text-white truncate">{item.name}</p>
      <p className="text-xs text-gray-500">{item.category}</p>
    </div>
  </motion.div>
);

export const InventoryTab = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRarity, setActiveRarity] = useState('All');

  const filteredItems = INVENTORY_ITEMS.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const rarityMatch = activeRarity === 'All' || item.rarity === activeRarity;
    return categoryMatch && rarityMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-4 h-full flex flex-col"
    >
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <LayoutGrid className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-semibold text-gray-300">Category</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => <FilterButton key={cat} label={cat} isActive={activeCategory === cat} onClick={() => setActiveCategory(cat)} />)}
        </div>
        <div className="flex items-center space-x-2 mt-3 mb-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-semibold text-gray-300">Rarity</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {RARITIES.map(rarity => <FilterButton key={rarity} label={rarity} isActive={activeRarity === rarity} onClick={() => setActiveRarity(rarity)} />)}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto pr-2 -mr-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <AnimatePresence>
            {filteredItems.map(item => <InventoryCard key={item.id} item={item} />)}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};