import { ConsentState, ConsentCategory, CONSENT_COOKIE_NAME, CONSENT_VERSION, CONSENT_EXPIRY_DAYS } from "./types";

export function getConsentState(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!cookie) return null;
  try {
    const state = JSON.parse(decodeURIComponent(cookie.split("=").slice(1).join("=")));
    if (state.version !== CONSENT_VERSION) return null;
    return state;
  } catch {
    return null;
  }
}

export function getConsent(category: ConsentCategory): boolean {
  if (category === "essential") return true;
  const state = getConsentState();
  if (!state) return false;
  return state[category] ?? false;
}

export function setConsentState(
  state: Omit<ConsentState, "essential" | "timestamp" | "version">
): void {
  const fullState: ConsentState = {
    essential: true,
    ...state,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  const expires = new Date(Date.now() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(fullState))}; expires=${expires}; path=/; SameSite=Lax`;
}

export function acceptAll(): void {
  setConsentState({ analytics: true, marketing: true, functional: true });
}

export function rejectAll(): void {
  setConsentState({ analytics: false, marketing: false, functional: false });
}
