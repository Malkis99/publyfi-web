"use client"
import React from 'react';
import { trendingNowItems } from '@/lib/community-data';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const typeColors: { [key: string]: string } = {
  Discussion: 'text-blue-400',
  Guide: 'text-green-400',
  'DAO Proposal': 'text-yellow-400',
};

const gradientPlaceholders = [
    'from-blue-500/20 to-purple-500/20',
    'from-green-500/20 to-teal-500/20',
    'from-yellow-500/20 to-orange-500/20',
];

const TrendingNow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
    >
      <div className="flex items-center mb-4">
        <Flame className="h-6 w-6 text-red-500 mr-2" />
        <h3 className="font-bold text-lg text-white">Trending Now</h3>
      </div>
      <ul className="space-y-2">
        {trendingNowItems.map((item, index) => (
          <motion.li
            key={item.id}
            className="group cursor-pointer"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(80, 52, 143, 0.3)' }}
            transition={{ duration: 0.2 }}
            style={{ borderRadius: '8px', padding: '8px', border: '1px solid transparent' }}
          >
            <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-md bg-gradient-to-br ${gradientPlaceholders[index % gradientPlaceholders.length]} flex-shrink-0 border border-white/10 shadow-md`}></div>
                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-purple-300 transition-colors leading-tight text-sm">{item.title}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-purple-400/60">{item.category}</p>
                    <p className={`text-xs font-bold ${typeColors[item.type]}`}>{item.type}</p>
                  </div>
                </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TrendingNow;