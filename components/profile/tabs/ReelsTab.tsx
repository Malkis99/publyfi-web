'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const sampleReels = [
    { views: '2.1M' },
    { views: '1.8M' },
    { views: '1.5M' },
    { views: '1.2M' },
    { views: '980K' },
    { views: '750K' },
    { views: '600K' },
    { views: '450K' },
    { views: '300K' },
    { views: '150K' },
];

const ReelCard = ({ reel }: { reel: typeof sampleReels[0] }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative aspect-[9/16] bg-gradient-to-br from-indigo-800 via-purple-800 to-slate-900 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        <div className="absolute bottom-2 left-2 text-white text-xs font-bold flex items-center gap-1">
            <Play size={14} />
            <span>{reel.views}</span>
        </div>
    </motion.div>
);

export const ReelsTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <h3 className="text-xl font-bold text-white mb-6">Reels</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {sampleReels.map((reel, index) => (
                    <ReelCard key={index} reel={reel} />
                ))}
            </div>
        </motion.div>
    );
};