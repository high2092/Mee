export function getToday() {
  const date = new Date();
  const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map((n) => n.toString().padStart(2, '0'));
  return `${year}${month}${day}`;
}
