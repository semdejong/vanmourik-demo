import { content } from "@/content";

export default function Practice() {
  const { qualities, fronts } = content.shared;
  return (
    <div className="mt-12">
      <ul className="word-row">
        {qualities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="fronts -mt-px">
        {fronts.map((front) => (
          <div key={front.title}>
            <h2>{front.title}</h2>
            <p>{front.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
