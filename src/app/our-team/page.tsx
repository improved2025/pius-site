import Image from "next/image";

const GOLD = "#E6C46A";

export default function OurTeamPage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/5 bg-white p-8 md:p-10 shadow-sm">
              <p className="text-sm font-semibold text-black/60">Our Team</p>
              <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
                People Behind the Mission
              </h1>
              <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
                We are a growing network of leaders, volunteers, and partners
                committed to restoring dignity through care, support, and
                opportunity.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/volunteer"
                  style={{ backgroundColor: "#0B1F3A" }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
                >
                  Volunteer
                </a>
                <a
                  href="/partner"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-black/[0.02]"
                >
                  Partner With Us
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/team/team.png"
                alt="Our team"
                width={1800}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Building impact together
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Executive Director (ADDED) */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid items-center gap-6 md:grid-cols-12">
          {/* Founder Image */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/team/founder.png"
                alt="Founder"
                width={1000}
                height={1200}
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </div>

          {/* Founder Text */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-black/60">
                Founder & Executive Director
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
                Pius Okogie
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-black/70">
                Pius Okogie Ministries exists to restore dignity and create
                opportunity for individuals and families facing hardship.
                Through community-based programs in healthcare access, mental
                wellness, essential needs, and entrepreneurship, the ministry
                delivers practical help with compassion and consistency.
              </p>

              <div className="mt-6 h-[3px] w-16 bg-gold/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Team members (placeholder cards) */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Leadership & Volunteers
          </h2>
          <div className="hidden h-[2px] w-40 bg-gold md:block" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Executive Director",
              role: "Leadership • Vision • Partnerships",
            },
            {
              name: "Program Lead",
              role: "Operations • Community Support",
            },
            {
              name: "Volunteer Coordinator",
              role: "Volunteer Care • Outreach",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-navy">{m.name}</h3>
                  <p className="mt-2 text-sm text-black/65">{m.role}</p>
                </div>
                <div
                  className="h-10 w-10 rounded-2xl"
                  style={{ backgroundColor: GOLD }}
                />
              </div>
              <div className="mt-6 h-[3px] w-16 bg-gold/80" />
            </div>
          ))}
        </div>

        {/* Trust footer stripe */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm border border-black/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-navy">
                Want to serve with us?
              </h3>
              <p className="mt-1 text-sm text-black/65">
                Join the mission through volunteering, partnering, or donating.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/donate"
                style={{ backgroundColor: GOLD }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-95 active:scale-[0.99]"
              >
                Donate
              </a>
              <a
                href="/volunteer"
                style={{ backgroundColor: "#0B1F3A" }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
