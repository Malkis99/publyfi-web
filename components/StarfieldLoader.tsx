"use client";

import dynamic from 'next/dynamic';

const StarfieldBackground = dynamic(
  () => import('@/components/StarfieldBackground').then((mod) => mod.StarfieldBackground),
  {
    ssr: false,
  }
);

const StarfieldLoader = () => {
  return <StarfieldBackground />;
};

export default StarfieldLoader;