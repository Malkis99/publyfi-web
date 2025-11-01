'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const sizeClasses = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
};

export const EventsModal = ({ isOpen, onClose, children, size = 'lg' }: EventsModalProps) => {


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="fixed inset-0 z-[51] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`relative bg-[#1A142C]/80 backdrop-blur-2xl border border-purple-900/40 rounded-2xl shadow-2xl shadow-black/50 w-full ${sizeClasses[size]} flex flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative z-10 overflow-y-auto max-h-[90vh] p-6 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};