export default function ProgramsPage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-black/5 bg-white p-8 md:p-10 shadow-sm">
          <p className="text-sm font-semibold text-black/60">Our Programs</p>
          <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
            Programs
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            We focus on four areas that directly improve lives: healthcare access,
            mental wellness, essential needs, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Medical Access",
              href: "/programs/medical-access",
              desc: "Helping families connect to healthcare services.",
            },
            {
              title: "Mental Healthcare",
              href: "/programs/mental-healthcare",
              desc: "Supporting emotional wellness and healing.",
            },
            {
              title: "Food & Clothing",
              href: "/programs/food-clothing",
              desc: "Meeting basic needs with dignity.",
            },
            {
              title: "Entrepreneurship",
              href: "/programs/entrepreneurship",
              desc: "Creating pathways to independence.",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-3xl border border-black/5 bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                <span className="mt-2 h-3 w-3 rounded-full bg-gold opacity-80 transition group-hover:opacity-100" />
              </div>

              <p className="mt-3 text-base leading-relaxed text-black/70">
                {p.desc}
              </p>

              <div className="mt-6 h-[3px] w-16 bg-gold/80 transition-all group-hover:w-24" />

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
