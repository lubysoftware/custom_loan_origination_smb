"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you build on top of LoanPro, or do you replace it?",
    a: "We build on top of LoanPro — or whichever LMS you're already running. We integrate directly via API so your loan data stays in your system of record. We're building the borrower-facing layer and the servicing logic that sits around it.",
  },
  {
    q: "We already have a borrower portal. Why rebuild?",
    a: "Most portals we audit have the same gaps: no proactive outreach before a missed payment, no save-and-return on ACH flows, and no real-time sync with the LMS. Patching those onto an off-the-shelf platform takes longer than building the right thing — and you still don't own the code.",
  },
  {
    q: "How does codebase ownership actually work?",
    a: "We deliver the full source code at handoff — no vendor license, no proprietary framework lock-in. Your team can modify, deploy, and maintain everything without coming back to us. We document the architecture and train your engineers as part of the engagement.",
  },
  {
    q: "Can you support SBA 7(a) and 504 loan types specifically?",
    a: "Yes. We've built SBA compliance into the platform — SOP 50 10 8 workflows, Dodd-Frank 1071 reporting fields, and audit trails. If your portfolio has a mix of conventional and SBA loans, we handle both without different portals.",
  },
  {
    q: "What does the 8–16 week timeline actually include?",
    a: "Week 1 is discovery and friction mapping. Weeks 1–2 include platform design. From there we run continuous engineering sprints with LMS integration. The 8-week end is a scoped MVP against a live portfolio segment. The 16-week end is a full production platform with reporting and proactive outreach baked in.",
  },
  {
    q: "What makes this different from hiring an in-house engineering team?",
    a: "You're not paying us to learn — you're paying for a team that's already made the mistakes on someone else's dime. Building in-house from scratch takes 12–18 months and $1–2M before you have anything in production. We've shipped this stack before: the compliance layer, the LMS integrations, the payment processors.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(31,46,61,0.1)",
        borderRadius: 12,
        marginBottom: 8,
        overflow: "hidden",
        transition: "border-color 0.2s",
        borderColor: open ? "rgba(82,122,158,0.2)" : "rgba(31,46,61,0.1)",
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
            color: open ? "#1F2E3D" : "#527A9E",
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
            border: `1px solid ${open ? "rgba(82,122,158,0.4)" : "rgba(31,46,61,0.2)"}`,
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
  return (
    <section
      id="faq"
      style={{ background: "#F5F8FC", padding: "100px 24px" }}
    >
      <div
        style={{ maxWidth: 1000, margin: "0 auto" }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* left */}
        <div className="md:pr-12" style={{ paddingRight: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#527A9E",
              background: "rgba(82,122,158,0.1)",
              border: "1px solid rgba(82,122,158,0.2)",
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
              color: "#1F2E3D",
              marginBottom: 16,
            }}
          >
            Straight answers{" "}
            <span style={{ color: "#527A9E" }}>before the conversation</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#7A8FA3", margin: 0 }}>
            The questions most SMB lenders ask before scheduling a call.
          </p>
        </div>

        {/* right — accordion */}
        <div>
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
