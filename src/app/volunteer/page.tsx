import Image from "next/image";

const GOLD = "#E6C46A";
const NAVY = "#0B1F3A";

export default function VolunteerPage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/5 bg-white p-8 md:p-10 shadow-sm">
              <p className="text-sm font-semibold text-black/60">Get involved</p>
              <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
                Volunteer
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
                Your time can change someone’s week. Volunteer with PIUS OKOGIE
                MINISTRIES, INC. to support outreach, distribution, community
                care, and program growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/volunteer"
                  style={{ backgroundColor: GOLD }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
                >
                  Become a Volunteer
                </a>
                <a
                  href="/donate"
                  style={{ borderColor: NAVY, color: NAVY }}
                  className="inline-flex items-center justify-center rounded-xl border-2 bg-white px-6 py-3 font-semibold transition hover:bg-black/5"
                >
                  Donate Instead
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/volunteer/action.png"
                alt="Volunteers in action"
                width={1800}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Serve with purpose
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer roles */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Volunteer roles
          </h2>
          <div className="hidden h-[2px] w-40 bg-gold md:block" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Community outreach",
              body: "Support outreach events, help connect people to resources, and share accurate information.",
            },
            {
              title: "Program support",
              body: "Assist with organizing program materials, follow-up communication, and coordination.",
            },
            {
              title: "Food & clothing drives",
              body: "Help sort, pack, and distribute essentials with dignity and respect.",
            },
            {
              title: "Admin & operations",
              body: "Help behind the scenes: scheduling, documentation, and simple coordination tasks.",
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

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-navy px-6 py-10 text-navy shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">What to expect</h2>
          <p className="mt-3 max-w-3xl text-sm text-navy/80 md:text-base">
            We’ll keep it clear and practical. You’ll know exactly what’s
            needed, when it’s needed, and how your work connects to real
            outcomes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Simple onboarding",
                body: "You’ll receive clear instructions and expectations before you start.",
              },
              {
                title: "Flexible involvement",
                body: "Serve occasionally or consistently — we match roles to availability.",
              },
              {
                title: "Real impact",
                body: "You’ll see how your support helps people access care, essentials, and opportunity.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10"
              >
                <div className="h-2 w-12 bg-gold/80" />
                <h3 className="mt-4 text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-sm text-navy/80">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-xl font-semibold text-navy md:text-2xl">
            Ready to serve?
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
            If you’re ready, start here. If you’re not sure, you can still reach
            out — we’ll guide you to a good fit.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/volunteer"
              style={{ backgroundColor: GOLD }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
            >
              Volunteer Signup
            </a>
            <a
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-navy transition hover:bg-black/5"
            >
              Need Help Instead?
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
