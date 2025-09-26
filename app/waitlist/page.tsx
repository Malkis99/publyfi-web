"use client";

import { useState, FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import CosmicButton from '@/components/CosmicButton';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // In a real app, you would send the email to a backend API here.
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <Navbar />
      <div
        className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-glow fade-in"
      >
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-accent mb-4">✅ You're on the list!</h2>
            <p className="text-text-main/80">Thank you for joining the PublyFi waitlist. We'll be in touch soon.</p>
            <Link href="/" passHref>
              <div className="mt-6 text-accent hover:text-highlight transition-colors duration-300 font-semibold cursor-pointer">
                &larr; Back to Home
              </div>
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-text-main mb-2">Join the PublyFi Waitlist</h1>
            <p className="text-text-main/70 mb-8">Be the first to explore the future of social gaming.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-transparent focus:border-accent focus:ring-accent focus:outline-none transition-colors"
                required
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
               <button type="submit" className="w-full">
                <div className="px-8 py-3 rounded-lg font-semibold text-text-main transition-transform duration-300 ease-out transform hover:scale-105 focus:outline-none bg-gradient-to-r from-highlight to-accent animate-[pulse-glow_4s_infinite] shadow-glow">
                  Join Now
                </div>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;