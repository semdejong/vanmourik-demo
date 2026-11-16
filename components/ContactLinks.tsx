import Link from "next/link";
import { content } from "@/content";

export default function ContactLinks() {
  const { phones, email } = content.company;
  return (
    <div className="mt-10 flex flex-col items-start gap-3">
      {phones.map((phone) => (
        <a key={phone.href} href={phone.href} data-cta="bellen" className="inline-flex min-h-11 items-center gap-3 text-ink">
          <span>{phone.label}</span>
          <span className="phone text-link">{phone.display}</span>
        </a>
      ))}
      <a href={`mailto:${email}`} data-cta="mailen" className="link inline-flex min-h-11 items-center">
        {email}
      </a>
      <Link href="/offerte" data-cta="offerte" className="btn mt-2">
        {content.ui.quote}
      </Link>
    </div>
  );
}
