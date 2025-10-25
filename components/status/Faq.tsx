'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { FAQ_CATEGORIES, FaqCategory, FaqItem } from '@/content/faqData';
import { ChevronDown } from 'lucide-react';

const cardTransition: Transition = { type: 'spring', stiffness: 400, damping: 30 };

const FaqItemCard = ({ item }: { item: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        opacity: { duration: 0.5, delay: 0.15 },
        height: { duration: 0.3 },
        y: { duration: 0.3 }
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 0.5, ease: 'circOut' } },
  };

  const pulseTransition: Transition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  };

  // Split answer into paragraphs
  const answerParagraphs = item.answer.split('\n');

  return (
    <motion.div
      layout={true}
      transition={cardTransition}
      className="rounded-lg border cursor-pointer"
      style={{
        backgroundColor: 'rgba(15, 15, 15, 0.45)', // transparent onyx
        borderColor: 'rgba(0, 206, 209, 0.12)', // low-opacity turquoise edge
        boxShadow: '0 0 15px rgba(0, 206, 209, 0.05)',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="group p-6 flex justify-between items-center">
        <h4 className="text-lg font-medium text-gray-200 transition-colors duration-300 group-hover:text-turquoise">
          {item.question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={cardTransition}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="space-y-4 text-turquoise/80">
                {answerParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <motion.div
                className="mt-4 h-px bg-turquoise/50"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="h-full w-full bg-turquoise"
                  style={{ filter: 'blur(2px)' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={pulseTransition}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Faq = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
      className="w-full min-h-[400px]" // Match width and min-height of other panels
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-16">
        {FAQ_CATEGORIES.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-semibold text-purple-300 mb-6 pl-2">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <FaqItemCard key={item.question} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};