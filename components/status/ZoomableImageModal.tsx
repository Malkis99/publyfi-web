'use client';

import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ZoomableImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const imageTransition: Transition = { type: 'spring', stiffness: 300, damping: 30 };
const exitTransition: Transition = { duration: 0.2 };

const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: imageTransition },
    exit: { scale: 0.8, opacity: 0, transition: exitTransition },
};

export const ZoomableImageModal = ({ src, alt, isOpen, onClose }: ZoomableImageModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (modalRef.current) {
        // Position the modal based on the current scroll position
        modalRef.current.style.top = `${window.scrollY}px`;
      }
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Restore background scrolling
      document.body.style.overflow = '';
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="absolute left-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 w-full h-screen"
        >
          <motion.div
            variants={imageVariants}
            className="relative w-full h-full max-w-3xl max-h-[80vh]"
          >
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};