export function convertTime(time: string) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function calculateDuration(startTime: string, endTime: string) {
  const t1 = convertTime(startTime);
  const t2 = convertTime(endTime);
  return t2 - t1;
}
