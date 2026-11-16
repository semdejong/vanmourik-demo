/** Leidt de data-cta-waarde af van een href (voor de Sleads demo-analytics tracker). */
export function ctaType(href: string): "bellen" | "mailen" | "offerte" {
  if (href.startsWith("tel:")) return "bellen";
  if (href.startsWith("mailto:")) return "mailen";
  return "offerte";
}

/** mailto zonder spaties in het adres. De body begint bij de aanroeper met "Goedendag,". */
export function mailTo(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
