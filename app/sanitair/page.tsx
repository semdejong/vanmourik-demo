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
      <h1>{sanitair.title}</h1>
      <p className="mt-8 max-w-[40rem]">{sanitair.bridge}</p>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <p className="font-serif text-[clamp(2.2rem,4.5vw,3.2rem)] leading-none font-semibold whitespace-nowrap">{sanitair.soft}</p>
        <StripCrop x={88} width={112} alt={sanitair.bathAlt} caption={sanitair.bathCaption} />
      </div>

      <h2>{sanitair.heading}</h2>
      <p className="mt-6 max-w-[40rem]">{sanitair.intro}</p>
      <RuledList items={sanitair.benefits} split />
      <p className="mt-8 max-w-[28rem] font-serif text-[clamp(1.45rem,2.5vw,1.85rem)] leading-snug font-semibold">
        {sanitair.close}
      </p>
      <figure className="mt-10">
        <div className="flex flex-wrap items-end gap-8">
          <HonestImage src="/img/ontharder1.jpg" alt={sanitair.photoAlt} width={452} height={169} />
          <HonestImage src="/img/ontharder2.jpg" alt={sanitair.photoAltSmall} width={150} height={150} />
        </div>
        <figcaption>{sanitair.caption}</figcaption>
      </figure>
      <ContactLinks />
      <AlsoBand except="/sanitair" />
    </PageFrame>
  );
}
