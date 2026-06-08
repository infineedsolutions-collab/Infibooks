import Script from "next/script";

/**
 * Google Analytics 4 - only renders when NEXT_PUBLIC_GA_ID is set in the
 * environment. No keys are hardcoded. Add NEXT_PUBLIC_GA_ID to .env.local
 * (e.g. G-XXXXXXX) to enable. Conversion / event tracking can be layered on
 * via gtag('event', ...) on CTA clicks and form submits.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
