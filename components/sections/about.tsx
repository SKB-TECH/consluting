"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-brand-900 py-24 text-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeUp>
          <Image src="/images/drc.jpg" alt="BJA Consulting logo" width={560} height={440} className={"rounded shadow-sm "} />
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-100">{t.about.label}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.about.title}</h2>
          <p className="mt-5 leading-8 text-brand-50">{t.about.description}</p>
          <div className="mt-8 grid gap-4">
            {t.about.points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-brand-700"><Check className="h-4 w-4" /></span>
                <span className="text-sm text-brand-50">{point}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
