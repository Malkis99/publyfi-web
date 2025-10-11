'use client';

import { motion } from 'framer-motion';
import { Gem, Zap, Star } from 'lucide-react';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    description: 'Access to streams, social content, and basic customization.',
    icon: Star,
    color: 'text-gray-400',
    bgColor: 'bg-black/20',
    borderColor: 'border-white/10',
    current: false,
  },
  {
    name: 'Prime',
    price: '$15 one-time',
    description: 'Unlocks advanced customization, weekly rewards, and more.',
    icon: Gem,
    color: 'text-teal-400',
    bgColor: 'bg-teal-900/20',
    borderColor: 'border-teal-500/40',
    current: true, // Mock current plan
  },
  {
    name: 'Pro',
    price: '$15/month',
    description: 'Full access to quests, premium cases, and DAO voting.',
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-900/20',
    borderColor: 'border-purple-500/40',
    current: false,
  },
];

// More compact, elegant plan card
const PlanCard = ({ plan, delay }: { plan: typeof PLANS[0], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`p-4 rounded-xl border ${plan.borderColor} ${plan.bgColor} ${plan.current ? 'ring-2 ring-offset-2 ring-offset-black ring-teal-500' : ''} flex flex-col w-full text-center`}
  >
    <div className="flex-grow">
        <plan.icon className={`w-7 h-7 mx-auto mb-2 ${plan.color}`} />
        <h3 className={`text-lg font-bold ${plan.color}`}>{plan.name}</h3>
        <p className="text-sm font-semibold text-white mb-2">{plan.price}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>
    </div>
    <div className="mt-4">
    {!plan.current && (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
        {plan.name === 'Pro' ? 'Upgrade to Pro' : 'Select Plan'}
      </motion.button>
    )}
     {plan.current && (
      <div className="w-full py-2 text-sm font-semibold text-center text-teal-300 bg-teal-900/40 rounded-lg">
        Current Plan
      </div>
    )}
    </div>
  </motion.div>
);

// Refined particle component
const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-16 bg-gradient-to-r from-purple-500/0 via-white/50 to-purple-500/0"
          initial={{ y: `${Math.random() * 100}%`, x: -150, opacity: 0 }}
          animate={{ x: '150%' }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 6,
            ease: 'linear'
          }}
        />
      ))}
    </div>
);


export const UpgradeModal = () => {
  return (
    <div className="relative p-8 overflow-hidden flex flex-col justify-center aspect-square">
        <Particles />
        <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-1">Upgrade Your Status</h2>
            <p className="text-gray-400 text-sm mb-6">Unlock more features and rewards.</p>
        </div>
        <div className="relative z-10 flex flex-row items-stretch gap-4 w-full">
            {PLANS.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} delay={index * 0.1 + 0.1} />
            ))}
        </div>
        <p className="relative z-10 text-xs text-gray-500 mt-6 text-center">
            Note: The &apos;Pro&apos; plan requires an active &apos;Prime&apos; plan.
        </p>
    </div>
  );
};