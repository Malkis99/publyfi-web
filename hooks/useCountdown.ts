"use client";

import { useState, useEffect } from 'react';

const getNextTuesday = () => {
  const now = new Date();
  const today = now.getDay();
  const nextTuesday = new Date(now);
  nextTuesday.setDate(now.getDate() + ((2 - today + 7) % 7));
  nextTuesday.setHours(0, 0, 0, 0);
  if (nextTuesday < now) {
    nextTuesday.setDate(nextTuesday.getDate() + 7);
  }
  return nextTuesday;
};

export const useCountdown = () => {
  const [targetDate] = useState(getNextTuesday());
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return {
      days,
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  return formatTime(timeLeft);
};
