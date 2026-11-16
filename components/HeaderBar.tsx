"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FlowLines from "@/components/FlowLines";

type Item = { label: string; href: string };
type Phone = { label: string; short: string; display: string; href: string };

export default function HeaderBar({
  nav,
  phones,
  name,
  menuLabel,
  closeLabel,
  menuName,
  mainName,
}: {
  nav: Item[];
  phones: Phone[];
  name: string;
  menuLabel: string;
  closeLabel: string;
  menuName: string;
  mainName: string;
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1000px)");
    const onChange = () => {
      if (media.matches) setOpenPath(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpenPath(null);
          buttonRef.current?.focus();
        }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="surface-ink sticky top-0 z-40 bg-ink text-papier">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="inline-flex shrink-0">
            <Image
              src="/logo.png"
              alt={name}
              width={365}
              height={135}
              loading="eager"
              fetchPriority="high"
              style={{ height: 52, width: "auto" }}
            />
          </Link>
          <div className="hidden items-center gap-5 wide:flex">
            {phones.map((phone) => (
              <a key={phone.href} href={phone.href} data-cta="bellen" className="phone inline-flex min-h-11 items-center text-papier">
                <span className="mr-2">{phone.short}</span>
                {phone.display}
              </a>
            ))}
          </div>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 items-center border border-papier px-3 text-[17px] font-medium wide:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? closeLabel : menuLabel}
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 pb-2 wide:hidden">
          {phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta="bellen" className="phone inline-flex min-h-11 items-center text-papier">
              <span className="sr-only">{phone.label} </span>
              {phone.display}
            </a>
          ))}
        </div>
        <nav aria-label={mainName} className="hidden flex-nowrap items-center gap-x-4 pb-2 wide:flex">
          {nav.map((item) =>
            item.href === "/offerte" ? (
              <Link
                key={item.href}
                href={item.href}
                data-cta="offerte"
                aria-current={pathname === item.href ? "page" : undefined}
                className="btn ml-auto whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`inline-flex min-h-11 items-center whitespace-nowrap text-[17px] text-papier ${
                  pathname === item.href ? "shadow-[inset_0_-2px_0_0_#E0953A]" : ""
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
      <FlowLines />
      <nav
        id="mobiel-menu"
        aria-label={menuName}
        className={`menu-panel absolute inset-x-0 top-full z-50 min-h-[calc(100dvh-100%)] overflow-y-auto border-b border-ink bg-papier text-ink wide:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="pb-24">
          {nav.map((item) => (
            <li key={item.href} className="border-t border-ink">
              <Link
                href={item.href}
                data-cta={item.href === "/offerte" ? "offerte" : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`flex min-h-12 items-center px-5 text-[17px] ${
                  item.href === "/offerte" ? "bg-oranje font-medium text-ink" : "text-ink"
                } ${pathname === item.href && item.href !== "/offerte" ? "font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
