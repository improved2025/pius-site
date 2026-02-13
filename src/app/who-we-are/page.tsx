import Image from "next/image";

export default function WhoWeAre() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-20 pb-20">
      {/* Hero */}
      <section className="grid gap-6 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-5">
          <div className="surface p-10">
            <span className="text-sm font-semibold text-gold">About Us</span>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-navy">
              Who We Are
            </h1>

            <p className="mt-4 max-w-2xl text-black/70">
              PIUS OKOGIE MINISTRIES, INC. is a nonprofit organization committed to
              restoring dignity and opportunity through access to care, practical
              support, and sustainable pathways forward.
            </p>

            <div className="mt-6 h-[2px] w-16 bg-gold/80" />
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/home/community.png"
              alt="Community outreach"
              width={1800}
              height={1000}
              className="h-[320px] w-full object-cover sm:h-[420px] md:h-[480px]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Vision */}
        <div className="surface p-8">
          <h2 className="text-xl font-semibold text-navy">Our Vision</h2>
          <p className="mt-4 text-black/70 leading-relaxed">
            To build an enabling platform where disadvantaged individuals and
            families in our communities gain meaningful access to mental
            healthcare, food security, and entrepreneurial opportunities.
          </p>

          <p className="mt-3 text-black/70 leading-relaxed">
            We envision communities where no one is left without support, where
            mental wellness is prioritized, basic needs are met with dignity,
            and opportunity replaces limitation.
          </p>

          <div className="mt-6 h-[3px] w-16 bg-gold/80" />
        </div>

        {/* Mission */}
        <div className="surface p-8">
          <h2 className="text-xl font-semibold text-navy">Our Mission</h2>
          <p className="mt-4 text-black/70 leading-relaxed">
            To collaborate with like-minded organizations, partners, and leaders
            across the world to deliver practical solutions that restore hope
            and stability.
          </p>

          <p className="mt-3 text-black/70 leading-relaxed">
            We work to bring healing to the mentally challenged, nourishment to
            the hungry, and entrepreneurial pathways to bright individuals who
            lack resources but not potential.
          </p>

          <p className="mt-3 text-black/70 leading-relaxed">
            Through strategic partnerships, community engagement, and
            accountable stewardship, we translate compassion into action and
            opportunity into sustainable impact.
          </p>

          <div className="mt-6 h-[3px] w-16 bg-gold/80" />
        </div>
      </section>

      {/* Core values */}
      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="surface p-7 shadow-sm">
          <h3 className="font-semibold text-navy">Compassion with Structure</h3>
          <p className="mt-2 text-sm text-black/70">
            We lead with empathy, guided by clear processes that ensure support
            reaches those who need it most.
          </p>
        </div>

        <div className="surface p-7 shadow-sm">
          <h3 className="font-semibold text-navy">Community First</h3>
          <p className="mt-2 text-sm text-black/70">
            Our work begins by listening. Every program is shaped by real needs
            on the ground.
          </p>
        </div>

        <div className="surface p-7 shadow-sm">
          <h3 className="font-semibold text-navy">Integrity & Accountability</h3>
          <p className="mt-2 text-sm text-black/70">
            We steward resources responsibly and operate with transparency in
            everything we do.
          </p>
        </div>
      </section>
    </main>
  );
}
