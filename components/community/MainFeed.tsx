"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { mockFeedItems } from '@/lib/community-data';
import { motion, AnimatePresence } from 'framer-motion';
import FeedCard from './FeedCard';
import CosmicDivider from './CosmicDivider';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const MainFeed = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');

  const filteredItems = React.useMemo(() => {
    if (!activeCategory || activeCategory === 'all') {
      return mockFeedItems.filter(item => item.type !== 'system');
    }

    const typeMap: { [key: string]: string } = {
      discussions: 'discussion',
      guides: 'guide',
      news: 'news',
      dao: 'dao',
      polls: 'poll',
      events: 'event',
      support: 'support',
      'off-topic': 'discussion', // Special case
    };

    const targetType = typeMap[activeCategory];

    if (!targetType) return [];

    return mockFeedItems.filter(item => {
      if (activeCategory === 'off-topic') {
        return item.type === 'discussion' && item.badges?.some(b => b.id === 'prime');
      }
      return item.type === targetType;
    });
  }, [activeCategory]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory || 'all'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
          {filteredItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <motion.div variants={itemVariants}>
                <FeedCard item={item} index={index} />
              </motion.div>
              {index < filteredItems.length - 1 && <CosmicDivider />}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainFeed;