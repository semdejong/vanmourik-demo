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
      <div className="measure">
        <h1>{privacy.title}</h1>
        {privacy.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 flex flex-col items-start gap-3">
          <Link href="/contact" className="link inline-flex min-h-11 items-center">
            Contact
          </Link>
          <a href={ui.sleads} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
            sleads.nl
          </a>
        </p>
      </div>
    </PageFrame>
  );
}
