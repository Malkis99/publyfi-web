import React from 'react';
import ProfileCard from './widgets/ProfileCard';
import GuideOfTheWeek from './widgets/GuideOfTheWeek';
import TrendingNow from './widgets/TrendingNow';
import MyActivity from './widgets/MyActivity';
import EventTimeline from './widgets/EventTimeline';
import LiveActivity from './widgets/LiveActivity';

const RightSidebar = () => {
  return (
    <div className="sticky top-24 h-[calc(100vh-6rem)]">
        <div className="space-y-6 h-full overflow-y-auto pr-2 custom-scrollbar">
            <ProfileCard />
            <MyActivity />
            <EventTimeline />
            <TrendingNow />
            <GuideOfTheWeek />
            <LiveActivity />
        </div>
    </div>
  );
};

export default RightSidebar;