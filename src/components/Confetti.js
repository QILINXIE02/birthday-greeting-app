// src/components/Confetti.js
import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'; // Ensure this is correct

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
