"use client";
import React from 'react';
import { User } from '@/lib/community-data';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ProfilePreview from './ProfilePreview';

interface ProfileHovercardProps {
    user: User;
    children: React.ReactNode;
}

const ProfileHovercard: React.FC<ProfileHovercardProps> = ({ user, children }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>{children}</HoverCardTrigger>
            <HoverCardContent className="w-80 bg-[#1a152e]/90 backdrop-blur-lg border-purple-700/50 text-white">
                <ProfilePreview user={user} />
            </HoverCardContent>
        </HoverCard>
    );
};

export default ProfileHovercard;