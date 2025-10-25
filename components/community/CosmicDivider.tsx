"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CosmicDivider = () => {
    return (
        <div className="relative my-8 h-px bg-purple-900/50">
            <motion.div
                className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent"
                initial={{ backgroundSize: '0% 100%' }}
                whileInView={{ backgroundSize: '100% 100%' }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                viewport={{ once: true }}
            />
        </div>
    );
};

export default CosmicDivider;