'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import { Mail, KeyRound, LogIn, UserPlus, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';
import StaticStarfield from '@/components/StaticStarfield';

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
        className="relative z-10 w-full max-w-xs p-6 space-y-4 bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 10px rgba(163, 138, 209, 0.4)' }}>
            Profile Access
          </h1>
          <p className="mt-2 text-sm text-gray-400">Sign in to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-11 pr-4 py-2.5 bg-gray-800/50 border border-purple-400/20 rounded-lg focus:ring-2 focus:ring-purple-400/80 focus:border-purple-400 outline-none transition-all duration-300"
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
              className="w-full pl-11 pr-4 py-2.5 bg-gray-800/50 border border-purple-400/20 rounded-lg focus:ring-2 focus:ring-purple-400/80 focus:border-purple-400 outline-none transition-all duration-300"
              required
            />
          </div>

          {error && <p className="text-red-400 text-xs text-center pt-1">{error}</p>}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center py-2.5 px-4 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center text-xs text-gray-400 pt-4 border-t border-white/10">
          No account yet?{' '}
          <button onClick={handleRegister} className="font-semibold text-purple-300 hover:text-white transition-colors">
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};