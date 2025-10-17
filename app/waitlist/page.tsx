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
            <h2 className="text-2xl font-bold text-accent mb-4">✅ You&apos;re on the list!</h2>
            <p className="text-text-main/80">Thank you for joining the PublyFi waitlist. We&apos;ll be in touch soon.</p>
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
              <CosmicButton
                label="Join Now"
                type="submit"
                variant="solid"
              />
            </form>
          </div>
        )}

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="mb-4 text-text-main/60">
            Explore our ecosystem and architecture.
          </p>
          <Link href="/docs" passHref>
            <CosmicButton label="Docs" variant="outline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;