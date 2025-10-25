"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock } from 'lucide-react';
import CosmicButton from '../CosmicButton';

const WeeklyReward = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextWednesday = new Date();
        nextWednesday.setDate(now.getDate() + (3 - now.getDay() + 7) % 7);
        nextWednesday.setHours(17, 0, 0, 0); // Assuming reset is at 5 PM UTC

        if (nextWednesday.getTime() < now.getTime()) {
            nextWednesday.setDate(nextWednesday.getDate() + 7);
        }

        const difference = nextWednesday.getTime() - now.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <motion.div
            className="bg-gradient-to-br from-[#231d3b] to-[#140f22] p-6 rounded-lg border border-purple-700/50 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute top-3 right-3 flex items-center text-xs text-purple-300/70 font-mono">
                <Clock size={12} className="mr-1.5"/>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple-900/40 rounded-full mb-4 border border-purple-600/50">
                    <Gift className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Weekly Reward</h3>
                <p className="text-sm text-gray-400 mb-4">Claim your weekly rewards for guild participation.</p>
                <CosmicButton label="Ready to Claim" variant="outline" />
            </div>
        </motion.div>
    );
};

export default WeeklyReward;
