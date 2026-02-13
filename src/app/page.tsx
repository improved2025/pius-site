"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import { heroSlides } from "@/lib/slides";

const GOLD = "#E6C46A";

type Card = {
  title: string;
  desc: string;
  href: string;
  tag: string;
};

export default function Home() {
  return (
    <main>
      <HeroSlider slides={heroSlides} />

      {/* Community image (home/community.png) */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/home/community.png"
            alt="Community outreach"
            width={1600}
            height={900}
            priority
            className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px]"
          />

          {/* Premium overlay for readability + brand tone */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />

          {/* Small label */}
          <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
            Global Community Outreach
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              What We Do
            </h2>
            <p className="mt-1 text-sm text-black/60">
              Four focus areas. Real support. Practical outcomes.
            </p>
          </div>

          <div className="hidden h-[2px] w-44 bg-gold md:block" />
        </div>

        <div className="mt-8">
          <ProgramRow />
        </div>

        {/* Team image (team.png) */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/team.png"
                alt="Our team"
                width={1600}
                height={900}
                className="h-[260px] w-full object-cover sm:h-[340px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Our Team
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <h3 className="text-xl font-semibold text-navy">
                People behind the mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                We are a growing network of leaders, volunteers, and partners
                committed to restoring dignity through care, support, and
                opportunity.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/our-team"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-black/[0.02]"
                >
                  Meet Our Team
                </a>
                <a
                  href="/volunteer"
                  style={{ backgroundColor: "#0B1F3A" }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
                >
                  Volunteer
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-navy px-6 py-10 text-white shadow-sm md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to make a difference?</h3>
              <p className="mt-2 text-sm text-white/75">
                Support programs that restore dignity, care, and opportunity.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="/donate"
                style={{ backgroundColor: GOLD }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95 active:scale-[0.99]"
              >
                Donate
              </a>
              <a
                href="/volunteer"
                style={{ backgroundColor: "#0B1F3A" }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
              >
                Volunteer
              </a>
              <a
                href="/partner"
                style={{ backgroundColor: "#0B1F3A" }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
              >
                Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProgramRow() {
  const items: Card[] = useMemo(
    () => [
      {
        title: "Medical Access",
        desc: "Connecting families to essential healthcare services, referrals, and care navigation.",
        href: "/programs/medical-access",
        tag: "Care Navigation",
      },
      {
        title: "Mental Healthcare",
        desc: "Support that helps people stabilize, heal, and take their next step with dignity.",
        href: "/programs/mental-healthcare",
        tag: "Wellness Support",
      },
      {
        title: "Food & Clothing",
        desc: "Meeting basic needs with compassion, discretion, and consistent follow-through.",
        href: "/programs/food-clothing",
        tag: "Essential Needs",
      },
      {
        title: "Entrepreneurship",
        desc: "Skills, mentorship, and pathways that turn potential into real opportunity.",
        href: "/programs/entrepreneurship",
        tag: "Opportunity",
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const t = 10;
    setCanLeft(el.scrollLeft > t);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - t);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const slideBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.92) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Controls (clean + premium) */}
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => slideBy(-1)}
          disabled={!canLeft}
          className={[
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            "ring-1 ring-black/10 bg-white/70 text-navy hover:bg-white",
            "disabled:opacity-40 disabled:cursor-not-allowed",
          ].join(" ")}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => slideBy(1)}
          disabled={!canRight}
          className={[
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            "ring-1 ring-black/10 bg-white/70 text-navy hover:bg-white",
            "disabled:opacity-40 disabled:cursor-not-allowed",
          ].join(" ")}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Track */}
      <div
        ref={scrollerRef}
        className={[
          "flex gap-6 overflow-x-auto pb-2",
          "scroll-smooth snap-x snap-mandatory",
          "[-ms-overflow-style:none] [scrollbar-width:none]",
          "[&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        {items.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className={[
              "group snap-start shrink-0",
              "w-[86%] sm:w-[62%] lg:w-[38%] xl:w-[32%]",
              "rounded-3xl border border-black/10",
              "shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
              "transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.16)]",
            ].join(" ")}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.24), rgba(255,255,255,0) 38%), " +
                `linear-gradient(180deg, ${GOLD}, #D9B85B)`,
            }}
          >
            <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
                    {c.tag}
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">
                    {c.title}
                  </h3>
                </div>

                <div className="mt-1 grid h-12 w-12 place-items-center rounded-2xl bg-navy/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy" />
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-navy/85">
                {c.desc}
              </p>

              <div className="mt-7 flex items-center justify-between">
                <div className="h-[3px] w-16 bg-navy/70" />
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Explore
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Subtle “more content” cue */}
      <div className="mt-3 flex items-center justify-between text-xs text-black/45">
        <span>Swipe to explore</span>
        <span className="hidden sm:inline">Use arrows for next</span>
      </div>
    </div>
  );
}
