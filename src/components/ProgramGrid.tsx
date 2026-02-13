"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Program = {
  id: string;
  title: string;
  desc: string;
  impact: string;
  details: string[];
  helps: string[];
  bullets: string[];
  href: string;
};

const GOLD = "#E6C46A";

const programs: Program[] = [
  {
    id: "medical",
    title: "Medical Access",
    desc: "Connecting families to essential healthcare services.",
    impact:
      "We help people move from confusion to care with guidance, referrals, and follow-through.",
    details: [
      "Many families don’t lack desire for care, they lack access. We bridge that gap by helping people understand options and connect to the right support.",
      "Our approach is practical: guidance, referrals, and follow-up so people don’t fall through the cracks.",
    ],
    helps: [
      "Families struggling to access care",
      "Individuals navigating medical systems",
      "Community members needing trusted referrals",
    ],
    bullets: [
      "Community outreach and care navigation",
      "Referrals to trusted providers and clinics",
      "Health education and preventive guidance",
      "Help accessing appointments and resources",
    ],
    href: "/programs/medical-access",
  },
  {
    id: "mental",
    title: "Mental Healthcare",
    desc: "Supporting mental wellness and emotional healing.",
    impact:
      "Support, awareness, and pathways to care — with dignity and confidentiality.",
    details: [
      "Mental health struggles are real, and silence makes them worse. We help people find support without shame.",
      "We connect individuals to resources and create community conversations that reduce stigma.",
    ],
    helps: [
      "Individuals facing stress, anxiety, or depression",
      "Families seeking support and guidance",
      "Community members needing referral pathways",
    ],
    bullets: [
      "Support pathways and referral connections",
      "Awareness programs that reduce stigma",
      "Safe spaces for healing conversations",
      "Community-based mental wellness support",
    ],
    href: "/programs/mental-healthcare",
  },
  {
    id: "food",
    title: "Food & Clothing",
    desc: "Meeting basic needs with dignity and care.",
    impact:
      "Relief support delivered with compassion, respect, and consistency.",
    details: [
      "When basic needs aren’t met, everything else suffers. We step in with food and essentials so families can breathe again.",
      "We prioritize dignity: people should never feel embarrassed for needing help.",
    ],
    helps: [
      "Families facing short-term hardship",
      "Individuals in urgent need of essentials",
      "Community members impacted by crisis",
    ],
    bullets: [
      "Food assistance and relief support",
      "Clothing drives and essentials distribution",
      "Seasonal outreach for families in need",
      "Emergency response support when needed",
    ],
    href: "/programs/food-clothing",
  },
  {
    id: "entre",
    title: "Entrepreneurship",
    desc: "Creating pathways to independence and opportunity.",
    impact:
      "Skills training and mentorship that turn potential into stability.",
    details: [
      "Short-term help matters, but long-term change comes from opportunity. We support people with skills and guidance that build independence.",
      "We focus on practical training, mentorship, and connections to resources.",
    ],
    helps: [
      "Individuals seeking a path to self-sufficiency",
      "Aspiring entrepreneurs and small business starters",
      "Community members ready to grow skills",
    ],
    bullets: [
      "Skills development and mentorship",
      "Resource connections for small business growth",
      "Practical training for long-term stability",
      "Workshops that build confidence and capacity",
    ],
    href: "/programs/entrepreneurship",
  },
];

export default function ProgramGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const active = useMemo(
    () => programs.find((p) => p.id === activeId) || null,
    [activeId]
  );

  // Always attach ESC listener (reliable)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  // Focus modal container so ESC works even if user last clicked somewhere odd
  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => modalRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [active]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              What We Do
            </h2>
            <p className="mt-2 text-sm text-black/60">
              Four focus areas. Real support. Lasting impact.
            </p>
          </div>
          <div className="hidden h-[2px] w-40 bg-gold md:block" />
        </div>

        {/* GOLD CARDS */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {programs.map((p) => (
            <motion.button
              key={p.id}
              type="button"
              layoutId={`card-${p.id}`}
              onClick={() => setActiveId(p.id)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: GOLD }}
              className="rounded-2xl p-6 text-left shadow-md"
            >
              <div className="flex items-center justify-between">
                <motion.h3
                  layoutId={`title-${p.id}`}
                  className="font-semibold text-navy"
                >
                  {p.title}
                </motion.h3>
                <motion.span className="h-2 w-2 rounded-full bg-navy" />
              </div>

              <motion.p
                layoutId={`desc-${p.id}`}
                className="mt-3 text-sm leading-relaxed text-white"
              >
                {p.desc}
              </motion.p>

              <p className="mt-3 text-xs font-semibold text-navy/90">
                {p.impact}
              </p>

              <div className="mt-4 h-[2px] w-12 bg-navy" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            />

            <motion.div
             className="fixed inset-0 z-[70] overflow-y-auto px-4 pt-6 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            >
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                layoutId={`card-${active.id}`}
                className="mx-auto mt-2 w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl outline-none"
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                {/* Header */}
                <div className="bg-navy px-8 py-5 text-white">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-3xl">
                      <motion.h3
                        layoutId={`title-${active.id}`}
                        className="text-2xl font-semibold md:text-3xl"
                      >
                        {active.title}
                      </motion.h3>

                      <motion.p
                        layoutId={`desc-${active.id}`}
                        className="mt-3 text-sm text-white/80 md:text-base"
                      >
                        {active.desc}
                      </motion.p>

                      <p className="mt-3 text-sm text-white/80 md:text-base">
                        {active.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="/donate"
                        style={{ backgroundColor: GOLD }}
                        className="rounded-xl px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-95"
                      >
                        Donate
                      </a>

                      <a
                        href="/volunteer"
                        style={{ borderColor: "#0B2A4A", color: "#0B2A4A" }}
                        className="rounded-xl border-2 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
                      >
                        Volunteer
                      </a>

                      <a
                        href={active.href}
                        className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                      >
                        Learn more
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveId(null)}
                        className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6">
                  <div className="grid gap-8 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <div className="text-sm font-semibold text-navy">
                        Overview
                      </div>

                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-black/70">
                        {active.details.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-6 text-sm font-semibold text-navy">
                        Who this helps
                      </div>

                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
                        {active.helps.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-5">
                        <div className="text-sm font-semibold text-navy">
                          What this includes
                        </div>

                        <ul className="mt-4 space-y-3 text-sm text-black/70">
                          {active.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span
                                className="mt-2 h-2 w-2 rounded-full"
                                style={{ backgroundColor: GOLD }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-4 text-xs text-black/55">
                        Tip: Press <span className="font-semibold">ESC</span> to
                        close.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-black/5 px-8 py-3 text-xs text-black/55">
                  <span>PIUS OKOGIE MINISTRIES, INC.</span>
                  <span className="text-navy/70">Global Community Outreach</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
