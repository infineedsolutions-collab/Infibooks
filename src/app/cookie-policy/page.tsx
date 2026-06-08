import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How InfiBooks uses cookies and similar technologies on this website.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

const sections = [
  { h: "What are cookies", p: "Cookies are small text files stored on your device that help websites function, remember preferences, and understand usage." },
  { h: "How we use cookies", p: "We use essential cookies for core site functionality and, where enabled, analytics cookies to understand how visitors use the site so we can improve it." },
  { h: "Types of cookies", p: "Essential cookies (required for the site to work), preference cookies (remember choices), and analytics cookies (aggregate usage via tools such as Google Analytics)." },
  { h: "Managing cookies", p: "You can control or delete cookies through your browser settings. Disabling some cookies may affect how the site works." },
  { h: "Third-party cookies", p: "Some cookies may be set by third-party services we use for analytics or embedded content. These are governed by their own policies." },
  { h: "Updates", p: "We may update this Cookie Policy from time to time. The latest version will always be available on this page." },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero crumb="Cookie Policy" eyebrow="Legal" title="Cookie Policy" subtitle="Last updated: 7 June 2026" />
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x max-w-3xl space-y-8">
          <p className="rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm text-bronze">
            Placeholder content for legal review. Please have this Cookie Policy reviewed and finalised by a qualified professional before launch.
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
