'use client';

import { motion } from 'framer-motion';
import { Radio, Eye, Clock } from 'lucide-react';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

const sampleStreams = [
    {
        title: "Mythic Sword Hunt - Final Boss!",
        thumbnail: ASSETS.customizations.custom1,
        views: '1.2M',
        duration: '2:34:10',
    },
    {
        title: "Galactic Guard Armor Showcase",
        thumbnail: ASSETS.customizations.custom2,
        views: '876K',
        duration: '0:45:22',
    },
    {
        title: "Chill Stream - Unboxing Prime Cases",
        thumbnail: ASSETS.customizations.custom3,
        views: '543K',
        duration: '1:12:54',
    },
];

const StreamCard = ({ stream }: { stream: typeof sampleStreams[0] }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-black/20 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <div className="relative w-full aspect-video">
            <Image src={stream.thumbnail} alt={stream.title} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                <span className="flex items-center gap-1"><Clock size={12} /> {stream.duration}</span>
            </div>
        </div>
        <div className="p-3">
            <h4 className="font-bold text-white truncate">{stream.title}</h4>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Eye size={14} /> {stream.views} views</p>
        </div>
    </motion.div>
);

export const StreamsTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Saved Streams</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-600/80 border border-red-500/30 rounded-lg text-sm text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105">
                    <Radio className="w-5 h-5" />
                    <span>Go Live</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleStreams.map((stream, index) => (
                    <StreamCard key={index} stream={stream} />
                ))}
            </div>
        </motion.div>
    );
};