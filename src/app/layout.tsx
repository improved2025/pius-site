import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PIUS OKOGIE MINISTRIES, INC.",
  description: "Global Community Outreach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="top"
        className="bg-[#CCD1D9] text-black"
      >
        {/* Header stays white */}
        <Header />

        {/* Push content below fixed header */}
        <div className="pt-16">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
