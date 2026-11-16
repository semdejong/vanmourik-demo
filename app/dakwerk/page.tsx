import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import PageFrame from "@/components/PageFrame";
import StripCrop from "@/components/StripCrop";

export const metadata: Metadata = {
  title: content.dakwerk.title,
  description: content.dakwerk.description,
};

export default function DakwerkPage() {
  const { dakwerk } = content;
  return (
    <PageFrame section="dakwerk">
      <h1>{dakwerk.title}</h1>
      <p className="mt-8 max-w-[34rem] font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-snug font-semibold">
        {dakwerk.display}
      </p>
      <div className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-8">
        <StripCrop x={220} width={170} alt={dakwerk.alt} caption={dakwerk.caption} />
        <div className="max-w-[36rem]">
          <p>{dakwerk.body}</p>
          <p className="mt-4">{dakwerk.beside}</p>
        </div>
      </div>
      <ContactLinks />
      <AlsoBand except="/dakwerk" />
    </PageFrame>
  );
}
