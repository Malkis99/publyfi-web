"use client";
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { mockUsers } from '@/lib/community-data';
import ProfilePreview from './ProfilePreview';
import Image from 'next/image';

interface MentionProps {
    type: '@' | '#' | '$' | '!';
    value: string;
}

const mentionStyles = {
    '@': 'text-purple-400 hover:underline cursor-pointer font-semibold',
    '#': 'text-green-400 hover:underline cursor-pointer font-semibold',
    '$': 'text-yellow-400 hover:underline cursor-pointer font-semibold',
    '!': 'text-red-400 hover:underline cursor-pointer font-semibold',
}

const NftPreview = ({ name }: { name: string }) => (
    <div className="flex items-center space-x-3">
        <Image src="https://i.postimg.cc/d16pLd2N/image.png" alt={name} width={48} height={48} className="rounded-md border border-green-500/50" />
        <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-xs text-gray-400">Rare Utility Item</p>
        </div>
    </div>
);

const TokenPreview = ({ symbol }: { symbol: string }) => (
     <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-yellow-900/50 flex items-center justify-center font-bold text-yellow-300 border border-yellow-500/50">
            {symbol}
        </div>
        <div>
            <p className="font-bold text-white">{symbol}</p>
            <p className="text-xs text-gray-400">Current Price: $0.42</p>
        </div>
    </div>
);

const Mention: React.FC<MentionProps> = ({ type, value }) => {
    const getPopupContent = () => {
        // For a real app, you'd fetch this data. For now, use mock data.
        const user = Object.values(mockUsers).find(u => u.name === value);

        switch (type) {
            case '@':
                return user ? <ProfilePreview user={user} /> : <p>User not found</p>;
            case '#':
                return <NftPreview name={value} />;
            case '$':
                return <TokenPreview symbol={value} />;
            case '!':
                return <div>{value}</div>;
        }
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <span className={mentionStyles[type]}>
                    {type}{value}
                </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 bg-[#1a152e]/90 backdrop-blur-lg border-purple-700/50 text-white text-sm">
                {getPopupContent()}
            </HoverCardContent>
        </HoverCard>
    );
};

export default Mention;