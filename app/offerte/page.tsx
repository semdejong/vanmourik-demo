import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import MailForm from "@/components/MailForm";

export const metadata: Metadata = {
  title: content.offerte.title,
  description: content.offerte.description,
};

export default function OffertePage() {
  const { offerte, company, form } = content;
  return (
    <PageFrame section="offerte">
      <div className="measure">
        <h1>{offerte.title}</h1>
        <p className="mt-8">{offerte.intro}</p>
        <MailForm
          email={company.email}
          subject={form.offerteSubject}
          submitLabel={form.offerteSubmit}
          note={form.note}
          cta="offerte"
          labels={form}
        />
        <p className="mt-12">{offerte.phonesLead}</p>
        <div className="mt-4 flex flex-col items-start gap-2">
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta="bellen" className="inline-flex min-h-11 items-center gap-3">
              <span>{phone.label}</span>
              <span className="phone text-link">{phone.display}</span>
            </a>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
