'use client';

import { FC } from 'react';

const IconInProgress: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="group-hover:scale-105 transition-transform duration-300"
    >
      <defs>
        <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a38ad1" />
          <stop offset="100%" stopColor="#50348f" />
        </linearGradient>
        <filter id="glow-progress" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g style={{ filter: 'url(#glow-progress)' }}>
        <circle cx="12" cy="12" r="6" fill="url(#gradient-progress)" opacity="0.4" />
        <path
          d="M12 2 a 10 10 0 0 1 10 10"
          stroke="url(#gradient-progress)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-spin-slow origin-center"
        />
      </g>
    </svg>
  );
};

export default IconInProgress;