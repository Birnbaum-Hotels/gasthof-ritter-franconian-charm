import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ConsentCategory = "essential" | "analytics" | "marketing";

export type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentContextValue = {
  consent: ConsentState;
  hasAnswered: boolean;
  setConsent: (next: ConsentState) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
};

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
};

const STORAGE_KEY = "cookie_consent_v1";

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(defaultConsent);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { consent: ConsentState; ts: number };
        if (parsed && parsed.consent) {
          setConsentState({ ...defaultConsent, ...parsed.consent });
          setHasAnswered(true);
        }
      }
    } catch {
      // ignore storage read errors
    }
  }, []);

  const persist = useCallback((next: ConsentState) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ consent: next, ts: Date.now() })
      );
    } catch {
      // ignore storage write errors
    }
  }, []);

  const setConsent = useCallback((next: ConsentState) => {
    setConsentState(next);
    setHasAnswered(true);
    persist(next);
  }, [persist]);

  const acceptAll = useCallback(() => {
    setConsent({ essential: true, analytics: true, marketing: true });
  }, [setConsent]);

  const rejectNonEssential = useCallback(() => {
    setConsent({ essential: true, analytics: false, marketing: false });
  }, [setConsent]);

  const value = useMemo<ConsentContextValue>(() => ({
    consent,
    hasAnswered,
    setConsent,
    acceptAll,
    rejectNonEssential,
  }), [consent, hasAnswered, setConsent, acceptAll, rejectNonEssential]);

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}


