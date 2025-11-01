'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { Flame, Gem, Wallet, Gift, Zap } from 'lucide-react';

// Import Modals
import { Modal } from './modals/Modal';
import { WeeklyRewardModal } from './modals/WeeklyRewardModal';
import { UpgradeModal } from './modals/UpgradeModal';
import { WalletPanel } from './modals/WalletPanel';

const ActionButton = ({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center space-x-2 px-3 py-1.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-semibold text-white hover:bg-white/20 transition-colors duration-300"
  >
    <Icon className="w-4 h-4 text-purple-300" />
    <span>{label}</span>
  </motion.button>
);

export const ProfileHeader = () => {
  const [isRewardModalOpen, setRewardModalOpen] = useState(false);
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isWalletPanelOpen, setWalletPanelOpen] = useState(false);
  const [isAvatarEnlarged, setAvatarEnlarged] = useState(false);

  return (
    <>
      {/* This component no longer has its own outer card shell. It's part of a unified block. */}
      <div>
        {/* Banner */}
        <div className="relative h-36 bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 w-full">
            {/* Top-right Action Buttons */}
            <div className="absolute top-3 right-3 flex items-center space-x-2">
                <ActionButton icon={Gift} label="Weekly Reward" onClick={() => setRewardModalOpen(true)} />
                <ActionButton icon={Zap} label="Upgrade Status" onClick={() => setUpgradeModalOpen(true)} />
                <div className="relative">
                    <ActionButton icon={Wallet} label="Wallet" onClick={() => setWalletPanelOpen(!isWalletPanelOpen)} />
                    <WalletPanel isOpen={isWalletPanelOpen} onClose={() => setWalletPanelOpen(false)} />
                </div>
            </div>
        </div>

        {/* Profile Info Section */}
        <div className="px-6 py-4 flex items-center">
            {/* Avatar overlapping the banner */}
            <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                onClick={() => setAvatarEnlarged(true)}
                className="relative -mt-20 flex-shrink-0 mr-5 cursor-pointer"
            >
                <div className="relative w-32 h-32 rounded-lg border-4 border-purple-600 shadow-lg bg-gray-900">
                    <Image
                        src={ASSETS.avatar}
                        alt="User Avatar"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </motion.div>

            {/* User Details to the right of the avatar */}
            <div className="flex-grow">
                <h1 className="text-2xl font-bold text-white tracking-wide" style={{ textShadow: '0 0 10px rgba(192, 132, 252, 0.5)' }}>
                    @Malkis
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-400">
                    <span className="flex items-center"><Flame className="w-4 h-4 mr-1.5 text-orange-400" />Lv. 42</span>
                    <span className="flex items-center"><Gem className="w-4 h-4 mr-1.5 text-teal-400" />Status: Prime</span>
                </div>
            </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={isRewardModalOpen} onClose={() => setRewardModalOpen(false)}>
        <WeeklyRewardModal onClose={() => setRewardModalOpen(false)} />
      </Modal>
      <Modal isOpen={isUpgradeModalOpen} onClose={() => setUpgradeModalOpen(false)} size="2xl">
        <UpgradeModal />
      </Modal>

      {/* Enlarged Avatar Modal */}
      <AnimatePresence>
        {isAvatarEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80" // Backdrop only
            onClick={() => setAvatarEnlarged(false)}
          >
            {/* This new wrapper handles the content-area alignment and centering */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 lg:pl-80">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  className="relative w-[512px] h-[512px] rounded-lg border-4 border-purple-600 shadow-2xl shadow-purple-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={ASSETS.avatar}
                    alt="User Avatar Enlarged"
                    fill
                    className="rounded-lg object-cover"
                  />
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};