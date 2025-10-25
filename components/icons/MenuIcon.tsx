import React from 'react';

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="group"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0" y1="13" x2="26" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A38AD1" />
          <stop offset="1" stopColor="#50348F" />
        </linearGradient>
      </defs>
      <path
        d="M4 8H22"
        stroke="url(#iconGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
      />
      <path
        d="M4 13H22"
        stroke="url(#iconGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
      />
      <path
        d="M4 18H22"
        stroke="url(#iconGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
      />
    </svg>
  );
};

export default MenuIcon;