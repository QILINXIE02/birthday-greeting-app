// src/components/BirthdayMessage.js
import React, { useState } from 'react';

const BirthdayMessage = () => {
  const [message, setMessage] = useState('');
  const [savedMessage, setSavedMessage] = useState(
    localStorage.getItem('birthdayMessage') || ''
  );

  const handleSaveMessage = () => {
    localStorage.setItem('birthdayMessage', message);
    setSavedMessage(message);
  };

  return (
    <div>
      <h2>Birthday Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a birthday message..."
      ></textarea>
      <button onClick={handleSaveMessage}>Save Message</button>
      {savedMessage && (
        <div>
          <h3>Saved Message:</h3>
          <p>{savedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default BirthdayMessage;
