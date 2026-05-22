"use client";

import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

export function ProcessSection() {
  const { t } = useI18n();

  return (
    <section id="process" className="section-padding bg-white py-24">
      <div className="container-page">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">{t.process.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">{t.process.title}</h2>
          </div>
        </FadeUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <FadeUp key={step.title} delay={index * 0.05}>
              <div className="h-full rounded border border-slate-200 bg-white p-6">
                <div className="text-4xl font-bold text-brand-100">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 text-xl font-bold text-brand-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
