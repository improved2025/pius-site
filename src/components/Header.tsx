"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Our Team", href: "/our-team" }, // ← ADDED
  { label: "Programs", href: "/programs" },
  { label: "Get Help", href: "/get-help" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Partner", href: "/partner" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          scrolled
             ? "bg-white/90 backdrop-blur border-b border-black/10 transition-all"
             : "bg-white border-b border-black/10 transition-all"
        }
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* BRAND */}
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/images/pom-logo.png"
                alt="PIUS OKOGIE MINISTRIES"
                width={44}
                height={44}
                priority
              />

              <div className="leading-tight">
                {/* NAVY */}
                <div className="text-sm font-semibold text-navy">
                  PIUS OKOGIE MINISTRIES, INC.
                </div>

                {/* FORCE GOLD */}
                <div
                  className="text-xs font-semibold"
                  style={{ color: "#E6C46A" }}
                >
                  Global Community Outreach
                </div>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-6 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-navy"
                >
                  {item.label}
                </a>
              ))}

              {/* FORCE GOLD DONATE */}
              <a
                href="/donate"
                style={{ backgroundColor: "#E6C46A" }}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-navy"
              >
                Donate
              </a>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-xl border border-black/15 bg-black/5 px-3 py-2 text-sm font-semibold text-navy"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={mobileOpen ? "block md:hidden" : "hidden"}>
        <div className="bg-white border-b border-black/10">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-sm font-semibold text-navy"
              >
                {item.label}
              </a>
            ))}

            {/* FORCE GOLD MOBILE DONATE */}
            <a
              href="/donate"
              style={{ backgroundColor: "#E6C46A" }}
              className="mt-2 rounded-xl px-4 py-3 text-sm font-semibold text-navy text-center"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
