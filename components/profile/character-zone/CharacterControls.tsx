'use client';

import { motion } from 'framer-motion';
import { Palette, Hand, Dumbbell, Music2, RefreshCcw } from 'lucide-react';

interface CharacterControlsProps {
  onBackgroundChange: () => void;
  onPoseChange: (pose: 'wave' | 'power' | 'dance') => void;
  onReset: () => void;
}

const ControlButton = ({
  icon: Icon,
  label,
  onClick,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  delay: number;
}) => (
  <motion.button
    onClick={onClick}
    className="relative group flex flex-col items-center text-gray-400 transition-colors hover:text-white"
    aria-label={label}
    whileTap={{ scale: 0.95 }}
  >
    <div
      className="relative p-3 rounded-full animate-button-idle-pulse"
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="w-6 h-6 z-10 transition-transform group-hover:scale-110" />
      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(255,255,255,0)_0%,_rgba(0,255,255,0.5)_50%,_rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-light-trail-shimmer" />
       <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="rgba(0, 255, 255, 0.2)"
          strokeWidth="1"
        />
      </svg>
    </div>
  </motion.button>
);

export const CharacterControls = ({
  onBackgroundChange,
  onPoseChange,
  onReset,
}: CharacterControlsProps) => {
  const buttons = [
    { icon: Palette, label: "Change Background", onClick: onBackgroundChange },
    { icon: Hand, label: "Wave", onClick: () => onPoseChange('wave') },
    { icon: Dumbbell, label: "Power Pose", onClick: () => onPoseChange('power') },
    { icon: Music2, label: "Dance", onClick: () => onPoseChange('dance') },
    { icon: RefreshCcw, label: "Reset", onClick: onReset },
  ];

  const finalBoxShadow = 'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 30px rgba(0,0,0,0.6)';
  const highlightBoxShadow = 'inset 0 1px 1px rgba(255,255,255,0.2), 0 0 40px 10px rgba(0, 255, 255, 0.4)';

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-auto z-30">
      <motion.div
        className="flex items-center justify-center space-x-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 animate-panel-float"
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9,
          boxShadow: finalBoxShadow,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          boxShadow: [finalBoxShadow, highlightBoxShadow, finalBoxShadow],
        }}
        transition={{
          delay: 1.0, // Delay to start after character appears
          duration: 0.8,
          ease: 'easeOut',
          boxShadow: {
            duration: 0.6,
            times: [0, 0.5, 1], // Flash happens in the middle of the entrance
            ease: "easeInOut",
          },
        }}
      >
        {buttons.map((btn) => (
          <ControlButton
            key={btn.label}
            icon={btn.icon}
            label={btn.label}
            onClick={btn.onClick}
            delay={Math.random() * 2}
          />
        ))}
      </motion.div>
    </div>
  );
};