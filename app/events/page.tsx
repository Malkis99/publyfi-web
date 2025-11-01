// app/events/page.tsx
'use client';

import { useState } from 'react';
import LeftSidebar from '@/components/events/LeftSidebar';
import CenterPanel from '@/components/events/CenterPanel';
import RightSidebar from '@/components/events/RightSidebar';
import EventDetailModal from '@/components/events/EventDetailModal';
import { PlatformEvent, platformEvents } from '@/lib/mock-events-data';
import HeroSection from '@/components/events/HeroSection';

type UserTier = 'Default' | 'Prime' | 'Pro';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<PlatformEvent | null>(null);
  const [userTier, setUserTier] = useState<UserTier>('Prime');

  const handleOpenModal = (event: PlatformEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-[#140f22] text-white">
      <HeroSection
        title="Event Command Hub"
        subtitle="Explore ongoing platform events, seasonal journeys, and personal progression."
      />

      <div className="px-12 py-8">
        <div className="flex justify-center items-center space-x-6 mb-8">
            <button onClick={() => setUserTier('Default')} className={`text-sm pb-1 border-b-2 ${userTier === 'Default' ? 'text-white border-purple-500' : 'text-gray-500 border-transparent'}`}>Home</button>
            <button onClick={() => setUserTier('Prime')} className={`text-sm pb-1 border-b-2 ${userTier === 'Prime' ? 'text-white border-purple-500' : 'text-gray-500 border-transparent'}`}>for Prime</button>
            <button onClick={() => setUserTier('Pro')} className={`text-sm pb-1 border-b-2 ${userTier === 'Pro' ? 'text-white border-purple-500' : 'text-gray-500 border-transparent'}`}>for Pro</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-8 items-start">
          <LeftSidebar />
          <div className="mt-11">
            <CenterPanel events={platformEvents} onOpenModal={handleOpenModal} userTier={userTier} />
          </div>
          <RightSidebar />
        </div>
      </div>

      <EventDetailModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
};

export default EventsPage;
