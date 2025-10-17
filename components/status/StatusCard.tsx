'use client';
import { useState } from 'react';
import { motion, Variants, Transition, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const PricingToggle = ({ aura }: { aura: string }) => {
  const [isYearly, setIsYearly] = useState(false);
  const proMonthlyPrice = "$15/month";
  const proYearlyPrice = "$150/year";

  return (
    <div className="flex flex-col items-center gap-2 mt-2">
      {/* Price Display */}
      <div className="relative w-40 h-8">
        <AnimatePresence initial={false}>
          <motion.p
            key={isYearly ? "yearly" : "monthly"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white"
            style={{ textShadow: `0 0 10px ${aura}` }}
          >
            {isYearly ? proYearlyPrice : proMonthlyPrice}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center space-x-3 text-sm text-gray-300">
        <span>Monthly</span>
        <div
          className="relative w-10 h-5 bg-black/30 rounded-full cursor-pointer flex items-center px-1"
          onClick={() => setIsYearly(!isYearly)}
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full"
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            style={{
              boxShadow: `0 0 8px ${aura}`,
              backgroundColor: aura,
            }}
            animate={{ x: isYearly ? 20 : 0 }}
          />
        </div>
        <span>Yearly</span>
      </div>

      {/* Spacer to prevent layout shift */}
      <div className="h-5">
        {isYearly && <p className="text-sm text-teal-400 font-bold">2 months free!</p>}
      </div>
    </div>
  );
};

interface StatusCardProps {
  name: string;
  image: string;
  caseImage?: string | string[];
  aura: string;
  tagline: string;
  description?: string[];
  lore: string;
  buttonText?: string;
  buttonEnabled?: boolean;
  index: number;
}

export const StatusCard = ({
  name,
  image,
  caseImage,
  aura,
  tagline,
  description,
  lore,
  buttonText,
  buttonEnabled,
  index,
}: StatusCardProps) => {
  const transition: Transition = {
    duration: 0.5,
    ease: "easeOut",
    delay: index * 0.1,
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col h-full bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group"
      style={{ boxShadow: `0 0 40px -10px ${aura}` }}
    >
      <div className="p-6 flex-grow flex flex-col">
        {/* Top Content */}
        <div>
          {/* Image */}
          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
            <Image src={image} alt={`${name} Status Image`} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Aura & Title */}
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold" style={{ color: aura }}>{name}</h3>

            {/* Pricing Display */}
            <div className="h-24 flex flex-col justify-center items-center">
              {name === 'Prime' && (
                <p className="text-lg font-semibold text-white" style={{ textShadow: `0 0 8px ${aura}` }}>
                  $15/one-time Unlock
                </p>
              )}
              {name === 'Pro' && (
                <PricingToggle aura={aura} />
              )}
            </div>

            <p className="text-sm text-gray-400">&ldquo;{tagline}&rdquo;</p>
          </div>

          {/* Description */}
          {description && (
            <ul className="text-sm text-gray-300 space-y-2 mb-6 list-disc list-inside">
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Lore */}
        <div className="mt-auto">
          <blockquote className="text-xs italic text-gray-500 border-l-2 border-gray-600 pl-3 my-4">
            {lore}
          </blockquote>
        </div>
      </div>

      {/* Button */}
      {buttonText && (
        <div className="p-6 mt-auto">
          <motion.button
            disabled={!buttonEnabled}
            whileHover={buttonEnabled ? { scale: 1.05, boxShadow: `0 0 20px ${aura}` } : {}}
            whileTap={buttonEnabled ? { scale: 0.95 } : {}}
            className={`w-full py-2.5 rounded-lg font-semibold text-white transition-all duration-300 ${
              buttonEnabled
                ? 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700'
                : 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
            }`}
            style={buttonEnabled ? {
              boxShadow: `0 0 15px -5px ${aura}`
            } : {}}
          >
            {buttonText}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};