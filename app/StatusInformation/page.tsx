'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/status/Header';
import { StatusCard } from '@/components/status/StatusCard';
import { VipCard } from '@/components/status/VipCard';
import { ComparisonTable } from '@/components/status/ComparisonTable';
import { Faq } from '@/components/status/Faq';
import { ZoomableImageModal } from '@/components/status/ZoomableImageModal';
import { STATUS_DATA } from '@/content/statusData';
import StaticStarfield from '@/components/StaticStarfield';

const caseImages = {
  prime: STATUS_DATA[1].caseImage,
  pro: STATUS_DATA[2].caseImage,
  vip: STATUS_DATA[3].caseImage,
};

interface LevitatingCaseProps {
  src: string;
  alt: string;
  onOpen: () => void;
  className?: string;
}

const LevitatingCase = ({ src, alt, onOpen, className }: LevitatingCaseProps) => (
  <motion.div
    className={`relative w-72 h-72 cursor-pointer ${className}`}
    whileHover={{ scale: 1.1, y: -10 }}
    transition={{ type: 'spring', stiffness: 300 }}
    animate={{ y: [-5, 5], transition: { duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }}
    style={{
        filter: 'drop-shadow(0 0 15px rgba(163, 138, 209, 0.4))'
    }}
  >
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      onClick={onOpen}
    />
  </motion.div>
);


const StatusInformationPage = () => {
  const [zoomedImage, setZoomedImage] = useState<{ src: string, alt: string } | null>(null);

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0f0b1c, #140f22, #231d3b)' }}
    >
      <StaticStarfield />
      <ZoomableImageModal
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        src={zoomedImage?.src || ''}
        alt={zoomedImage?.alt || ''}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Header />

        <main>
          {/* Top Row: Free, Prime, Pro */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {STATUS_DATA.slice(0, 3).map((status, index) => (
              <motion.div
                key={status.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col"
              >
                <StatusCard {...status} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Levitating Cases */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 h-80 items-center">
              <div /> {/* Spacer for Free column */}
              {caseImages.prime && typeof caseImages.prime === 'string' && (
                <div className="flex justify-center">
                  <LevitatingCase src={caseImages.prime} alt="Prime Weekly Case" onOpen={() => setZoomedImage({src: caseImages.prime as string, alt: "Prime Weekly Case"})} />
                </div>
              )}
              {Array.isArray(caseImages.pro) && (
                <div className="flex justify-center items-center gap-4">
                  <LevitatingCase src={caseImages.pro[0]} alt="Pro Weekly Case" onOpen={() => setZoomedImage({src: caseImages.pro![0], alt: "Pro Weekly Case"})} />
                  <LevitatingCase src={caseImages.pro[1]} alt="Pro Monthly Case" onOpen={() => setZoomedImage({src: caseImages.pro![1], alt: "Pro Monthly Case"})} />
                </div>
              )}
          </div>


          {/* Vertically Aligned Section: VIP, Comparison, FAQ */}
          <div className="flex flex-col items-center gap-16 my-16">
            <VipCard
              {...STATUS_DATA[3]}
              onCaseClick={() => setZoomedImage({ src: caseImages.vip as string, alt: "VIP Case" })}
            />
            <ComparisonTable />
            <Faq />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StatusInformationPage;