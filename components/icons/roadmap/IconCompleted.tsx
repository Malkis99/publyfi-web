'use client';

import { FC } from 'react';

const IconCompleted: FC = () => {
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
        <linearGradient id="gradient-completed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a38ad1" />
          <stop offset="100%" stopColor="#50348f" />
        </linearGradient>
        <filter id="glow-completed" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g style={{ filter: 'url(#glow-completed)' }} className="animate-pulse-soft">
        <circle cx="12" cy="12" r="10" fill="url(#gradient-completed)" opacity="0.3" />
        <circle cx="12" cy="12" r="10" stroke="url(#gradient-completed)" strokeWidth="1.5" />
        <path
          d="M8 12.5l2.5 2.5L16 9"
          stroke="#f3f4f7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconCompleted;