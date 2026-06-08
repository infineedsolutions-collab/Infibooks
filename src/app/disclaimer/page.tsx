import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "General information disclaimer for the InfiBooks website.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: false, follow: true },
};

const sections = [
  { h: "General information only", p: "The content on this website is provided for general business information purposes only and does not constitute legal, tax, audit, accounting, financial, or regulatory advice." },
  { h: "No professional relationship", p: "Viewing this website or contacting us does not create a professional or advisory relationship. Engagements are governed by a separate written agreement." },
  { h: "No guarantees", p: "Any outcomes, metrics, or results referenced are representative or illustrative and are not guarantees of future performance. Results vary by business." },
  { h: "External links", p: "Links to third-party tools or websites are provided for convenience. We are not responsible for their content, accuracy, or policies." },
  { h: "Seek professional advice", p: "Before acting on any information here, seek advice from a qualified professional appropriate to your jurisdiction and circumstances." },
  { h: "Contact", p: `Questions about this disclaimer can be sent to ${site.email}.` },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero crumb="Disclaimer" eyebrow="Legal" title="Disclaimer" subtitle="Last updated: 7 June 2026" />
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x max-w-3xl space-y-8">
          <p className="rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm text-bronze">
            Placeholder content for legal review. Please have this Disclaimer reviewed and finalised by a qualified professional before launch.
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
