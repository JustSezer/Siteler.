"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { getConsentState, acceptAll, rejectAll, setConsentState } from "@/lib/consent";

interface Prefs {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    analytics: false,
    marketing: false,
    functional: false,
  });
  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const closeModalBtnRef = useRef<HTMLButtonElement>(null);
  const prefsBtnRef = useRef<HTMLButtonElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = getConsentState();
    if (!state) setVisible(true);

    const handler = () => {
      const s = getConsentState();
      setPrefs({
        analytics: s?.analytics ?? false,
        marketing: s?.marketing ?? false,
        functional: s?.functional ?? false,
      });
      setModalOpen(true);
    };
    window.addEventListener("openCookiePreferences", handler);
    return () => window.removeEventListener("openCookiePreferences", handler);
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => firstBtnRef.current?.focus(), 50);
    }
  }, [visible]);

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => closeModalBtnRef.current?.focus(), 50);
    } else {
      prefsBtnRef.current?.focus();
    }
  }, [modalOpen]);

  // Focus trap inside modal
  useEffect(() => {
    if (!modalOpen) return;
    const modal = document.getElementById("cookie-modal");
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", trap);
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("keydown", trap);
      document.removeEventListener("keydown", escHandler);
    };
  }, [modalOpen]);

  function announce(msg: string) {
    if (liveRef.current) liveRef.current.textContent = msg;
  }

  function handleAcceptAll() {
    acceptAll();
    setVisible(false);
    setModalOpen(false);
    announce("Tüm çerezler kabul edildi.");
  }

  function handleRejectAll() {
    rejectAll();
    setVisible(false);
    setModalOpen(false);
    announce("Çerezler reddedildi.");
  }

  function handleSavePrefs() {
    setConsentState(prefs);
    setVisible(false);
    setModalOpen(false);
    announce("Çerez tercihleriniz kaydedildi.");
  }

  function openPrefs() {
    const s = getConsentState();
    setPrefs({
      analytics: s?.analytics ?? false,
      marketing: s?.marketing ?? false,
      functional: s?.functional ?? false,
    });
    setModalOpen(true);
  }

  return (
    <>
      {/* Screen reader live region */}
      <div ref={liveRef} aria-live="polite" aria-atomic="true" className="sr-only" />

      {/* Cookie Banner */}
      {visible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Çerez onayı"
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl p-4 sm:p-5"
        >
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-[#414141]">
              <p className="font-semibold mb-1">Bu site çerez kullanmaktadır.</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Deneyiminizi iyileştirmek için çerez kullanıyoruz. Detaylar için{" "}
                <Link href="/cerez-politikasi" className="text-[#f88d58] hover:underline">
                  Çerez Politikamızı
                </Link>{" "}
                inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                ref={firstBtnRef}
                onClick={handleAcceptAll}
                className="bg-[#f88d58] hover:bg-[#c76b3e] text-white text-xs font-semibold px-4 py-2 rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2"
              >
                Tümünü Kabul Et
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-gray-100 hover:bg-gray-200 text-[#414141] text-xs font-semibold px-4 py-2 rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#414141] focus-visible:outline-offset-2"
              >
                Tümünü Reddet
              </button>
              <button
                ref={prefsBtnRef}
                onClick={openPrefs}
                className="border border-gray-300 hover:border-[#f88d58] text-[#414141] hover:text-[#f88d58] text-xs font-semibold px-4 py-2 rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2"
              >
                Tercihler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-hidden="false"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />
          <div
            id="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 z-10"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 id="cookie-modal-title" className="text-base font-bold text-[#414141]">
                Çerez Tercihleri
              </h2>
              <button
                ref={closeModalBtnRef}
                onClick={() => setModalOpen(false)}
                aria-label="Kapat"
                className="text-gray-400 hover:text-[#414141] transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2 rounded"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Zorunlu - always on */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#414141]">Zorunlu Çerezler</p>
                  <p className="text-xs text-gray-500 mt-0.5">Sitenin düzgün çalışması için gerekli çerezler.</p>
                </div>
                <button
                  role="switch"
                  aria-checked="true"
                  disabled
                  aria-label="Zorunlu çerezler (devre dışı bırakılamaz)"
                  className="shrink-0 w-10 h-6 bg-[#f88d58] rounded-full relative opacity-60 cursor-not-allowed"
                >
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Analitik */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#414141]">Analitik Çerezler</p>
                  <p className="text-xs text-gray-500 mt-0.5">Ziyaretçi istatistikleri toplama amacıyla kullanılır.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={prefs.analytics}
                  aria-label="Analitik çerezler"
                  onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                  className={`shrink-0 w-10 h-6 rounded-full relative transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2 ${prefs.analytics ? "bg-[#f88d58]" : "bg-gray-200"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${prefs.analytics ? "right-1" : "left-1"}`} />
                </button>
              </div>

              {/* Pazarlama */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#414141]">Pazarlama Çerezleri</p>
                  <p className="text-xs text-gray-500 mt-0.5">Kişiselleştirilmiş reklam gösterimi için kullanılır.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={prefs.marketing}
                  aria-label="Pazarlama çerezleri"
                  onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                  className={`shrink-0 w-10 h-6 rounded-full relative transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2 ${prefs.marketing ? "bg-[#f88d58]" : "bg-gray-200"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${prefs.marketing ? "right-1" : "left-1"}`} />
                </button>
              </div>

              {/* Fonksiyonel */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#414141]">Fonksiyonel Çerezler</p>
                  <p className="text-xs text-gray-500 mt-0.5">Tercih ve ayarlarınızı hatırlamak için kullanılır.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={prefs.functional}
                  aria-label="Fonksiyonel çerezler"
                  onClick={() => setPrefs((p) => ({ ...p, functional: !p.functional }))}
                  className={`shrink-0 w-10 h-6 rounded-full relative transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2 ${prefs.functional ? "bg-[#f88d58]" : "bg-gray-200"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${prefs.functional ? "right-1" : "left-1"}`} />
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSavePrefs}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#414141] text-sm font-semibold py-2 px-4 rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#414141] focus-visible:outline-offset-2"
              >
                Seçimleri Kaydet
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-[#f88d58] hover:bg-[#c76b3e] text-white text-sm font-semibold py-2 px-4 rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#f88d58] focus-visible:outline-offset-2"
              >
                Tümünü Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
