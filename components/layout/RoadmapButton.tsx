'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RoadmapButton = () => {
  const pathname = usePathname();

  if (pathname === '/roadmap') {
    return null;
  }

  return (
    <Link href="/roadmap" className="fixed top-6 right-6 z-50 group">
      <div className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-[#a38ad1] to-[#50348f] shadow-[0_0_15px_rgba(163,138,209,0.4)] group-hover:animate-pulse-glow">
        Roadmap
      </div>
    </Link>
  );
};

export default RoadmapButton;