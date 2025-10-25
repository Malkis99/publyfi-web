"use client";
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles: Particle[] = [];
        const particleCount = 75; // Increased from 50

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            twinkleSpeed: number | null;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 1;
                this.speedX = Math.random() * 0.6 - 0.3; // Slower movement
                this.speedY = Math.random() * 0.6 - 0.3;
                this.opacity = Math.random() * 0.5 + 0.2; // Base opacity
                this.twinkleSpeed = null;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reset particle if it goes off-screen
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.opacity = Math.random() * 0.5 + 0.2;
                }

                // Twinkle effect
                if (this.twinkleSpeed) {
                    this.opacity += this.twinkleSpeed;
                    if (this.opacity >= 1.0 || this.opacity <= 0.2) {
                        this.twinkleSpeed = null; // End twinkle
                    }
                } else if (Math.random() < 0.001) { // 1 in 1000 chance to start twinkling
                    this.twinkleSpeed = 0.05; // Start increasing opacity
                }
            }

            draw() {
                if (ctx) {
                    ctx.fillStyle = `rgba(163, 138, 209, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticleBackground;