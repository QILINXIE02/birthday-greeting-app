// src/components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
      if (time.total <= 0) {
        clearInterval(timer);
        onCountdownEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownEnd]); // Added onCountdownEnd to the dependency array

  function calculateTimeLeft() {
    const targetDatePacific = new Date('2024-08-27T00:00:00-07:00');
    const nowUTC = new Date();
    const pacificOffset = -7;
    const nowPacific = new Date(nowUTC.getTime() + pacificOffset * 60 * 60 * 1000);
    const difference = targetDatePacific - nowPacific;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  return (
    <div>
      <h2>Countdown to Birthday</h2>
      <p>
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </p>
    </div>
  );
};

export default Countdown;
