"use client";

import { useState } from "react";

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
          border: "1px solid rgba(0,0,0,0.09)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
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
                color: "#999490",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
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
                  color: i === 2 ? "#FFFFFF" : "#9EB7D6",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  background: i === 2 ? "#527A9E" : "#FFFFFF",
                  borderLeft: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {i === 2 ? <div style={{ padding: "16px 20px" }}>{col}</div> : col}
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
                background: hoveredRow === i ? "#EDECEA" : i % 2 === 0 ? "#FAFAF8" : "#FFFFFF",
                transition: "background 0.15s",
                cursor: "default",
              }}
            >
              <td
                style={{
                  padding: "14px 24px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#2A2522",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                {row.feature}
              </td>
              {([row.saas, row.legacy, row.clara] as const).map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "14px 20px",
                    textAlign: "center",
                    borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    borderLeft: "1px solid rgba(0,0,0,0.05)",
                    background: ci === 2 ? "rgba(82,122,158,0.06)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                      fontSize: 12,
                      fontWeight: 600,
                      color: valueColor(cell[0] as boolean | null),
                      background: valueDot(cell[0] as boolean | null),
                      padding: "3px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {cell[1]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
