'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, ArrowDown, ArrowUp, History } from 'lucide-react';

// Particle component for the background
const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 bg-purple-200/80 rounded-full"
          initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
);

const TransactionItem = ({ type, amount, status }: { type: 'Deposit' | 'Withdraw'; amount: string; status: string }) => (
  <div className="flex justify-between items-center text-xs">
    <div className="flex items-center">
      {type === 'Deposit' ? <ArrowDown className="w-3.5 h-3.5 mr-2 text-green-500" /> : <ArrowUp className="w-3.5 h-3.5 mr-2 text-red-500" />}
      <div>
        <p className="font-semibold text-white">{type}</p>
        <p className="text-xs text-gray-500">{status}</p>
      </div>
    </div>
    <span className={`font-bold ${type === 'Deposit' ? 'text-green-400' : 'text-red-400'}`}>{amount}</span>
  </div>
);

export const WalletPanel = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 right-0 z-50 w-72 bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/50"
        >
          <div className="relative p-3">
            <Particles />
            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-3 px-1">
                <h3 className="font-bold text-white text-md">Wallet</h3>
                <span className="flex items-center text-xs text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5"></span>
                    Immutable zkEVM
                </span>
                </div>

                {/* Balance */}
                <div className="text-center bg-purple-900/20 p-3 rounded-lg mb-3">
                <p className="text-xs text-gray-400">Total Balance</p>
                <p className="text-2xl font-bold text-white tracking-wider">1,234.56</p>
                <p className="text-sm font-semibold text-purple-300">$PUBL</p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <button className="flex items-center justify-center space-x-1.5 py-2 text-xs bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/40 transition-colors">
                        <ArrowDown className="w-3.5 h-3.5" />
                        <span>Deposit</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1.5 py-2 text-xs bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/40 transition-colors">
                        <ArrowUp className="w-3.5 h-3.5" />
                        <span>Withdraw</span>
                    </button>
                </div>

                {/* History */}
                <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold text-gray-400 flex items-center px-1"><History className="w-3.5 h-3.5 mr-1.5" />Recent Activity</h4>
                    <TransactionItem type="Deposit" amount="+500" status="Completed" />
                    <TransactionItem type="Withdraw" amount="-150" status="Pending" />
                </div>

                <button className="mt-3 w-full py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all">
                    Connect Wallet
                </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};