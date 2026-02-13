import Image from "next/image";

const GOLD = "#E6C46A";
const NAVY = "#0B1F3A";

export default function EntrepreneurshipPage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold text-black/60">Program</p>
              <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
                Entrepreneurship
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
                Creating pathways to independence and opportunity. We support
                people with skills, mentorship, and practical guidance that
                builds long-term stability.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/donate"
                  style={{ backgroundColor: GOLD }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
                >
                  Donate
                </a>
                <a
                  href="/volunteer"
                  style={{ borderColor: NAVY, color: NAVY }}
                  className="inline-flex items-center justify-center rounded-xl border-2 bg-white px-6 py-3 font-semibold transition hover:bg-black/5"
                >
                  Volunteer
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/programs/entrepreneurship/banner.png"
                alt="Entrepreneurship training and mentorship"
                width={1800}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Skills • Mentorship • Opportunity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Core pillars
          </h2>
          <div className="hidden h-[2px] w-40 bg-gold md:block" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Skills training",
              body: "Practical training that helps people build confidence and capability.",
            },
            {
              title: "Mentorship",
              body: "Guidance from people who can help shorten the learning curve.",
            },
            {
              title: "Resource connections",
              body: "Connections to tools, opportunities, and support systems that help growth stick.",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]"
            >
              <div className="h-2 w-12 bg-gold/80" />
              <h3 className="mt-4 text-lg font-bold text-navy">{x.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {x.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What participants gain */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-navy px-6 py-10 text-navy shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            What participants gain
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-navy/80 md:text-base">
            We focus on clarity, consistency, and practical steps — not hype.
            The goal is stability, income potential, and real progress.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "A clearer direction and plan",
              "Improved skills and confidence",
              "Mentorship and accountability",
              "Connections to helpful resources",
            ].map((t) => (
              <div
                key={t}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="h-2 w-12 bg-gold/80" />
                <p className="mt-4 text-sm text-navy/85">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-xl font-semibold text-navy md:text-2xl">
            Want to support opportunity at scale?
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
            You can sponsor training, provide mentorship, donate toward
            resources, or partner with us to expand programs.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/partner"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-navy transition hover:bg-black/5"
            >
              Partner
            </a>
            <a
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-navy transition hover:bg-black/5"
            >
              Get Help
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
