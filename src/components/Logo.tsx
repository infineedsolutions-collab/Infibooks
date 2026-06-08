import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  imgClassName = "h-14 w-auto sm:h-16",
  src = "/logo.png",
}: {
  className?: string;
  imgClassName?: string;
  src?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="InfiBooks - Beyond Bookkeeping, home"
    >
      <Image
        src={src}
        alt="InfiBooks - Beyond Bookkeeping"
        width={500}
        height={500}
        priority
        unoptimized={src.endsWith(".gif")}
        className={`w-auto transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </Link>
  );
}
