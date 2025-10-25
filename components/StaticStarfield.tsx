"use client";

import { useRef, useEffect, type FC } from 'react';

interface StarfieldProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  radiusRange?: [number, number];
  opacityRange?: [number, number];
}

const StaticStarfield: FC<StarfieldProps> = ({
  className = "fixed top-0 left-0 w-full h-full -z-10",
  particleCount,
  particleColor = 'rgba(243, 244, 247, 0.2)', // More subtle opacity
  radiusRange = [0.4, 1.0],
  opacityRange = [0.3, 0.8],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const draw = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;

      const numStars = particleCount ?? Math.floor((canvas.width * canvas.height) / 7000);

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * (radiusRange[1] - radiusRange[0]) + radiusRange[0];
        const alpha = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
    };

    const observer = new ResizeObserver(draw);
    observer.observe(parent);

    draw(); // Draw once

    return () => {
      observer.disconnect();
    };
  }, [particleCount, particleColor, radiusRange, opacityRange]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
};

export default StaticStarfield;