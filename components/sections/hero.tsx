"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion-wrapper";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
      <section id="home" className="relative bg-white">
        <div className="relative min-h-[20px] overflow-hidden">
          <Image
              src="/images/bg.jpeg"
              alt="BJA Consulting"
              fill
              priority
              className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

          <div className="relative z-10 flex min-h-[820px] items-center justify-center px-4 text-center">
            <FadeUp>
              <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
                  {t.hero.title}
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  {t.hero.description}
                </p>

                <div className="mt-8 flex justify-center gap-3">
                  <Button asChild className="rounded-none bg-white px-6 text-brand-900 hover:bg-white/90">
                    <Link href="#opportunities">{t.hero.secondary}</Link>
                  </Button>

                  <Button asChild className="rounded-none bg-brand-700 px-6 text-white hover:bg-brand-800">
                    <Link href="#contact">{t.hero.primary}</Link>
                  </Button>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
  );
}
