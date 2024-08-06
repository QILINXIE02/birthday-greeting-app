// src/components/Quotes.js
import React, { useEffect, useState, useMemo } from 'react';

const Quotes = () => {
  const quotes = useMemo(() => [
    "Happy birthday to the a good friend!",
    "Wishing you a day filled with love and joy!",
    "May all your birthday wishes come true!",
  ], []);

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div>
      <h2>Quote of the Moment</h2>
      <p>{currentQuote}</p>
    </div>
  );
};

export default Quotes;
