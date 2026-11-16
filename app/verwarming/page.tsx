import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: content.verwarming.title,
  description: content.verwarming.description,
};

export default function VerwarmingPage() {
  const { verwarming } = content;
  return (
    <PageFrame section="verwarming">
      <div className="measure">
        <h1>{verwarming.title}</h1>
        <p className="mt-8">{verwarming.body}</p>
        <ContactLinks />
      </div>
    </PageFrame>
  );
}
