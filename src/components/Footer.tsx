import Link from "next/link";
import { industries, services, site, legalPages } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";
import Newsletter from "./Newsletter";

const company = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

const resources = [
  { label: "Blog", href: "/resources" },
  { label: "Tools We Use", href: "/tools" },
  { label: "Automation Use Cases", href: "/use-cases" },
  { label: "Dashboard Examples", href: "/dashboard-examples" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 dark:border-white/10 bg-ivory dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="container-x relative">
        {/* Newsletter strip */}
        <div className="grid gap-6 border-b border-slate-200/70 dark:border-white/10 py-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal dark:text-[#F4F6FB]">
              Finance insights for founders
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-[#A6B0C3]">
              Practical CFO, bookkeeping, and automation guidance - occasionally, never spam.
            </p>
          </div>
          <Newsletter />
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
              AI-powered CFO, bookkeeping, and finance automation advisory for modern businesses.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { k: "linkedin", href: site.social.linkedin },
                { k: "instagram", href: site.social.instagram },
                { k: "facebook", href: site.social.facebook },
                { k: "x", href: site.social.x },
              ].map((s) => (
                <a
                  key={s.k}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.k}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161D30] text-slate-500 dark:text-[#6B7589] transition-colors hover:border-brand-300 hover:bg-brand-gradient hover:text-white"
                >
                  <Icon name={s.k} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={company} />
          <FooterCol
            title="Services"
            links={services.slice(0, 6).map((s) => ({ label: s.title, href: s.href ?? `/services#${s.slug}` }))}
          />
          <FooterCol
            title="Industries"
            links={industries.slice(0, 6).map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))}
          />
          <FooterCol title="Resources" links={resources} />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal dark:text-[#F4F6FB]">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-[#5B91FF]" />
                <span className="text-slate-600 dark:text-[#A6B0C3]">{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-[#5B91FF]" />
                <a href={`mailto:${site.email}`} className="text-slate-600 dark:text-[#A6B0C3] hover:text-brand-700">{site.email}</a>
              </li>
            </ul>
            <Link href="/contact" className="btn-primary mt-5 text-sm">
              Book a Strategy Call
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200/70 dark:border-white/10 py-6">
          <p className="text-xs leading-relaxed text-slate-500 dark:text-[#6B7589]">
            <span className="font-semibold text-slate-600 dark:text-[#A6B0C3]">Disclaimer:</span> Information on this
            website is for general business support purposes and does not constitute legal, tax,
            audit, or regulatory advice.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 dark:border-white/10 py-7 text-sm text-slate-500 dark:text-[#6B7589] sm:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalPages.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-charcoal">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal dark:text-[#F4F6FB]">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-slate-600 dark:text-[#A6B0C3] transition-colors hover:text-brand-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
