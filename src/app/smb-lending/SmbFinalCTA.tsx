"use client";

import { useRef, useState } from "react";
import { trackFormStart, trackFormSubmit } from "@/components/GoogleAnalytics";

const EDGE_FUNCTION_URL = "https://pbvjsixlqnuzcnqahbxu.supabase.co/functions/v1/submit-lead";

type Status = "idle" | "loading" | "success" | "error";

const painPoints = [
  "Delinquency climbing above your model's threshold",
  "Borrowers calling support for tasks they should self-serve",
  "Waiting on a vendor roadmap to ship a feature you need now",
  "SBA audit prep eating engineering time",
  "A portal that wasn't built for how SMB borrowers actually behave",
];

export default function SmbFinalCTA() {
  const [form, setForm] = useState({ name: "", last_name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const formStarted = useRef(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          origin_url: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      trackFormSubmit();
      setStatus("success");
      setForm({ name: "", last_name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid rgba(31,46,61,0.15)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 14,
    color: "#1F2E3D",
    boxSizing: "border-box" as const,
    transition: "border-color 0.15s, box-shadow 0.15s",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block" as const,
    fontSize: 12,
    fontWeight: 500 as const,
    color: "#7A8FA3",
    marginBottom: 6,
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "#F5F8FC",
        padding: "clamp(60px, 10vw, 120px) 24px clamp(60px, 10vw, 140px)",
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

      {/* glow */}
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

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ position: "relative", maxWidth: 1000, margin: "0 auto", gap: "40px 80px", alignItems: "start" }}
      >
        {/* LEFT: copy */}
        <div>
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
            Let&apos;s talk
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#1F2E3D",
              marginBottom: 20,
            }}
          >
            If delinquency is climbing and your portal wasn&apos;t built for SMB borrowers,{" "}
            <span style={{ color: "#527A9E", textShadow: "0 0 24px rgba(82,122,158,0.6), 0 0 48px rgba(82,122,158,0.25)" }}>you&apos;re paying for it every month</span>
          </h2>

          <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {painPoints.map((point) => (
              <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: 3,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "rgba(82,122,158,0.15)",
                    border: "1px solid rgba(82,122,158,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                    <circle cx="3.5" cy="3.5" r="2.5" fill="#527A9E" />
                  </svg>
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: "#7A8FA3" }}>{point}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              background: "rgba(74,222,128,0.04)",
              border: "1px solid rgba(74,222,128,0.12)",
              borderRadius: 10,
              padding: "14px 16px",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>🔒</span>
            <p style={{ fontSize: 12, color: "#7A8FA3", lineHeight: 1.65, margin: 0 }}>
              No commitment. We map your borrower journey and tell you honestly whether a custom platform is the right
              fit — <span style={{ color: "#527A9E" }}>or if it isn&apos;t.</span>
            </p>
          </div>
        </div>

        {/* RIGHT: form */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(31,46,61,0.1)",
            borderRadius: 16,
            padding: "clamp(20px, 5vw, 36px) clamp(16px, 4vw, 32px)",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, color: "#1F2E3D", marginBottom: 4, letterSpacing: "-0.02em" }}>
            Request your free friction audit
          </p>
          <p style={{ fontSize: 12, color: "#7A8FA3", lineHeight: 1.6, marginBottom: 24 }}>
            We map your borrower journey and tell you where delinquency risk concentrates — no commitment.
          </p>

          <form
            onSubmit={handleSubmit}
            onFocus={() => {
              if (!formStarted.current) {
                formStarted.current = true;
                trackFormStart();
              }
            }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
              <div>
                <label htmlFor="smb-name" style={labelStyle}>First name <span style={{ color: "#527A9E" }}>*</span></label>
                <input
                  id="smb-name"
                  type="text"
                  placeholder="John"
                  required
                  aria-required="true"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  className="focus-visible-ring"
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.5)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(31,46,61,0.15)")}
                />
              </div>
              <div>
                <label htmlFor="smb-lastname" style={labelStyle}>Last name <span style={{ color: "#527A9E" }}>*</span></label>
                <input
                  id="smb-lastname"
                  type="text"
                  placeholder="Smith"
                  required
                  aria-required="true"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  style={inputStyle}
                  className="focus-visible-ring"
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.5)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(31,46,61,0.15)")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="smb-email" style={labelStyle}>Work email <span style={{ color: "#527A9E" }}>*</span></label>
              <input
                id="smb-email"
                type="email"
                placeholder="john@lender.com"
                required
                aria-required="true"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                className="focus-visible-ring"
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.5)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(31,46,61,0.15)")}
              />
            </div>

            <div>
              <label htmlFor="smb-phone" style={labelStyle}>Phone</label>
              <input
                id="smb-phone"
                type="tel"
                placeholder="+1 305 600 0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                className="focus-visible-ring"
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.5)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(31,46,61,0.15)")}
              />
            </div>

            <div>
              <label htmlFor="smb-message" style={labelStyle}>What&apos;s the main problem you&apos;re solving?</label>
              <textarea
                id="smb-message"
                placeholder="Tell us about your loan portfolio and current servicing setup..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                className="focus-visible-ring"
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(82,122,158,0.5)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(31,46,61,0.15)")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                padding: "13px",
                fontSize: 14,
                fontWeight: 600,
                color: "#F5F8FC",
                background: status === "loading" ? "#527A9E" : "#1F2E3D",
                border: "none",
                borderRadius: 10,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                boxShadow: "0 0 0 1px rgba(82,122,158,0.35), 0 4px 20px rgba(82,122,158,0.25)",
                transition: "background 0.15s",
                opacity: status === "loading" ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.background = "#2d4460"; }}
              onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.background = "#1F2E3D"; }}
            >
              {status === "loading" ? "Sending..." : "Request My Friction Audit"}
            </button>

            {status === "success" && (
              <p style={{ fontSize: 13, color: "#4ade80", textAlign: "center", margin: 0 }}>
                Message sent! We&apos;ll be in touch within one business day.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: 13, color: "#f87171", textAlign: "center", margin: 0 }}>
                Failed to send. Please try again or schedule directly below.
              </p>
            )}

            <a
              href="https://schedule.luby.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 500,
                color: "#7A8FA3",
                textDecoration: "none",
                background: "rgba(31,46,61,0.06)",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Schedule a Meeting
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
