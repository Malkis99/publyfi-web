'use client';

import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const sampleClips = [
    {
        title: "Insane 1v3 Clutch",
        game: "Starfire Arena",
    },
    {
        title: "First look at the new armor",
        game: "Cyberpunk 2077",
    },
    {
        title: "Rarest drop from a stream case!",
        game: "Lost Ark",
    },
    {
        title: "How to get the Cosmic Annihilator",
        game: "Warframe",
    },
];

const ClipCard = ({ clip }: { clip: typeof sampleClips[0] }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-black/20 rounded-lg border border-white/5 overflow-hidden group cursor-pointer flex flex-col"
    >
        <div className="relative w-full aspect-video bg-gradient-to-br from-indigo-800 via-purple-800 to-slate-900 flex-grow flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative">
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
                {/* "Create Clip" button removed as per requirements */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleClips.map((clip, index) => (
                    <ClipCard key={index} clip={clip} />
                ))}
            </div>
        </motion.div>
    );
};