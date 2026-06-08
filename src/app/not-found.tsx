import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container-x relative text-center">
        <p className="font-display text-8xl font-extrabold heading-gradient sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-midnight-900 dark:text-[#F4F6FB]">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-[#A6B0C3]">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
