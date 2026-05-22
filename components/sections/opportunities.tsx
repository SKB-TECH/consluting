"use client";

import Image from "next/image";
import { Droplets, Factory, Leaf, Sun, Truck, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

const opportunitiesMedia = [
  { image: "/images/hydro.jpeg", icon: Droplets },
  { image: "/images/sol.png", icon: Sun },
  { image: "/images/agriculture.jpeg", icon: Leaf },
  { image: "/images/mining.jpeg", icon: Factory },
  { image: "/images/loghi.png", icon: Truck },
  { image: "/images/buld.png", icon: Building2 }
];

export function OpportunitiesSection() {
  const { t } = useI18n();

  return (
    <section id="opportunities" className="section-padding bg-white py-24">
      <div className="container-page">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">{t.opportunities.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">{t.opportunities.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{t.opportunities.description}</p>
          </div>
        </FadeUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.opportunities.items.map((item, index) => {
            const media = opportunitiesMedia[index];
            const Icon = media.icon;
            return (
              <FadeUp key={item.title} delay={index * 0.04}>
                <Card className="group h-full overflow-hidden transition hover:border-brand-200">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={media.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <CardContent>
                    <div className="flex h-11 w-11 items-center justify-center rounded bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-brand-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
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
