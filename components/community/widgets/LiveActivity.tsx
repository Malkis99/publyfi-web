"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, GitMerge, MessageSquare, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockActivities = [
    { type: 'DAO', icon: GitMerge, text: "DAO Proposal #12 reached quorum.", key: 3 },
    { type: 'Guide', icon: BookOpen, text: "Nova posted a new guide.", key: 2 },
    { type: 'Network', icon: Users, text: "Erevan joined Prime.", key: 1 },
    { type: 'Network', icon: MessageSquare, text: "Cygnus commented on 'Best Quest Rewards'.", key: 4 },
    { type: 'Network', icon: Users, text: "Orion followed Nova.", key: 5 },
];

const filters = ['All', 'My Network', 'DAO', 'Guides'];

const LiveActivity = () => {
    const [activities, setActivities] = useState<(typeof mockActivities[0])[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleActivities, setVisibleActivities] = useState<typeof mockActivities>([]);

    useEffect(() => {
        // This effect simulates a live feed
        const interval = setInterval(() => {
            setActivities(prev => {
                const nextIndex = prev.length % mockActivities.length;
                return [...prev, mockActivities[nextIndex]];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // This effect filters the activities based on the active filter
        const filtered = activeFilter === 'All'
            ? activities
            : activities.filter(a => a.type === activeFilter.slice(0, -1)); // Remove 's' from Guides

        setVisibleActivities(filtered.slice(-5)); // Only show last 5
    }, [activities, activeFilter]);


    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <Rss className="h-6 w-6 text-purple-400 mr-2" />
                    <h3 className="font-bold text-lg text-white">Live Activity</h3>
                </div>
            </div>
             <div className="flex flex-wrap gap-2 mb-4">
                {filters.map(filter => (
                    <Button
                        key={filter}
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveFilter(filter)}
                        className={`text-xs ${activeFilter === filter ? 'bg-[#50348f] text-white' : 'bg-[#140f22]/50 text-purple-300'} hover:bg-[#50348f] hover:text-white border border-purple-800/30`}
                    >
                        {filter}
                    </Button>
                ))}
            </div>
            <ul className="space-y-3 h-40 overflow-hidden">
                <AnimatePresence>
                    {visibleActivities.map((activity) => {
                        const Icon = activity.icon;
                        return (
                            <motion.li
                                key={activity.key}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center space-x-3 text-sm"
                            >
                                <Icon className="h-4 w-4 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-300 truncate">{activity.text}</span>
                            </motion.li>
                        );
                    })}
                </AnimatePresence>
            </ul>
        </motion.div>
    );
};

export default LiveActivity;