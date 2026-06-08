"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, industries, type Service } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";
import CountrySelector from "./CountrySelector";
import ThemeToggle from "./ThemeToggle";
import { useRegion } from "./RegionProvider";

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

function servicesMenu(services: Service[]): Menu {
  return {
    align: "left",
    cols: 2,
    items: services.map((s) => ({
      label: s.title,
      href: s.href ?? `/services#${s.slug}`,
      icon: s.icon,
    })),
  };
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { services } = useRegion();
  const menus: Record<string, Menu> = { ...staticMenus, services: servicesMenu(services) };
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // a parent item is active when the current page is one of its dropdown links
  const isMenuActive = (m?: Menu) =>
    !!m &&
    m.items.some((it) => {
      const dest = it.href.split("#")[0];
      return dest !== "/" && (pathname === dest || pathname.startsWith(`${dest}/`));
    });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_-22px_rgba(27,36,48,0.35)] dark:border-white/10 dark:bg-night-base/80 dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x relative flex h-20 items-center justify-between gap-4">
        <div className="flex shrink-0 items-center">
          <Logo src="/logo-animation.gif" imgClassName="h-12 w-auto sm:h-14" />
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {nav.map((item) => {
            const menu = item.menu ? menus[item.menu] : undefined;
            const active = isActive(item.href) || isMenuActive(menu);
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-semibold transition active:scale-95 ${
                    active
                      ? "bg-brand-gradient text-white shadow-[0_6px_16px_-6px_rgba(46,110,156,0.6)]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-charcoal dark:text-[#A6B0C3] dark:hover:bg-white/5 dark:hover:text-[#F4F6FB]"
                  }`}
                >
                  {item.label}
                  {menu && <Chevron />}
                </Link>

                {menu && (
                  <div
                    className={`invisible absolute top-full ${menu.align === "right" ? "right-0" : "left-0"} z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100`}
                  >
                    <div
                      className={`rounded-2xl border border-slate-200/70 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-night-surface ${
                        menu.cols === 2 ? "grid w-[30rem] grid-cols-2 gap-1" : "w-64"
                      }`}
                    >
                      {menu.items.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className="flex min-h-[3.25rem] items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-brand-50 dark:hover:bg-white/5"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-accent/10 dark:text-accent-hover">
                            <Icon name={it.icon} className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold leading-snug text-charcoal dark:text-[#F4F6FB]">{it.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <ThemeToggle className="hidden lg:flex" />
          <CountrySelector className="hidden lg:block" />
          <Link href="/contact#book" className="hidden text-[15px] lg:inline-flex btn-primary">
            Book a Strategy Call
            <Icon name="arrow" className="h-4 w-4" />
          </Link>

          <ThemeToggle className="lg:hidden" />
          <CountrySelector className="lg:hidden" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-charcoal dark:border-white/15 dark:text-[#F4F6FB] lg:hidden"
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

      {/* Mobile menu */}
      <div className={open ? "pointer-events-auto lg:hidden" : "pointer-events-none lg:hidden"}>
        <div
          className={`fixed inset-0 top-20 z-40 bg-charcoal/20 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-80px)] origin-top overflow-y-auto border-b border-slate-200 bg-white px-5 pb-6 pt-2 shadow-soft transition-all dark:border-white/10 dark:bg-night-surface ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const menu = item.menu ? menus[item.menu] : undefined;
              const subOpen = mobileSub === item.menu;
              return (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`flex-1 rounded-xl px-4 py-3 text-base font-medium transition active:scale-[0.98] ${
                        isActive(item.href)
                          ? "bg-brand-gradient text-white shadow-[0_6px_16px_-6px_rgba(46,110,156,0.6)]"
                          : "text-slate-700 hover:bg-slate-50 dark:text-[#A6B0C3] dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {menu && (
                      <button
                        type="button"
                        onClick={() => setMobileSub(subOpen ? null : item.menu!)}
                        aria-label={`Toggle ${item.label} menu`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500"
                      >
                        <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${subOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
                          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {menu && subOpen && (
                    <div className="mb-1 ml-3 grid gap-0.5 border-l border-slate-200 pl-3 dark:border-white/10">
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
          <Link href="/contact#book" className="btn-primary mt-4 w-full">
            Book a Strategy Call
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
