const GOLD = "#E6C46A";
const NAVY = "#0B1F3A";

export default function DonatePage() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold text-black/60">Support the Mission</p>
          <h1 className="mt-2 text-3xl font-semibold text-navy md:text-5xl">
            Donate
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Your generosity helps us expand access to care, provide essential
            support, and create life-changing opportunities for individuals and
            families in need. Every gift strengthens our ability to serve with
            dignity, compassion, and consistency.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#bank-transfer"
              style={{ backgroundColor: GOLD }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-navy transition hover:brightness-95"
            >
              Give by Bank Transfer
            </a>
            <a
              href="#mail-a-check"
              style={{ backgroundColor: NAVY }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-95"
            >
              Mail a Check
            </a>
          </div>

          <div className="mt-8 h-[2px] w-16 bg-gold/80" />
        </div>
      </section>

      {/* Giving Options */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Bank Transfer */}
          <div id="bank-transfer" className="lg:col-span-7">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
              <div className="h-2 w-12 bg-gold/80" />
              <h2 className="mt-4 text-2xl font-semibold text-navy">
                Bank Transfer
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70 md:text-base">
                You can make your donation directly into our ministry bank
                account using the details below.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F7F8FA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                    Bank Name
                  </p>
                  <p className="mt-2 text-base font-semibold text-navy">
                    Bank of America
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F8FA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                    Routing Number
                  </p>
                  <p className="mt-2 text-base font-semibold text-navy">
                    061000052
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F8FA] p-5 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                    Account Number
                  </p>
                  <p className="mt-2 break-all text-base font-semibold text-navy">
                    334054757497
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-black/65">
                Kindly keep your payment confirmation for your records. For large
                gifts or partnership sponsorships, you may also reach out for
                additional coordination.
              </p>
            </div>
          </div>

          {/* Check Mailing */}
          <div id="mail-a-check" className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
              <div className="h-2 w-12 bg-gold/80" />
              <h2 className="mt-4 text-2xl font-semibold text-navy">
                Mail a Check
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70 md:text-base">
                Checks can be mailed to the address below.
              </p>

              <div className="mt-6 rounded-2xl bg-[#F7F8FA] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                  Mailing Address
                </p>
                <p className="mt-3 text-base leading-relaxed font-semibold text-navy">
                  3970 Crestwater Lane
                  <br />
                  Snellville, GA 30039
                </p>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-black/65">
                Please make checks payable to{" "}
                <span className="font-semibold text-navy">
                  PIUS OKOGIE MINISTRIES, INC.
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-navy px-6 py-10 text-navy shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why your support matters
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-navy/80 md:text-base">
            Your donation helps us respond with compassion and structure. It
            strengthens programs that connect people to help, restore dignity,
            and open pathways to long-term stability.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Healthcare Access",
                body: "Support practical pathways to medical care and guidance.",
              },
              {
                title: "Essential Needs",
                body: "Help families receive food, clothing, and urgent support.",
              },
              {
                title: "Opportunity",
                body: "Strengthen programs that create hope through entrepreneurship.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="h-2 w-12 bg-gold/80" />
                <h3 className="mt-4 text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-sm text-navy/80">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-xl font-semibold text-navy md:text-2xl">
            Thank you for giving
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
            Every act of generosity helps us serve with greater reach and
            greater consistency. Thank you for standing with us as we bring
            care, support, and opportunity to the people who need it most.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/partner"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-navy transition hover:bg-black/5"
            >
              Become a Partner
            </a>
            <a
              href="/volunteer"
              style={{ backgroundColor: NAVY }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-95"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}