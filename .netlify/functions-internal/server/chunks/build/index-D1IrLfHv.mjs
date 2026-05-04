function shortenUrl(url, maxChars = 30) {
  if (!url) return "";
  const clean = url.replace(/^https?:\/\//, "");
  return clean.length > maxChars ? clean.slice(0, maxChars) + "…" : clean;
}

export { shortenUrl as s };
//# sourceMappingURL=index-D1IrLfHv.mjs.map
