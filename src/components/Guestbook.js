// src/components/Guestbook.js
import React, { useState } from 'react';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    const name = prompt('Enter your name:');
    const message = prompt('Enter your birthday wish:');
    if (name && message) {
      setEntries([...entries, { name, message }]);
    }
  };

  return (
    <div>
      <h2>Guestbook</h2>
      <button onClick={addEntry}>Add Entry</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}:</strong> {entry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guestbook;
