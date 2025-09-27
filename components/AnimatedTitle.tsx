import React from 'react';

const AnimatedTitle = () => {
  const title = "PublyFi";

  return (
    <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-text-main animate-[float_6s_ease-in-out_infinite] -translate-y-[45px]">
      {title.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-[glowPulse_4s_ease-in-out_infinite]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;