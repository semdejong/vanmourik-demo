import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.privacy.title,
  description: content.privacy.description,
};

export default function PrivacyPage() {
  const { privacy, ui } = content;
  return (
    <PageFrame section="privacy">
      <h1>{privacy.title}</h1>
      <div className="mt-10 grid gap-px border border-ink bg-ink min-[800px]:grid-cols-3">
        {privacy.blocks.map((block) => (
          <section key={block.title} className="bg-papier p-5">
            <h2 className="mt-0 text-[1.45rem]">{block.title}</h2>
            <p className="mt-4">{block.text}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 flex flex-col items-start gap-3">
        <Link href="/contact" className="link inline-flex min-h-11 items-center">
          Contact
        </Link>
        <a href={ui.sleads} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
          sleads.nl
        </a>
      </p>
    </PageFrame>
  );
}
