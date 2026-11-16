import type { Metadata } from "next";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";
import MailForm from "@/components/MailForm";

export const metadata: Metadata = {
  title: content.contact.title,
  description: content.contact.description,
};

export default function ContactPage() {
  const { contact, company, form } = content;
  return (
    <PageFrame section="contact">
      <div className="measure">
        <h1>{contact.title}</h1>
        <p className="mt-8">{contact.intro}</p>
        <address className="mt-8 not-italic">
          {company.name}
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
