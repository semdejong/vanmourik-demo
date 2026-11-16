import type { Metadata } from "next";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import ContactLinks from "@/components/ContactLinks";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.doeHetZelf.title,
  description: content.doeHetZelf.description,
};

export default function DoeHetZelfPage() {
  const page = content.doeHetZelf;
  return (
    <PageFrame section="doe-het-zelf">
      <h1>{page.title}</h1>
      <p className="mt-8 max-w-[36rem]">{page.body}</p>
      <ol className="mt-12 max-w-3xl list-none p-0">
        {page.steps.map((step) => (
          <li key={step.n} className="step">
            <span className="step-n">{step.n}</span>
            <span>
              <span className="block font-serif text-[1.7rem] leading-tight font-semibold">{step.title}</span>
              <span className="mt-2 block">{step.text}</span>
            </span>
          </li>
        ))}
      </ol>
      <ContactLinks />
      <AlsoBand except="/doe-het-zelf" title={content.shared.all} />
    </PageFrame>
  );
}
