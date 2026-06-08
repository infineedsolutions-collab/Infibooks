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

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo className="pointer-events-auto" imgClassName="h-16 w-auto sm:h-[4.5rem]" />

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

      {/* Slide-down menu (all screen sizes) */}
      <div className={open ? "pointer-events-auto" : "pointer-events-none"}>
        <div
          className={`fixed inset-0 top-20 z-40 bg-charcoal/25 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-80px)] origin-top overflow-y-auto border-b border-slate-200 bg-white shadow-soft transition-all duration-300 dark:border-white/10 dark:bg-night-surface ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="container-x py-5">
            <ul className="mx-auto flex max-w-xl flex-col gap-1">
              {nav.map((item) => {
                const menu = item.menu ? menus[item.menu] : undefined;
                const subOpen = sub === item.menu;
                const active = isActive(item.href) || isMenuActive(menu);
                return (
                  <li key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex-1 rounded-xl px-4 py-3 text-base font-semibold transition active:scale-[0.98] ${
                          active
                            ? "bg-brand-gradient text-white shadow-[0_6px_16px_-6px_rgba(46,110,156,0.6)]"
                            : "text-slate-700 hover:bg-slate-50 dark:text-[#A6B0C3] dark:hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {menu && (
                        <button
                          type="button"
                          onClick={() => setSub(subOpen ? null : item.menu!)}
                          aria-label={`Toggle ${item.label} menu`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 dark:text-[#A6B0C3]"
                        >
                          <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${subOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {menu && subOpen && (
                      <div className="mb-1 ml-3 grid gap-0.5 border-l border-slate-200 pl-3 dark:border-white/10 sm:grid-cols-2">
                        {menu.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700 dark:text-[#A6B0C3] dark:hover:bg-white/5 dark:hover:text-accent-hover"
                          >
                            <Icon name={it.icon} className="h-4 w-4 text-brand-500" />
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mx-auto mt-5 flex max-w-xl items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <CountrySelector />
              </div>
              <Link href="/contact#book" className="btn-primary">
                Book a Call
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
