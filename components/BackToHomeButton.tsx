'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BackToHomeButton = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    return null;
  }

  return (
    <Link
      href="/"
      className="fixed top-6 left-72 z-30 text-accent hover:text-highlight transition-colors duration-300 font-semibold cursor-pointer"
    >
        &larr; Back to Home
    </Link>
  );
};

export default BackToHomeButton;