"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { SlidersHorizontal } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

import MarketplaceControlPanel from '@/components/marketplace/MarketplaceControlPanel';
import ItemGrid from '@/components/marketplace/ItemGrid';
import EmptyState from '@/components/marketplace/EmptyState';
import ParticleBackground from '@/components/common/ParticleBackground';
import MarketplaceFooter from '@/components/marketplace/MarketplaceFooter';
import { placeholderItems, NftItem, Rarity } from '@/lib/marketplace-data';

export type SortOption = "recent" | "price_asc" | "price_desc" | "rarity";

const MarketplacePage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [rarity, setRarity] = useState<Rarity | 'all'>('all');
  const [genre, setGenre] = useState('all');
  const [sort, setSort] = useState<SortOption>('recent');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 639px)');

  const filteredAndSortedItems = useMemo(() => {
    let items = [...placeholderItems];
    if (search) items = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    if (category !== 'all') items = items.filter(item => item.category === category);
    if (rarity !== 'all') items = items.filter(item => item.rarity === rarity);
    if (genre !== 'all') items = items.filter(item => item.genre === genre);
    switch (sort) {
      case 'price_asc': items.sort((a, b) => a.price - b.price); break;
      case 'price_desc': items.sort((a, b) => b.price - a.price); break;
      case 'rarity':
        const rarityOrder: Rarity[] = ["Common", "Rare", "Epic", "Legendary", "Mythic"];
        items.sort((a, b) => rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity));
        break;
      default: items.sort((a, b) => a.id - b.id); break;
    }
    return items;
  }, [search, category, rarity, sort, genre]);

  const resetFilters = () => {
    setSearch('');
    setCategory('all');
    setRarity('all');
    setGenre('all');
    setSort('recent');
  };

  const controlPanel = (
    <MarketplaceControlPanel
      setSearch={setSearch}
      setCategory={setCategory}
      rarity={rarity}
      setRarity={setRarity}
      setGenre={setGenre}
      setSort={setSort}
      resetFilters={resetFilters}
    />
  );

  return (
    <div className="flex flex-col min-h-screen w-full bg-black/10 relative marketplace-container">
      <VignetteStyle />
      <ParticleBackground />
      <div className="flex flex-1">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 isolate">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center pt-16 pb-12">
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                Marketplace
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300/80">Discover, trade, and collect unique digital assets.</p>
            </div>
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <div className="lg:hidden">
                {(isTablet || isMobile) && (
                  <Button variant="outline" onClick={() => setIsPanelOpen(true)}>
                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                    Filters
                  </Button>
                )}
              </div>
            </div>
            <div className="mt-0 pb-32">
              {filteredAndSortedItems.length > 0 ? (
                <ItemGrid items={filteredAndSortedItems} />
              ) : (
                <EmptyState />
              )}
            </div>
          </motion.div>
        </main>

        {/* Desktop Panel */}
        <aside className="hidden lg:block w-96 flex-shrink-0 p-4">
          <div className="sticky top-0 h-screen pt-24">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full w-full">
              {controlPanel}
            </motion.div>
          </div>
        </aside>
      </div>
      <MarketplaceFooter />

      {/* Tablet Sheet */}
      {isTablet && (
        <Sheet open={isPanelOpen} onOpenChange={setIsPanelOpen}>
          <SheetContent className="w-[400px] sm:w-[540px] bg-black/80 backdrop-blur-xl border-l-violet-500/30 p-6">
            {controlPanel}
          </SheetContent>
        </Sheet>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer open={isPanelOpen} onOpenChange={setIsPanelOpen}>
          <DrawerContent className="bg-black/80 backdrop-blur-xl border-t-violet-500/30 text-white p-4 h-[75%]">
            <div className="overflow-y-auto">
              {controlPanel}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default MarketplacePage;

const VignetteStyle = () => (
  <style jsx global>{`
    .marketplace-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background: radial-gradient(ellipse at center, transparent 50%, black 100%);
      opacity: 0.3;
      z-index: 0;
    }
    @keyframes light-sweep {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-light-sweep {
      animation: light-sweep 4s ease-in-out infinite;
    }
  `}</style>
);