import React from 'react';
import HeroSection from '@/components/community/HeroSection';
import CategoryNavBar from '@/components/community/CategoryNavBar';
import MainFeed from '@/components/community/MainFeed';
import RightSidebar from '@/components/community/RightSidebar';
import Footer from '@/components/community/Footer';
import StaticStarfield from '@/components/StaticStarfield';

export const dynamic = 'force-dynamic';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-[#140f22] text-gray-200 relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 20%, #50348f, transparent 50%)'}}></div>
      <StaticStarfield />
      <div className="relative z-10">
        <div className="pt-20">
            <HeroSection />
            <CategoryNavBar />
        </div>
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <MainFeed />
                </div>
                <div className="lg:col-span-4">
                  <RightSidebar />
                </div>
              </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CommunityPage;