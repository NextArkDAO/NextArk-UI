export default function useTextToSpeech() {
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  };
  const stop = () => {
    window.speechSynthesis.cancel();
  };
  return { speak, stop };
}
