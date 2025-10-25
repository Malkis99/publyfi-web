"use client";

import Image from 'next/image';
import styles from './RotatingCoin.module.css';
import { useRef, useState } from 'react';

const RotatingCoin = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    const tiltX = -y * 2; // Invert Y for natural feel
    const tiltY = x * 2;

    setTransform(`rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      className={styles.perspectiveContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className={styles.coinContainer} style={{ transform }}>
        <div className={styles.coin}>
          <Image
            src="/images/PublyFi_Platform_Token.png"
            alt="PublyFi Token"
            width={250}
            height={250}
            className={styles.coinImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingCoin;