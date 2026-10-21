export function balance(student) {
  return student.packages.reduce((sum, p) => sum + p.lessons, 0) - student.attendance.filter(a => a.status === 'present').length;
}
export function recordAttendance(student, entry) {
  if (!entry.date || !['present', 'absent'].includes(entry.status)) throw new Error('Choose a date and attendance status.');
  if (student.attendance.some(a => a.date === entry.date && a.slot === entry.slot)) throw new Error('This student already has a record for this date and lesson slot.');
  if (entry.status === 'present' && balance(student) <= 0) throw new Error('No lessons remaining. Add a package before recording a present lesson.');
  return {...student, attendance: [...student.attendance, {...entry, id: crypto.randomUUID()}]};
}
export function addPackage(student, entry) {
  if (!Number.isInteger(entry.lessons) || entry.lessons < 1 || entry.lessons > 500) throw new Error('Enter a whole number of lessons from 1 to 500.');
  if (!['paid', 'pending'].includes(entry.payment)) throw new Error('Choose a payment status.');
  return {...student, packages: [...student.packages, {...entry, id: crypto.randomUUID()}]};
}
export function status(student) {
  const n = balance(student);
  return n <= 0 ? 'Renew now' : n <= 2 ? 'Running low' : 'On track';
}
