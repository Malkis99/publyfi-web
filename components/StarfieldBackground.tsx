"use client";

import { useRef, useEffect, type FC } from 'react';

interface StarfieldProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  radiusRange?: [number, number];
  opacityRange?: [number, number];
  speedRange?: [number, number];
}

const StarfieldBackground: FC<StarfieldProps> = ({
  className = "fixed top-0 left-0 w-full h-full -z-10",
  particleCount,
  particleColor = 'rgba(243, 244, 247, 0.8)',
  radiusRange = [0.5, 1.2],
  opacityRange = [0.5, 1.0],
  speedRange = [-0.1, 0.1],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use the parent's dimensions for sizing the canvas
    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      dx: number;
      dy: number;
    }>;

    const init = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      stars = [];
      const numStars = particleCount ?? Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (radiusRange[1] - radiusRange[0]) + radiusRange[0],
          alpha: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
          dx: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
          dy: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.globalAlpha = star.alpha;
        ctx.fill();
      });
    };

    const update = () => {
      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    };

    const animate = () => {
      draw();
      update();
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(init);
    observer.observe(parent);

    init();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColor, radiusRange, opacityRange, speedRange]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
};

export default StarfieldBackground;