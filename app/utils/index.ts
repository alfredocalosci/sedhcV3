function shortenUrl(url: string | undefined, maxChars: number = 30): string {
  if (!url) return '';
  const clean = url.replace(/^https?:\/\//, '');
  return clean.length > maxChars ? clean.slice(0, maxChars) + '…' : clean;
}

export { shortenUrl };