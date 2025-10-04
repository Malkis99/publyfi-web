'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { Star, Users, UserPlus, ShieldCheck } from 'lucide-react';
import { Modal } from '../modals/Modal';
import { StatusPassportModal } from '../modals/StatusPassportModal';

// --- New Status Passport Card ---
const StatusPassportCard = ({ onClick }: { onClick: () => void }) => (
    <motion.div
        onClick={onClick}
        className="relative w-full aspect-square rounded-xl border border-purple-500/30 bg-black/30 overflow-hidden cursor-pointer group"
        // Add levitation animation
        animate={{
            y: ["-2px", "2px", "-2px"],
        }}
        transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
        }}
    >
        <Image
            src={ASSETS.passport}
            alt="Status Passport"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
        />
        {/* New full-card pulsating glow animation */}
        <motion.div
            className="absolute inset-0"
            style={{
                background: 'radial-gradient(circle at center, rgba(191, 138, 255, 0.3) 0%, rgba(191, 138, 255, 0) 70%)',
            }}
            animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Centered content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Status</h3>
        </div>
    </motion.div>
);


// --- Enhanced Reputation Bar Component ---
const ReputationBar = () => (
    <div className="w-full bg-black/20 p-4 rounded-lg border border-white/5">
        <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-white">Reputation</h4>
            <span className="font-bold text-cyan-300">Honored</span>
        </div>
        <div className="relative w-full bg-black/30 rounded-full h-3 overflow-hidden border border-white/10">
            <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, ease: 'circOut', delay: 0.2 }}
            />
            <motion.div
                className="absolute top-0 left-0 h-full w-20 rounded-full bg-white/40"
                style={{ filter: 'blur(5px)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '500%' }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 1 }}
            />
        </div>
    </div>
);

// --- Visually Enhanced Info Card (now a square) ---
const InfoCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="relative w-full aspect-square bg-gradient-to-br from-black/40 to-black/20 p-4 rounded-xl border border-white/10 flex flex-col justify-center items-center text-center"
    >
        <Icon className="w-8 h-8 text-purple-300 mb-2" />
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
);

// --- Vertical Highlight Card ---
const HighlightCard = ({ image, name, description }: { image: string; name: string; description: string }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="bg-black/20 rounded-lg border border-white/5 flex items-center p-3 gap-4 cursor-pointer"
    >
        <div className="relative w-20 h-20 flex-shrink-0">
            <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
        <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
    </motion.div>
);

// --- Main Overview Tab Component ---
export const OverviewTab = () => {
  const [isPassportModalOpen, setPassportModalOpen] = useState(false);
  const highlights = [
    { name: 'Mythic Sword Acquired!', image: ASSETS.weapons.mythic, description: "Just pulled the Cosmic Annihilator from a Prime Case!" },
    { name: 'Legendary Gauntlets', image: ASSETS.equipment.legendary, description: "Finally completed the Galactic Guard set." },
    { name: 'New Channel Banner', image: ASSETS.customizations.custom2, description: "Check out the new Galaxy Banner customization." },
  ];

  return (
    <>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 h-full"
        >
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* --- Vertical Column for Status, Followers, and Subscribers --- */}
                <div className="md:col-span-1 flex flex-col gap-4">
                    <StatusPassportCard onClick={() => setPassportModalOpen(true)} />
                    <InfoCard value="1.2M" label="Followers" icon={Users} />
                    <InfoCard value="3,890" label="Pro Subscribers" icon={ShieldCheck} />
                </div>

                {/* --- Right side content --- */}
                <div className="md:col-span-2 flex flex-col gap-6">
                    <ReputationBar />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">About @Malkis</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I&apos;m a passionate streamer who loves sharing gameplay, connecting with my community, and creating fun, interactive content every day.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Star className="w-5 h-5 mr-2 text-yellow-400" />
                            Highlights
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {highlights.map((item, index) => (
                                <HighlightCard key={index} name={item.name} image={item.image} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        <Modal isOpen={isPassportModalOpen} onClose={() => setPassportModalOpen(false)}>
            <StatusPassportModal onClose={() => setPassportModalOpen(false)} />
        </Modal>
    </>
  );
};