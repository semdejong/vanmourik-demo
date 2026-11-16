import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import ContactLinks from "@/components/ContactLinks";
import RoofCrop from "@/components/RoofCrop";

export const metadata: Metadata = {
  title: content.dakwerk.title,
  description: content.dakwerk.description,
};

export default function DakwerkPage() {
  const { dakwerk } = content;
  return (
    <PageFrame section="dakwerk">
      <div className="measure">
        <h1>{dakwerk.title}</h1>
        <p className="mt-8">{dakwerk.body}</p>
        <RoofCrop />
        <ContactLinks />
      </div>
    </PageFrame>
  );
}
