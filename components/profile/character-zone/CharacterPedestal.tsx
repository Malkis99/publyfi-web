'use client';

import { motion } from 'framer-motion';
import { PedestalBase } from './pedestal/PedestalBase';
import { PedestalRings } from './pedestal/PedestalRings';
import { PedestalScan } from './pedestal/PedestalScan';
import { PedestalEdge } from './pedestal/PedestalEdge';
import { PedestalLighting } from './pedestal/PedestalLighting';

export const CharacterPedestal = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 z-10"
      style={{ perspective: '500px' }}
    >
      <PedestalBase />
      <PedestalLighting />
      <PedestalRings />
      <PedestalScan />
      <PedestalEdge />
    </motion.div>
  );
};