'use client';

import { motion, Variants, Transition } from 'framer-motion';
import Image from 'next/image';
import { StarfieldBackground } from '@/components/StarfieldBackground';

interface VipCardProps {
  name: string;
  image: string;
  caseImage?: string | string[];
  aura: string;
  tagline: string;
  lore: string;
  onCaseClick: () => void;
}

const ConsumingParticles = () => {
    const particles = Array.from({ length: 30 });
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {particles.map((_, i) => {
                const angle = Math.random() * 360;
                const radius = 50 + Math.random() * 50;
                const startX = `${50 + radius * Math.cos(angle * Math.PI / 180)}%`;
                const startY = `${50 + radius * Math.sin(angle * Math.PI / 180)}%`;
                const duration = 2 + Math.random() * 3;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-purple-300/50"
                        style={{
                            width: '2px',
                            height: '2px',
                            left: startX,
                            top: startY,
                        }}
                        animate={{
                            x: '-50%',
                            y: '-50%',
                            scale: [1, 0],
                            opacity: [0.7, 0]
                        }}
                        transition={{
                            duration,
                            delay: Math.random() * 5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear'
                        }}
                    />
                );
            })}
        </div>
    );
};

export const VipCard = ({ name, image, caseImage, aura, tagline, lore, onCaseClick }: VipCardProps) => {
  const imageSrc = Array.isArray(caseImage) ? caseImage[0] : caseImage;
  const transition: Transition = {
    duration: 0.8,
    ease: "easeOut",
    delay: 0.5,
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full bg-black/50 backdrop-blur-xl rounded-2xl border border-yellow-300/20 overflow-hidden"
      style={{ boxShadow: '0 0 100px -20px #000, 0 0 60px -30px #FFD700' }}
    >
      <StarfieldBackground
        particleCount={100}
        particleColor="#a38ad1"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 p-8 grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
        {/* Left side: Content */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Main Image with Hover Effect */}
          <motion.div
            className="relative w-96 h-96 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image src={image} alt={`${name} Status Image`} layout="fill" objectFit="contain" className="drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]" />
          </motion.div>

          <div className="mt-4">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-1">{name}</h3>
            <p className="text-sm text-yellow-200/70 mb-4">&ldquo;{tagline}&rdquo;</p>
            <blockquote className="text-sm italic text-gray-400 border-l-2 border-yellow-400/30 pl-4 space-y-4 text-left">
              {lore.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </blockquote>
          </div>
        </div>

        {/* Right side: Case Image */}
        <div className="lg:col-span-2 relative w-full h-full min-h-[400px] flex items-center justify-center">
          {imageSrc && (
            <motion.div
              className="relative w-full h-full cursor-pointer"
              onClick={onCaseClick}
              whileHover={{ scale: 1.05 }}
            >
              <ConsumingParticles />
              <motion.div
                className="w-full h-full"
                animate={{ y: [-4, 4] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
              >
                <Image src={imageSrc} alt={`${name} Case`} layout="fill" objectFit="contain" className="drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};