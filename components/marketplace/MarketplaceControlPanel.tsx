"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Wallet, Search, Filter, SortAsc, ChevronDown, Shirt, Shield, UserCog, PawPrint, LayoutGrid, Box } from 'lucide-react';
import { Rarity } from '@/lib/marketplace-data';
import { SortOption } from '@/app/marketplace/page';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { ArrowRightLeft, Landmark, History, Coins } from 'lucide-react';

const WalletSection = () => {
  const [isConnected, setIsConnected] = useState(false);

  const GlowButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full bg-black/20 border-violet-400/20 text-violet-300 hover:bg-violet-400/10 hover:text-violet-200 hover:shadow-[0_0_15px_rgba(80,52,143,0.4)] transition-all duration-300 group"
    >
      <div className="relative z-10 flex items-center justify-center w-full">
        {children}
      </div>
    </Button>
  );

  return (
    <div className="relative bg-gradient-to-b from-violet-900/40 to-black/30 backdrop-blur-lg p-4 rounded-xl border border-violet-400/30 shadow-2xl shadow-violet-500/10">
      {isConnected ? (
        <div className="text-center">
          <p className="text-lg font-bold text-white tracking-wider">0xA5C...F3B</p>
          <div className="my-4 space-y-2 text-sm">
            <div className="flex justify-between items-center bg-white/5 p-2 rounded-md">
              <span className="text-gray-300 flex items-center"><Coins className="w-4 h-4 mr-2 text-amber-400"/> PUBL</span>
              <span className="text-white font-mono">10,450.75</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-2 rounded-md">
              <span className="text-gray-300 flex items-center"><Coins className="w-4 h-4 mr-2 text-violet-400"/> ETH</span>
              <span className="text-white font-mono">2.583</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2">
             <GlowButton>
              <Landmark className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Deposit / Withdraw
            </GlowButton>
            <GlowButton>
              <History className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              View Transactions
            </GlowButton>
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <GlowButton onClick={() => setIsConnected(true)}>
            <Wallet className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-[-10deg]" />
            Connect Wallet
          </GlowButton>
        </div>
      )}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
    </div>
  );
};

interface MarketplaceControlPanelProps {
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  rarity: Rarity | 'all';
  setRarity: (value: Rarity | 'all') => void;
  setGenre: (value: string) => void;
  setSort: (value: SortOption) => void;
  resetFilters: () => void;
}

const MarketplaceControlPanel = ({
  setSearch,
  setCategory,
  rarity,
  setRarity,
  setGenre,
  setSort,
  resetFilters
}: MarketplaceControlPanelProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGenre, setActiveGenre] = useState('all');
  const [openSections, setOpenSections] = useState({
    category: true,
    genre: true,
  });

  const handleOpenChange = (section: string) => (isOpen: boolean) => {
    setOpenSections(prev => ({ ...prev, [section]: isOpen }));
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? 'all' : category;
    setActiveCategory(newCategory);
    setCategory(newCategory);
  };

  const handleGenreClick = (genre: string) => {
    const newGenre = activeGenre === genre ? 'all' : genre;
    setActiveGenre(newGenre);
    setGenre(newGenre);
  };


  const genres = ["Shooter", "Fantasy RPG", "Cyberpunk", "Open World", "Cultural / Historical Styles", "Epic Sets"];

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

interface FilterSectionProps {
  title: string;
  items: { value: string; label: string; icon?: React.ElementType }[];
  activeItem: string;
  onItemClick: (value: string) => void;
  setFilter: (value: string) => void;
  isGrid?: boolean;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const FilterSection = ({ title, items, activeItem, onItemClick, isGrid, isOpen, onOpenChange }: FilterSectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <CollapsibleTrigger className="w-full flex justify-between items-center text-left p-2 rounded-md hover:bg-violet-500/10 transition">
        <Label className="text-gray-300">{title}</Label>
        <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-2">
        {isGrid ? (
          <div className="flex flex-wrap gap-2">
            {items.map(({ value, label }) => (
              <Button
                key={value}
                variant="outline"
                onClick={() => onItemClick(value)}
                className={`text-xs h-8 grow bg-black/20 border-violet-500/20 hover:bg-violet-500/10 ${activeItem === value ? 'border-violet-400 text-violet-400 shadow-[0_0_10px_rgba(80,52,143,0.4)]' : 'text-gray-300'}`}
              >
                {label}
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {items.map(({ value, label, icon: Icon }) => (
              <Button
                key={value}
                variant="ghost"
                onClick={() => onItemClick(value)}
                className={`w-full justify-start hover:bg-violet-500/10 ${activeItem === value ? 'text-violet-400' : 'text-gray-300'}`}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />} {label}
              </Button>
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

  return (
    <div className="h-full w-full bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col space-y-4 shadow-2xl shadow-purple-500/10">
        <div className="flex-shrink-0">
            <WalletSection />
        </div>

        <div className="relative flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-violet-400/50 pointer-events-none" />
            <Input
                placeholder="Search for items..."
                className="w-full pl-11 pr-4 py-2 rounded-lg bg-black/30 border border-violet-400/20 text-white placeholder:text-gray-500 focus:border-violet-400 focus:ring-violet-400 focus:ring-opacity-50 focus:shadow-[0_0_15px_rgba(80,52,143,0.25)] transition-all duration-300"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="flex-grow overflow-y-auto space-y-4 pr-2 -mr-2" onWheel={handleWheel}>
            <div className="p-4 rounded-lg bg-[#231d3b]/50 border border-purple-900/30">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center"><Filter className="mr-2 h-5 w-5" /> Filters</h3>
                <div className="space-y-4">
                        <FilterSection
                            title="Category"
                            items={[
                                { value: 'all', label: 'All', icon: LayoutGrid },
                                { value: 'Equipment', label: 'Equipment', icon: Shirt },
                                { value: 'Profile', label: 'Profile', icon: UserCog },
                                { value: 'Utility', label: 'Utility', icon: Shield },
                                { value: 'Pets', label: 'Pets', icon: PawPrint },
                                { value: 'Cases', label: 'Cases', icon: Box },
                            ]}
                            activeItem={activeCategory}
                            onItemClick={handleCategoryClick}
                            setFilter={setCategory}
                            isOpen={openSections.category}
                            onOpenChange={handleOpenChange('category')}
                        />
                        <FilterSection
                            title="Genre"
                            items={genres.map(g => ({ value: g, label: g }))}
                            activeItem={activeGenre}
                            onItemClick={handleGenreClick}
                            setFilter={setGenre}
                            isGrid
                            isOpen={openSections.genre}
                        onOpenChange={handleOpenChange('genre')}
                        />
                        <div>
                            <Label className="text-gray-300">Rarity</Label>
                            <Select onValueChange={(value) => setRarity(value as Rarity | 'all')} value={rarity}>
                                <SelectTrigger className="w-full bg-black/20 border-violet-500/30 hover:bg-violet-500/10 transition">
                                    <SelectValue placeholder="All Rarities" />
                                </SelectTrigger>
                                <SelectContent className="bg-black/80 backdrop-blur-xl border-violet-500/30 text-white">
                                    <SelectItem value="all">All Rarities</SelectItem>
                                    <SelectItem value="Common">Common</SelectItem>
                                    <SelectItem value="Rare">Rare</SelectItem>
                                    <SelectItem value="Epic">Epic</SelectItem>
                                    <SelectItem value="Legendary">Legendary</SelectItem>
                                    <SelectItem value="Mythic">Mythic</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Price Range</Label>
                            <div className="h-10 bg-gray-800 rounded-md flex items-center justify-center text-gray-500">Slider Placeholder</div>
                        </div>
                        <div className="pt-4 border-t border-violet-500/10">
                            <Button variant="link" className="w-full text-center text-violet-400 hover:text-white" onClick={resetFilters}>
                                Reset Filters
                            </Button>
                        </div>
                    </div>
                </div>

            <div className="p-4 rounded-lg bg-[#231d3b]/50 border border-purple-900/30">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center"><SortAsc className="mr-2 h-5 w-5" /> Sort By</h3>
                    <Select onValueChange={(value) => setSort(value as SortOption)} defaultValue="recent">
                        <SelectTrigger><SelectValue placeholder="Recently Added" /></SelectTrigger>
                        <SelectContent className="bg-black/80 backdrop-blur-xl border-violet-500/30 text-white">
                            <SelectItem value="recent">Recently Added</SelectItem>
                            <SelectItem value="price_asc">Price: Low to High</SelectItem>
                            <SelectItem value="price_desc">Price: High to Low</SelectItem>
                            <SelectItem value="rarity">Rarity</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            <div className="p-4 rounded-lg bg-[#231d3b]/50 border border-purple-900/30">
                <h3 className="text-lg font-semibold text-white mb-4">News & Drops</h3>
                <div className="text-sm text-gray-400">
                    <p>Upcoming: &apos;Cybernetic Dreams&apos; collection drops next week!</p>
                </div>
            </div>
        </div>
        <style jsx>{`
        /* Custom scrollbar for webkit browsers */
        .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
            border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
            background: rgba(80, 52, 143, 0.4);
            border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(80, 52, 143, 0.6);
        }
      `}</style>
    </div>
  );
};

export default MarketplaceControlPanel;