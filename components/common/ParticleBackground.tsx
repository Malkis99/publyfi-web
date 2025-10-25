"use client";

import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 75; // Increased particle count
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Smaller, more subtle particles
          speedX: Math.random() * 0.3 - 0.15, // Slower, more ambient movement
          speedY: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.5 + 0.2, // Varied opacity
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width + p.size) p.x = -p.size;
        else if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;
        else if (p.y < -p.size) p.y = canvas.height + p.size;

        ctx.fillStyle = `rgba(70, 130, 180, ${p.opacity})`; // SteelBlue with varied opacity
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;