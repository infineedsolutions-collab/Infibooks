import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  markClassName = "h-10 w-auto sm:h-12",
  nameClassName = "text-xl sm:text-2xl",
  tagClassName = "text-[10px] sm:text-[11px]",
}: {
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  tagClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="InfiBooks - Beyond Bookkeeping, home"
    >
      <Image
        src="/owl-blue.png"
        alt=""
        width={310}
        height={288}
        priority
        className={`w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 ${markClassName}`}
      />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={`font-display font-extrabold leading-none tracking-tight text-charcoal dark:text-white ${nameClassName}`}>
          InfiBooks
        </span>
        <span className={`mt-1 font-semibold uppercase leading-none tracking-[0.16em] text-brand-600 dark:text-accent-hover ${tagClassName}`}>
          Beyond Bookkeeping
        </span>
      </span>
    </Link>
  );
}
