"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "905424136532";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-xl px-10 py-10 mx-4 w-full max-w-md flex flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-3xl leading-none"
          aria-label="Kapat"
        >
          ×
        </button>
        <p className="text-[#414141] text-2xl font-bold text-center leading-snug">
          Sipariş için WhatsApp üzerinden iletişime geçiniz.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="bg-[#25D366] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#1ebe5d] transition-colors"
        >
          Hemen Yaz
        </a>
      </div>
    </div>
  );
}
