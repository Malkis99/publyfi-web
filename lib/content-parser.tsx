import React from 'react';
import ProfileHovercard from '@/components/community/ProfileHovercard';
import Mention from '@/components/community/Mention';
import { mockUsers } from './community-data';

export const parseContent = (text: string): React.ReactNode[] => {
    const parts = text.split(/([@#!]\w+)/g);

    return parts.map((part, index) => {
        if (part.startsWith('@')) {
            const username = part.substring(1);
            const user = Object.values(mockUsers).find(u => u.name === username);
            if (user) {
                return (
                    <ProfileHovercard key={index} user={user}>
                        <span className="text-purple-400 hover:underline cursor-pointer">@{username}</span>
                    </ProfileHovercard>
                );
            }
        }
        if (part.startsWith('#')) {
            const value = part.substring(1);
            return <Mention key={index} type="#" value={value} />;
        }
        if (part.startsWith('!')) {
            const value = part.substring(1);
            return <Mention key={index} type="!" value={value} />;
        }
        return part;
    });
};