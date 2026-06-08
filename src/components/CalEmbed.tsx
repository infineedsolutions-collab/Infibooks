"use client";

/**
 * Inline cal.id booking widget. Embeds the public booking page in an iframe
 * (cal.id allows framing). No secret API key is used on the client.
 */
export default function CalEmbed({
  user = "rishiarora",
  className = "",
}: {
  user?: string;
  className?: string;
}) {
  return (
    <iframe
      src={`https://cal.id/${user}`}
      title="Book a meeting with InfiBooks"
      loading="lazy"
      className={`h-[720px] w-full rounded-2xl border border-slate-200/70 bg-white shadow-card dark:border-white/10 dark:bg-[#161D30] dark:shadow-none ${className}`}
    />
  );
}
