'use client';

import { motion } from 'framer-motion';

// Mock data for the gallery grid, now without image URLs
const sampleItems = Array.from({ length: 10 });

const GalleryCard = () => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        className="relative aspect-square bg-gradient-to-br from-indigo-800 via-purple-800 to-slate-900 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
);

export const GalleryTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-white">Gallery</h3>
                 {/* "Add Image" button removed as per requirements */}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {sampleItems.map((_, index) => (
                    <GalleryCard key={index} />
                ))}
            </div>
        </motion.div>
    );
};