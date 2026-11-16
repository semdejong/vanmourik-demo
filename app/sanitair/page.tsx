import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import HonestImage from "@/components/HonestImage";
import PageFrame from "@/components/PageFrame";
import RuledList from "@/components/RuledList";
import StripCrop from "@/components/StripCrop";

export const metadata: Metadata = {
  title: content.sanitair.title,
  description: content.sanitair.description,
};

export default function SanitairPage() {
  const { sanitair } = content;
  return (
    <PageFrame section="sanitair">
      <div className="grid items-end gap-10 min-[800px]:grid-cols-[1fr_9rem]">
        <div>
          <h1>{sanitair.title}</h1>
          <p className="mt-8 max-w-[40rem]">{sanitair.bridge}</p>
          <p className="mt-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-none font-semibold">{sanitair.soft}</p>
        </div>
        <StripCrop x={88} width={112} alt={sanitair.bathAlt} caption={sanitair.bathCaption} />
      </div>

      <h2>{sanitair.heading}</h2>
      <p className="mt-6 max-w-[40rem]">{sanitair.intro}</p>
      <RuledList items={sanitair.benefits} split />
      <p className="mt-8 max-w-[28rem] font-serif text-[clamp(1.45rem,2.5vw,1.85rem)] leading-snug font-semibold">
        {sanitair.close}
      </p>
      <div className="mt-10 flex flex-wrap items-end gap-8">
        <figure>
          <HonestImage src="/img/ontharder1.jpg" alt={sanitair.photoAlt} width={452} height={169} />
        </figure>
        <figure>
          <HonestImage src="/img/ontharder2.jpg" alt={sanitair.photoAltSmall} width={150} height={150} />
          <figcaption>{sanitair.caption}</figcaption>
        </figure>
      </div>
      <ContactLinks />
      <AlsoBand except="/sanitair" />
    </PageFrame>
  );
}
