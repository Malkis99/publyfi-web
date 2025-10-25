"use client";
import React from 'react';
import Link from 'next/link';
import { PlusCircle, Book, Vote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 0 0px rgba(163, 138, 209, 0)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(163, 138, 209, 0.5)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttons = [
    {
      label: 'Create Topic',
      icon: <PlusCircle className="mr-2 h-5 w-5" />,
      href: '/community/create',
    },
    {
      label: 'Submit Guide',
      icon: <Book className="mr-2 h-5 w-5" />,
      href: '/community/guide/create',
    },
    {
      label: 'Vote on DAO',
      icon: <Vote className="mr-2 h-5 w-5" />,
      href: '/community/dao',
    },
  ];

  return (
    <div className="text-center py-16 px-6 relative overflow-hidden bg-[#140f22] border-y border-purple-900/50">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140f22] via-[#140f22]/80 to-transparent z-10"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border-rev"></div>

      {/* Subtle decorative lines */}
      <div className="absolute top-4 left-4 w-16 h-px bg-gradient-to-r from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute top-4 left-4 w-px h-16 bg-gradient-to-b from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute bottom-4 right-4 w-16 h-px bg-gradient-to-l from-[#a38ad1]/50 to-transparent"></div>
      <div className="absolute bottom-4 right-4 w-px h-16 bg-gradient-to-t from-[#a38ad1]/50 to-transparent"></div>


      <div className="relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl font-bold tracking-tight text-white"
          style={{ textShadow: '0 0 15px rgba(163, 138, 209, 0.5), 0 0 30px rgba(163, 138, 209, 0.3)' }}
        >
          Welcome to PublyFi Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base text-purple-300/80 max-w-2xl mx-auto"
        >
          Discussions, Guides, DAO, and Live Activity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center items-center space-x-4"
        >
          {buttons.map((button, index) => (
            <Link href={button.href} key={index} legacyBehavior>
              <motion.a
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="rounded-lg"
              >
                <Button
                  variant="ghost"
                  className="bg-[#231d3b] text-white hover:bg-[#50348f] hover:text-white border border-purple-800/50 transition-all duration-300 shadow-lg"
                >
                  {button.icon}
                  {button.label}
                </Button>
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;