export function formatSpanishDate(dateStr: string): string {
  const date = new Date(dateStr)
  const dateString = date.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });

  // set the first letter of the month to uppercase
  return dateString;
}
