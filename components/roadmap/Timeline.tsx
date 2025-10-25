import { FC } from 'react';

const Timeline: FC = () => {
  return (
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 overflow-hidden">
      {/* Energy wave animation */}
      <div
        className="absolute w-full h-56 bg-gradient-to-b from-transparent via-accent/80 to-transparent animate-flow-down"
        style={{
          boxShadow: '0 0 12px #a38ad1, 0 0 20px #a38ad1, 0 0 30px #50348f',
        }}
      />
    </div>
  );
};

export default Timeline;