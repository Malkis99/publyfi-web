// components/events/FeaturedEventCard.tsx
import { PlatformEvent } from '@/lib/mock-events-data';
import { motion } from 'framer-motion';
import { useEventCountdown } from '@/hooks/useEventCountdown';
import { Star } from 'lucide-react';

interface FeaturedEventCardProps {
  event: PlatformEvent;
  onOpenModal: (event: PlatformEvent) => void;
}

const FeaturedEventCard = ({ event, onOpenModal }: FeaturedEventCardProps) => {
  const { days, hours, minutes } = useEventCountdown(event.countdownEnd);

  return (
    <motion.div
      onClick={() => onOpenModal(event)}
      className="relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border border-purple-500/50 cursor-pointer"
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(163, 138, 209, 0.5)' }}
    >
      <div className="absolute top-0 right-0 px-4 py-1 bg-yellow-400 text-black text-xs font-bold rounded-bl-lg flex items-center">
        <Star className="w-4 h-4 mr-1"/>
        Today&apos;s Featured Event
      </div>
      <h3 className="text-2xl font-bold text-white mt-4">{event.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{event.description.substring(0, 100)}...</p>
      <div className="mt-4 text-lg font-semibold text-yellow-300">
        {`${days}d ${hours}h ${minutes}m remaining`}
      </div>
    </motion.div>
  );
};

export default FeaturedEventCard;
