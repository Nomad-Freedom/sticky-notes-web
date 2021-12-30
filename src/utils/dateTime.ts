export function isToday(date: Date): boolean {
  const newDate: string = new Date(date).toDateString();
  const today: string = new Date().toDateString();

  return today === newDate;
}
export function isYesterday(date: Date): boolean {
  const newDate: string = new Date(date).toDateString();
  let yesterday: string = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toDateString();

  return yesterday === newDate;
}

export function getTime(date: Date): string {
  const time: string = new Date(date).toLocaleTimeString();
  return time;
}

export function getDateAndTime(date: Date): string {
  date = new Date(date);
  const newDate: string = date.toDateString();
  const time: string = date.toLocaleTimeString();

  return `${newDate} @ ${time}`;
}
