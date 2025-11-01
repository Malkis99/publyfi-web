'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { StarfieldBackground } from '@/components/StarfieldBackground';
import { Mail, KeyRound, LogIn, UserPlus, Fingerprint, Smartphone, ArrowLeft, ShieldCheck, Eye, EyeOff } from 'lucide-react';

// New minimalist starfield for the panel background
const MinimalistStarfield = () => (
    <div className="absolute inset-0 w-full h-full -z-10 rounded-2xl overflow-hidden">
        <StarfieldBackground
            particleCount={50}
            radiusRange={[0.3, 0.75]} // 25% smaller stars
            className="absolute top-0 left-0 w-full h-full"
        />
    </div>
);

const FaceScanner = () => (
    <div className="relative w-48 h-48 mx-auto my-6 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full border-4 border-purple-500/30 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-full h-1 bg-purple-400/80 shadow-lg shadow-purple-500/50"
        style={{ top: '50%' }}
        animate={{ y: [-40, 40, -40] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <Fingerprint className="w-20 h-20 text-white/80" />
    </div>
  );

export const AuthGateway = () => {
  const [authMode, setAuthMode] = useState<'password' | 'faceid'>('password');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-bg-primary to-bg-secondary text-white p-4 lg:pl-80">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg p-8 space-y-6 bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10"
        style={{ boxShadow: "0 0 25px 5px rgba(192, 132, 252, 0.2), 0 0 10px 2px rgba(192, 132, 252, 0.15)" }}
      >
        <MinimalistStarfield />

        {authMode === 'password' && (
          <motion.div
            key="password-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20"
          >
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 15px rgba(192, 132, 252, 0.5)' }}>
                    Welcome to PublyFi
                </h1>
                <p className="mt-2 text-sm text-gray-400">Sign in to continue.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-6">
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60" size={20} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full pl-11 pr-4 py-3 bg-gray-800/60 border border-purple-400/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:border-purple-400/80 hover:ring-1 hover:ring-purple-400/60 outline-none transition-all duration-300" required />
              </div>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-11 pr-12 py-3 bg-gray-800/60 border border-purple-400/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:border-purple-400/80 hover:ring-1 hover:ring-purple-400/60 outline-none transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400/60 hover:text-purple-400 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && <p className="text-red-400 text-xs text-center pt-1">{error}</p>}
              <div className="pt-2 flex items-center gap-x-4">
                <button
                  type="submit"
                  className="w-1/2 flex items-center justify-center py-3 px-4 font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#4B0082', boxShadow: '0 0 15px 3px rgba(75, 0, 130, 0.4)' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a009a'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4B0082'}
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </button>
                <button type="button" onClick={() => setAuthMode('faceid')} className="w-1/2 flex items-center justify-center py-3 px-4 font-semibold text-white bg-gray-600/80 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-500/20">
                  <Fingerprint className="mr-2 h-5 w-5" />
                  FaceID
                </button>
              </div>
            </form>

            <div className="text-center text-xs text-gray-400 pt-6 border-t border-white/10 mt-6">
              No account yet? <button onClick={handleRegister} className="font-semibold text-purple-300 hover:text-white transition-colors">Register</button>
            </div>
          </motion.div>
        )}

        {authMode === 'faceid' && (
          <motion.div
            key="faceid-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 text-center"
          >
            <button onClick={() => setAuthMode('password')} aria-label="Back" className="absolute -top-4 -left-4 text-purple-300 hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Scan FaceID</h2>
            <p className="text-sm text-gray-400">Center your face in the frame.</p>
            <FaceScanner />
            <button className="w-full flex items-center justify-center py-3 px-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
              <Smartphone className="mr-2 h-5 w-5" />
              Continue on Phone
            </button>
            <div className="flex items-center justify-center mt-6 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                Your data is encrypted and will not be shared.
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};