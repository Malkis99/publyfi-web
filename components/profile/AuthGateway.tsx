'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import { Mail, KeyRound, LogIn, UserPlus, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';
import StaticStarfield from '@/components/StaticStarfield';

// Copied from UpgradeModal.tsx as requested
const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
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


export const AuthGateway = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = () => {
    router.push('/waitlist');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-bg-primary to-bg-secondary text-white p-4">
      <StaticStarfield />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg p-8 space-y-6 bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10"
        style={{
          boxShadow: "0 0 25px 5px rgba(192, 132, 252, 0.2), 0 0 10px 2px rgba(192, 132, 252, 0.15)"
        }}
      >
        <Particles />
        <div className="relative z-20 text-center">
          <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 15px rgba(192, 132, 252, 0.5)' }}>
            Welcome to PublyFi
          </h1>
          <p className="mt-2 text-sm text-gray-400">Sign in to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="relative z-20 space-y-4">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-11 pr-4 py-3 bg-gray-800/60 border border-purple-400/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:border-purple-400/80 hover:ring-1 hover:ring-purple-400/60 outline-none transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-11 pr-4 py-3 bg-gray-800/60 border border-purple-400/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:border-purple-400/80 hover:ring-1 hover:ring-purple-400/60 outline-none transition-all duration-300"
              required
            />
          </div>

          {error && <p className="text-red-400 text-xs text-center pt-1">{error}</p>}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-4 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </button>
          </div>
        </form>

        <div className="relative z-20 text-center text-xs text-gray-400 pt-4 border-t border-white/10">
          No account yet?{' '}
          <button onClick={handleRegister} className="font-semibold text-purple-300 hover:text-white transition-colors">
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};