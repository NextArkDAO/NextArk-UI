let muted = false;
const synth = window.speechSynthesis;

export const speak = (text) => {
  if (muted || !synth) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  utter.pitch = 1;
  synth.speak(utter);
};

export const mute = () => { muted = true; synth.cancel(); };
export const unmute = () => { muted = false; };
export const stopSpeaking = () => synth.cancel();
