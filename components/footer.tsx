"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="section-padding border-t border-slate-200 bg-white py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 md:flex-row">
        <Image src="/images/logo.jpeg" alt="BJA Consulting" width={160} height={60} className="h-10 w-auto object-contain" />
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} BJA Consulting SARL. {t.footer.text}</p>
      </div>
    </footer>
  );
}
