"use client"
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';


const filters = ['Discussions', 'Guides', 'Polls', 'DAO', 'User'];

const SearchAndFilters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get('filter');

    const handleFilterClick = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter.toLowerCase() === activeFilter) {
            params.delete('filter');
        } else {
            params.set('filter', filter.toLowerCase());
        }
        router.push(`${pathname}?${params.toString()}`);
    };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search community..."
          className="bg-[#140f22] border-purple-800/50 pl-10"
          onChange={(e) => {
              const params = new URLSearchParams(searchParams);
              if (e.target.value) {
                  params.set('q', e.target.value);
              } else {
                  params.delete('q');
              }
              router.push(`${pathname}?${params.toString()}`);
          }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map(filter => {
            const isActive = activeFilter === filter.toLowerCase();
            return (
              <Button
                key={filter}
                variant="ghost"
                size="sm"
                onClick={() => handleFilterClick(filter)}
                className={`text-xs ${isActive ? 'bg-[#50348f] text-white' : 'bg-[#140f22]/50 text-purple-300'} hover:bg-[#50348f] hover:text-white border border-purple-800/30 transition-colors`}
              >
                {filter}
              </Button>
            )
        })}
      </div>
    </motion.div>
  );
};

export default SearchAndFilters;