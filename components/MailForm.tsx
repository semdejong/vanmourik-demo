"use client";

import { FormEvent } from "react";
import { mailTo } from "@/lib/cta";

export default function MailForm({
  email,
  subject,
  submitLabel,
  note,
  cta,
  labels,
}: {
  email: string;
  subject: string;
  submitLabel: string;
  note: string;
  cta: "offerte" | "mailen";
  labels: {
    naam: string;
    telefoon: string;
    email: string;
    emailOptional: string;
    bericht: string;
  };
}) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const afzender = String(data.get("email") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const body = [
      "Goedendag,",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      ...(afzender ? [`E-mail: ${afzender}`] : []),
      "",
      bericht,
    ].join("\n");
    window.location.href = mailTo(email, subject, body);
  }

  const noteId = `${cta}-toelichting`;

  return (
    <form
      onSubmit={onSubmit}
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      aria-describedby={noteId}
      className="grid max-w-xl gap-5"
    >
      <p id={noteId}>{note}</p>
      <label className="field">
        <span>{labels.naam}</span>
        <input name="naam" type="text" autoComplete="name" required />
      </label>
      <label className="field">
        <span>{labels.telefoon}</span>
        <input name="telefoon" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <label className="field">
        <span>
          {labels.email} <span className="font-normal">({labels.emailOptional})</span>
        </span>
        <input name="email" type="email" autoComplete="email" inputMode="email" />
      </label>
      <label className="field">
        <span>{labels.bericht}</span>
        <textarea name="bericht" required rows={6} />
      </label>
      <button type="submit" data-cta={cta} className="btn w-fit">
        {submitLabel}
      </button>
    </form>
  );
}
