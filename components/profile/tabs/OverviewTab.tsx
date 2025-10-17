'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { Star, Users, ShieldCheck } from 'lucide-react';
import { Modal } from '../modals/Modal';
import { StatusPassportModal } from '../modals/StatusPassportModal';

// --- Revised Status Passport Card ---
const StatusPassportCard = ({ onClick }: { onClick: () => void }) => (
    <div
        onClick={onClick}
        className="relative w-full h-40 rounded-xl border border-purple-500/30 bg-black/30 overflow-hidden cursor-pointer group"
    >
        {/* The levitation animation is now applied only to the image, centered */}
        <motion.div
            className="absolute inset-0" // Removed padding
            animate={{ y: ["-2px", "2px", "-2px"] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
            <Image
                src={ASSETS.passport}
                alt="Status Passport"
                fill
                style={{ objectFit: 'cover' }} // Reverted to cover
                className="transition-opacity duration-300"
            />
        </motion.div>
        {/* Pulsating glow remains */}
        <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at center, rgba(191, 138, 255, 0.3) 0%, rgba(191, 138, 255, 0) 70%)' }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
    </div>
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
            {/* NEW: Left-to-right wave glow animation */}
            <motion.div
                className="absolute -top-1/2 left-0 h-[200%] w-32"
                style={{
                    background: 'radial-gradient(circle at center, #00CED1 0%, rgba(0, 206, 209, 0) 60%)',
                    filter: 'blur(5px)',
                }}
                initial={{ x: '-130%' }}
                animate={{ x: '700%' }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                }}
            />
        </div>
    </div>
);

// --- Revised Info Card ---
const InfoCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="relative w-full h-40 bg-gradient-to-br from-black/40 to-black/20 p-4 rounded-xl border border-white/10 flex flex-col text-center"
    >
        <div className="flex-grow flex flex-col justify-center items-center">
            <Icon className="w-8 h-8 text-purple-300 mb-2" />
            <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
);

// --- Vertical Highlight Card ---
const HighlightCard = ({ image, name, description }: { image: string; name: string; description: string }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="bg-black/20 rounded-lg border border-white/5 flex items-center p-4 gap-4 cursor-pointer"
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
            <div className="w-full flex flex-col gap-6">
                {/* Resized and balanced blocks */}
                <div className="grid grid-cols-3 gap-6 w-full">
                    <StatusPassportCard onClick={() => setPassportModalOpen(true)} />
                    <InfoCard value="1.2M" label="Followers" icon={Users} />
                    <InfoCard value="3,890" label="Pro Subscribers" icon={ShieldCheck} />
                </div>

                <ReputationBar />

                {/* About Section */}
                <div className="px-4">
                    <h3 className="text-xl font-bold text-white mb-2">About @Malkis</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        I&apos;m a passionate streamer who loves sharing gameplay, connecting with my community, and creating fun, interactive content every day.
                    </p>
                </div>

                {/* --- Highlights Section --- */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center px-4">
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
        </motion.div>

        {/* The Modal now uses a larger size to accommodate the passport image */}
        <Modal isOpen={isPassportModalOpen} onClose={() => setPassportModalOpen(false)} size="2xl">
            <StatusPassportModal onClose={() => setPassportModalOpen(false)} />
        </Modal>
    </>
  );
};