import { routePrompt } from './PromptRouter';

export const getBitsyResponse = (input) => {
  // Example scripted logic
  if (input.toLowerCase().includes('bitcoin')) return "Bitcoin is digital gold! Ask me more if you're curious.";
  if (input.toLowerCase().includes('agents')) return "AI agents are like smart helpers. You'll meet mine soon!";

  // Placeholder for future routing
  return routePrompt(input);
};