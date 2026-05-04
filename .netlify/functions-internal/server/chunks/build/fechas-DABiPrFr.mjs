function formatSpanishDate(dateStr) {
  const date = new Date(dateStr);
  const dateString = date.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
  return dateString;
}

export { formatSpanishDate as f };
//# sourceMappingURL=fechas-DABiPrFr.mjs.map
