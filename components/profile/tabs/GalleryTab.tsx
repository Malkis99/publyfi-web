'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { Camera } from 'lucide-react';

const sampleImages = [
    ASSETS.customizations.custom1,
    ASSETS.customizations.custom2,
    ASSETS.customizations.custom3,
    ASSETS.customizations.custom1,
    ASSETS.customizations.custom2,
    ASSETS.customizations.custom3,
    ASSETS.customizations.custom1,
    ASSETS.customizations.custom2,
    ASSETS.customizations.custom3,
    ASSETS.customizations.custom1,
];

const GalleryImage = ({ src }: { src: string }) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        className="relative aspect-square bg-black/20 rounded-lg border border-white/5 overflow-hidden group cursor-pointer"
    >
        <Image src={src} alt="Gallery image" fill style={{ objectFit: 'cover' }} />
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
                 <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600/80 border border-purple-500/30 rounded-lg text-sm text-white hover:bg-purple-700 transition-all">
                    <Camera className="w-5 h-5" />
                    <span>Add Image</span>
                </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {sampleImages.map((image, index) => (
                    <GalleryImage key={index} src={image} />
                ))}
            </div>
        </motion.div>
    );
};