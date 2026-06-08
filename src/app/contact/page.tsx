import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/CalEmbed";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Infibooks about bookkeeping, Virtual CFO, and finance automation for your business. Book a free consultation by phone, email, or WhatsApp.",
};

const cards = [
  { icon: "phone", title: "Call us", value: site.phone, href: site.phoneHref },
  { icon: "mail", title: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "whatsapp", title: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp}` },
  { icon: "pin", title: "Visit us", value: "Jamshedpur, IN & Dover, US", href: "#offices" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in Touch"
        title="Let's Talk About Your Finance Challenges"
        subtitle="Tell us about your finance challenges and we will help you identify the right support structure - bookkeeping, reporting, Virtual CFO, or automation."
      />

      {/* Contact cards */}
      <section className="border-b border-slate-100 dark:border-white/10 py-12">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={c.icon} className="h-6 w-6" fill={c.icon === "whatsapp" ? "currentColor" : "none"} strokeWidth={c.icon === "whatsapp" ? 0 : 1.6} />
              </span>
              <p className="mt-4 text-sm font-medium text-slate-400 dark:text-[#6B7589]">{c.title}</p>
              <p className="mt-1 font-semibold text-midnight-900 dark:text-[#F4F6FB]">{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Book a call */}
      <section id="book" className="section scroll-mt-24 bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mx-auto">Book a Call</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB] sm:text-4xl">
              Pick a Time for Your Free Strategy Call
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
              Choose a slot that works for you - we&apos;ll meet, understand your finances, and map the right next step.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-midnight-900 dark:text-[#F4F6FB]">Send us a message</h2>
            <p className="mt-2 text-slate-600 dark:text-[#A6B0C3]">
              Fill in the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/contact.jpg" alt="Talk to an InfiBooks finance advisor" className="h-52 w-full rounded-2xl object-cover shadow-card dark:shadow-none" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-8 shadow-card dark:shadow-none">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/60 blur-2xl" />
              <h3 className="relative font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">Office hours</h3>
              <ul className="relative mt-5 space-y-4 text-sm text-slate-600 dark:text-[#A6B0C3]">
                <li className="flex items-center gap-3">
                  <Icon name="clock" className="h-5 w-5 text-brand-600 dark:text-[#5B91FF]" />
                  <span>{site.hours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="globe" className="mt-0.5 h-5 w-5 text-brand-600 dark:text-[#5B91FF]" />
                  <span>Flexible across US &amp; India time zones - we adjust to your schedule</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="h-5 w-5 text-brand-600 dark:text-[#5B91FF]" />
                  <a href={site.phoneHref} className="hover:text-brand-700">{site.phone}</a>
                </li>
              </ul>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-7 w-full"
              >
                <Icon name="whatsapp" className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Our offices */}
      <section id="offices" className="section scroll-mt-24 bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mx-auto">Our Offices</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB] sm:text-4xl">
              Where We Work From
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
              Headquartered in India with a US presence in Delaware - serving founders across time zones.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            {site.locations.map((loc) => (
              <div
                key={loc.label}
                className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card dark:border-white/10 dark:bg-[#161D30] dark:shadow-none"
              >
                <iframe
                  title={loc.label}
                  src={loc.maps}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]">
                    {loc.label}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{loc.city}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
