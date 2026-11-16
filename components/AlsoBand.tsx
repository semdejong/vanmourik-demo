import Link from "next/link";
import { content } from "@/content";

const names: Record<string, string> = {
  "/verwarming": "Verwarming",
  "/sanitair": "Sanitair",
  "/dakwerk": "Dakwerk",
  "/duurzaamheid": "Duurzaamheid",
};

export default function AlsoBand({ except, title = content.shared.also }: { except: string; title?: string }) {
  const items = content.home.fields.filter((field) => field.href !== except);
  return (
    <section className="mt-16" aria-label={title} data-section="ook">
      <h2>{title}</h2>
      <div className="also-row mt-5">
        {items.map((field) => (
          <Link key={field.href} href={field.href}>
            <span className="font-serif text-[1.55rem] leading-none font-semibold">{names[field.href]}</span>
            <span className="max-w-[18rem] leading-snug">{field.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
