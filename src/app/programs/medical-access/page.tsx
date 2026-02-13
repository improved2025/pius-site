import Image from "next/image";

const GOLD = "#E6C46A";
const NAVY = "#0B1F3A";

export default function MedicalAccessPage() {
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
                Medical Access
              </h1>

              <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
                We help individuals and families connect to essential healthcare
                resources. For many people, the problem is not desire, it’s
                access. We bridge that gap through guidance, referrals, and
                follow-through.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/get-help"
                  style={{ backgroundColor: GOLD }}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
                >
                  Get Help
                </a>

                <a
                  href="/donate"
                  style={{ borderColor: NAVY, color: NAVY }}
                  className="inline-flex items-center justify-center rounded-xl border-2 bg-white px-6 py-3 font-semibold transition hover:bg-black/[0.03]"
                >
                  Donate
                </a>
              </div>

              <div className="mt-8 h-[2px] w-16 bg-gold/80" />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/programs/medical-access/banner.png"
                alt="Medical access support"
                width={1800}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5">
                <div className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur">
                  Care navigation and referrals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
            <div className="h-2 w-12 bg-gold/80" />
            <div className="mt-4 text-lg font-bold text-navy">What we provide</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>Care navigation and resource guidance</li>
              <li>Referrals to trusted clinics and providers</li>
              <li>Health education and preventive support</li>
              <li>Help connecting to community services</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
            <div className="h-2 w-12 bg-gold/80" />
            <div className="mt-4 text-lg font-bold text-navy">How to get help</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>Visit the Get Help page</li>
              <li>Share what you need</li>
              <li>We respond and guide you to the best option</li>
              <li>Follow-up support as needed</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl bg-navy px-6 py-10 text-navy shadow-sm md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Need support right now?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-navy/80 md:text-base">
                Start with one message. We’ll respond with clear next steps and
                connect you to appropriate resources when available.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/get-help"
                style={{ backgroundColor: GOLD }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
              >
                Get Help
              </a>
              <a
                href="/donate"
                style={{ backgroundColor: NAVY }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-95"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
