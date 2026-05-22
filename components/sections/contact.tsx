"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-padding bg-slate-50 py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeUp>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">{t.contact.label}</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-5 leading-7 text-slate-600">{t.contact.description}</p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-600" /> contact@bja-consult.com</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-600" />
              +243 858 463 676, +1(267) 307-0575, +1 (215) 715-6453
            </div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-600" /> {t.contact.location}</div>
          </div>
        </FadeUp>
        <FadeUp delay={0.12}>
          <form className="rounded border border-slate-200 bg-white p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder={t.contact.fullName} />
              <Input placeholder={t.contact.company} />
              <Input placeholder={t.contact.country} />
              <Input placeholder={t.contact.email} type="email" />
            </div>
            <Input className="mt-4" placeholder={t.contact.interest} />
            <Textarea className="mt-4" placeholder={t.contact.message} />
            <Button type="submit" size="lg" className="mt-6 w-full">{t.contact.button}</Button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
