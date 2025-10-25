import React from 'react';

const AnimatedTitle = () => {
  const title = "PublyFi";

  return (
    <h1 className="relative text-7xl sm:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-accent animate-[float_6s_ease-in-out_infinite,glowPulse_4s_ease-in-out_infinite] -translate-y-[120px] sm:-translate-y-[150px]">
      <span className="absolute inset-0 animate-title-shimmer bg-clip-text bg-gradient-to-r from-accent via-text-main/60 to-accent">
        {title}
      </span>
      {title}
    </h1>
  );
};

export default AnimatedTitle;
