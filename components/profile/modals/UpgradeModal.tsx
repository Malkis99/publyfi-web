'use client';

import { motion } from 'framer-motion';
import { Gem, Zap, Star, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

// Refined plan card
const PlanCard = ({ plan, delay }: { plan: typeof PLANS[0], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`p-5 rounded-xl border ${plan.borderColor} ${plan.bgColor} ${plan.current ? 'ring-2 ring-offset-2 ring-offset-black ring-teal-500' : ''} flex flex-col w-full text-center`}
  >
    <div className="flex-grow">
        <plan.icon className={`w-8 h-8 mx-auto mb-3 ${plan.color}`} />
        <h3 className={`text-xl font-bold ${plan.color}`}>{plan.name}</h3>
        <p className="text-sm font-semibold text-white mb-3">{plan.price}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>
    </div>
    {!plan.current && (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 w-full py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
        {plan.name === 'Pro' ? 'Upgrade to Pro' : 'Select Plan'}
      </motion.button>
    )}
     {plan.current && (
      <div className="mt-5 w-full py-2 text-sm font-semibold text-center text-teal-300 bg-teal-900/40 rounded-lg">
        Current Plan
      </div>
    )}
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
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/StatusInformation');
  };

  return (
    <div className="relative p-6 overflow-hidden">
        <Particles />
        <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-1 text-center">Upgrade Your Status</h2>
            <p className="text-gray-400 text-sm mb-6 text-center">Unlock more features and rewards.</p>

            <div className="flex flex-col md:flex-row gap-4">
                {PLANS.map((plan, index) => (
                <PlanCard key={plan.name} plan={plan} delay={index * 0.1 + 0.1} />
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
                Note: The &apos;Pro&apos; plan requires an active &apos;Prime&apos; plan.
            </p>

            <div className="mt-6 text-center">
                <motion.button
                    onClick={handleNavigate}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-teal-300 transition duration-300 ease-out border-2 border-teal-500 rounded-lg shadow-md bg-transparent"
                >
                    <span className="absolute inset-0 w-full h-full bg-transparent"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ease-in-out bg-teal-500 group-hover:h-full opacity-20"></span>
                    <span className="relative flex items-center text-sm">
                        Find Out More <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </motion.button>
            </div>
        </div>
    </div>
  );
};