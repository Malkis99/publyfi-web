// components/events/CenterPanel.tsx
import { PlatformEvent } from '@/lib/mock-events-data';
import EventCard from './EventCard';
import VaultOfValor from './VaultOfValor';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedEventCard from './FeaturedEventCard';
import StreamingTracker from './StreamingTracker';

type UserTier = 'Default' | 'Prime' | 'Pro';

interface CenterPanelProps {
  events: PlatformEvent[];
  onOpenModal: (event: PlatformEvent) => void;
  userTier: UserTier;
}

const CenterPanel = ({ events, onOpenModal, userTier }: CenterPanelProps) => {
  const featuredEvent = events.find(e => e.isFeatured);
  const regularEvents = events.filter(e => !e.isFeatured);

  return (
    <main>
      <div>
        {featuredEvent && (
          <FeaturedEventCard event={featuredEvent} onOpenModal={onOpenModal} />
        )}

        <StreamingTracker />

        <motion.div layout className="mt-8 space-y-6">
          <AnimatePresence>
            {regularEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard event={event} onOpenModal={onOpenModal} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <VaultOfValor userTier={userTier} />
    </main>
  );
};

export default CenterPanel;
