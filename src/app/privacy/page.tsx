import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Infi Books collects, uses, and protects your personal information.",
};

const sections = [
  {
    h: "Information we collect",
    p: "We collect information you provide directly - such as your name, email, phone number, company details, and any message you send through our contact forms. We also collect basic analytics data about how visitors use our website.",
  },
  {
    h: "How we use your information",
    p: "We use your information to respond to enquiries, provide our accounting and bookkeeping services, send relevant updates you have requested, and improve our website and services. We never sell your personal data to third parties.",
  },
  {
    h: "Data security",
    p: "We apply appropriate technical and organisational measures to protect your information against unauthorised access, alteration, or disclosure. Client financial data is handled with strict confidentiality and stored on secure, reputable platforms.",
  },
  {
    h: "Data retention",
    p: "We retain personal and financial records only as long as necessary to provide our services and to comply with applicable legal and regulatory requirements, including tax record-keeping obligations.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal data at any time. To exercise these rights, contact us using the details below.",
  },
  {
    h: "Contact",
    p: `If you have any questions about this Privacy Policy, please email us at ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: 6 June 2026"
      />
      <section className="section">
        <div className="container-x max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-[#A6B0C3]">
            At {site.legalName}, we respect your privacy and are committed to
            protecting your personal information. This policy explains what we
            collect and how we use it.
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold text-midnight-900 dark:text-[#F4F6FB]">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
