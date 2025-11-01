'use client';

import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { useProfileState } from '@/lib/profileStateContext';
import { Shield, Sword, Shirt, Puzzle } from 'lucide-react';

const equipmentSlotConfig = [
    { label: 'Head', slot: 'head', icon: Puzzle, side: 'left' },
    { label: 'Chest', slot: 'chest', icon: Shirt, side: 'left' },
    { label: 'Legs', slot: 'legs', icon: Puzzle, side: 'left' },
    { label: 'Shoulders', slot: 'shoulders', icon: Puzzle, side: 'left' },
    { label: 'Feet', slot: 'feet', icon: Puzzle, side: 'left' },
    { label: 'Back', slot: 'back', icon: Puzzle, side: 'right' },
    { label: 'Accessory 1', slot: 'accessory1', icon: Puzzle, side: 'right' },
    { label: 'Accessory 2', slot: 'accessory2', icon: Puzzle, side: 'right' },
    { label: 'Left Hand', slot: 'leftHand', icon: Sword, side: 'right' },
    { label: 'Right Hand', slot: 'rightHand', icon: Shield, side: 'right' },
];

const mockItemImages: { [key: string]: string } = {
    'epic-helmet': ASSETS.equipment.epic,
    'common-greaves': ASSETS.equipment.common,
    'legendary-gauntlets': ASSETS.equipment.legendary,
    'mythic-sword': ASSETS.weapons.mythic,
};

// Enlarged slot for better visibility
const EquipmentSlot = ({ label, icon: Icon, equippedItemId }: { label: string; icon: React.ElementType; equippedItemId: string | null }) => {
    const imageUrl = equippedItemId ? mockItemImages[equippedItemId] : null;

    return (
        <div className="w-20 h-20 bg-black/20 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center p-2 transition-all duration-300 hover:bg-white/10">
            {imageUrl ? (
                <div className="relative w-10 h-10">
                    <Image src={imageUrl} alt={label} fill style={{ objectFit: 'contain' }} />
                </div>
            ) : (
                <Icon className="w-6 h-6 text-gray-500" />
            )}
            <span className="text-xs mt-2 text-gray-400 truncate">{label}</span>
        </div>
    );
};

export const EquipmentModal = ({ onClose }: { onClose: () => void }) => {
    const { equippedItems } = useProfileState();

    const leftSlots = equipmentSlotConfig.filter(s => s.side === 'left').slice(0, 5);
    const rightSlots = equipmentSlotConfig.filter(s => s.side === 'right').slice(0, 5);

    return (
        <div className="p-8 relative">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Equipped Gear</h2>

            <div className="flex justify-center items-start gap-6">
                {/* Left Column */}
                <div className="grid grid-cols-1 gap-3">
                    {leftSlots.map((item, index) => (
                        <EquipmentSlot
                            key={index}
                            label={item.label}
                            icon={item.icon}
                            equippedItemId={equippedItems[item.slot]}
                        />
                    ))}
                </div>

                {/* Center: Character Model - Enlarged */}
                <div className="relative w-64 h-[440px] flex-shrink-0 mx-4">
                     <Image
                        src={ASSETS.character}
                        alt="Character Preview"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                </div>

                {/* Right Column */}
                <div className="grid grid-cols-1 gap-3">
                    {rightSlots.map((item, index) => (
                        <EquipmentSlot
                            key={index}
                            label={item.label}
                            icon={item.icon}
                            equippedItemId={equippedItems[item.slot]}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={onClose}
                className="w-full mt-8 py-2.5 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300"
            >
                Close
            </button>
        </div>
    );
};