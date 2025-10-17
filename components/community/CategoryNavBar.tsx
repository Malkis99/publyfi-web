"use client";

import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { LayoutGrid, MessageSquare, BookOpen, Newspaper, GitMerge, BarChart, Calendar, Headset, Coffee } from 'lucide-react';

const categories = [
    { name: 'All', icon: LayoutGrid, query: null },
    { name: 'Discussions', icon: MessageSquare, query: 'discussions' },
    { name: 'Guides', icon: BookOpen, query: 'guides' },
    { name: 'News', icon: Newspaper, query: 'news' },
    { name: 'DAO', icon: GitMerge, query: 'dao' },
    { name: 'Polls', icon: BarChart, query: 'polls' },
    { name: 'Events', icon: Calendar, query: 'events' },
    { name: 'Support', icon: Headset, query: 'support' },
    { name: 'Off-topic', icon: Coffee, query: 'off-topic' },
];

const CategoryNavBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

    const handleCategoryClick = (query: string | null) => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set('category', query);
        } else {
            params.delete('category');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div aria-label="Community Categories" className="bg-[#140f22]/50 border-y border-purple-900/30 backdrop-blur-sm sticky top-[64px] z-30">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center space-x-2 py-2">
                    {categories.map((category) => {
                        const isActive = activeCategory === category.query || (!activeCategory && category.query === null);
                        const Icon = category.icon;
                        return (
                            <Button
                                key={category.name}
                                variant="ghost"
                                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-purple-300/70 hover:text-white hover:bg-purple-900/30'}`}
                                onClick={() => handleCategoryClick(category.query)}
                            >
                                <Icon className="mr-2 h-4 w-4" />
                                {category.name}
                                {isActive && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                                        layoutId="underline"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryNavBar;