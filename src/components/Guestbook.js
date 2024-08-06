// src/components/Guestbook.js
import React, { useState, useEffect } from 'react';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load saved entries from local storage
    const savedEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const handleAddEntry = () => {
    if (name && message) {
      const newEntry = { name, message };
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);

      // Save entries to local storage
      localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries));

      // Clear input fields
      setName('');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Guestbook</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
      ></textarea>
      <button onClick={handleAddEntry}>Add Entry</button>

      <div>
        <h3>Entries:</h3>
        {entries.length === 0 ? (
          <p>No entries yet!</p>
        ) : (
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <strong>{entry.name}:</strong> {entry.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
