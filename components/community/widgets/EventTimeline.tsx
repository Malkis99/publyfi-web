"use client"
import React, { useState, useEffect } from 'react';
import { upcomingPolls } from '@/lib/community-data';
import { motion } from 'framer-motion';
import { Calendar, Vote } from 'lucide-react';

// This is a mock countdown. In a real app, you'd use a proper date library.
const Countdown = ({ endDate }: { endDate: string }) => {
    const calculateTotalSeconds = () => {
        const parts = endDate.split(' ');
        const value = parseInt(parts[0]);
        const unit = parts[1];

        let totalSeconds = 0;
        if (unit.startsWith('day')) {
            totalSeconds = value * 24 * 60 * 60;
        } else if (unit.startsWith('hour')) {
            totalSeconds = value * 60 * 60;
        }
        return totalSeconds;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTotalSeconds());

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = Math.floor(timeLeft % 60);

    return (
        <p className="text-xs text-purple-400/60 font-mono">
            {days > 0 && `${days}d `}
            {hours > 0 && `${hours}h `}
            {minutes > 0 && `${minutes}m `}
            {seconds}s
        </p>
    )
};

const EventTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-4"
    >
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 text-blue-400 mr-2" />
        <h3 className="font-bold text-lg text-white">Event Timeline / Polls</h3>
      </div>
      <ul className="space-y-4">
        {upcomingPolls.map((poll) => (
              <li key={poll.id} className="group cursor-pointer p-2 rounded-md hover:bg-purple-900/30 transition-colors">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-white group-hover:text-purple-300 transition-colors pr-4 text-sm">{poll.title}</p>
                  <span className={`flex items-center text-xs font-bold ${poll.type === 'DAO' ? 'text-green-400' : 'text-blue-400'} whitespace-nowrap`}>
                    <Vote className="h-3 w-3 mr-1" />{poll.type}
                  </span>
                </div>
                <Countdown endDate={poll.endDate} />
              </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EventTimeline;