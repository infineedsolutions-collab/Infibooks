"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultRegion, getRegion, getServices, type RegionCode } from "@/lib/site";

type Ctx = {
  code: RegionCode;
  setCode: (c: RegionCode) => void;
  region: ReturnType<typeof getRegion>;
  services: ReturnType<typeof getServices>;
};

const RegionContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "infibooks_region";

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [code, setCodeState] = useState<RegionCode>(defaultRegion);

  // load saved region after mount (avoids hydration mismatch)
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as RegionCode | null) : null;
    if (saved && saved !== code) setCodeState(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCode = (c: RegionCode) => {
    setCodeState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {}
  };

  const value: Ctx = {
    code,
    setCode,
    region: getRegion(code),
    services: getServices(code),
  };

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within RegionProvider");
  return ctx;
}
