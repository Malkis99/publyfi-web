// components/events/RightSidebar.tsx
import { motion } from 'framer-motion';
import { BarChart, Calendar, Clock, Users } from 'lucide-react';
import { useEventCountdown } from '@/hooks/useEventCountdown';

const StatCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center text-sm">
        <div className="text-purple-400 mr-3">{icon}</div>
        <div className="text-gray-400">{label}:</div>
        <div className="ml-auto font-bold text-white">{value}</div>
    </div>
);

const ProgressBar = ({ value, max }: { value: number, max: number }) => (
    <div className="w-full h-1.5 bg-black/30 rounded-full mt-1">
        <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(value/max)*100}%`}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
    </div>
);

const ProfileTracker = () => (
    <div>
        <h3 className="text-xl font-bold mb-4 text-white tracking-wider">Profile Tracker</h3>
        <div className="space-y-3 p-4 bg-black/20 rounded-lg">
            <StatCard icon={<BarChart size={16}/>} label="Reputation" value="640 / 1000" />
            <ProgressBar value={640} max={1000} />
        </div>
    </div>
);

const EventHistory = () => (
    <div>
        <h3 className="font-bold text-white mb-3">Event History</h3>
        <div className="space-y-3 p-4 bg-black/20 rounded-lg">
            <StatCard icon={<Calendar size={16}/>} label="Events Completed" value="27" />
            <StatCard icon={<Users size={16}/>} label="Total XP Earned" value="14,800" />
        </div>
    </div>
);

const UpcomingEvents = () => {
    const { days, hours, minutes } = useEventCountdown(new Date(Date.now() + 1000 * 60 * 60 * 2.75)); // ~2h 45m from now
    return (
        <div>
            <h3 className="font-bold text-white mb-3">Upcoming</h3>
            <div className="space-y-3 p-4 bg-black/20 rounded-lg">
                <div className="text-sm text-gray-300">New event starts in:</div>
                <div className="text-center text-2xl font-bold text-cyan-300 tracking-widest">
                    {`${hours}h ${minutes}m`}
                </div>
            </div>
        </div>
    );
};

const CommunityActivity = () => (
    <div>
        <h3 className="font-bold text-white mb-3">Community Activity</h3>
        <ul className="space-y-3 p-4 bg-black/20 rounded-lg text-xs text-gray-400 max-h-48 overflow-y-auto custom-scrollbar">
            <li><span className="text-purple-400 font-semibold">PlayerX</span> completed Treasure Run.</li>
            <li><span className="text-purple-400 font-semibold">StreamerY</span> unlocked a rare reward.</li>
            <li><span className="text-purple-400 font-semibold">UserZ</span> joined the Trial of Ember.</li>
            <li><span className="text-purple-400 font-semibold">Dev_Admin</span> started a new Global Event.</li>
             <li><span className="text-purple-400 font-semibold">PlayerA</span> reached Valor Rank 10.</li>
        </ul>
    </div>
);

const RightSidebar = () => {
  return (
    <aside className="space-y-8 sticky top-24 h-fit text-sm">
        <ProfileTracker />
        <EventHistory />
        <UpcomingEvents />
        <CommunityActivity />
    </aside>
  );
};

export default RightSidebar;
