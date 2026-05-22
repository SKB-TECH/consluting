"use client";

import { BriefcaseBusiness, FileCheck2, Handshake, LineChart, Map, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

const serviceIcons = [Map, BriefcaseBusiness, Handshake, FileCheck2, LineChart, ShieldCheck];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="section-padding bg-slate-50 py-24">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">{t.services.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">{t.services.title}</h2>
          </div>
        </FadeUp>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <FadeUp key={service.title} delay={index * 0.04}>
                <Card className="h-full bg-white">
                  <CardContent>
                    <Icon className="h-8 w-8 text-brand-600" />
                    <h3 className="mt-5 text-lg font-bold text-brand-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
