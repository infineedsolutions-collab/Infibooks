"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, industries, serviceGroups } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";
import CountrySelector from "./CountrySelector";
import ThemeToggle from "./ThemeToggle";

type DropItem = { label: string; href: string; icon: string };
type Menu = { align: "left" | "right"; cols: 1 | 2; items: DropItem[] };

const staticMenus: Record<string, Menu> = {
  about: {
    align: "left",
    cols: 1,
    items: [
      { label: "Our Story", href: "/about", icon: "briefcase" },
      { label: "Our Team", href: "/team", icon: "users" },
      { label: "Our Process", href: "/process", icon: "refresh" },
      { label: "Client Onboarding", href: "/onboarding", icon: "check" },
      { label: "Case Studies", href: "/case-studies", icon: "trending" },
      { label: "Careers", href: "/careers", icon: "rocket" },
    ],
  },
  industries: {
    align: "right",
    cols: 2,
    items: industries.map((i) => ({
      label: i.title,
      href: `/industries/${i.slug}`,
      icon: i.icon,
    })),
  },
  resources: {
    align: "right",
    cols: 1,
    items: [
      { label: "Blog", href: "/resources", icon: "doc" },
      { label: "Tools We Use", href: "/tools", icon: "plug" },
      { label: "Automation Use Cases", href: "/use-cases", icon: "bolt" },
      { label: "Dashboard Examples", href: "/dashboard-examples", icon: "grid" },
      { label: "FAQ", href: "/faq", icon: "lightbulb" },
    ],
  },
};

function servicesMenu(): Menu {
  return {
    align: "left",
    cols: 1,
    items: serviceGroups.map((g) => ({
      label: g.title,
      href: g.href,
      icon: g.icon,
    })),
  };
}

export default function Navbar() {
  const pathname = usePathname();
  const menus: Record<string, Menu> = { ...staticMenus, services: servicesMenu() };
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isMenuActive = (m?: Menu) =>
    !!m &&
    m.items.some((it) => {
      const dest = it.href.split("#")[0];
      return dest !== "/" && (pathname === dest || pathname.startsWith(`${dest}/`));
    });

  const activeMenu = sub ? menus[sub] : null;
  const activeItem = nav.find((i) => i.menu === sub);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="relative z-[60] flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo className="pointer-events-auto self-start" imgClassName="h-24 w-auto sm:h-28" />

        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <Link href="/contact#book" className="btn-primary text-[14px] sm:text-[15px]">
            Book a Call
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-charcoal transition hover:bg-slate-50 active:scale-95 dark:border-white/15 dark:text-[#F4F6FB] dark:hover:bg-white/5"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mega menu */}
      <div className={open ? "pointer-events-auto" : "pointer-events-none"}>
        <div
          className={`fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-0 z-40 max-h-[100svh] origin-top overflow-y-auto border-b border-slate-200 bg-white pb-8 pt-24 shadow-soft transition-all duration-300 dark:border-white/10 dark:bg-night-surface ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <ul className="flex flex-col gap-1" onMouseLeave={() => setSub(null)}>
                {nav.map((item) => {
                  const menu = item.menu ? menus[item.menu] : undefined;
                  const active =
                    isActive(item.href) || isMenuActive(menu) || (!!menu && sub === item.menu);
                  return (
                    <li key={item.href} onMouseEnter={() => setSub(item.menu ?? null)}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-base font-semibold transition active:scale-[0.98] ${
                          active
                            ? "bg-brand-gradient text-white shadow-[0_6px_16px_-6px_rgba(46,110,156,0.6)]"
                            : "text-slate-700 hover:bg-slate-50 dark:text-[#A6B0C3] dark:hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                        {menu && (
                          <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
                            <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-3 flex items-center gap-3 border-t border-slate-200 px-2 pt-4 dark:border-white/10">
                  <ThemeToggle />
                  <CountrySelector />
                </li>
              </ul>

              <div className="hidden rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/5 lg:block">
                {activeMenu ? (
                  <>
                    <p className="px-1 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-[#6B7589]">
                      {activeItem?.label}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {activeMenu.items.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-accent/10 dark:text-accent-hover">
                            <Icon name={it.icon} className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-charcoal dark:text-[#F4F6FB]">{it.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col justify-center p-4">
                    <h3 className="font-display text-2xl font-extrabold text-charcoal dark:text-[#F4F6FB]">
                      Finance that <span className="heading-gradient-light">scales with you</span>
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
                      Hover a section to explore - or book a free strategy call and we&apos;ll map your finance function.
                    </p>
                    <Link href="/contact#book" className="btn-primary mt-5 w-fit">
                      Book a Call
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
