import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import FlowLines from "@/components/FlowLines";
import HonestImage from "@/components/HonestImage";
import WarmteFields from "@/components/WarmteFields";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

export default function Home() {
  const { home, company } = content;
  const [mottoLine, mottoPunch] = company.motto.split(": ");

  return (
    <article data-section="home" className="page rise">
      <header data-section="intro" className="measure">
        <h1 className="max-w-none">
          {home.title.replace(company.name, "").trim()}{" "}
          <span className="mt-1 block">{company.name}</span>
        </h1>
        <p className="mt-8">{home.intro}</p>
        <p className="mt-6 font-serif text-[1.65rem] leading-snug font-semibold">{home.experience}</p>
      </header>

      <section data-section="motto" className="mt-20">
        <p>{company.mottoLead}</p>
        <blockquote className="mt-5">
          <p className="motto">
            <span className="motto-line">{mottoLine}:</span>
            <span className="motto-punch">{mottoPunch}</span>
          </p>
        </blockquote>
        <div className="mt-8 max-w-3xl">
          <FlowLines variant="mark" />
        </div>
      </section>

      <figure data-section="kopstrook" className="mt-14">
        <HonestImage src="/img/foto-kop.jpg" alt={home.stripAlt} width={559} height={144} />
      </figure>

      <WarmteFields />

      <section data-section="uitnodiging" className="measure mt-20">
        <p>{home.look}</p>
        <p className="mt-4">{home.invite}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/offerte" data-cta="offerte" className="btn">
            {content.ui.quote}
          </Link>
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta="bellen" className="btn btn-ink phone">
              {phone.display}
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
