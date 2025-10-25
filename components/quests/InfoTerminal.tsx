"use client";

import React from 'react';

interface InfoTerminalProps {
    children: React.ReactNode;
}

import { motion } from 'framer-motion';

const InfoTerminal: React.FC<InfoTerminalProps> = ({ children }) => {
    return (
        <div className="relative w-full h-full rounded-lg bg-[#140f22]/60 backdrop-blur-md">
             {/* Animated Border */}
            <motion.div
                className="absolute inset-0 rounded-lg border border-purple-700/30"
                animate={{
                    borderColor: [
                        'rgba(88, 52, 143, 0.3)',
                        'rgba(163, 138, 209, 0.4)',
                        'rgba(88, 52, 143, 0.3)',
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <div className="relative h-full w-full p-4 space-y-6 overflow-y-auto custom-scrollbar">
                 {children}
            </div>
        </div>
    );
};

export default InfoTerminal;
