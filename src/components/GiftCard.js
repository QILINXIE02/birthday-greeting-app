// src/components/GiftCard.js
import React, { useState } from 'react';

const GiftCard = () => {
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const sendGiftCard = () => {
    setSentMessage(message);
    setMessage('');
  };

  return (
    <div>
      <h2>Send a Virtual Gift Card</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
      ></textarea>
      <button onClick={sendGiftCard}>Send Gift Card</button>
      {sentMessage && (
        <div>
          <h3>Your Gift Card Message:</h3>
          <p>{sentMessage}</p>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
