import Link from "next/link";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Year from "@/components/Year";

export default function Footer() {
  const { company, ui } = content;
  return (
    <footer data-section="footer" className="bg-vlak">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-36 wide:pb-24">
        <address className="not-italic">
          <span className="font-serif text-2xl font-semibold">{company.name}</span>
          <br />
          {company.street}
          <br />
          {company.postalCode} {company.city}
        </address>
        <div className="mt-6 flex flex-col items-start gap-2">
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta="bellen" className="inline-flex min-h-11 items-center gap-3">
              <span>{phone.label}</span>
              <span className="phone text-link">{phone.display}</span>
            </a>
          ))}
          <a href={`mailto:${company.email}`} data-cta="mailen" className="link inline-flex min-h-11 items-center">
            {company.email}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/privacy" className="link inline-flex min-h-11 items-center">
            {ui.privacy}
          </Link>
          <SleadsBadge />
        </div>
        <p className="mt-8">
          © <Year /> {company.name}
        </p>
      </div>
    </footer>
  );
}
