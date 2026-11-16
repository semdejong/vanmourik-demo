/** Drie bijna rechte strepen, het enige ornament. Rand of sectieregel. */
export default function FlowLines({ variant = "edge" }: { variant?: "edge" | "mark" }) {
  return (
    <div className={`flow-lines${variant === "mark" ? " flow-lines--mark" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
