import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing the use of Infi Books's website and services.",
};

const sections = [
  {
    h: "Acceptance of terms",
    p: "By accessing this website and engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
  },
  {
    h: "Our services",
    p: "Infi Books provides accounting, bookkeeping, VAT, corporate tax, payroll, and related advisory services. The specific scope of any engagement is defined in a separate written proposal or agreement.",
  },
  {
    h: "Client responsibilities",
    p: "You agree to provide accurate, complete, and timely information necessary for us to perform our services. We rely on the information you provide and are not responsible for errors arising from incomplete or inaccurate data.",
  },
  {
    h: "Fees and payment",
    p: "Fees are set out in your service proposal. Monthly packages are billed in advance unless otherwise agreed. Late payment may result in suspension of services.",
  },
  {
    h: "Limitation of liability",
    p: "While we exercise professional care and diligence, our liability is limited to the fees paid for the relevant service. We are not liable for indirect or consequential losses.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of the jurisdiction in which our business is registered, and any disputes are subject to the exclusive jurisdiction of its competent courts.",
  },
  {
    h: "Contact",
    p: `For questions about these terms, please contact us at ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms of Service"
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: 6 June 2026"
      />
      <section className="section">
        <div className="container-x max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-[#A6B0C3]">
            These Terms of Service govern your use of the {site.name} website and
            services. Please read them carefully.
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
