'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

interface PageTransitionWrapperProps {
  children: ReactNode;
}

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if the actual page content has changed
    if (displayChildren !== children) {
      setIsAnimatingOut(true);
    }
  }, [children, displayChildren]);

  const handleAnimationEnd = () => {
    if (isAnimatingOut) {
      // Once the exit animation is done, update the children and start the enter animation
      setDisplayChildren(children);
      setIsAnimatingOut(false);
    }
  };

  return (
    <div
      key={pathname} // Use pathname as a key to ensure the component itself re-mounts on navigation
      onAnimationEnd={handleAnimationEnd}
      className={isAnimatingOut ? 'page-transition-exit' : 'page-transition-enter'}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransitionWrapper;