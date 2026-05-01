"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container-site" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.jpg"
              alt="Bakacak Köfte"
              width={220}
              height={80}
              style={{ objectFit: "contain", height: "72px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "var(--color-black-2)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-black-2)")}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/basvuru" className="btn-red" style={{ padding: "0.6rem 1.4rem" }}>
              Başvur
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-black)" }}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav
            style={{
              borderTop: "1px solid var(--color-border)",
              marginTop: "1rem",
              paddingTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            className="md:hidden"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: "var(--color-black-2)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/basvuru" className="btn-red" onClick={() => setOpen(false)} style={{ textAlign: "center", justifyContent: "center" }}>
              Bayilik Başvurusu
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
