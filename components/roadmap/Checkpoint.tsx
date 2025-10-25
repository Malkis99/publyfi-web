'use client';

import { FC } from 'react';

const Checkpoint: FC = () => {
  return (
    <div className="relative my-8 flex items-center justify-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-[spin_10s_linear_infinite]"
        >
          <defs>
            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a38ad1" />
              <stop offset="100%" stopColor="#50348f" />
            </linearGradient>
            <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
          </defs>
          <path
            d="M12 1.5L14.09 7.76L20.5 8.76L15.91 12.91L17.18 19.5L12 16.25L6.82 19.5L8.09 12.91L3.5 8.76L9.91 7.76L12 1.5Z"
            fill="url(#star-gradient)"
            className="animate-[pulse-glow_4s_infinite]"
            style={{ filter: 'url(#star-glow)' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Checkpoint;