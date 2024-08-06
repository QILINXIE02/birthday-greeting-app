// src/components/Quotes.js
import React, { useEffect, useState, useMemo } from 'react';

const Quotes = () => {
  const quotes = useMemo(() => [
    "Happy birthday to the best friend ever!",
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

  return <h2>{currentQuote}</h2>;
};

export default Quotes;
