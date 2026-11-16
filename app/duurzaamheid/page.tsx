import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import ContactLinks from "@/components/ContactLinks";
import RuledList from "@/components/RuledList";
import HonestImage from "@/components/HonestImage";
import FlowLines from "@/components/FlowLines";

export const metadata: Metadata = {
  title: content.duurzaamheid.title,
  description: content.duurzaamheid.description,
};

export default function DuurzaamheidPage() {
  const page = content.duurzaamheid;
  return (
    <PageFrame section="duurzaamheid">
      <div className="measure">
        <h1>{page.title}</h1>
        <p className="mt-8">{page.bridge}</p>
        <div className="my-10 max-w-xl">
          <FlowLines variant="mark" />
        </div>
        <h2 className="mt-0">{page.awbTitle}</h2>
        <p className="mt-6 font-serif text-[1.7rem] leading-snug font-normal">{page.lead}</p>
        <p className="mt-6">{page.intro}</p>
        <h3>{page.benefitsTitle}</h3>
        <RuledList items={page.benefits} />
        <h3>{page.techniqueTitle}</h3>
        <p className="mt-4">{page.technique}</p>
        <h3>{page.dsiTitle}</h3>
        <p className="mt-4">{page.dsi}</p>
        <p className="mt-6">{page.closing}</p>
        <figure className="mt-10">
          <HonestImage src="/img/hybride-wonen.jpg" alt={page.alt} width={508} height={179} />
          <figcaption>{page.caption}</figcaption>
        </figure>
        <ContactLinks />
      </div>
    </PageFrame>
  );
}
