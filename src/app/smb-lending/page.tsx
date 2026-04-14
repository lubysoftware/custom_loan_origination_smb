import type { Metadata } from "next";
import SmbFooter from "./SmbFooter";
import SmbNavbar from "./SmbNavbar";
import SmbComparison from "./SmbComparison";
import SmbHowItWorks from "./SmbHowItWorks";
import SmbClients from "./SmbClients";
import SmbFAQ from "./SmbFAQ";
import SmbFinalCTA from "./SmbFinalCTA";
import { DeviceFrameset } from "react-device-frameset";

export const metadata: Metadata = {
  title: "Custom Loan Servicing Platform for SMB Lenders | Luby",
  description:
    "Luby builds custom loan servicing platforms for SMB and SBA lenders — reducing delinquency, cutting support costs, connected to LoanPro and other LMS platforms. You own the code.",
  alternates: {
    canonical: "https://landing.luby.co/ai_oriented_development/smb-lending/",
  },
  openGraph: {
    type: "website",
    url: "https://landing.luby.co/ai_oriented_development/smb-lending/",
    title: "Custom Loan Servicing Platform for SMB Lenders | Luby",
    description:
      "Luby builds custom loan servicing platforms for SMB and SBA lenders — reducing delinquency, cutting support costs, connected to LoanPro and other LMS platforms. You own the code.",
    siteName: "Luby",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Loan Servicing Platform for SMB Lenders | Luby",
    description:
      "Custom loan servicing platforms for SMB and SBA lenders — connected to LoanPro, owned by your team.",
  },
  robots: { index: true, follow: true },
};

/* ─── Ticker items ─────────────────────────────────────────────────────── */
const tickerItems = [
  "You own the codebase — no vendor license",
  "No change request queue · no third-party roadmap",
  "Built on LoanPro · in production · live portfolio",
  "10+ years in financial software",
  "SMB lending specialists · UX + engineering",
  "8–16 weeks from kickoff to production",
  "LoanPro · LendAPI · Moov · J.P. Morgan Payments · Stripe",
  "500+ projects delivered · 100+ engineers",
];

/* ─── Solution cards ─────────────────────────────────────────────────────── */
const solutionCards = [
  {
    num: "01",
    title: "SMB-native borrower portal",
    body: "Real-time LMS sync. Mobile-first. Designed for borrowers paying from their phone, not a desktop at a bank branch.",
    accent: "#527A9E",
  },
  {
    num: "02",
    title: "Payment flows that remove every excuse",
    body: "ACH, debit, autopay, one-time payments — with save-and-return and confirmation.",
    accent: "#4ADE80",
  },
  {
    num: "03",
    title: "Proactive outreach before the missed payment",
    body: "Triggered outreach before the missed payment — not after. Push, SMS, and email tied to real loan state, not a calendar.",
    accent: "#0DA2E9",
  },
  {
    num: "04",
    title: "SBA compliance baked in",
    body: "SBA 7(a) and 504 workflows, SOP 50 10 8, Dodd-Frank 1071, and audit trails.",
    accent: "#A78BFA",
  },
  {
    num: "05",
    title: "UX designed by lending specialists",
    body: "Our design team works exclusively in financial products.",
    accent: "#F472B6",
  },
];

/* ─── Integration groups ─────────────────────────────────────────────────── */
const integrationGroups = [
  {
    label: "LMS / Core",
    items: ["LoanPro", "LendAPI", "Peach Finance", "Canopy"],
  },
  {
    label: "Payments",
    items: ["Moov", "J.P. Morgan Payments", "Stripe", "Dwolla"],
  },
  {
    label: "Data & Compliance",
    items: ["Experian", "TransUnion", "Equifax", "Plaid", "DocuSign"],
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function SmbLendingPage() {
  return (
    <>
      <SmbNavbar />
      <main className="pt-16 smb-page">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            background: "#0D1B2A",
            minHeight: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          {/* background image — subtle tech texture */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Brand/images/background-image.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              opacity: 0.22,
              pointerEvents: "none",
            }}
          />
          {/* primary dark overlay — left denser for text legibility */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(110deg, rgba(8,18,30,0.97) 0%, rgba(8,18,30,0.88) 45%, rgba(8,18,30,0.65) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* blue glow — top left accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-15%",
              left: "-5%",
              width: 600,
              height: 600,
              background: "radial-gradient(ellipse at center, rgba(82,122,158,0.22) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          {/* cyan glow — right accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "10%",
              right: "-8%",
              width: 500,
              height: 500,
              background: "radial-gradient(ellipse at center, rgba(13,162,233,0.1) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          {/* vignette bottom — blend into next section */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "35%",
              background: "linear-gradient(to top, rgba(8,18,30,1) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1100,
              margin: "0 auto",
              width: "100%",
              padding: "clamp(80px, 10vh, 120px) 0 clamp(60px, 8vh, 100px)",
              display: "flex",
              alignItems: "center",
              gap: "clamp(40px, 6vw, 80px)",
            }}
          >
          {/* ── text column ── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            {/* eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                padding: "5px 14px",
                borderRadius: 100,
                border: "1px solid rgba(158,183,214,0.25)",
                background: "rgba(82,122,158,0.12)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#9EB7D6",
                  flexShrink: 0,
                  boxShadow: "0 0 8px rgba(158,183,214,0.8)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#9EB7D6",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                Custom Loan Servicing for SMB Lenders
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 54px)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                color: "#F5F8FC",
                margin: "0 0 20px",
                maxWidth: 600,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Your off-the-shelf servicing platform{" "}
              <span style={{ color: "#9EB7D6", textShadow: "0 0 24px rgba(158,183,214,0.7), 0 0 48px rgba(158,183,214,0.3)" }}>is costing you payments.</span>
            </h1>

            {/* subheadline */}
            <p
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#D7DEE6",
                margin: "0 0 16px",
                maxWidth: 580,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Generic tools create friction. Friction turns into delinquency.{" "}
              We build <span style={{ color: "#F5F8FC" }}>custom servicing platforms</span>{" "}
              for SMB and SBA lenders — integrated with your LMS, designed for your credit model, and fully under your control.
            </p>

            {/* ownership line */}
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(215,222,230,0.65)",
                margin: "0 0 36px",
                letterSpacing: "0.01em",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              No vendor dependency. No change request queue. Full control.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
              <a href="#how-it-works" className="smb-btn-primary">
                See How It Works
              </a>
              <a href="#contact" className="smb-btn-ghost">
                Schedule a Call →
              </a>
            </div>

            {/* trust bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 0",
                marginTop: 40,
                paddingTop: 32,
                borderTop: "1px solid rgba(215,222,230,0.12)",
              }}
            >
              {[
                "12-week avg. delivery",
                "Live portfolios in production",
                "10+ years in financial software",
              ].map((item, i) => (
                <span
                  key={item}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(215,222,230,0.6)",
                    letterSpacing: "0.01em",
                    paddingRight: i < 2 ? 20 : 0,
                    marginRight: i < 2 ? 20 : 0,
                    borderRight: i < 2 ? "1px solid rgba(215,222,230,0.15)" : "none",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>{/* end text column */}

          {/* ── laptop mockup column ── */}
          <div
            className="smb-hero-laptop"
            style={{
              flexShrink: 0,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 40,
              paddingBottom: 40,
            }}
          >
            {/* "Live in production" badge — top right */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 100,
                background: "rgba(15,25,38,0.88)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(74,222,128,0.25)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                animation: "smb-float 4s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px rgba(74,222,128,0.8)", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#4ADE80", letterSpacing: "0.04em", whiteSpace: "nowrap", fontFamily: "var(--font-inter), sans-serif" }}>Live in production</span>
            </div>

            {/* laptop frame — 960×600 scaled to 0.5 → 480×300 */}
            <div
              style={{
                position: "relative",
                width: 480,
                height: 300,
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 960,
                  height: 600,
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
              >
                <DeviceFrameset device="MacBook Pro" color="silver">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Brand/images/irisPNG.png`}
                    alt="IrisLoan borrower portal"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </DeviceFrameset>
              </div>
            </div>

            {/* LoanPro badge — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: -8,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 12,
                background: "rgba(15,25,38,0.88)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(82,122,158,0.25)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                animation: "smb-float 4s ease-in-out infinite",
                animationDelay: "1.8s",
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, color: "#9EB7D6", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-inter), sans-serif" }}>LoanPro</span>
              <span style={{ width: 1, height: 14, background: "rgba(158,183,214,0.2)" }} />
              <span style={{ fontSize: 11, color: "#D7DEE6", fontFamily: "var(--font-inter), sans-serif" }}>Real-time sync</span>
            </div>
          </div>

          </div>

          <style>{`
            @keyframes smb-float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @media (max-width: 767px) {
              .smb-hero-laptop { display: none; }
            }
          `}</style>
        </section>

        {/* ── TICKER ────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(90deg, #1F2E3D 0%, #2d4460 50%, #1F2E3D 100%)",
            overflow: "hidden",
            borderTop: "1px solid rgba(82,122,158,0.2)",
            borderBottom: "1px solid rgba(82,122,158,0.2)",
            padding: "14px 0",
            boxShadow: "0 0 40px rgba(82,122,158,0.15) inset",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 0,
              animation: "smb-ticker 50s linear infinite",
              width: "max-content",
            }}
          >
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(215,222,230,0.75)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                  padding: "0 32px",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {item}
                <span style={{ marginLeft: 32, opacity: 0.5 }}>·</span>
              </span>
            ))}
          </div>
          <style>{`
            @keyframes smb-ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
        <section
          id="problem"
          style={{
            background: "#F5F8FC",
            borderTop: "1px solid rgba(31,46,61,0.08)",
            borderBottom: "1px solid rgba(31,46,61,0.08)",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            <div style={{ marginBottom: 48 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#3D6B8E",
                  background: "rgba(82,122,158,0.1)",
                  border: "1px solid rgba(82,122,158,0.22)",
                  padding: "4px 12px",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              >
                The Problem
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#1F2E3D",
                  marginBottom: 20,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Off-the-shelf loan servicing platforms{" "}
                <span style={{ color: "#527A9E" }}>limit how you operate.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", maxWidth: 720, marginBottom: 16 }}>
                Off-the-shelf loan servicing platforms weren&apos;t built for your credit model.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", maxWidth: 720, marginBottom: 16 }}>
                They force your workflows into generic structures and gate every change behind vendor timelines.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", maxWidth: 720, marginBottom: 16 }}>
                Small updates take months. Your borrower experience stays generic.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", maxWidth: 720 }}>
                You don&apos;t control the platform — and that slows down everything that impacts delinquency.
              </p>
            </div>

            <SmbComparison />

            {/* closing row */}
            <div
              style={{
                marginTop: 24,
                padding: "20px 28px",
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: "#6B8099" }}>
                Fast and owned. That&apos;s the only combination that actually reduces delinquency.
              </p>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#3D6B8E",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                See what we&apos;d change in your portal →
              </a>
            </div>
          </div>
        </section>

        {/* ── THE SOLUTION ──────────────────────────────────────────────── */}
        <section
          style={{
            background: "#D7DEE6",
            borderTop: "1px solid rgba(31,46,61,0.08)",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            <div style={{ marginBottom: 56 }}>
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
                The Solution
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#1F2E3D",
                  marginBottom: 16,
                  maxWidth: 680,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Custom loan servicing, built around how{" "}
                <span style={{ color: "#527A9E" }}>SMB borrowers actually behave</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", maxWidth: 600 }}>
                We don&apos;t configure a template. We build a servicing platform for your credit model, your loan
                products, and your borrowers. You own the codebase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 16 }}>
              {solutionCards.map((card) => (
                <SolutionCard key={card.num} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHANNEL ───────────────────────────────────────────────── */}
        <section
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid rgba(31,46,61,0.08)",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "48px 64px", alignItems: "start" }}
            >
              {/* ── LEFT: narrative ── */}
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
                  The Channel
                </div>
                <h2
                  style={{
                    fontSize: "clamp(26px, 3.2vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.12,
                    color: "#1F2E3D",
                    marginBottom: 20,
                  }}
                >
                  Your borrower portal can do more{" "}
                  <span style={{ color: "#527A9E" }}>than process payments.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  You already paid to acquire these borrowers.
                  Your servicing platform should be your lowest-cost growth channel.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  Every time a borrower logs in, they&apos;re in a high-intent moment — checking balances,
                  making payments, thinking about money. That level of attention can&apos;t be bought.
                  It can only be built into the experience.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 28 }}>
                  Most lenders treat this as a transaction.{" "}
                  <span style={{ color: "#527A9E", fontWeight: 500 }}>The best ones turn it into a relationship.</span>
                </p>
                <div
                  style={{
                    padding: "20px 24px",
                    background: "#F5F8FC",
                    border: "1px solid rgba(31,46,61,0.1)",
                    borderRadius: 12,
                  }}
                >
                  <p style={{ margin: "0 0 6px", fontSize: 14, lineHeight: 1.7, color: "#7A8FA3" }}>
                    Your borrowers are already in your platform.
                  </p>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#527A9E", fontWeight: 500 }}>
                    The question is what you do with that moment.
                  </p>
                </div>
              </div>
              {/* ── RIGHT: opportunity cards ── */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#527A9E",
                    marginBottom: 20,
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  What that unlocks
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      title: "Targeted offers, driven by loan data",
                      body: "Pre-qualifications, cross-sell, partner offers — triggered by real borrower context, not guesswork.",
                      accent: "#527A9E",
                      accentBg: "rgba(82,122,158,0.06)",
                    },
                    {
                      title: "Direct communication, fully controlled",
                      body: "Push, SMS, in-app — the right message, at the right moment, without relying on external channels.",
                      accent: "#0DA2E9",
                      accentBg: "rgba(13,162,233,0.05)",
                    },
                    {
                      title: "A platform your team can operate",
                      body: "Launch campaigns, update content, and target segments directly from your admin — no engineering, no vendor queue.",
                      accent: "#4A9FD4",
                      accentBg: "rgba(74,159,212,0.05)",
                    },
                    {
                      title: "A data layer that compounds",
                      body: "Every interaction feeds your ability to segment, predict, and act. The platform improves as your portfolio grows.",
                      accent: "#4ADE80",
                      accentBg: "rgba(74,222,128,0.05)",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: card.accentBg,
                        border: "1px solid rgba(31,46,61,0.09)",
                        borderLeft: `3px solid ${card.accent}`,
                        borderRadius: 12,
                        padding: "20px 22px",
                        position: "relative",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          color: "#1F2E3D",
                          marginBottom: 6,
                          lineHeight: 1.35,
                        }}
                      >
                        {card.title}
                      </h3>
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B8099", margin: 0 }}>
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ──────────────────────────────────────────────── */}
        <div
            style={{
              background: "#1F2E3D",
              borderTop: "1px solid rgba(82,122,158,0.2)",
              padding: "72px 24px 80px",
              overflow: "hidden",
            }}
          >
            <style>{`
              @keyframes smb-scroll-left {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
              @keyframes smb-scroll-right {
                from { transform: translateX(-50%); }
                to   { transform: translateX(0); }
              }
            `}</style>

            {/* heading row */}
            <div style={{ maxWidth: 1000, margin: "0 auto 52px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9EB7D6",
                  marginBottom: 14,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                Integrations
              </p>
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "#F5F8FC",
                  marginBottom: 12,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Your stack.{" "}
                <span style={{ color: "#9EB7D6", textShadow: "0 0 24px rgba(158,183,214,0.5)" }}>
                  Your processors. Your call.
                </span>
              </h3>
              <p style={{ fontSize: 15, color: "rgba(158,183,214,0.65)", maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-inter), sans-serif", lineHeight: 1.7 }}>
                Most servicing platforms lock you into their integrations.
                We build the other way — and you own every connection we ship.
              </p>
            </div>

            {/* animated rows */}
            {[
              {
                label: "LMS / Core",
                color: "#4A9FD4",
                bg: "rgba(74,159,212,0.08)",
                border: "rgba(74,159,212,0.22)",
                items: ["LoanPro", "LendAPI", "Peach Finance", "Canopy", "LoanPro", "LendAPI", "Peach Finance", "Canopy"],
                dir: "left" as const,
                speed: "28s",
              },
              {
                label: "Payments",
                color: "#4ADE80",
                bg: "rgba(74,222,128,0.07)",
                border: "rgba(74,222,128,0.2)",
                items: ["Moov", "J.P. Morgan Payments", "Stripe", "Dwolla", "Moov", "J.P. Morgan Payments", "Stripe", "Dwolla"],
                dir: "right" as const,
                speed: "22s",
              },
              {
                label: "Data & Compliance",
                color: "#A78BFA",
                bg: "rgba(167,139,250,0.07)",
                border: "rgba(167,139,250,0.2)",
                items: ["Experian", "TransUnion", "Equifax", "Plaid", "DocuSign", "Experian", "TransUnion", "Equifax", "Plaid", "DocuSign"],
                dir: "left" as const,
                speed: "32s",
              },
            ].map((row) => (
              <div key={row.label} style={{ marginBottom: 16, position: "relative", overflow: "hidden" }}>
                {/* fade masks */}
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: 80, background: "linear-gradient(to right, #1F2E3D, transparent)", zIndex: 1, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: "0 0 0 auto", width: 80, background: "linear-gradient(to left, #1F2E3D, transparent)", zIndex: 1, pointerEvents: "none" }} />

                <div
                  style={{
                    display: "flex",
                    width: "max-content",
                    gap: 10,
                    animation: `smb-scroll-${row.dir} ${row.speed} linear infinite`,
                  }}
                >
                  {[...row.items, ...row.items].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "9px 18px",
                        background: row.bg,
                        border: `1px solid ${row.border}`,
                        borderRadius: 999,
                        flexShrink: 0,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: row.color,
                          flexShrink: 0,
                          boxShadow: `0 0 6px ${row.color}80`,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#D7DEE6",
                          fontFamily: "var(--font-inter), sans-serif",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* category legend */}
            <div
              style={{
                maxWidth: 1000,
                margin: "36px auto 0",
                display: "flex",
                flexWrap: "wrap" as const,
                justifyContent: "center",
                gap: "10px 32px",
              }}
            >
              {[
                { label: "LMS / Core", color: "#4A9FD4" },
                { label: "Payments", color: "#4ADE80" },
                { label: "Data & Compliance", color: "#A78BFA" },
              ].map((cat) => (
                <div key={cat.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0, boxShadow: `0 0 8px ${cat.color}70` }} />
                  <span style={{ fontSize: 12, color: "rgba(158,183,214,0.6)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0.03em" }}>
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
        <SmbHowItWorks />

        {/* ── WHY LUBY ──────────────────────────────────────────────────── */}
        <section
          id="why-luby"
          style={{
            background: "#F5F8FC",
            borderTop: "1px solid rgba(31,46,61,0.08)",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "48px 64px", alignItems: "start" }}
            >
              {/* ── LEFT: text ── */}
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
                  Why Luby
                </div>
                <h2
                  style={{
                    fontSize: "clamp(26px, 3.2vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.12,
                    color: "#1F2E3D",
                    marginBottom: 20,
                  }}
                >
                  Custom loan servicing used to mean long timelines.{" "}
                  <span style={{ color: "#527A9E" }}>AI changed that.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  What used to take over a year can now be built and launched in weeks.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  But building fast isn&apos;t the hard part. In financial services, the complexity lives in the
                  details — regulatory workflows, risk logic, payment behavior, and LMS integrations that don&apos;t
                  behave the way the documentation suggests.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  That&apos;s where most builds break. Teams move quickly, but miss what matters in production.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16 }}>
                  Luby brings over a decade of experience building financial systems across lending, payments, and
                  banking infrastructure — combined with AI-accelerated development to move faster without cutting
                  corners.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#527A9E", fontWeight: 500, marginBottom: 16 }}>
                  We know how these systems behave under real conditions. We know where they fail. And we build to
                  handle it from the start.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#7A8FA3" }}>
                  Every month on a platform that doesn&apos;t fit your borrowers is a month of preventable delinquency.
                </p>
              </div>

              {/* ── RIGHT: cards ── */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    num: "10+",
                    title: "years in financial software",
                    body: "Lending, payments, and banking systems built for regulated institutions in the U.S. and Latin America. Experience that shows up where most platforms fail — in production.",
                    accent: "#9EB7D6",
                    accentGlow: "rgba(158,183,214,0.25)",
                  },
                  {
                    num: "↗",
                    title: "Built for regulated environments",
                    body: "SBA 7(a), 504, Dodd-Frank 1071, ECOA, audit trails — designed in from day one, not added later.",
                    accent: "#4A9FD4",
                    accentGlow: "rgba(74,159,212,0.25)",
                  },
                  {
                    num: "✓",
                    title: "Proven in production",
                    body: "IrisLoan runs on LoanPro, processing real payments across a live portfolio. Sunwest\u2019s platform launched at peak demand and drove 40% growth. We\u2019ve built this before \u2014 and we know what it takes to make it work.",
                    accent: "#4ADE80",
                    accentGlow: "rgba(74,222,128,0.2)",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    style={{
                      background: "#1F2E3D",
                      border: "1px solid rgba(82,122,158,0.2)",
                      borderRadius: 16,
                      padding: "24px 28px 28px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* accent top bar */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: card.accent,
                        boxShadow: `0 0 12px ${card.accentGlow}`,
                      }}
                    />
                    {/* ambient glow behind content */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: -40,
                        left: -20,
                        width: 160,
                        height: 160,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${card.accentGlow} 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />
                    <p
                      style={{
                        fontSize: card.num.length <= 2 ? 30 : 13,
                        fontWeight: 700,
                        letterSpacing: card.num.length <= 2 ? "-0.04em" : "0.08em",
                        color: card.accent,
                        marginBottom: 10,
                        lineHeight: 1,
                        textShadow: `0 0 16px ${card.accentGlow}`,
                        position: "relative",
                      }}
                    >
                      {card.num}
                    </p>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "#F5F8FC",
                        marginBottom: 8,
                        lineHeight: 1.3,
                        position: "relative",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.75,
                        color: "rgba(158,183,214,0.75)",
                        margin: 0,
                        position: "relative",
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IN PRODUCTION ─────────────────────────────────────────────── */}
        <section
          id="in-production"
          style={{
            position: "relative",
            background: "#08121e",
            borderTop: "1px solid rgba(82,122,158,0.15)",
            padding: "100px 24px",
            overflow: "hidden",
          }}
        >
          {/* ambient glow */}
          <div aria-hidden style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse at center, rgba(82,122,158,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            {/* heading */}
            <div style={{ marginBottom: 48 }}>
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
                In Production
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                We&apos;ve shipped this.{" "}
                <span style={{ color: "#527A9E" }}>Here&apos;s what it looks like at scale.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#D7DEE6", maxWidth: 640, marginBottom: 8 }}>
                IrisLoan is a full-stack loan servicing platform built on LoanPro — in production, processing real
                payments across a live portfolio. Not a prototype. A borrower-facing application handling the complete
                servicing lifecycle.
              </p>
            </div>

            {/* IrisLoan feature card */}
            <div
              style={{
                position: "relative",
                background: "rgba(82,122,158,0.06)",
                border: "1px solid rgba(82,122,158,0.2)",
                borderRadius: 16,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: 32,
                boxShadow: "0 0 60px rgba(82,122,158,0.1) inset, 0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* glow accent top */}
              <div aria-hidden style={{ position: "absolute", top: -1, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(82,122,158,0.6), transparent)", pointerEvents: "none" }} />
              {/* meta row */}
              <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
                {[
                  { label: "LMS", value: "LoanPro", desc: "Real-time data sync" },
                  { label: "Status", value: "Live", desc: "Processing real payments" },
                  { label: "Delivery", value: "12 weeks", desc: "Kickoff to production" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "#1F2E3D",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      padding: "20px 24px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#D7DEE6",
                        marginBottom: 8,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: "#527A9E",
                        marginBottom: 4,
                      }}
                    >
                      {item.value}
                    </p>
                    <p style={{ fontSize: 13, color: "#D7DEE6" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* what's live */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D7DEE6",
                    marginBottom: 14,
                  }}
                >
                  What&apos;s live
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[
                    "LoanPro real-time data sync",
                    "Borrower portal (web + mobile)",
                    "ACH & debit processing",
                    "Autopay enrollment",
                    "Scheduled & one-time payments",
                    "Payment history & timeline",
                    "Push / SMS / email notifications",
                    "Configurable triggers",
                    "Loan document access",
                    "Admin CMS",
                    "Role-based access",
                    "2FA",
                    "Self-service account management",
                    "FAQ & help center",
                    "iOS & Android apps",
                  ].map((feature) => (
                    <span
                      key={feature}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#527A9E",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(31,46,61,0.12)",
                        padding: "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* status + CTA row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 16px",
                    background: "rgba(74,222,128,0.05)",
                    border: "1px solid rgba(74,222,128,0.15)",
                    borderRadius: 10,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#4ADE80",
                      boxShadow: "0 0 8px rgba(74,222,128,0.7)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#4ADE80" }}>
                    IrisLoan — live portfolio, real borrowers, real payments
                  </span>
                </div>
                <a
                  href="https://irisloan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#527A9E",
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "1px solid rgba(82,122,158,0.25)",
                    background: "rgba(82,122,158,0.08)",
                    transition: "background 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  See the product →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENTS ───────────────────────────────────────────────────── */}
        <SmbClients />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <SmbFAQ />

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <SmbFinalCTA />
      </main>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          if(typeof IntersectionObserver==='undefined'){
            document.querySelectorAll('.smb-reveal').forEach(function(el){el.classList.add('smb-visible');});
            return;
          }
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){e.target.classList.add('smb-visible');io.unobserve(e.target);}
            });
          },{threshold:0.07,rootMargin:'0px 0px -32px 0px'});
          function observe(){document.querySelectorAll('.smb-reveal:not(.smb-visible)').forEach(function(el){io.observe(el);});}
          if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',observe);}else{observe();}
        })();
      `}} />

      <SmbFooter />
    </>
  );
}

/* ─── Solution card sub-component ───────────────────────────────────────── */
function SolutionCard({
  num,
  title,
  body,
  accent,
}: {
  num: string;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div
      style={{
        background: "#F5F8FC",
        border: "1px solid rgba(31,46,61,0.1)",
        borderRadius: 14,
        padding: "28px 28px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: accent,
          opacity: 0.5,
        }}
      />
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: accent,
          marginBottom: 12,
          opacity: 0.8,
        }}
      >
        {num}
      </p>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "-0.015em",
          color: "#1F2E3D",
          marginBottom: 10,
          lineHeight: 1.35,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 13, lineHeight: 1.75, color: "#6B8099", margin: 0 }}>{body}</p>
    </div>
  );
}
