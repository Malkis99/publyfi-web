"use client";
import React from 'react';
import { mockUsers } from '@/lib/community-data';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Avatar from '../Avatar';

const roleColors: { [key: string]: { badge: string; } } = {
  Prime: { badge: 'bg-purple-600/20 text-purple-300 border-purple-500/30' },
  PRO: { badge: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30' },
  Moderator: { badge: 'bg-red-600/20 text-red-300 border-red-500/30' },
  Member: { badge: 'bg-gray-600/20 text-gray-300 border-gray-500/30' },
};

const ProfileCard = () => {
  const user = mockUsers['user-1']; // Using Nova as the example user

  if (!user) return null;

  const roleStyle = roleColors[user.role];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
    >
      <div className="flex items-center space-x-4">
        <Avatar user={user} size={56} />
        <div>
          <h3 className="font-bold text-lg text-white">{user.name}</h3>
          <Badge className={`${roleStyle.badge} text-xs`}>{user.role}</Badge>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="font-bold text-xl text-white">{user.stats.posts}</p>
          <p className="text-xs text-purple-300/70">Posts</p>
        </div>
        <div>
          <p className="font-bold text-xl text-white">{user.stats.likes}K</p>
          <p className="text-xs text-purple-300/70">Likes</p>
        </div>
        <div>
          <p className="font-bold text-xl text-white">#{user.stats.rank}</p>
          <p className="text-xs text-purple-300/70">Rank</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;