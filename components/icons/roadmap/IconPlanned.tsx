'use client';

import { FC } from 'react';

const IconPlanned: FC = () => {
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
        <linearGradient id="gradient-planned" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a38ad1" />
          <stop offset="100%" stopColor="#50348f" />
        </linearGradient>
        <filter id="glow-planned" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g style={{ filter: 'url(#glow-planned)' }} className="animate-breathing-glow">
        <path
          d="M12 2 L14 7 L12 12 L10 7 Z"
          fill="url(#gradient-planned)"
        />
        <path
          d="M12 12 L14 17 L12 22 L10 17 Z"
          fill="url(#gradient-planned)"
          opacity="0.4"
        />
      </g>
    </svg>
  );
};

export default IconPlanned;