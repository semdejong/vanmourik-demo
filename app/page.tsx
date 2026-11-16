import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import FlowLines from "@/components/FlowLines";
import HonestImage from "@/components/HonestImage";
import Practice from "@/components/Practice";
import WarmteFields from "@/components/WarmteFields";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

export default function Home() {
  const { home, company, shared } = content;
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

      <Practice />

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

      <figure data-section="kopstrook" className="kopfig mt-16">
        <HonestImage src="/img/foto-kop.jpg" alt={home.stripAlt} width={559} height={144} />
        <figcaption>{home.stripCaption}</figcaption>
      </figure>

      <section data-section="uitnodiging" className="measure mt-16">
        <p>{home.look}</p>
      </section>

      <WarmteFields />

      <section className="measure mt-16">
        <p>{home.invite}</p>
      </section>

      <section className="close-band" data-section="adres">
        <p className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-none font-semibold">{shared.anytime}</p>
        <address className="mt-6 not-italic">
          {company.name}
          <br />
          {company.street}
          <br />
          {company.postalCode} {company.city}
        </address>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/offerte" data-cta="offerte" className="btn">
            {content.ui.quote}
          </Link>
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta="bellen" className="btn btn-paper">
              {phone.display}
            </a>
          ))}
          <a href={`mailto:${company.email}`} data-cta="mailen" className="phone inline-flex min-h-11 items-center">
            {company.email}
          </a>
        </div>
      </section>
    </article>
  );
}
