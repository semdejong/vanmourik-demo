import type { Metadata } from "next";
import { content } from "@/content";
import MailForm from "@/components/MailForm";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.offerte.title,
  description: content.offerte.description,
};

export default function OffertePage() {
  const { offerte, company, form } = content;
  return (
    <PageFrame section="offerte">
      <h1>{offerte.title}</h1>
      <p className="greeting mt-6">{offerte.greeting}</p>
      <p className="mt-6 max-w-[36rem]">{offerte.intro}</p>
      <div className="mt-10 grid items-start gap-x-12 gap-y-10 min-[900px]:grid-cols-[minmax(0,36rem)_minmax(16rem,1fr)]">
        <MailForm
          email={company.email}
          subject={form.offerteSubject}
          submitLabel={form.offerteSubmit}
          note={form.note}
          cta="offerte"
          labels={form}
        />
        <aside className="w-full max-w-64 justify-self-end border border-ink bg-vlak p-5">
          <p>{offerte.phonesLead}</p>
          <div className="mt-4 flex flex-col items-start gap-2">
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
          <p className="mt-6">
            {company.street}
            <br />
            {company.postalCode} {company.city}
          </p>
        </aside>
      </div>
    </PageFrame>
  );
}
