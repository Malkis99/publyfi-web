'use client';

import React from 'react';

export const PanelFrame = () => {
  return (
    <>
      {/* Continuous Glowing Contour */}
      <div
        className="absolute inset-0 rounded-t-lg pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 10px 2px rgba(70, 130, 180, 0.3), 0 0 5px rgba(70, 130, 180, 0.2)', // SteelBlue glow
        }}
      />
      {/* Left Waterfall Light Line */}
      <div
        className="absolute top-0 left-0 h-full w-px pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #5FC3FF 50%, transparent 100%)',
          animation: 'waterfall-flow 7s linear infinite',
          opacity: 0.6,
        }}
      />
      {/* Right Waterfall Light Line */}
      <div
        className="absolute top-0 right-0 h-full w-px pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #5FC3FF 50%, transparent 100%)',
          animation: 'waterfall-flow 7s linear infinite reverse', // Reverse for variety
          opacity: 0.6,
        }}
      />
    </>
  );
};