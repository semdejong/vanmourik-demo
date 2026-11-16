import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: content.doeHetZelf.title,
  description: content.doeHetZelf.description,
};

export default function DoeHetZelfPage() {
  const page = content.doeHetZelf;
  return (
    <PageFrame section="doe-het-zelf">
      <div className="measure">
        <h1>{page.title}</h1>
        <p className="mt-8">{page.body}</p>
        <ContactLinks />
      </div>
    </PageFrame>
  );
}
