'use client';
import { motion, Variants, Transition } from 'framer-motion';

export const Header = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemTransition: Transition = {
        duration: 0.5,
        ease: "easeOut",
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: itemTransition,
        },
    };

    return (
        <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
        >
            <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"
            >
                Your Path of Evolution in PublyFi
            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
            >
                Every status unlocks new layers of power, identity, and opportunity across the universe of PublyFi.
            </motion.p>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                className="mt-8 mx-auto h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
            />
        </motion.header>
    );
};