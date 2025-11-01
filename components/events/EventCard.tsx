// components/events/EventCard.tsx
import { PlatformEvent } from '@/lib/mock-events-data';
import { Clock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useEventCountdown } from '@/hooks/useEventCountdown';


interface EventCardProps {
  event: PlatformEvent;
  onOpenModal: (event: PlatformEvent) => void;
}

const cardVariants: Variants = {
    initial: { scale: 1, boxShadow: '0 0 0px rgba(80, 52, 143, 0)' },
    hover: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(80, 52, 143, 0.6)',
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    },
};

const EventCard = ({ event, onOpenModal }: EventCardProps) => {
  const { days, hours, minutes, seconds } = useEventCountdown(event.countdownEnd);

  return (
    <motion.div
      layout
      className="bg-[#231d3b]/50 border border-purple-900/30 backdrop-blur rounded-xl p-6 cursor-pointer overflow-hidden relative"
      onClick={() => onOpenModal(event)}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
        <div className="absolute -top-1 -left-1 w-1/3 h-1/3 bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -bottom-1 -right-1 w-1/3 h-1/3 bg-cyan-500/20 blur-3xl"></div>
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <p className="text-xs text-purple-400 font-semibold tracking-widest uppercase">{event.tag}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{event.title}</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400 bg-black/30 px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</span>
        </div>
      </div>
      <p className="text-gray-300 mt-4 text-sm leading-relaxed z-10 relative">
        {event.description}
      </p>
    </motion.div>
  );
};

export default EventCard;
