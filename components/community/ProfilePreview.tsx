import React from 'react';
import { User } from '@/lib/community-data';
import Avatar from './Avatar';
import { Button } from '../ui/button';

interface ProfilePreviewProps {
    user: User;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ user }) => {
    return (
        <div>
            <div className="flex justify-between space-x-4">
                <Avatar user={user} size={56} />
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{user.name}</h4>
                    <p className="text-sm text-gray-400">
                        A passionate member of the PublyFi ecosystem.
                    </p>
                    <div className="flex items-center pt-2 space-x-4 text-xs text-gray-400">
                        <span><strong className="text-white">{user.reputation}</strong> Rep</span>
                        <span><strong className="text-white">{user.stats.posts}</strong> Posts</span>
                        <span><strong className="text-white">#{user.stats.rank}</strong> Rank</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <Button variant="outline" className="border-purple-600">Follow</Button>
                <Button className="bg-purple-600">Message</Button>
            </div>
        </div>
    );
};

export default ProfilePreview;