"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you build on top of any LMS?",
    a: "Yes. We integrate with your existing LMS, including LoanPro, LendAPI, or others via API. Your LMS remains the system of record while we build the borrower experience and servicing layer around it.",
  },
  {
    q: "We already have a borrower portal. Why rebuild?",
    a: "Most portals we audit have the same gaps: no proactive outreach, limited payment flows, and delayed LMS sync. Fixing that on top of an off-the-shelf platform is slow and constrained. A custom build gets you there faster and you own it.",
  },
  {
    q: "How does codebase ownership work?",
    a: "You get the full source code. No vendor license, no lock-in. Your team can modify, deploy, and maintain independently. We document the system and support the transition.",
  },
  {
    q: "What does the 8–16 week timeline include?",
    a: "Discovery, design, build, and launch. At 8 weeks, a scoped MVP running on a live portfolio segment. At 16 weeks, a full production platform with integrations, reporting, and proactive outreach.",
  },
  {
    q: "Why not build this in-house?",
    a: "You can, but it typically takes 12–18 months and significant upfront cost. We've already built this stack including LMS integrations, compliance layers, and payment flows, so you skip the learning curve and go live faster.",
  },
  {
    q: "What happens after launch?",
    a: "You own the platform. Your team can continue evolving it internally, or we can support ongoing development depending on your preference.",
  },
  {
    q: "How do you handle support and maintenance?",
    a: "Flexible. We can hand off fully to your team or stay involved with ongoing support, improvements, and new features.",
  },
  {
    q: "Can this replace multiple vendors?",
    a: "In many cases, yes. A custom servicing platform can consolidate borrower portal, communication layer, and parts of your servicing workflows, reducing vendor sprawl.",
  },
  {
    q: "How do you ensure security and compliance?",
    a: "We build for regulated environments from day one, including secure architecture, auditability, and alignment with requirements like SBA, Dodd-Frank 1071, and ECOA.",
  },
  {
    q: "What if our workflows are complex or non-standard?",
    a: "That's exactly when custom makes the most sense. We design around your credit model, products, and operations instead of forcing you into predefined structures.",
  },
];

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
