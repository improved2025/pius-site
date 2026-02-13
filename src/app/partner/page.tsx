import Image from "next/image";

const GOLD = "#E6C46A";
const NAVY = "#0B1F3A";

export default function PartnerPage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold text-black/60">Work with us</p>
              <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
                Partner
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
                Partnerships help us scale impact without losing quality. If
                you’re an organization, clinic, business, or community group —
                let’s build something that truly serves people.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/donate"
                  style={{ backgroundColor: GOLD }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
                >
                  Sponsor a Program
                </a>
                <a
                  href="/volunteer"
                  style={{ borderColor: NAVY, color: NAVY }}
                  className="inline-flex items-center justify-center rounded-xl border-2 bg-white px-6 py-3 font-semibold transition hover:bg-black/5"
                >
                  Volunteer With Us
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/partner/collaboration.png"
                alt="Partnership collaboration"
                width={1800}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Build impact together
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Partnership types
          </h2>
          <div className="hidden h-[2px] w-40 bg-gold md:block" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Community partners",
              body: "Collaborate on outreach, events, and resource distribution to expand local impact.",
            },
            {
              title: "Medical and care partners",
              body: "Support referrals, screenings, and access pathways with trusted clinical relationships.",
            },
            {
              title: "Business & sponsor partners",
              body: "Fund programs, provide supplies, and help us operate with excellence and consistency.",
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

      {/* Why partner */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-navy px-6 py-10 text-navy shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why partner with us
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-navy/80 md:text-base">
            We keep our programs grounded in real needs. Partnerships help us
            expand responsibly — with transparency and measurable outcomes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Clear collaboration goals",
              "Respectful, dignified service delivery",
              "Transparent stewardship of resources",
              "Community trust and long-term focus",
            ].map((t) => (
              <div
                key={t}
                className="rounded-3xl bg-navy/5 p-6 ring-1 ring-white/10"
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
            Let’s talk partnership
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
            If you’re ready to partner, reach out. We’ll respond with next steps
            and a simple plan.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-navy transition hover:bg-black/5"
            >
              Contact / Inquiry
            </a>
            <a
              href="/donate"
              style={{ backgroundColor: GOLD }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
            >
              Make a Sponsorship Gift
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
