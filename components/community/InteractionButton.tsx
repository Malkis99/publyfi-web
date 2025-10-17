"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const InteractionButton = ({ icon: Icon, count, label, activeColor }: { icon: React.ElementType, count: number, label: string, activeColor: string }) => {
    const [isActive, setIsActive] = React.useState(false);
    const [currentCount, setCurrentCount] = React.useState(count);
    const controls = useAnimation();

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card navigation
        e.preventDefault();
        const newActiveState = !isActive;
        setIsActive(newActiveState);
        setCurrentCount(newActiveState ? currentCount + 1 : currentCount - 1);
        controls.start({
            scale: [1, 1.3, 1],
            transition: { duration: 0.3 },
        });
    };

    return (
        <motion.button
            onClick={handleClick}
            animate={controls}
            className={`flex items-center space-x-2 text-sm rounded-full px-3 py-1 transition-colors duration-300 ${isActive ? `${activeColor} text-white bg-opacity-20` : 'text-gray-400 hover:text-white'}`}
        >
            <Icon className={`h-4 w-4 ${isActive ? 'text-white' : ''}`} />
            <span className="font-semibold">{currentCount}</span>
        </motion.button>
    );
};

export default InteractionButton;