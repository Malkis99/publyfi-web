"use client";

import { useState, useEffect } from 'react';

export const useEventCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number) => {
    if (time < 0) {
      return { days: 0, hours: '00', minutes: '00', seconds: '00' };
    }

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
