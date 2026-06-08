/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:slug", destination: "/resources/:slug", permanent: true },
      // Spec URL aliases
      { source: "/automation-use-cases", destination: "/use-cases", permanent: true },
      { source: "/client-onboarding", destination: "/onboarding", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      // Old service URLs → canonical service detail style (kept rich pages live)
      { source: "/services/bookkeeping-monthly-close", destination: "/bookkeeping", permanent: true },
      { source: "/services/virtual-cfo", destination: "/virtual-cfo", permanent: true },
      { source: "/services/ai-finance-automation", destination: "/finance-automation", permanent: true },
      { source: "/services/dashboards-reporting", destination: "/dashboards", permanent: true },
    ];
  },
};

export default nextConfig;
