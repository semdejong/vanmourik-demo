import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import AlsoBand from "@/components/AlsoBand";
import PageFrame from "@/components/PageFrame";

export const metadata: Metadata = {
  title: content.notFound.title,
};

export default function NotFound() {
  const { notFound } = content;
  return (
    <PageFrame section="niet-gevonden">
      <p className="greeting">{notFound.mark}</p>
      <h1 className="mt-4">{notFound.title}</h1>
      <p className="mt-8 max-w-[36rem]">{notFound.body}</p>
      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/" className="link inline-flex min-h-11 items-center">
          {notFound.home}
        </Link>
        <Link href="/contact" className="link inline-flex min-h-11 items-center">
          {notFound.contact}
        </Link>
      </p>
      <AlsoBand except="" title={content.shared.all} />
    </PageFrame>
  );
}
