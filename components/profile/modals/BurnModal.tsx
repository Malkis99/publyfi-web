'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Activity, Gift, TrendingUp, HelpCircle, Coins } from 'lucide-react';

const Tooltip = ({ text }: { text: string }) => (
    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {text}
    </span>
);

const HistoryItem = ({ amount, result, date }: { amount: string; result: string; date: string }) => (
    <div className="flex justify-between items-center text-xs text-gray-400 py-1.5 border-t border-white/5">
        <span>Burned {amount} $PUBL</span>
        <span>Received: {result}</span>
        <span>{date}</span>
    </div>
);

export const BurnModal = ({ onClose }: { onClose: () => void }) => {
    const [amount, setAmount] = useState('');
    const balance = 12345;

    return (
        <div className="p-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">Burn $PUBL</h2>
            </div>

            {/* Current Balance */}
            <div className="mb-4 p-3 bg-black/20 rounded-lg border border-white/10">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Your PUBL Balance:</span>
                    <span className="flex items-center font-bold text-white">
                        <Coins className="w-4 h-4 mr-1.5 text-yellow-400" />
                        {balance.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Amount Input */}
            <div className="relative mb-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount to burn"
                    className="w-full pl-4 pr-20 py-3 bg-gray-800/50 border-2 border-purple-400/20 rounded-lg focus:ring-2 focus:ring-purple-400/80 focus:border-purple-400 outline-none transition-all duration-300"
                />
                <button
                    onClick={() => setAmount(String(balance))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold text-purple-200 bg-purple-600/50 rounded-md hover:bg-purple-600"
                >
                    Max
                </button>
            </div>

            {/* Burn Button */}
            <div className="relative group flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center py-3 px-4 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                >
                    <Flame className="mr-2 h-5 w-5" />
                    Burn Now
                </motion.button>
                <Tooltip text="This action is permanent and cannot be undone." />
            </div>

            {/* Rewards Section */}
            <div className="mt-6 text-center p-3 bg-black/20 rounded-lg border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">Potential Rewards</h4>
                <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><TrendingUp size={14}/> XP Boost</span>
                    <span className="flex items-center gap-1"><Activity size={14}/> Reputation</span>
                    <span className="flex items-center gap-1"><Gift size={14}/> Special Items</span>
                </div>
            </div>

            {/* Burn History */}
            <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Recent Burns</h4>
                <div className="text-xs text-gray-400 space-y-1">
                   <HistoryItem amount="500" result="+200 XP" date="1 day ago" />
                   <HistoryItem amount="1,000" result="+5 Rep" date="3 days ago" />
                </div>
            </div>
        </div>
    );
};