import Link from "next/link";
import { content } from "@/content";

const place: Record<string, string> = {
  "/verwarming": "min-[800px]:col-start-1 min-[800px]:row-start-1",
  "/sanitair": "min-[800px]:col-start-3 min-[800px]:row-start-1",
  "/dakwerk": "min-[800px]:col-start-1 min-[800px]:row-start-2",
  "/duurzaamheid": "min-[800px]:col-start-3 min-[800px]:row-start-2",
};

export default function WarmteFields() {
  const { fields, hub } = content.home;
  return (
    <section aria-label="Specialiteiten" data-section="specialiteiten" className="mt-20 border border-ink bg-ink">
      <div className="grid grid-cols-1 gap-px min-[800px]:grid-cols-3 min-[800px]:grid-rows-2">
        <p className="hub order-first m-0 flex min-h-48 items-center justify-center bg-oranje p-6 text-ink min-[800px]:col-start-2 min-[800px]:row-span-2 min-[800px]:row-start-1 sm:p-8">
          <span className="hub-word">{hub}</span>
        </p>
        {fields.map((field) => (
          <Link
            key={field.href}
            href={field.href}
            className={`flex h-full min-h-48 flex-col justify-between p-6 text-ink no-underline transition-colors duration-150 sm:p-8 ${place[field.href] ?? ""} ${
              field.tone === "papier" ? "bg-papier hover:bg-vlak" : "bg-vlak hover:bg-wit"
            }`}
          >
            <span className="flow-label">{field.code}</span>
            <span className="max-w-[16rem] font-serif text-[1.35rem] leading-snug">{field.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
