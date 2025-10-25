'use client';

import React from 'react';

export const PedestalLighting = () => {
  return (
    <>
      {/* Contact Shadow */}
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(75deg) translateY(5px)', // Positioned slightly below the top surface
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 50%)',
          filter: 'blur(5px)',
        }}
      />
      {/* Upward Light Diffusion */}
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(75deg)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(180, 220, 255, 0.1) 0%, transparent 60%)',
          filter: 'blur(15px)',
          opacity: 0.8,
        }}
      />
    </>
  );
};