import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.notFound.title,
};

export default function NotFound() {
  const { notFound } = content;
  return (
    <PageFrame section="niet-gevonden">
      <div className="measure">
        <h1>{notFound.title}</h1>
        <p className="mt-8">{notFound.body}</p>
        <p className="mt-8 flex flex-col items-start gap-3">
          <Link href="/" className="link inline-flex min-h-11 items-center">
            {notFound.home}
          </Link>
          <Link href="/contact" className="link inline-flex min-h-11 items-center">
            {notFound.contact}
          </Link>
        </p>
      </div>
    </PageFrame>
  );
}
