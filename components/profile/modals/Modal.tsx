'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showParticles?: boolean;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const sizeClasses = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
};

// White particle component for the background
const WhiteParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {Array.from({ length: 50 }).map((_, i) => {
          const duration = Math.random() * 5 + 5; // 5 to 10 seconds
          const delay = Math.random() * 7;
          const size = Math.random() * 1.5 + 0.5; // 0.5px to 2px
          return (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/80"
                  style={{
                      width: size,
                      height: size,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                      y: [0, (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 40 + 20)],
                      x: [0, (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 40 + 20)],
                      opacity: [0, 0.7, 0],
                      scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                      duration,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay,
                      ease: "easeInOut"
                  }}
              />
          )
      })}
    </div>
);


export const Modal = ({ isOpen, onClose, children, showParticles = true, size = 'lg' }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // Added bg-black/50 to darken the background
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50" // Removed flex centering and padding
          onClick={onClose}
        >
          {/* This new wrapper handles the content-area alignment and centering */}
          <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 lg:pl-80">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 w-full ${sizeClasses[size]} m-4 flex flex-col`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
            {showParticles && <WhiteParticles />}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Added max-h-[90vh] and overflow-y-auto to allow internal scrolling */}
            <div className="relative z-10 overflow-y-auto max-h-[90vh]">
              {children}
            </div>
          </motion.div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};