'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { useProfileState } from '@/lib/profileStateContext';
import { Heart, Settings, Shield, Flame } from 'lucide-react';

// Import Modals
import { Modal } from './modals/Modal';
import { CustomizeProfileModal } from './modals/CustomizeProfileModal';
import { EquipmentModal } from './modals/EquipmentModal';
import { BurnModal } from './modals/BurnModal';


const ActionButton = ({ icon: Icon, label, onClick, className }: { icon: React.ElementType, label: string, onClick: () => void, className?: string }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center justify-center w-full space-x-2 px-4 py-3 bg-gray-900/70 border border-purple-500/20 rounded-lg text-sm font-semibold text-white hover:bg-purple-500/10 transition-colors ${className}`}
    >
      <Icon className="w-5 h-5 text-purple-300" />
      <span>{label}</span>
    </motion.button>
);

// --- Main Character Panel Component ---
export const CharacterPanel = () => {
  const { likes, hasLiked, toggleLike } = useProfileState();
  const [isCustomizeModalOpen, setCustomizeModalOpen] = useState(false);
  const [isEquipmentModalOpen, setEquipmentModalOpen] = useState(false);
  const [isBurnModalOpen, setBurnModalOpen] = useState(false);

  return (
    <>
      <div className="bg-transparent rounded-xl h-full flex flex-col items-center">
        {/* Character 3D Model - increased height for more impact */}
        <div className="relative w-full flex-grow min-h-[600px]">
          <Image
            src={ASSETS.character}
            alt="Character Avatar"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          />
        </div>

        {/* Action Buttons Below Character */}
        <div className="w-full flex justify-between items-center mt-4 px-2 mb-4">
            <motion.button
              onClick={toggleLike}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Heart className={`w-5 h-5 transition-colors ${hasLiked ? 'text-red-500 fill-current' : 'text-red-500'}`} />
              <span>{likes.toLocaleString()} Likes</span>
            </motion.button>
        </div>

        {/* Panel Action Buttons */}
        <div className="w-full grid grid-cols-1 gap-3 px-2">
            <div className="grid grid-cols-2 gap-3">
                <ActionButton label="Customization" icon={Settings} onClick={() => setCustomizeModalOpen(true)} />
                <ActionButton label="Equipment" icon={Shield} onClick={() => setEquipmentModalOpen(true)} />
            </div>
            <ActionButton label="Burn $PUBL" icon={Flame} onClick={() => setBurnModalOpen(true)} className="!text-orange-300 !border-orange-500/30 hover:!bg-orange-500/20" />
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={isCustomizeModalOpen} onClose={() => setCustomizeModalOpen(false)} size="3xl">
        <CustomizeProfileModal onClose={() => setCustomizeModalOpen(false)} />
      </Modal>
      <Modal isOpen={isEquipmentModalOpen} onClose={() => setEquipmentModalOpen(false)} size="2xl">
        <EquipmentModal onClose={() => setEquipmentModalOpen(false)} />
      </Modal>
      <Modal isOpen={isBurnModalOpen} onClose={() => setBurnModalOpen(false)} size="lg">
        <BurnModal onClose={() => setBurnModalOpen(false)} />
      </Modal>
    </>
  );
};