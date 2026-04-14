"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Friction Mapping",
    sub: "Week 1",
    body: "We audit your current borrower journey end-to-end — from payment portal to support queue. You walk away with a clear map of where borrowers disengage and where delinquency risk concentrates.",
  },
  {
    num: "02",
    title: "Platform Design",
    sub: "Weeks 1–2",
    body: "Our lending UX specialists design the borrower portal around your credit model — payment flows, notification triggers, SBA compliance requirements, and your brand.",
  },
  {
    num: "03",
    title: "Engineering & LMS Integration",
    sub: "Continuous sprints",
    body: "We build and integrate — connecting your LMS (LoanPro, LendAPI, or others), payment processors, and data providers. Every sprint ships working software against real loan data.",
  },
  {
    num: "04",
    title: "Launch & Measurement",
    sub: "Structured exit",
    body: "We launch against a live portfolio segment, measure delinquency rate and support ticket volume, and hand off the codebase — fully documented, fully owned by your team.",
  },
];

export default function SmbHowItWorks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      style={{
        position: "relative",
        background: "#F5F8FC",
        borderTop: "1px solid rgba(31,46,61,0.08)",
        padding: "100px 24px",
        overflow: "hidden",
      }}
    >
      {/* dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 100%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 100%, black 20%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* glow bottom */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(82,122,158,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
            How it works
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#1F2E3D",
              marginBottom: 16,
            }}
          >
            From friction audit to production platform —{" "}
            <br />
            <span style={{ color: "#527A9E" }}>without a vendor in the middle</span>
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "#7A8FA3",
              margin: "0 auto",
              maxWidth: 520,
            }}
          >
            A structured process with clear deliverables at every stage. 8–16 weeks from kickoff to production.
          </p>
        </div>

        <style>{`
          .hw-smb-desktop { display: none; }
          .hw-smb-mobile  { display: flex; flex-direction: column; }
          @media (min-width: 48rem) {
            .hw-smb-desktop { display: block; }
            .hw-smb-mobile  { display: none !important; }
          }
        `}</style>

        {/* DESKTOP */}
        <div className="hw-smb-desktop">
          <div style={{ position: "relative", display: "flex", marginBottom: 32 }}>
            <div
              style={{
                position: "absolute",
                top: 22,
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: 1,
                background: "linear-gradient(to right, #527A9E 0%, rgba(82,122,158,0.2) 100%)",
              }}
            />
            {steps.map((s, i) => (
              <div
                key={s.num}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <div
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: active === i ? "#1F2E3D" : "#FFFFFF",
                    border: active === i ? "2px solid #527A9E" : "1px solid rgba(82,122,158,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: active === i ? "#fff" : "#527A9E",
                    letterSpacing: "0.04em",
                    position: "relative",
                    zIndex: 1,
                    cursor: "default",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                    boxShadow: active === i ? "0 0 20px rgba(82,122,158,0.4)" : "none",
                  }}
                >
                  {s.num}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {steps.map((s, i) => (
              <div
                key={s.num}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  flex: 1,
                  background: active === i ? "#EEF3F8" : "#FFFFFF",
                  borderRadius: 14,
                  padding: "24px 22px 28px",
                  transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
                  transform: active === i ? "translateY(-3px)" : "translateY(0)",
                  boxShadow: active === i
                    ? "0 10px 36px rgba(31,46,61,0.12), inset 0 0 0 1px rgba(82,122,158,0.35)"
                    : "inset 0 0 0 1px rgba(31,46,61,0.1)",
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#527A9E",
                    background: "rgba(82,122,158,0.1)",
                    border: "1px solid rgba(82,122,158,0.18)",
                    padding: "2px 8px",
                    borderRadius: 100,
                    marginBottom: 12,
                  }}
                >
                  {s.sub}
                </span>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "#1F2E3D",
                    marginBottom: 10,
                    lineHeight: 1.35,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: "#6B8099", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="hw-smb-mobile" style={{ gap: 0, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 21,
              top: 22,
              bottom: 22,
              width: 1,
              background: "linear-gradient(to bottom, #527A9E 0%, rgba(82,122,158,0.1) 100%)",
            }}
          />
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", gap: 20, marginBottom: i < steps.length - 1 ? 16 : 0 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1px solid rgba(82,122,158,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#527A9E",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  borderRadius: 14,
                  padding: "20px 20px 24px",
                  boxShadow: "inset 0 0 0 1px rgba(31,46,61,0.1)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#527A9E",
                    background: "rgba(82,122,158,0.1)",
                    border: "1px solid rgba(82,122,158,0.18)",
                    padding: "2px 8px",
                    borderRadius: 100,
                    marginBottom: 10,
                  }}
                >
                  {s.sub}
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1F2E3D", marginBottom: 8, lineHeight: 1.35 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: "#6B8099", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "11px 28px",
              fontSize: 14,
              fontWeight: 600,
              color: "#F5F8FC",
              textDecoration: "none",
              background: "#1F2E3D",
              borderRadius: 10,
              border: "1px solid rgba(82,122,158,0.2)",
              boxShadow: "0 2px 12px rgba(31,46,61,0.2)",
            }}
          >
            Get a Friction Audit
          </a>
        </div>
      </div>
    </section>
  );
}
