"use client";

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("openCookiePreferences"))}
      className="hover:text-[#F88D58] transition-colors text-left"
    >
      Çerez Tercihleri
    </button>
  );
}
