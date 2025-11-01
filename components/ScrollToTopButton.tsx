'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (isHomePage) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#231d3b] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } group`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#a38ad1] transition-all duration-300 group-hover:[filter:drop-shadow(0_0_5px_#50348f)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19V5M5 12l7-7 7 7"
          style={{ filter: 'url(#glow)' }}
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;