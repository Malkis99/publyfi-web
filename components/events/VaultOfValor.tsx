// components/events/VaultOfValor.tsx
import { motion, Variants } from 'framer-motion';
import GlowingIcon from './icons/GlowingIcon';
import { Lock } from 'lucide-react';

type UserTier = 'Default' | 'Prime' | 'Pro';

interface VaultOfValorProps {
  userTier: UserTier;
}

const trackRewards = {
  prime: [
    { icon: 'Gem', color: '#a38ad1' }, { icon: 'Token', color: '#a38ad1' }, { icon: 'Cosmetic', color: '#a38ad1' }, { icon: 'Emblem', color: '#a38ad1' }, { icon: 'ArmorFragment', color: '#a38ad1' },
  ],
  pro: [
    { icon: 'Shield', color: '#f3b562' }, { icon: 'Relic', color: '#f3b562' }, { icon: 'Title', color: '#f3b562' }, { icon: 'Icon', color: '#f3b562' }, { icon: 'Sigil', color: '#f3b562' },
  ],
};

const nodeVariants: Variants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
    pulse: { scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
}

const AnimatedLine = ({ color }: { color: string }) => (
    <div className="flex-grow h-px relative overflow-hidden">
        <div className="w-full h-full" style={{background: `linear-gradient(to right, ${color}50, ${color}90)`}}></div>
        <motion.div
            className="absolute top-0 left-0 h-full w-1/4"
            style={{background: `linear-gradient(to right, transparent, ${color}, transparent)`}}
            initial={{ x: '-100%' }}
            animate={{ x: '400%' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: Math.random() * 3 }}
        />
    </div>
);

const Track = ({ type, rewards, isLocked }: { type: 'prime' | 'pro', rewards: any[], isLocked?: boolean }) => {
    const color = type === 'prime' ? '#a38ad1' : '#f3b562';
    const finalChestIcon = type === 'prime' ? 'Chest' : 'Shield';

    return (
        <div className={`flex items-center justify-between w-full ${isLocked ? 'opacity-50' : ''}`}>
             <div className="flex items-center flex-grow">
                {rewards.map((reward, i) => (
                    <div key={`${type}-${i}`} className="flex items-center flex-grow">
                        <motion.div variants={nodeVariants} initial="initial" whileHover="hover" animate="pulse" className="relative cursor-pointer flex-shrink-0">
                            <GlowingIcon icon={reward.icon as any} color={reward.color} />
                            {isLocked && <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />}
                        </motion.div>
                        <AnimatedLine color={color} />
                    </div>
                ))}
            </div>
            <motion.div variants={nodeVariants} initial="initial" whileHover="hover" animate="pulse" className="cursor-pointer flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                     <GlowingIcon icon={finalChestIcon as any} color={color} />
                     {isLocked && <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />}
                </div>
            </motion.div>
        </div>
    );
}

const XPProgress = ({ color, current, max }: { color: string, current: number, max: number }) => (
    <div className="mt-3 px-2">
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
            <span>XP to next treasure</span>
            <span>{current} / {max}</span>
        </div>
        <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
            <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(to right, ${color}70, ${color})`, boxShadow: `0 0 8px ${color}` }}
                initial={{ width: '0%' }}
                animate={{ width: `${(current / max) * 100}%` }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
        </div>
    </div>
);

const VaultOfValor = ({ userTier }: VaultOfValorProps) => {
  const isProLocked = userTier !== 'Pro';

  return (
    <div className="mt-16 bg-[#231d3b]/30 border border-purple-900/20 rounded-xl p-6 md:p-8 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl"></div>

        <div className="relative z-10">
            <div className="mb-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-wider">Season of Valor: Chapter II</h2>
                <p className="text-gray-400 mt-2 text-sm md:text-base">Prove your courage, ascend through light and flame.</p>
            </div>

            <div className="space-y-8">
                <div>
                    <p className="text-lg font-semibold text-purple-300 mb-3 pl-2">Prime Track</p>
                    <Track type="prime" rewards={trackRewards.prime} />
                    <XPProgress color="#a38ad1" current={120} max={300} />
                </div>
                <div>
                    <p className="text-lg font-semibold text-yellow-300 mb-3 pl-2">Pro Track</p>
                    <Track type="pro" rewards={trackRewards.pro} isLocked={isProLocked} />
                    <XPProgress color="#f3b562" current={250} max={500} />
                </div>
            </div>

            {isProLocked && (
                <div className="mt-8 text-center">
                    <motion.button
                        className="px-6 py-3 text-lg font-bold text-white bg-transparent border border-yellow-400/50 rounded-lg shadow-lg flex items-center mx-auto"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(243, 181, 98, 0.4)', backgroundColor: 'rgba(243, 181, 98, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Lock className="w-5 h-5 mr-3 text-yellow-400" />
                        Unlock PRO Rewards
                    </motion.button>
                </div>
            )}
        </div>
    </div>
  );
};

export default VaultOfValor;
