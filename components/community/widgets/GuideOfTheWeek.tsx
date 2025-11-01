"use client"
import React from 'react';
import { guideOfTheWeek } from '@/lib/community-data';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const GuideOfTheWeek = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4 relative overflow-hidden"
    >
      <div className="flex items-center mb-4">
        <Award className="h-6 w-6 text-yellow-400 mr-2" />
        <h3 className="font-bold text-lg text-white">Guide of the Week</h3>
      </div>
      <div className="relative aspect-video rounded-md overflow-hidden mb-4 border border-purple-700/50 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-center [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"></div>
      </div>
      <h4 className="font-semibold text-white">{guideOfTheWeek.title}</h4>
      <p className="text-sm text-purple-300/70">by {guideOfTheWeek.author.name} in <span className="font-semibold">{guideOfTheWeek.category}</span></p>
      <Button className="w-full mt-4 bg-purple-600/80 hover:bg-purple-600 text-white font-bold">
        Read Now
      </Button>
    </motion.div>
  );
};

export default GuideOfTheWeek;