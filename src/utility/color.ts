export function generateRandomHexColor() {
  return `#${Array.from({ length: 3 })
    .map(() => generateRandomInt(145, 255).toString(16))
    .join('')}`;
}

function generateRandomInt(min: number, max: number) {
  return Math.ceil(min) + Math.floor(Math.random() * (max - min));
}
