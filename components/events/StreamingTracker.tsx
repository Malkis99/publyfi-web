// components/events/StreamingTracker.tsx
import { streamerActivities } from '@/lib/mock-events-data';
import { motion } from 'framer-motion';

const StreamingTracker = () => {
  return (
    <div className="mt-8 p-6 rounded-xl bg-[#231d3b]/50 border border-purple-900/30">
        <h3 className="text-xl font-bold text-white mb-4">Currently Streaming</h3>
        <div className="space-y-4">
            {streamerActivities.map(activity => (
                <div key={activity.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${activity.isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
                        <div>
                            <p className="font-semibold text-white">{activity.name}</p>
                            <p className="text-sm text-gray-400">{activity.event}</p>
                        </div>
                    </div>
                    {activity.progress !== undefined && (
                         <div className="w-1/4">
                            <div className="w-full bg-black/30 rounded-full h-2">
                                <motion.div
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${activity.progress}%` }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                />
                            </div>
                            <p className="text-xs text-right mt-1 text-cyan-300">{activity.progress}%</p>
                        </div>
                    )}
                     {activity.progress === undefined && activity.isLive && (
                        <p className="text-sm font-bold text-red-500">LIVE NOW</p>
                    )}
                </div>
            ))}
        </div>
    </div>
  );
};

export default StreamingTracker;
