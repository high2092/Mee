export function getToday() {
  return convertDate(new Date());
}

export function getYYYYMMDDList(date: Date) {
  const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map((n) => n.toString().padStart(2, '0'));
  return [year, month, day];
}

export function convertDate(date: Date) {
  const [year, month, day] = getYYYYMMDDList(date);
  return `${year}${month}${day}`;
}

export function getPrevDate(date: Date) {
  const prevDate = new Date(date);
  prevDate.setDate(date.getDate() - 1);
  return prevDate;
}

export function getNextDate(date: Date) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);
  return nextDate;
}

export function getNewDateSetDay(date: Date, day: number) {
  const newDate = new Date(date);
  newDate.setDate(day);
  return newDate;
}

function getDayOfWeek(date: Date) {
  return date.getDay();
}

export function getCalendarPadding(date: Date) {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const padLength = getDayOfWeek(firstDayOfMonth);
  return Array.from({ length: padLength });
}

export function getDayList(date: Date) {
  const daysOfMonth = getDaysOfMonth(date);
  return Array.from({ length: daysOfMonth }, (_, i) => i + 1);
}

export function getDaysOfMonth(date: Date) {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return lastDayOfMonth;
}
