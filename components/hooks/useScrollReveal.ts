import { useState, useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement>(options?: ScrollRevealOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: options?.threshold || 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const node = ref.current;
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options, ref]);

  return { ref, isVisible };
};