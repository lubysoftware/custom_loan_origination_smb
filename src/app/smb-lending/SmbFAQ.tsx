"use client";

import { useState } from "react";
import { SMB_FAQ_ITEMS } from "./faq-data";

const faqs = SMB_FAQ_ITEMS;

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(6,24,50,0.1)",
        borderRadius: 12,
        marginBottom: 8,
        overflow: "hidden",
        transition: "border-color 0.2s",
        borderColor: open ? "rgba(65,160,220,0.2)" : "rgba(6,24,50,0.1)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: open ? "#061832" : "#527A9E",
            lineHeight: 1.5,
            transition: "color 0.15s",
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: `1px solid ${open ? "rgba(82,122,158,0.4)" : "rgba(6,24,50,0.2)"}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s, border-color 0.15s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="0" x2="5" y2="10" stroke={open ? "#527A9E" : "#7A8FA3"} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="5" x2="10" y2="5" stroke={open ? "#527A9E" : "#7A8FA3"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
        <p style={{ fontSize: 13, lineHeight: 1.75, color: "#6B8099", padding: "0 20px 18px" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function SmbFAQ() {
  const mid = Math.ceil(faqs.length / 2);
  const faqsColLeft = faqs.slice(0, mid);
  const faqsColRight = faqs.slice(mid);

  return (
    <section
      id="faq"
      style={{ background: "#F5F8FC", padding: "clamp(48px, 6vw, 72px) 24px 100px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ textAlign: "center", margin: "0 auto 44px", maxWidth: 640 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#41A0DC",
              background: "rgba(65,160,220,0.08)",
              border: "1px solid rgba(65,160,220,0.2)",
              padding: "4px 12px",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#061832",
              marginBottom: 16,
            }}
          >
            Straight answers{" "}
            <span style={{ color: "#41A0DC" }}>before the conversation</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#7A8FA3", margin: 0 }}>
            What SMB lenders ask before scheduling a call.
          </p>
        </header>

        <div
          className="smb-faq-columns"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
            alignItems: "start",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .smb-faq-columns {
                grid-template-columns: 1fr 1fr !important;
                gap: 20px !important;
              }
            }
          `}</style>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqsColLeft.map((f) => (
              <Item key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqsColRight.map((f) => (
              <Item key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
