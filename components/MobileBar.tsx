import Link from "next/link";
import { content } from "@/content";
import FlowLines from "@/components/FlowLines";

export default function MobileBar() {
  const phone = content.company.phones[0];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 wide:hidden" data-section="mobiele-balk">
      <FlowLines />
      <div className="grid grid-cols-2 bg-papier">
        <a
          href={phone.href}
          data-cta="bellen"
          className="inline-flex min-h-14 items-center justify-center border-r border-ink font-medium text-ink"
        >
          {content.ui.call}
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-14 items-center justify-center bg-oranje font-medium text-ink"
        >
          {content.ui.barQuote}
        </Link>
      </div>
    </div>
  );
}
