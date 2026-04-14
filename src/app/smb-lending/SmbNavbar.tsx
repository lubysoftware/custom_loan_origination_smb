"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "The Problem",    href: "#problem" },
  { label: "How It Works",   href: "#how-it-works" },
  { label: "Why Luby",       href: "#why-luby" },
  { label: "In Production",  href: "#in-production" },
  { label: "FAQ",            href: "#faq" },
];

export default function SmbNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(10,20,32,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(82,122,158,0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Luby logo */}
        <a href="#" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logoluby.svg`}
            alt="Luby"
            style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* desktop nav */}
        <ul
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0 }}
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(215,222,230,0.75)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: 6,
                  transition: "color 0.15s, background 0.15s",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#F5F8FC";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(215,222,230,0.75)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#FFFFFF",
            textDecoration: "none",
            background: "#527A9E",
            padding: "7px 18px",
            borderRadius: 8,
            transition: "background 0.15s",
            fontFamily: "var(--font-inter), sans-serif",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3D6B8E")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#527A9E")}
        >
          Schedule a Call
        </a>

        {/* mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="flex md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 20,
                height: 1.5,
                background: "#F5F8FC",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)" :
                  menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className="md:hidden"
        style={{
          maxHeight: menuOpen ? 320 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "rgba(10,20,32,0.97)",
          borderBottom: menuOpen ? "1px solid rgba(82,122,158,0.15)" : "none",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(215,222,230,0.8)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(82,122,158,0.15)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li style={{ paddingTop: 12 }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "11px 0",
                fontSize: 13,
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                background: "#527A9E",
                borderRadius: 8,
              }}
            >
              Schedule a Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
