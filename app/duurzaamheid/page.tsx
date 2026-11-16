import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import FlowLines from "@/components/FlowLines";
import HonestImage from "@/components/HonestImage";
import PageFrame from "@/components/PageFrame";
import RuledList from "@/components/RuledList";

export const metadata: Metadata = {
  title: content.duurzaamheid.title,
  description: content.duurzaamheid.description,
};

export default function DuurzaamheidPage() {
  const page = content.duurzaamheid;
  return (
    <PageFrame section="duurzaamheid">
      <h1>{page.title}</h1>
      <p className="mt-8 max-w-[40rem]">{page.bridge}</p>
      <div className="marks mt-10 max-w-[42rem]">
        {page.marks.map((mark) => (
          <article key={mark.value} className="mark">
            <strong>{mark.value}</strong>
            <p className="mt-3">{mark.text}</p>
          </article>
        ))}
      </div>
      <div className="my-10 max-w-xl">
        <FlowLines variant="mark" />
      </div>
      <div className="measure max-w-none">
        <h2 className="mt-0">{page.awbTitle}</h2>
        <p className="mt-6 max-w-[40rem] font-serif text-[1.7rem] leading-snug font-normal">{page.lead}</p>
        <p className="mt-6 max-w-[42rem]">{page.intro}</p>
        <h3>{page.benefitsTitle}</h3>
        <RuledList items={page.benefits} />
        <h3>{page.techniqueTitle}</h3>
        <p className="mt-4 max-w-[42rem]">{page.technique}</p>
        <h3>{page.dsiTitle}</h3>
        <p className="mt-4 max-w-[42rem]">{page.dsi}</p>
        <p className="mt-6 max-w-[42rem]">{page.closing}</p>
        <figure className="mt-10">
          <HonestImage src="/img/hybride-wonen.jpg" alt={page.alt} width={508} height={179} />
          <figcaption>{page.caption}</figcaption>
        </figure>
      </div>
      <ContactLinks />
      <AlsoBand except="/duurzaamheid" />
    </PageFrame>
  );
}
