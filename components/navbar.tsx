"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n, type Locale } from "@/lib/i18n";

export function Navbar() {
  const { locale, setLocale, t } = useI18n();

  const links = [
    { href: "#opportunities", label: t.nav.opportunities },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur">
      <div className="container-page section-padding flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="flex shrink-0 items-center gap-3">
          <Image src="/images/logo.jpeg" alt="BJA Consulting" width={180} height={60} className="h-12 w-auto object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded border border-slate-200 bg-white p-1">
            {(["en", "fr"] as Locale[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                className={`rounded px-3 py-1.5 text-xs font-semibold transition ${locale === item ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          {/*<Button asChild className="hidden md:inline-flex">*/}
          {/*  <Link href="#contact">{t.nav.cta}</Link>*/}
          {/*</Button>*/}
        </div>
      </div>
    </header>
  );
}
