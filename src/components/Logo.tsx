import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  markClassName = "h-7 w-auto sm:h-8",
  nameClassName = "text-base sm:text-lg",
  tagClassName = "text-[9px] sm:text-[10px]",
}: {
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  tagClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 flex-col items-center gap-1 ${className}`}
      aria-label="InfiBooks - Beyond Bookkeeping, home"
    >
      <Image
        src="/owl-mark.png"
        alt=""
        width={120}
        height={108}
        priority
        className={`w-auto transition-transform duration-300 group-hover:scale-105 dark:invert ${markClassName}`}
      />
      <span className="flex flex-col items-center whitespace-nowrap leading-none">
        <span className={`font-display font-extrabold leading-none tracking-tight text-charcoal dark:text-white ${nameClassName}`}>
          InfiBooks
        </span>
        <span className={`mt-1 font-semibold uppercase leading-none tracking-[0.18em] text-brand-600 dark:text-accent-hover ${tagClassName}`}>
          Beyond Bookkeeping
        </span>
      </span>
    </Link>
  );
}
