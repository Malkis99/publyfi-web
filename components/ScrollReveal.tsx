"use client";

import { useRef } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    triggerOnce,
  });

  const transitionClasses = `transition-all duration-600 ease-out`;

  const initialState = `opacity-0 transform translate-y-5`;
  const visibleState = `opacity-100 transform translate-y-0`;

  return (
    <div
      ref={ref}
      className={`${className} ${transitionClasses} ${isVisible ? visibleState : initialState}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;