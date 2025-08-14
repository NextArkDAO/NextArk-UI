import React, { useState } from 'react';
import { speak, stopSpeaking } from '../../utils/TextToSpeechEngine';
import { getBitsyResponse } from '../../utils/BitsyBrain';

const BitsyAgentModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    const reply = getBitsyResponse(input);
    setResponse(reply);
    speak(reply);
  };

  if (!isOpen) return null;

  return (
    <div className="bitsy-modal">
      <h2>🧠 Ask Bitsy Anything</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you want to know?"
      />
      <button onClick={handleSubmit}>Ask</button>
      <p>{response}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BitsyAgentModal;
