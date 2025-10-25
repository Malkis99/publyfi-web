import React from 'react';
import { User } from '@/lib/community-data';

const roleIndicatorColors: { [key: string]: string } = {
  Prime: 'bg-purple-400',
  PRO: 'bg-yellow-400',
  Moderator: 'bg-red-400',
  Member: 'bg-gray-400',
};

interface AvatarProps {
  user: User;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ user, size = 48 }) => {
  const roleIndicator = roleIndicatorColors[user.role];
  const indicatorSize = size / 4;
  const indicatorBorderSize = Math.max(1, size / 24);
  const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : '?';
  const fontSize = size / 2.2;

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div
        className="flex items-center justify-center rounded-full border-2 border-purple-400/20 shadow-md"
        style={{
          width: size,
          height: size,
          backgroundColor: '#231d3b',
        }}
      >
        <span
          className="font-bold text-[#f3f4f7]"
          style={{ fontSize: fontSize, lineHeight: `${size}px` }}
        >
          {firstLetter}
        </span>
      </div>
      <span
        className={`absolute bottom-0 right-0 block rounded-full ${roleIndicator}`}
        style={{
          width: indicatorSize,
          height: indicatorSize,
          border: `${indicatorBorderSize}px solid #231d3b`
        }}
      />
    </div>
  );
};

export default Avatar;