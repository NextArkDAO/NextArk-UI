import React, { useState } from 'react';
import { mute as muteVoice, unmute as unmuteVoice } from '../../utils/TextToSpeechEngine';

const BitsyToggleButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleVoice = () => {
    if (isMuted) unmuteVoice();
    else muteVoice();
    setIsMuted(!isMuted);
  };

  return <button onClick={toggleVoice}>{isMuted ? '🔇' : '🔊'}</button>;
};

export default BitsyToggleButton;
