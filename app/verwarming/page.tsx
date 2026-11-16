import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import PageFrame from "@/components/PageFrame";
import Practice from "@/components/Practice";
import StripCrop from "@/components/StripCrop";

export const metadata: Metadata = {
  title: content.verwarming.title,
  description: content.verwarming.description,
};

export default function VerwarmingPage() {
  const { verwarming } = content;
  return (
    <PageFrame section="verwarming">
      <div className="grid items-end gap-10 min-[800px]:grid-cols-[1fr_16rem]">
        <div className="measure max-w-none">
          <h1>{verwarming.title}</h1>
          <p className="mt-8 font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-snug font-semibold">{verwarming.display}</p>
          <p className="mt-6 max-w-[40rem]">{verwarming.body}</p>
        </div>
        <StripCrop x={408} width={140} alt={verwarming.cropAlt} caption={verwarming.cropCaption} />
      </div>
      <Practice />
      <ContactLinks />
      <AlsoBand except="/verwarming" />
    </PageFrame>
  );
}
