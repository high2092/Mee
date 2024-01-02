import { generateRandomHexColor } from '../../utility/color';

export const dummyLabels: Label[] = (function generateDummyLabels() {
  return Array.from({ length: 20 }).map((_, i) => ({ id: i + 1, name: `label ${i + 1}`, color: generateRandomHexColor() }));
})();
