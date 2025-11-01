// components/events/LeftSidebar.tsx
import { activeQuests, dailyTasks } from '@/lib/mock-events-data';
import { Gamepad2, Gem, Flame, Sword } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import DailyTreasure from './DailyTreasure';

const iconMap: { [key: string]: React.ElementType } = {
  Gamepad2,
  Gem,
  Flame,
  Sword,
};

const cardVariants: Variants = {
  initial: { scale: 1, boxShadow: '0 0 0px rgba(163, 138, 209, 0)' },
  hover: {
    scale: 1.03,
    boxShadow: '0 0 15px rgba(163, 138, 209, 0.4)',
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
};

const LeftSidebar = () => {
  return (
    <aside className="space-y-8 sticky top-24 h-fit">
      <div>
        <h2 className="text-xl font-bold mb-4 text-white tracking-wider">Active Quests</h2>
        <div className="space-y-4">
          {activeQuests.map((quest) => (
            <motion.div
              key={quest.id}
              className="p-4 rounded-lg bg-[#231d3b]/50 border border-purple-900/30 backdrop-blur-sm overflow-hidden"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <p className="text-sm font-medium text-gray-300">{quest.title}</p>
              <div className="w-full bg-black/30 rounded-full h-2.5 mt-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-violet-400 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(quest.progress / quest.goal) * 100}%` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{boxShadow: '0 0 8px rgba(163, 138, 209, 0.5)'}}
                ></motion.div>
              </div>
              <p className="text-xs text-right text-gray-400 mt-1">
                {quest.progress}/{quest.goal} {quest.unit || ''}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full"></div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-white tracking-wider">Daily Tasks</h2>
        <div className="space-y-3">
          {dailyTasks.map((task) => {
            const Icon = iconMap[task.icon];
            return (
              <motion.div
                key={task.id}
                className="flex items-center p-3 rounded-lg bg-[#231d3b]/50 border border-purple-900/30 backdrop-blur-sm"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                {Icon && <Icon className="w-6 h-6 mr-4 text-purple-400" style={{filter: 'drop-shadow(0 0 5px #a38ad1)'}} />}
                <p className="text-sm text-gray-300">{task.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full"></div>

      <DailyTreasure />
    </aside>
  );
};

export default LeftSidebar;
