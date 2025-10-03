'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { Play } from 'lucide-react';

const sampleReels = [
    { thumbnail: ASSETS.customizations.custom1, views: '2.1M' },
    { thumbnail: ASSETS.customizations.custom2, views: '1.8M' },
    { thumbnail: ASSETS.customizations.custom3, views: '1.5M' },
    { thumbnail: ASSETS.customizations.custom1, views: '1.2M' },
    { thumbnail: ASSETS.customizations.custom2, views: '980K' },
    { thumbnail: ASSETS.customizations.custom3, views: '750K' },
    { thumbnail: ASSETS.customizations.custom1, views: '600K' },
    { thumbnail: ASSETS.customizations.custom2, views: '450K' },
    { thumbnail: ASSETS.customizations.custom3, views: '300K' },
    { thumbnail: ASSETS.customizations.custom1, views: '150K' },
];

const ReelCard = ({ reel }: { reel: typeof sampleReels[0] }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative aspect-[9/16] bg-black/20 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <Image src={reel.thumbnail} alt="Reel thumbnail" fill style={{ objectFit: 'cover' }} />
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