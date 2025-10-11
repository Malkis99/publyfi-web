'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { useProfileState } from '@/lib/profileStateContext';
import { Heart, Settings, Shield, Flame } from 'lucide-react';
import {
  CharacterBackground,
  BackgroundVariant,
} from './character-zone/CharacterBackground';
import { CharacterPedestal } from './character-zone/CharacterPedestal';
import { CharacterModel, CharacterPose } from './character-zone/CharacterModel';
import { CharacterControls } from './character-zone/CharacterControls';
import { AmbientReflection } from './character-zone/AmbientReflection';
import { EnergyHaze } from './character-zone/EnergyHaze';
import { PanelFrame } from './character-zone/PanelFrame';

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
  const [background, setBackground] = useState<BackgroundVariant>('dark');
  const [pose, setPose] = useState<CharacterPose>('idle');
  const [reset, setReset] = useState(false);

  // --- Parallax Tilt Effect ---
  const tiltRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position into a subtle rotation
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-200, 200], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the center of the element
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    // Animate back to the neutral position and unlock scroll
    animate(x, 0, { duration: 0.3, ease: 'easeOut' });
    animate(y, 0, { duration: 0.3, ease: 'easeOut' });
    document.body.style.overflow = '';
  };

  const handleMouseEnter = () => {
    // Lock page scroll when mouse is over the character zone
    document.body.style.overflow = 'hidden';
  };

  // Ensure scroll is re-enabled if component unmounts while hovered
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // When a non-looping pose completes, reset to idle
  const handlePoseComplete = () => {
    if (pose === 'wave' || pose === 'power') {
      setPose('idle');
    }
  };

  // Trigger a reset and then clear the trigger
  const handleReset = () => {
    setReset(true);
    setPose('idle');
    setTimeout(() => setReset(false), 100);
  };

  // Cycle through available backgrounds
  const backgroundVariants: BackgroundVariant[] = ['dark', 'nebula', 'energy'];
  const handleBackgroundChange = () => {
    const currentIndex = backgroundVariants.indexOf(background);
    const nextIndex = (currentIndex + 1) % backgroundVariants.length;
    setBackground(backgroundVariants[nextIndex]);
  };

  return (
    <>
      <div className="bg-transparent rounded-xl h-full flex flex-col items-center" style={{ perspective: '1000px' }}>
        {/* === START CHARACTER ZONE === */}
        {/* This container will hold the character, background, pedestal, and controls. */}
        <motion.div
          ref={tiltRef}
          className="character-zone relative w-full flex-grow min-h-[600px] rounded-t-lg bg-black/20 overflow-hidden animate-container-pulse"
          style={{
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <CharacterBackground activeVariant={background} />
          <EnergyHaze />
          <AmbientReflection />

          {/* Pedestal emerges upward with a bloom */}
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <CharacterPedestal />
          </motion.div>

          {/* Character materializes with a slight scale-up */}
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <CharacterModel
              pose={pose}
              onPoseComplete={handlePoseComplete}
              reset={reset}
            />
          </motion.div>

          <CharacterControls
            onBackgroundChange={handleBackgroundChange}
            onPoseChange={setPose}
            onReset={handleReset}
          />
          <PanelFrame />
        </motion.div>
        {/* === END CHARACTER ZONE === */}

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