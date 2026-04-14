"use client";

import { useRef, useState } from "react";
import { trackFormStart, trackFormSubmit } from "@/components/GoogleAnalytics";

const EDGE_FUNCTION_URL = "https://pbvjsixlqnuzcnqahbxu.supabase.co/functions/v1/submit-lead";

type Status = "idle" | "loading" | "success" | "error";

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
    border: "1px solid rgba(6,24,50,0.15)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 14,
    color: "#061832",
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
              color: "#41A0DC",
              background: "rgba(65,160,220,0.08)",
              border: "1px solid rgba(65,160,220,0.2)",
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
              color: "#061832",
              marginBottom: 20,
            }}
          >
            Let&apos;s discuss how to improve your servicing experience —{" "}
            <span style={{ color: "#41A0DC" }}>and give you full control over how your platform operates</span>
          </h2>

          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              background: "#FFFFFF",
              border: "1px solid rgba(6,24,50,0.08)",
              borderRadius: 12,
              padding: "16px 18px",
              boxShadow: "0 1px 3px rgba(6,24,50,0.04)",
            }}
          >
            <div
              aria-hidden
              style={{
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(65,160,220,0.08)",
                border: "1px solid rgba(65,160,220,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  stroke="#41A0DC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#061832", lineHeight: 1.4, margin: "0 0 4px 0" }}>
                No commitment
              </p>
              <p style={{ fontSize: 13, color: "#7A8FA3", lineHeight: 1.6, margin: 0 }}>
                We&apos;ll review your current setup and show you what can be improved.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(6,24,50,0.1)",
            borderRadius: 16,
            padding: "clamp(20px, 5vw, 36px) clamp(16px, 4vw, 32px)",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, color: "#061832", marginBottom: 4, letterSpacing: "-0.02em" }}>
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
                <label htmlFor="smb-name" style={labelStyle}>First name <span style={{ color: "#41A0DC" }}>*</span></label>
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
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(6,24,50,0.15)")}
                />
              </div>
              <div>
                <label htmlFor="smb-lastname" style={labelStyle}>Last name <span style={{ color: "#41A0DC" }}>*</span></label>
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
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(6,24,50,0.15)")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="smb-email" style={labelStyle}>Work email <span style={{ color: "#41A0DC" }}>*</span></label>
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
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(6,24,50,0.15)")}
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
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(6,24,50,0.15)")}
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
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(6,24,50,0.15)")}
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
                background: status === "loading" ? "#2E8AB8" : "#41A0DC",
                border: "none",
                borderRadius: 10,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                boxShadow: "0 0 0 1px rgba(65,160,220,0.35), 0 4px 20px rgba(65,160,220,0.25)",
                transition: "background 0.15s",
                opacity: status === "loading" ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.background = "#2E8AB8"; }}
              onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.background = "#41A0DC"; }}
            >
              {status === "loading" ? "Sending..." : "Request My Friction Audit"}
            </button>

            {status === "success" && (
              <p style={{ fontSize: 13, color: "#41A0DC", textAlign: "center", margin: 0 }}>
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
                background: "rgba(6,24,50,0.06)",
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
