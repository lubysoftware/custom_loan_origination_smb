"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";

const services = [
  { label: "SMB Loan Servicing",  href: "#" },
  { label: "SBA Platform",        href: "#" },
  { label: "LMS Integration",     href: "#" },
  { label: "Compliance Build",    href: "#" },
];

const company = [
  { label: "About Luby",    href: "https://luby.co/about" },
  { label: "Case Studies",  href: "https://luby.co/cases/" },
  { label: "Careers",       href: "https://luby.co/careers/" },
];

const contact = [
  { label: "Contact",  href: "https://luby.co/contact/" },
  { label: "Support",  href: "https://luby.co/contact/" },
];

const locations = [
  {
    country: "United States",
    siteUrl: "https://luby.co",
    address: "1110 Brickell Avenue Suite 310\nMiami, FL United States",
    phone: "+1 305 600 1993",
    email: "sales@luby.co",
    web: "luby.co",
  },
  {
    country: "Brazil",
    siteUrl: "https://luby.com.br",
    address: "R. Amália de Noronha, 151 sala 303\nPinheiros, São Paulo - SP",
    phone: "+55 11 3055 3404",
    email: "comercial@luby.com.br",
    web: "luby.com.br",
  },
];

const legal = [
  { label: "Terms of Use",    href: "https://luby.co/terms-conditions/" },
  { label: "Privacy Policy",  href: "https://luby.co/terms-conditions/" },
];

const linkStyle = {
  fontSize: 13,
  color: "#9EB7D6",
  textDecoration: "none" as const,
  lineHeight: 2,
  display: "block" as const,
  transition: "color 0.15s",
  fontFamily: "var(--font-josefin), sans-serif",
  letterSpacing: "0.02em",
};

const colHeadStyle = {
  fontSize: 10,
  fontWeight: 600 as const,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#527A9E",
  marginBottom: 14,
  fontFamily: "var(--font-josefin), sans-serif",
};

export default function SmbFooter() {
  return (
    <footer
      style={{
        background: "#1F2E3D",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "clamp(48px, 8vw, 80px) 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* top row */}
        <div
          className="grid grid-cols-2 md:grid-cols-[1fr_repeat(3,auto)]"
          style={{ gap: "32px 40px", marginBottom: 56 }}
        >
          {/* brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" style={{ display: "block", textDecoration: "none", marginBottom: 28 }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logoluby.svg`}
                alt="Luby"
                style={{ height: 64, width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </a>
            {locations.map((loc) => (
              <div key={loc.country} style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: "#527A9E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: "var(--font-josefin), sans-serif" }}>
                  {loc.country}
                </p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 4 }}>
                  <MapPin size={11} style={{ color: "#527A9E", marginTop: 3, flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: "#6B8099", lineHeight: 1.8, whiteSpace: "pre-line", margin: 0 }}>{loc.address}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
                  <Phone size={11} style={{ color: "#527A9E", flexShrink: 0 }} />
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} style={{ fontSize: 12, color: "#9EB7D6", textDecoration: "none" }}>{loc.phone}</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
                  <Mail size={11} style={{ color: "#527A9E", flexShrink: 0 }} />
                  <a href={`mailto:${loc.email}`} style={{ fontSize: 12, color: "#9EB7D6", textDecoration: "none" }}>{loc.email}</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <Globe size={11} style={{ color: "#527A9E", flexShrink: 0 }} />
                  <a href={loc.siteUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#9EB7D6", textDecoration: "none" }}>{loc.web}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={colHeadStyle}>Services</p>
            {services.map((l) => (
              <a key={l.label} href={l.href} style={linkStyle}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7DEE6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EB7D6")}
              >{l.label}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={colHeadStyle}>Company</p>
            {company.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7DEE6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EB7D6")}
              >{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={colHeadStyle}>Contact</p>
            {contact.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7DEE6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EB7D6")}
              >{l.label}</a>
            ))}
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            {legal.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: "#527A9E", textDecoration: "none", fontFamily: "var(--font-josefin), sans-serif" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EB7D6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#527A9E")}
              >{l.label}</a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#527A9E", fontFamily: "var(--font-josefin), sans-serif" }}>
            © 2026 Luby Software. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
