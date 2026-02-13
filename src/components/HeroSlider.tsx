"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Slide } from "@/lib/slides";

export default function HeroSlider({
  slides,
  headline = "Restoring Lives Through Care and Opportunity",
}: {
  slides: Slide[];
  headline?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const dots = useMemo(() => slides.map((_, i) => i), [slides]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const id = setInterval(() => emblaApi.scrollNext(), 4200);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-navy">
      {/* Slider */}
      <div ref={emblaRef} className="h-[86vh]">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={s.src} className="relative h-full min-w-full">
              {/* Cinematic slow zoom per slide */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 8, ease: "easeOut" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.src})` }}
                  aria-label={s.alt}
                  role="img"
                />
              </motion.div>

              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/30" />
              {/* Extra slight vignette */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed content (static across all slides) */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {headline}
            </h1>

            <p className="mt-4 text-sm font-medium tracking-wide text-gold md:text-base">
              Medical Access • Mental Healthcare • Food &amp; Clothing • Entrepreneurship
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95 active:scale-[0.99]"
              >
                Donate
              </a>

              <a
                href="/get-help"
                className="inline-flex items-center justify-center rounded-xl border border-gold/80 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Get Help
              </a>

              <a
                href="/who-we-are"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Who We Are
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots + subtle scroll hint */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {dots.map((i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="h-2.5 w-2.5 rounded-full border border-white/40"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`block h-full w-full rounded-full transition ${
                    selected === i ? "bg-gold" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          <motion.div
            className="hidden items-center gap-2 text-xs text-white/70 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <motion.span
              className="inline-block h-5 w-[2px] rounded-full bg-gold/80"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            Scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}
