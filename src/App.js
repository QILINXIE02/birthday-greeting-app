// src/App.js
import React from 'react';
import DefaultPhoto from './components/DefaultPhoto';
import BirthdayMessage from './components/BirthdayMessage';
import GIFs from './components/GIFs';
import Guestbook from './components/Guestbook';
import Countdown from './components/Countdown';
// import BackgroundMusic from './components/BackgroundMusic';
import ConfettiComponent from './components/Confetti';
import Quotes from './components/Quotes';
// import GiftCard from './components/GiftCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <ConfettiComponent />
      <h1>Happy Birthday! RJ! </h1>
      {/* <BackgroundMusic /> */}
      <Countdown />
      <DefaultPhoto />
      <Quotes />
      <BirthdayMessage />
      <GIFs />
      <Guestbook />
      {/* <GiftCard /> */}
    </div>
  );
}

export default App;
