import type { ConsentState } from "@/contexts/ConsentContext";

const STORAGE_KEY = "cookie_consent_v1";

export function readStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { consent: ConsentState } | null;
    return parsed?.consent ?? null;
  } catch {
    return null;
  }
}

export function isConsentGranted(category: keyof ConsentState): boolean {
  const stored = readStoredConsent();
  if (!stored) return category === "essential"; // default essential only
  return Boolean(stored[category]);
}


