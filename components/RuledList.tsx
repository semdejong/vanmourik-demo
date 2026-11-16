export default function RuledList({ items }: { items: readonly string[] }) {
  return (
    <ul className="ruled">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
