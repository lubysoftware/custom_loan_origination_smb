"use client";

import { useState } from "react";

/** Paleta alinhada à landing SMB (tons padrão) */
const smb = {
  ink: "#061832",
  muted: "#6B8099",
  accent: "#41A0DC",
  border: "rgba(6,24,50,0.08)",
  borderLight: "rgba(6,24,50,0.06)",
  lubyHeader: "#061832",
  lubyColTint: "rgba(65,160,220,0.1)",
  rowStripe: "#F8FAFC",
  rowHover: "rgba(6,24,50,0.04)",
  shadow: "0 2px 20px rgba(6,24,50,0.06)",
} as const;

const rows = [
  { feature: "Built for SMB borrower behavior",      saas: [false, "✗"], legacy: [false, "✗"], clara: [true, "✓"] },
  { feature: "Real-time LMS data sync",              saas: [null, "Partial"], legacy: [null, "Partial"], clara: [true, "✓"] },
  { feature: "Proactive delinquency outreach",       saas: [false, "✗"], legacy: [false, "✗"], clara: [true, "✓"] },
  { feature: "SBA 7(a) / 504 workflow support",      saas: [false, "✗"], legacy: [null, "Varies"], clara: [true, "✓"] },
  { feature: "Codebase ownership",                   saas: [false, "✗ License"], legacy: [true, "✓"], clara: [true, "✓"] },
  { feature: "Customizable without vendor approval", saas: [false, "✗"], legacy: [null, "Slow"], clara: [true, "✓"] },
  { feature: "Mobile-first borrower portal",         saas: [null, "Partial"], legacy: [false, "✗"], clara: [true, "✓"] },
  { feature: "Delivery timeline",                    saas: [false, "6–12 months"], legacy: [false, "12–24 months"], clara: [true, "8–16 weeks"] },
] as const;

function valueColor(ok: boolean | null): string {
  if (ok === true)  return "#16A34A";
  if (ok === false) return "#DC2626";
  return "#D97706";
}

function valueDot(ok: boolean | null): string {
  if (ok === true)  return "rgba(22,163,74,0.12)";
  if (ok === false) return "rgba(220,38,38,0.1)";
  return "rgba(217,119,6,0.12)";
}

/** Ícone ✓ — círculo suave + traço nítido (substitui o caractere Unicode) */
function IconCheck() {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(22,163,74,0.14)",
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2.5 7L5.5 10L11.5 3.5"
          stroke="#15803D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Ícone ✗ — círculo suave + X nítido */
function IconX() {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(220,38,38,0.12)",
        flexShrink: 0,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5"
          stroke="#B91C1C"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function renderCellValue(ok: boolean | null, label: string) {
  const t = label.trim();

  if (t === "✓") {
    return <IconCheck />;
  }
  if (t === "✗") {
    return <IconX />;
  }
  if (t.startsWith("✗ ")) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <IconX />
        <span style={{ fontSize: 12, fontWeight: 600, color: "#B91C1C" }}>{t.slice(2).trim()}</span>
      </span>
    );
  }
  if (t.startsWith("✓ ")) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <IconCheck />
        <span style={{ fontSize: 12, fontWeight: 600, color: "#15803D" }}>{t.slice(2).trim()}</span>
      </span>
    );
  }

  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: valueColor(ok),
      }}
    >
      {label}
    </span>
  );
}

export default function SmbComparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          minWidth: 600,
          borderCollapse: "separate",
          borderSpacing: 0,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid ${smb.border}`,
          boxShadow: smb.shadow,
        }}
      >
        <thead>
          <tr style={{ background: "#FFFFFF" }}>
            <th
              style={{
                padding: "16px 24px",
                textAlign: "left",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: smb.muted,
                borderBottom: `1px solid ${smb.border}`,
                width: "36%",
              }}
            >
              Criteria
            </th>
            {(["Generic SaaS", "Legacy Internal", "Luby"] as const).map((col, i) => (
              <th
                key={col}
                style={{
                  padding: i === 2 ? "0" : "16px 20px",
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: i === 2 ? "#FFFFFF" : smb.muted,
                  borderBottom: `1px solid ${smb.border}`,
                  background: i === 2 ? smb.lubyHeader : "#FFFFFF",
                  borderLeft: `1px solid ${smb.borderLight}`,
                }}
              >
                {i === 2 ? (
                  <div style={{ padding: "16px 20px", color: "#FFFFFF", letterSpacing: "0.08em" }}>{col}</div>
                ) : (
                  col
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                background:
                  hoveredRow === i ? smb.rowHover : i % 2 === 0 ? smb.rowStripe : "#FFFFFF",
                transition: "background 0.15s",
                cursor: "default",
              }}
            >
              <td
                style={{
                  padding: "14px 24px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: smb.ink,
                  borderBottom: i < rows.length - 1 ? `1px solid ${smb.borderLight}` : "none",
                }}
              >
                {row.feature}
              </td>
              {([row.saas, row.legacy, row.clara] as const).map((cell, ci) => {
                const label = String(cell[1]);
                const trimmed = label.trim();
                const iconOnly = trimmed === "✓" || trimmed === "✗";
                const ok = cell[0] as boolean | null;
                return (
                  <td
                    key={ci}
                    style={{
                      padding: "14px 20px",
                      textAlign: "center",
                      borderBottom: i < rows.length - 1 ? `1px solid ${smb.borderLight}` : "none",
                      borderLeft: `1px solid ${smb.borderLight}`,
                      background: ci === 2 ? smb.lubyColTint : "transparent",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                        minHeight: 30,
                        fontSize: 12,
                        fontWeight: 600,
                        color: valueColor(ok),
                        background: iconOnly ? "transparent" : valueDot(ok),
                        padding: iconOnly ? 0 : "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {renderCellValue(ok, label)}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
