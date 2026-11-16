export default function RuledList({ items, split = false }: { items: readonly string[]; split?: boolean }) {
  return (
    <ul className={split ? "ruled ruled-split" : "ruled"}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
