"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NftItem } from '@/lib/marketplace-data';
import NftCard from './NftCard';
import ItemDetailsModal from './ItemDetailsModal';

interface ItemGridProps {
  items: NftItem[];
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const ItemGrid = ({ items }: ItemGridProps) => {
  const [selectedItem, setSelectedItem] = useState<NftItem | null>(null);

  const handleViewDetails = (item: NftItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <motion.div
        key={items.map(item => item.id).join('-')}
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        <AnimatePresence>
          {items.map((item) => (
            <NftCard key={item.id} item={item} onViewDetails={() => handleViewDetails(item)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ItemDetailsModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ItemGrid;