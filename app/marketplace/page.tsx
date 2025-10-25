"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { SlidersHorizontal } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

import MarketplaceControlPanel from '@/components/marketplace/MarketplaceControlPanel';
import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import ItemGrid from '@/components/marketplace/ItemGrid';
import EmptyState from '@/components/marketplace/EmptyState';
import StaticStarfield from '@/components/StaticStarfield';
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
    <div className="min-h-screen bg-[#140f22] text-gray-200 relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 20%, #50348f, transparent 50%)'}}></div>
      <StaticStarfield />
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <div className="pt-20">
          <MarketplaceHero />
        </div>
        <div className="flex flex-1">
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 isolate">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full w-full -mt-20">
                {controlPanel}
              </motion.div>
            </div>
          </aside>
        </div>
        <MarketplaceFooter />
      </div>

      {/* Tablet Sheet */}
      {isTablet && (
        <Sheet open={isPanelOpen} onOpenChange={setIsPanelOpen}>
          <SheetContent className="w-[400px] sm:w-[540px] bg-black/20 backdrop-blur-md border-l border-white/10 p-6 shadow-2xl shadow-purple-500/10">
            {controlPanel}
          </SheetContent>
        </Sheet>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer open={isPanelOpen} onOpenChange={setIsPanelOpen}>
          <DrawerContent className="bg-black/20 backdrop-blur-md border-t border-white/10 text-white p-4 h-[75%] shadow-2xl shadow-purple-500/10">
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