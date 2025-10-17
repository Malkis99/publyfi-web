"use client"
import React from 'react';
import { myActivityStats } from '@/lib/community-data';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const MyActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
    >
      <div className="flex items-center mb-4">
        <Activity className="h-6 w-6 text-purple-400 mr-2" />
        <h3 className="font-bold text-lg text-white">My Activity</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between items-baseline">
          <span className="text-purple-300/80">Posts</span>
          <span className="font-bold text-white">{myActivityStats.posts}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-purple-300/80">Replies</span>
          <span className="font-bold text-white">{myActivityStats.replies}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-purple-300/80">Likes Given</span>
          <span className="font-bold text-white">{myActivityStats.likesGiven}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-purple-300/80">Likes Rec.</span>
          <span className="font-bold text-white">{myActivityStats.likesReceived}</span>
        </div>
        <div className="col-span-2 flex justify-between items-baseline">
          <span className="text-purple-300/80">DAO Votes</span>
          <span className="font-bold text-white">{myActivityStats.daoVotes}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MyActivity;