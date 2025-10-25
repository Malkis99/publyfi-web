"use client";

import { useRef } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

type AnimationType = 'fade-up' | 'slide-in-left';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  animationType?: AnimationType;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  animationType = 'fade-up',
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    triggerOnce,
  });

  const transitionClasses = `transition-all duration-[600ms] ease-out`;

  const animationStates = {
    'fade-up': {
      initial: 'opacity-0 transform translate-y-4',
      visible: 'opacity-100 transform translate-y-0',
    },
    'slide-in-left': {
      initial: 'opacity-0 transform -translate-x-5',
      visible: 'opacity-100 transform translate-x-0',
    },
  };

  const { initial, visible } = animationStates[animationType];

  return (
    <div
      ref={ref}
      className={`${className} ${transitionClasses} ${isVisible ? visible : initial}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;