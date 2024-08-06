import React from 'react';
import DefaultPhoto from './components/DefaultPhoto';
import BirthdayMessage from './components/BirthdayMessage';
import GIFs from './components/GIFs';
import Guestbook from './components/Guestbook';
import Countdown from './components/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday!</h1>
      <DefaultPhoto />
      <BirthdayMessage />
      <GIFs />
      <Guestbook />
      <Countdown />
    </div>
  );
}

export default App;
