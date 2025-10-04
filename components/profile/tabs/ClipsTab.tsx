'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { Scissors, Gamepad2 } from 'lucide-react';

const sampleClips = [
    {
        title: "Insane 1v3 Clutch",
        game: "Starfire Arena",
        thumbnail: ASSETS.customizations.custom1,
    },
    {
        title: "First look at the new armor",
        game: "Cyberpunk 2077",
        thumbnail: ASSETS.customizations.custom2,
    },
    {
        title: "Rarest drop from a stream case!",
        game: "Lost Ark",
        thumbnail: ASSETS.customizations.custom3,
    },
    {
        title: "How to get the Cosmic Annihilator",
        game: "Warframe",
        thumbnail: ASSETS.customizations.custom1,
    },
];

const ClipCard = ({ clip }: { clip: typeof sampleClips[0] }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-black/20 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <div className="relative w-full aspect-video">
            <Image src={clip.thumbnail} alt={clip.title} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2">
                 <h4 className="font-bold text-white text-sm drop-shadow-md">{clip.title}</h4>
            </div>
        </div>
        <div className="p-3 bg-gray-900/50">
            <p className="text-xs text-gray-400 flex items-center gap-1.5"><Gamepad2 size={14} /> {clip.game}</p>
        </div>
    </motion.div>
);

export const ClipsTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Highlighted Clips</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600/80 border border-purple-500/30 rounded-lg text-sm text-white hover:bg-purple-700 transition-all">
                    <Scissors className="w-5 h-5" />
                    <span>Create Clip</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleClips.map((clip, index) => (
                    <ClipCard key={index} clip={clip} />
                ))}
            </div>
        </motion.div>
    );
};