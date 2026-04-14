"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const clients = [
  { file: "Neocova.png",      alt: "Neocova" },
  { file: "ONLINE-IPS.png",   alt: "Online IPS" },
  { file: "Papaya.png",       alt: "Papaya" },
  { file: "SIEMENS.png",      alt: "Siemens" },
  { file: "CALIBER.png",      alt: "Caliber" },
  { file: "DCI.png",          alt: "DCI" },
  { file: "FOXTROT.png",      alt: "Foxtrot" },
  { file: "GIGPAY.png",       alt: "GigPay" },
  { file: "INTERCO.png",      alt: "Interco" },
  { file: "MASSPAY.png",      alt: "MassPay" },
  { file: "Sunwest-Bank.png", alt: "Sunwest Bank" },
  { file: "USEND.png",        alt: "Usend" },
];

const stats = [
  { number: "10+",  label: "years in financial software" },
  { number: "500+", label: "projects delivered" },
  { number: "100+", label: "senior engineers" },
  { number: "3–5×", label: "average speed boost with AI" },
];

export default function SmbClients() {
  return (
    <section
      id="clients"
      style={{
        background: "#08121e",
        borderTop: "1px solid rgba(82,122,158,0.15)",
        padding: "clamp(64px, 8vw, 100px) 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9EB7D6",
              background: "rgba(82,122,158,0.1)",
              border: "1px solid rgba(82,122,158,0.2)",
              padding: "4px 12px",
              borderRadius: 999,
              marginBottom: 20,
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Our clients
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#F5F8FC",
              marginBottom: 16,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Companies that{" "}
            <br />
            <span
              style={{
                color: "#9EB7D6",
                textShadow: "0 0 24px rgba(158,183,214,0.5), 0 0 48px rgba(158,183,214,0.2)",
              }}
            >
              modernized with Luby
            </span>
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(158,183,214,0.7)",
              margin: "0 auto",
              maxWidth: 500,
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            And many other teams that evolved critical financial systems without
            disrupting operations.
          </p>
        </div>

        {/* logo grid */}
        <div
          className="smb-clients-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            maxWidth: 896,
            margin: "0 auto 64px",
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .smb-clients-grid { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
          {clients.map((c) => (
            <div
              key={c.file}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(82,122,158,0.15)",
                borderRadius: 12,
                height: 100,
                padding: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.15)";
              }}
            >
              <img
                src={`${BASE}/logos/clients/${c.file}`}
                alt={c.alt}
                loading="lazy"
                style={{
                  maxHeight: 68,
                  maxWidth: 160,
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.6,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.9"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.6"; }}
              />
            </div>
          ))}
        </div>

        {/* stats */}
        <div
          className="smb-clients-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            maxWidth: 896,
            margin: "0 auto",
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .smb-clients-stats { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                background: "rgba(82,122,158,0.06)",
                border: "1px solid rgba(82,122,158,0.15)",
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 700,
                  color: "#9EB7D6",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontFamily: "var(--font-inter), sans-serif",
                  textShadow: "0 0 20px rgba(158,183,214,0.4)",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(158,183,214,0.6)",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
