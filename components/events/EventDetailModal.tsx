// components/events/EventDetailModal.tsx
import { PlatformEvent } from '@/lib/mock-events-data';
import { CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlowingIcon from './icons/GlowingIcon';
import Particles from '../common/Particles';
import { EventsModal } from './EventsModal';

interface EventDetailModalProps {
  event: PlatformEvent | null;
  onClose: () => void;
}

const rarityColorMap: { [key: string]: string } = {
  Common: 'gray',
  Rare: 'blue',
  Epic: 'purple',
  Legendary: 'yellow',
  Mythic: 'red',
};

const EventDetailModal = ({ event, onClose }: EventDetailModalProps) => {
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    // Reset join state when a new event is opened
    if (event) {
      setIsJoined(false);
    }
  }, [event]);

  if (!event) {
    return null;
  }

  return (
    <EventsModal isOpen={!!event} onClose={onClose} size="3xl">
        <>
          <Particles count={30} />
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
            <p className="text-sm text-purple-400 mb-6 tracking-widest uppercase">{event.tag}</p>

            <p className="text-gray-300 leading-relaxed mb-8">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Objectives</h3>
                <ul className="space-y-3">
                  {event.objectives.map((obj) => (
                    <li key={obj.id} className={`flex items-center text-sm ${obj.completed ? 'text-green-400' : 'text-gray-300'}`}>
                      {obj.completed ? <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> : <Clock className="w-4 h-4 mr-2 text-gray-500" />}
                      <span className={obj.completed ? 'line-through' : ''}>{obj.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Rewards</h3>
                <ul className="space-y-4">
                  {event.rewards.map((reward) => (
                    <li key={reward.id} className="flex items-center text-sm text-gray-300">
                      <div className="w-10 h-10 mr-4 flex-shrink-0">
                        <GlowingIcon icon={reward.icon as any} color={rarityColorMap[reward.rarity]} />
                      </div>
                      <div className="flex-grow">
                        <span className={`font-bold text-${rarityColorMap[reward.rarity]}-400`}>{reward.rarity}</span>: {reward.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <motion.button
                onClick={() => setIsJoined(true)}
                className={`px-12 py-3 text-lg font-bold text-white rounded-lg shadow-lg ${isJoined ? 'bg-green-600' : 'bg-purple-600'}`}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${isJoined ? 'rgba(22, 163, 74, 0.7)' : 'rgba(139, 92, 246, 0.7)'}` }}
                whileTap={{ scale: 0.95 }}
                disabled={isJoined}
              >
                {isJoined ? 'In Progress' : 'Join Event'}
              </motion.button>
            </div>
          </div>
        </>
    </EventsModal>
  );
};

export default EventDetailModal;
