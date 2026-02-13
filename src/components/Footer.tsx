import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Thin gold accent line */}
        <div className="mb-10 h-[2px] w-24 bg-[#E6C46A]" />

        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + mission */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/pom-logo.png"
                alt="PIUS OKOGIE MINISTRIES"
                width={56}
                height={56}
                className="rounded-xl bg-white/5 ring-1 ring-white/10"
              />
              <div>
                <div className="text-lg font-semibold">
                  PIUS OKOGIE MINISTRIES, INC.
                </div>
                <div className="text-sm font-medium text-[#E6C46A]">
                  Global Community Outreach
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
              PIUS OKOGIE MINISTRIES, INC. is a nonprofit organization dedicated to expanding
              access to medical care, mental health support, food and clothing assistance,
              and entrepreneurship opportunities for underserved communities.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Transparency &amp; Trust</div>
              <p className="mt-2 text-sm text-white/80">
                We steward every donation responsibly and provide receipts for all gifts.
                Contributions may be tax-deductible to the extent permitted by law.
              </p>
              <p className="mt-2 text-xs text-white/60">EIN: (add EIN here)</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Programs", href: "/programs" },
                { label: "Get Help", href: "/get-help" },
                { label: "Donate", href: "/donate" },
                { label: "Volunteer", href: "/volunteer" },
                { label: "Partner", href: "/partner" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/75 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Contact</div>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div>
                Email:
                <a
                  className="ml-2 transition hover:text-white"
                  href="mailto:info@piusokogieministries.org"
                >
                  info@piusokogieministries.org
                </a>
              </div>
              <div>Phone: (add number)</div>
              <div>Address: (street, city, state, zip)</div>
            </div>

            <a
              href="#top"
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to top
            </a>
          </div>
        </div>

        {/* Bottom legal strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} PIUS OKOGIE MINISTRIES, INC. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-white/55">
          Serving with compassion. Building with purpose. Restoring lives together.
        </div>
      </div>
    </footer>
  );
}
