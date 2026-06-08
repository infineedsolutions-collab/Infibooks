import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  imgClassName = "h-14 w-auto sm:h-16",
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="InfiBooks - Beyond Bookkeeping, home"
    >
      <Image
        src="/logo.png"
        alt="InfiBooks - Beyond Bookkeeping"
        width={500}
        height={500}
        priority
        className={`w-auto transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </Link>
  );
}
