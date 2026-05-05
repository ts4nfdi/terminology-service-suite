export const CONSENT_KEY = "user_tracking_consent";

export function getConsent() {
  return localStorage.getItem(CONSENT_KEY);
}

export function setConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
}
