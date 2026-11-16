import type { Metadata } from "next";
import { content } from "@/content";
import MailForm from "@/components/MailForm";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.contact.title,
  description: content.contact.description,
};

export default function ContactPage() {
  const { contact, company, form, shared } = content;
  return (
    <PageFrame section="contact">
      <div className="grid items-start gap-12 min-[900px]:grid-cols-[minmax(16rem,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <h1>{contact.title}</h1>
          <p className="mt-8">{contact.intro}</p>
          <div className="close-band close-band--in">
            <p className="font-serif text-[2rem] leading-none font-semibold">{shared.anytime}</p>
            <address className="mt-5 not-italic">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </address>
            <div className="mt-5 flex flex-col items-start gap-1">
              {company.phones.map((phone) => (
                <a key={phone.href} href={phone.href} data-cta="bellen" className="inline-flex min-h-11 items-center gap-3">
                  <span>{phone.label}</span>
                  <span className="phone">{phone.display}</span>
                </a>
              ))}
              <a href={`mailto:${company.email}`} data-cta="mailen" className="phone inline-flex min-h-11 items-center">
                {company.email}
              </a>
            </div>
          </div>
        </div>
        <MailForm
          email={company.email}
          subject={form.contactSubject}
          submitLabel={form.contactSubmit}
          note={form.note}
          cta="mailen"
          labels={form}
        />
      </div>
    </PageFrame>
  );
}
