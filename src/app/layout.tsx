import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import { RegionProvider } from "@/components/RegionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import NavProgress from "@/components/NavProgress";
import Analytics from "@/components/Analytics";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "virtual CFO services",
    "fractional CFO services",
    "bookkeeping services",
    "finance automation",
    "MIS dashboards",
    "FP&A for startups",
    "CFO advisory",
    "AI finance automation",
  ],
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.legalName,
    image: `${site.url}/logo.png`,
    "@id": site.url,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: "Worldwide",
    description: site.description,
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${script.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('infibooks_theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-ivory font-sans text-ink antialiased dark:bg-night-base dark:text-[#F4F6FB]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <NavProgress />
        <SmoothScroll />
        <ScrollProgress />
        <ThemeProvider>
        <RegionProvider>
          <Navbar />
          {/* Top fade-zone: content scrolling up into this strip dissolves into
              the background as it leaves the viewport, while the rest stays clear.
              Fades to the page colour (not black) so empty space shows no band. */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-20 z-40 h-[18vh] bg-gradient-to-b from-white via-white/55 to-transparent dark:from-night-base dark:via-night-base/60"
          />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </RegionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
