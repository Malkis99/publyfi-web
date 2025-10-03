'use client';

import { usePathname } from 'next/navigation';
import RoadmapButton from '@/components/layout/RoadmapButton';
import BackToHomeButton from '@/components/BackToHomeButton';

const ConditionalButtons = () => {
  const pathname = usePathname();

  // Do not render these buttons on the profile page
  if (pathname === '/profile') {
    return null;
  }

  return (
    <>
      <RoadmapButton />
      <BackToHomeButton />
    </>
  );
};

export default ConditionalButtons;