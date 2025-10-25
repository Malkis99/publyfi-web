import React from 'react';
import StaticStarfield from '../StaticStarfield';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#140f22] text-white">
      <StaticStarfield />
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold tracking-tighter" style={{ textShadow: '0 0 15px rgba(163, 138, 209, 0.5)' }}>
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-lg text-purple-300/80">{subtitle}</p>}
        <p className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          Coming Soon
        </p>
        <Link href="/community" passHref>
          <Button variant="ghost" className="mt-8 text-purple-300 hover:text-white hover:bg-purple-900/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Community
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;