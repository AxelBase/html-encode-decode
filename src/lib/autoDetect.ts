// src/lib/autoDetect.ts
const entityRegex = /&[#a-zA-Z0-9]+;/g;

export type Mode = 'encode' | 'decode';

export function detectMode(text: string): Mode {
  if (!text || text.length < 10) return 'encode';

  const entityMatches = text.match(entityRegex);
  const entityCount = entityMatches ? entityMatches.length : 0;
  const totalChars = text.length;

  // If more than 20% of characters are part of entities → likely decode mode
  const entityChars = entityMatches ? entityMatches.join('').length : 0;
  const ratio = entityChars / totalChars;

  return ratio > 0.2 ? 'decode' : 'encode';
}