"use client";

import { useRef, useEffect, type FC } from 'react';

interface StarfieldProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  radiusRange?: [number, number];
  opacityRange?: [number, number];
  speedRange?: [number, number];
  glow?: boolean; // New prop to control glow
  glowColor?: string;
  glowBlur?: number;
}

export const StarfieldBackground: FC<StarfieldProps> = ({
  className = "fixed top-0 left-0 w-full h-full -z-10",
  particleCount,
  particleColor = 'rgba(243, 244, 247, 0.8)',
  radiusRange = [0.5, 1.2],
  opacityRange = [0.5, 1.0],
  speedRange = [-0.1, 0.1],
  glow = true, // Default to true for the pulsating effect
  glowColor = 'rgba(255, 255, 255, 0.5)',
  glowBlur = 5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      baseAlpha: number; // For pulsating effect
      alphaPhase: number; // For pulsating effect
      dx: number;
      dy: number;
    }>;

    const init = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      stars = [];
      const numStars = particleCount ?? Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < numStars; i++) {
        const baseAlpha = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (radiusRange[1] - radiusRange[0]) + radiusRange[0],
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          alphaPhase: Math.random() * Math.PI * 2, // Random start for pulse
          dx: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
          dy: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = particleColor;

        if (glow) {
            ctx.shadowBlur = glowBlur;
            ctx.shadowColor = glowColor;
        }

        ctx.fill();
      });
      // Reset shadow for other potential drawings on canvas
      ctx.shadowBlur = 0;
    };

    let time = 0;
    const update = () => {
      time += 0.01;
      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        // Pulsating alpha
        const pulse = (Math.sin(time + star.alphaPhase) + 1) / 2; // Oscillates between 0 and 1
        star.alpha = star.baseAlpha * (0.5 + pulse * 0.5); // Modulate base alpha

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
  }, [particleCount, particleColor, radiusRange, opacityRange, speedRange, glow, glowColor, glowBlur]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
};
