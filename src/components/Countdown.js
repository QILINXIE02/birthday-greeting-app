import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-08-30`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2>Countdown to Birthday</h2>
      {Object.keys(timeLeft).length > 0 ? (
        <div className="countdown">
          {Object.keys(timeLeft).map((interval) => (
            <span key={interval}>
              {timeLeft[interval]} {interval}{" "}
            </span>
          ))}
        </div>
      ) : (
        <span>Happy Birthday!</span>
      )}
    </div>
  );
};

export default Countdown;
