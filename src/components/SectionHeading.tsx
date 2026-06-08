import { FadeUp } from "./motion";

/**
 * Section heading for the light theme. The `light` prop is accepted for
 * backward-compatibility (previously meant "white text on dark") but is now
 * a no-op - all headings render dark on the light background.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <FadeUp>
          <span className="eyebrow">{eyebrow}</span>
        </FadeUp>
      )}
      <FadeUp delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-charcoal dark:text-[#F4F6FB] text-balance sm:text-4xl lg:text-[2.7rem] lg:leading-[1.08]">
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.16}>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{subtitle}</p>
        </FadeUp>
      )}
    </div>
  );
}
