import { content } from "@/content";

/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href={content.ui.sleads}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads, ga naar sleads.nl"
      className="fixed right-3 bottom-[5.25rem] z-50 inline-flex min-h-11 items-center border border-ink bg-wit px-3 text-[14px] font-medium text-ink wide:right-4 wide:bottom-4 print:hidden"
    >
      Concept door <span className="ml-1 font-semibold">Sleads</span>
    </a>
  );
}
