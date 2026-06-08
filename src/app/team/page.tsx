import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { team, site, type Member } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the InfiBooks team - CFO, automation, bookkeeping, and consulting experts behind your finance system.",
  alternates: { canonical: "/team" },
};

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="group flex w-full flex-col text-center">
      {/* card = photo only */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 shadow-card dark:shadow-none transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-soft">
        {m.photo ? (
          <Image src={m.photo} alt={m.name} fill className={`object-cover ${m.pos ?? "object-top"}`} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-gradient font-display text-6xl font-extrabold text-white">
            {m.initials}
          </div>
        )}
      </div>
      {/* details below the card */}
      <h3 className="mt-4 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{m.name}</h3>
      <p className="mt-0.5 flex min-h-[3.75rem] items-start justify-center text-sm font-medium leading-snug text-brand-600 dark:text-[#5B91FF]">
        {m.role}
      </p>
      <div className="mt-1 flex items-center justify-center gap-2">
        <a
          href={m.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${m.name} on LinkedIn`}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-white/10 dark:text-[#A6B0C3] dark:hover:border-[#3D7BFF] dark:hover:bg-white/5 dark:hover:text-[#5B91FF]"
        >
          <Icon name="linkedin" className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={`mailto:${m.email ?? site.email}`}
          aria-label={`Email ${m.name}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-white/10 dark:text-[#A6B0C3] dark:hover:border-[#3D7BFF] dark:hover:bg-white/5 dark:hover:text-[#5B91FF]"
        >
          <Icon name="mail" className="h-4 w-4" /> Email
        </a>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero + team grid in one clean block */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A] pt-[calc(80px+2.5rem)]">
        {/* animated logo gif running softly behind the team */}
        <Image
          src="/logo.png"
          alt=""
          aria-hidden
          width={1000}
          height={1000}
          unoptimized
          priority
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[clamp(420px,70vw,820px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.07]"
        />
        <div className="container-x relative z-10 text-center">
          <FadeUp>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team-infibooks.gif"
              alt="Team InfiBooks"
              className="mx-auto h-40 w-auto sm:h-56 lg:h-72"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#A6B0C3] sm:text-lg">
              The people behind your finance system - CFO, automation, bookkeeping, and consulting,
              working as one.
            </p>
          </FadeUp>

          <Stagger className="mx-auto mt-14 grid max-w-4xl grid-cols-2 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-8">
            {team.map((m) => (
              <StaggerItem key={m.name} className="w-full max-w-[15rem]">
                <TeamCard m={m} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand secondaryLabel="Explore Services" />
    </>
  );
}
