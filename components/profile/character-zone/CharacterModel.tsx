'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants, useMotionValue, animate } from 'framer-motion';
import { ASSETS } from '@/lib/assets';

// Define the types for the character's pose
export type CharacterPose = 'idle' | 'wave' | 'power' | 'dance';

interface CharacterModelProps {
  pose: CharacterPose;
  onPoseComplete: () => void;
  reset: boolean;
}

// Define animation variants for each pose (scale is handled separately)
// Adjusted 'y' values to align character with pedestal
const poseVariants: Variants = {
  idle: {
    y: -40, // Default vertical position
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  wave: {
    rotate: [0, 15, -10, 10, -5, 5, 0],
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
  power: {
    y: [-40, -50, -40], // Relative to new idle 'y'
    transition: { duration: 1.0, ease: 'easeInOut' },
  },
  dance: {
    y: [-40, -55, -40], // Relative to new idle 'y'
    rotate: [0, 5, -5, 0],
    transition: {
      y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
      rotate: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    },
  },
};

export const CharacterModel = ({ pose, onPoseComplete, reset }: CharacterModelProps) => {
  const controls = useAnimation();
  const constraintsRef = useRef(null);
  const scale = useMotionValue(0.85); // Set default scale to 85%

  // Use useEffect to handle side-effects from prop changes
  useEffect(() => {
    // Handle poses
    if (pose !== 'idle') {
      controls.start(pose).then(onPoseComplete);
      if (pose === 'power') {
        // Power pose scale animation now relative to the default 0.85 scale
        animate(scale, [0.85, 0.95, 0.85], { duration: 1.0, ease: 'easeInOut' });
      }
    } else {
      controls.start('idle');
    }
  }, [pose, controls, onPoseComplete, scale]);

  // Handle reset
  useEffect(() => {
    if (reset) {
      controls.start({
        x: 0,
        y: -40, // Reset to new idle 'y'
        rotate: 0,
        transition: { duration: 0.5 },
      });
      scale.set(0.85); // Reset to the new default scale
    }
  }, [reset, controls, scale]);

  const handleWheelZoom = (e: React.WheelEvent) => {
    e.preventDefault(); // Prevent page scroll

    const newScale = e.deltaY > 0 ? 0.95 : 1.05;
    const currentScale = scale.get();
    // Clamp zoom between 0.4x and 2.0x
    const finalScale = Math.max(0.4, Math.min(2.0, currentScale * newScale));
    scale.set(finalScale);
  };

  return (
    // This outer div defines the draggable area
    <div ref={constraintsRef} className="absolute inset-0 z-20">
      <motion.div
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        style={{ scale }}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        animate={controls}
        initial="idle"
        variants={poseVariants}
        onWheel={handleWheelZoom}
      >
        <Image
          src={ASSETS.character}
          alt="Character Avatar"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          draggable="false" // Prevent default image drag behavior
        />
      </motion.div>
    </div>
  );
};