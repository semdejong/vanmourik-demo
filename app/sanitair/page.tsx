import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import ContactLinks from "@/components/ContactLinks";
import RuledList from "@/components/RuledList";
import HonestImage from "@/components/HonestImage";

export const metadata: Metadata = {
  title: content.sanitair.title,
  description: content.sanitair.description,
};

export default function SanitairPage() {
  const { sanitair } = content;
  return (
    <PageFrame section="sanitair">
      <div className="measure">
        <h1>{sanitair.title}</h1>
        <p className="mt-8">{sanitair.bridge}</p>
        <h2>{sanitair.heading}</h2>
        <p className="mt-6">{sanitair.intro}</p>
        <RuledList items={sanitair.benefits} />
        <p className="mt-8 font-serif text-[1.45rem] leading-snug font-semibold">{sanitair.close}</p>
        <div className="mt-10 flex flex-wrap items-start gap-8">
          <HonestImage src="/img/ontharder1.jpg" alt={sanitair.photoAlt} width={452} height={169} />
          <HonestImage src="/img/ontharder2.jpg" alt={sanitair.photoAltSmall} width={150} height={150} />
        </div>
        <p className="mt-4">{sanitair.caption}</p>
        <ContactLinks />
      </div>
    </PageFrame>
  );
}
