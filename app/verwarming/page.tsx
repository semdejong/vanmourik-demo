import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import PageFrame from "@/components/PageFrame";
import StripCrop from "@/components/StripCrop";

export const metadata: Metadata = {
  title: content.verwarming.title,
  description: content.verwarming.description,
};

export default function VerwarmingPage() {
  const { verwarming, shared } = content;
  return (
    <PageFrame section="verwarming">
      <h1>{verwarming.title}</h1>
      <p className="mt-8 max-w-[34rem] font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-snug font-semibold">
        {verwarming.display}
      </p>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <p className="max-w-[40rem]">{verwarming.body}</p>
        <StripCrop x={408} width={140} alt={verwarming.cropAlt} caption={verwarming.cropCaption} />
      </div>
      <div className="fronts-open">
        {shared.fronts.map((front) => (
          <div key={front.title}>
            <h2>{front.title}</h2>
            <p>{front.text}</p>
          </div>
        ))}
      </div>
      <ContactLinks />
      <AlsoBand except="/verwarming" />
    </PageFrame>
  );
}
