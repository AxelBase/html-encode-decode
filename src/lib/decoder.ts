// src/lib/decoder.ts
import { reverseEntities } from './encoder';

const entityPattern = /&(#?[a-zA-Z0-9]+);/g;

export function decodeHtml(input: string): string {
  return input.replace(entityPattern, (match, code) => {
    if (code.startsWith("#")) {
      const numeric = code.substring(1);

      // Hex: #xHHHH
      if (numeric.startsWith("x") || numeric.startsWith("X")) {
        const val = parseInt(numeric.substring(1), 16);
        return isNaN(val) ? match : String.fromCharCode(val);
      }

      // Decimal: #123
      const val = parseInt(numeric, 10);
      return isNaN(val) ? match : String.fromCharCode(val);
    }

    // Named entity
    return reverseEntities[code] || match;
  });
}
