import type { Metadata } from "next";
import SmbFooter from "./SmbFooter";
import SmbNavbar from "./SmbNavbar";
import SmbFAQ from "./SmbFAQ";
import SmbFinalCTA from "./SmbFinalCTA";
import SmbStatCounters from "./SmbStatCounters";
import SmbMotionReveal from "./SmbMotionReveal";
import SmbHeroSection from "./SmbHeroSection";
import SmbComparison from "./SmbComparison";
import SmbChannelCarousel from "./SmbChannelCarousel";

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

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SMB_CLIENT_LOGOS = [
  "Neocova",
  "ONLINE-IPS",
  "Papaya",
  "SIEMENS",
  "CALIBER",
  "DCI",
  "FOXTROT",
  "GIGPAY",
  "INTERCO",
  "MASSPAY",
  "Sunwest-Bank",
  "USEND",
] as const;

const SMB_SOLUTION_CARDS = [
  {
    icon: "phone" as const,
    title: "SMB-native borrower portal",
    body: "Real-time LMS sync. Mobile-first. Designed for borrowers paying from their phone, not a desktop at a bank branch.",
  },
  {
    icon: "payment" as const,
    title: "Payment flows that remove every excuse",
    body: "ACH, debit, autopay, one-time payments — with save-and-return and confirmation screens that reduce drop-off.",
  },
  {
    icon: "bell" as const,
    title: "Proactive outreach before the missed payment",
    body: "Triggered outreach before the missed payment — not after. Push, SMS, and email tied to real loan state, not a calendar.",
  },
  {
    icon: "shield" as const,
    title: "SBA compliance baked in",
    body: "SBA 7(a) and 504 workflows, SOP 50 10 8, Dodd-Frank 1071, and audit trails.",
  },
  {
    icon: "sparkles" as const,
    title: "UX designed by lending specialists",
    body: "Our design team works exclusively in financial products.",
  },
] as const;

const SMB_CHANNEL_UNLOCK_CARDS = [
  {
    title: "Targeted offers, driven by loan data",
    body: "Pre-qualifications, cross-sell, partner offers — triggered by real borrower context, not guesswork.",
  },
  {
    title: "Direct communication, fully controlled",
    body: "Push, SMS, in-app — the right message, at the right moment, without relying on external channels.",
  },
  {
    title: "A platform your team can operate",
    body: "Launch campaigns, update content, and target segments directly from your admin — no engineering, no vendor queue.",
  },
  {
    title: "A data layer that compounds",
    body: "Every interaction feeds your ability to segment, predict, and act. The platform improves as your portfolio grows.",
  },
] as const;

function SolutionFeatureIcon({
  name,
}: {
  name: (typeof SMB_SOLUTION_CARDS)[number]["icon"];
}) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "#41A0DC",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "payment":
      return (
        <svg {...common}>
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SmbLendingPage() {
  return (
    <>
      <SmbNavbar />
      <main className="smb-page" style={{ paddingTop: 60 }}>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO — ref: "Global Shift With Easy Digital Payments"
            Centered heading, subtext, green CTA, partner logos row
        ═══════════════════════════════════════════════════════════════════ */}
        <SmbHeroSection basePath={BASE} />


        {/* ═══════════════════════════════════════════════════════════════════
            THE PROBLEM
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="problem"
          style={{
            background: "#F5F8FC",
            borderTop: "1px solid rgba(6,24,50,0.08)",
            borderBottom: "1px solid rgba(6,24,50,0.08)",
            padding: "clamp(80px, 10vw, 120px) 24px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }} className="smb-reveal">
            <SmbMotionReveal>
              <div style={{ marginBottom: 48, textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2E8AB8",
                    background: "rgba(65,160,220,0.1)",
                    border: "1px solid rgba(65,160,220,0.22)",
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
                    color: "#061832",
                    margin: "0 auto 20px",
                    maxWidth: 800,
                  }}
                >
                  Off-the-shelf loan servicing platforms{" "}
                  <span style={{ color: "#41A0DC" }}>limit how you operate.</span>
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#6B8099",
                    maxWidth: 720,
                    margin: "0 auto",
                  }}
                >
                  Off-the-shelf loan servicing platforms weren&apos;t built for your credit model. They force your
                  workflows into generic structures and gate every change behind vendor timelines. Small updates take
                  months. Your borrower experience stays generic. You don&apos;t control the platform — and that slows
                  down everything that impacts delinquency.
                </p>
              </div>

              <SmbComparison />

              <div
                style={{
                  marginTop: 24,
                  padding: "20px 28px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(6,24,50,0.08)",
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
                  className="smb-problem-cta"
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(6,24,50,0.1)",
                    background: "rgba(6,24,50,0.03)",
                    transition: "background 0.15s, border-color 0.15s, color 0.15s",
                  }}
                >
                  See what we&apos;d change in your portal →
                </a>
              </div>
            </SmbMotionReveal>
          </div>
          <style>{`
            a.smb-problem-cta {
              color: #6B8099;
            }
            a.smb-problem-cta:hover {
              background: rgba(6,24,50,0.06);
              border-color: rgba(6,24,50,0.14);
              color: #061832;
            }
          `}</style>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            THE SOLUTION — mesmo visual (branco + imagem); 5 cards na mesma estética
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ background: "#FFFFFF", padding: "clamp(80px, 10vw, 120px) 24px" }}>
          <SmbMotionReveal>
            {/* top row: text left + image right */}
            <div
              className="smb-sec2-top"
              style={{
                display: "flex",
                gap: "clamp(32px, 5vw, 72px)",
                alignItems: "center",
                marginBottom: 64,
              }}
            >
              <div style={{ flex: "1 1 55%", minWidth: 0 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "5px 14px",
                    borderRadius: 100,
                    border: "1px solid rgba(65,160,220,0.2)",
                    background: "rgba(65,160,220,0.06)",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#41A0DC",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    The Solution
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.8vw, 46px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#061832",
                    marginBottom: 20,
                  }}
                >
                  Custom loan servicing, built around how{" "}
                  <span style={{ color: "#41A0DC" }}>SMB borrowers actually behave</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B8099", marginBottom: 16, maxWidth: 520 }}>
                  We don&apos;t configure a template. We build a servicing platform for your credit model, your loan
                  products, and your borrowers. You own the codebase.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", maxWidth: 520 }}>
                  Generic tools create friction. Friction turns into delinquency. And you don&apos;t control the platform
                  — that slows down everything that impacts delinquency.
                </p>
              </div>
              <div className="smb-sec2-img" style={{ flex: "0 0 auto" }}>
                <div
                  style={{
                    width: "clamp(280px, 32vw, 440px)",
                    aspectRatio: "4/3",
                    borderRadius: 16,
                    background: "#F3F4F6",
                    border: "1px solid rgba(6,24,50,0.06)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={`${BASE}/application-mockup2.png`}
                    alt="Application mockup"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>
            </div>

            {/* cinco feature cards — mesma largura por coluna + espaço entre eles */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{
                columnGap: "clamp(20px, 2.5vw, 32px)",
                rowGap: "clamp(24px, 3vw, 32px)",
                alignItems: "stretch",
              }}
            >
              {SMB_SOLUTION_CARDS.map((card) => (
                <div
                  key={card.title}
                  style={{
                    width: "100%",
                    minWidth: 0,
                    boxSizing: "border-box",
                    background: "#F9FAFB",
                    border: "1px solid rgba(6,24,50,0.08)",
                    borderRadius: 16,
                    padding: "clamp(24px, 3vw, 36px)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "#061832",
                      border: "1px solid rgba(65,160,220,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <SolutionFeatureIcon name={card.icon} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#061832", marginBottom: 10, lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "#6B8099", margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </SmbMotionReveal>

          <style>{`
            @media (max-width: 767px) {
              .smb-sec2-top { flex-direction: column !important; }
              .smb-sec2-img { display: none !important; }
            }
          `}</style>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            THE CHANNEL
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ background: "#FFFFFF", padding: "clamp(80px, 10vw, 120px) 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }} className="smb-reveal">
            <SmbMotionReveal>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "5px 14px",
                    borderRadius: 100,
                    border: "1px solid rgba(65,160,220,0.2)",
                    background: "rgba(65,160,220,0.06)",
                    marginBottom: 22,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#41A0DC",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    The Channel
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    color: "#061832",
                    margin: "0 auto 18px",
                    maxWidth: 640,
                  }}
                >
                  Your borrower portal can do more{" "}
                  <span style={{ color: "#41A0DC" }}>than process payments.</span>
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#6B8099",
                    margin: "0 auto 28px",
                    maxWidth: 620,
                  }}
                >
                  You already paid to acquire these borrowers — your servicing platform should be your
                  lowest-cost growth channel. Every login is a high-intent moment: balances, payments, money
                  on the mind. That kind of attention can&apos;t be bought; it has to be built into the
                  experience. Most lenders treat the portal as a transaction;{" "}
                  <span style={{ color: "#061832", fontWeight: 600 }}>the best ones turn it into a relationship.</span>
                </p>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#6B8099",
                    margin: "0 auto 24px",
                    maxWidth: 620,
                  }}
                >
                  What that unlocks
                </p>
              </div>

              <SmbChannelCarousel cards={SMB_CHANNEL_UNLOCK_CARDS} />
            </SmbMotionReveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — ref: "Connecting Business Through Transactions"
            Dark background, centered heading, 4 big metric cards in a row
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E8ECEF 30%, #E8ECEF 70%, #F5F8FC 100%)",
            padding: "clamp(32px, 4vw, 48px) 24px",
          }}
        >
          <SmbStatCounters />
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — ref: "Reliable Checkout Security & Compliance"
            Two columns: left = dark product card with badge/image,
            right = heading + feature checklist
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="in-production"
          style={{ background: "#F5F8FC", padding: "clamp(80px, 10vw, 120px) 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }} className="smb-reveal">
            <div className="smb-sec4-grid" style={{ display: "flex", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }}>
              {/* LEFT — product card with image (like ref's device card) */}
              <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <div
                  style={{
                    background: "#061832",
                    borderRadius: 24,
                    padding: "clamp(24px, 4vw, 40px)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(65,160,220,0.12)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
                  }}
                >
                  {/* product screenshot */}
                  <div style={{ marginBottom: 24 }}>
                    <img
                      src={`${BASE}/irisloan-mockup.png`}
                      alt="IrisLoan borrower portal"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  {/* status row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {[
                      { label: "LoanPro", desc: "Real-time sync" },
                      { label: "Live", desc: "Real payments" },
                      { label: "12 weeks", desc: "To production" },
                    ].map((item) => (
                      <div key={item.label} style={{ flex: "1 1 0", minWidth: 100, background: "rgba(65,160,220,0.06)", border: "1px solid rgba(65,160,220,0.12)", borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#F5F8FC", margin: "0 0 2px" }}>{item.label}</p>
                        <p style={{ fontSize: 11, color: "rgba(215,222,230,0.5)", margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — heading + checklist */}
              <div style={{ flex: "1 1 45%", minWidth: 0 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(65,160,220,0.2)", background: "rgba(65,160,220,0.06)", marginBottom: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#41A0DC", letterSpacing: "0.06em", textTransform: "uppercase" }}>In Production</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#061832", marginBottom: 14 }}>
                  We&apos;ve shipped this.{" "}
                  <span style={{ color: "#41A0DC" }}>Here&apos;s what it looks like at scale.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B8099", marginBottom: 36, maxWidth: 460 }}>
                  IrisLoan is a full-stack loan servicing platform built on LoanPro — in production, processing real payments across a live portfolio.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
                  {[
                    "LoanPro real-time sync",
                    "Borrower portal (web + mobile)",
                    "ACH & debit processing",
                    "Autopay enrollment",
                    "Push / SMS / email notifications",
                    "Admin CMS",
                    "Role-based access & 2FA",
                    "iOS & Android apps",
                  ].map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(65,160,220,0.1)", border: "1px solid rgba(65,160,220,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#41A0DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#061832", lineHeight: 1.4 }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://irisloan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="smb-btn-primary"
                  style={{ marginTop: 36, display: "inline-flex" }}
                >
                  See the product →
                </a>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .smb-sec4-grid { flex-direction: column !important; }
            }
          `}</style>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4b — FULL-WIDTH IMAGE (edge-to-edge; antes de Why Luby)
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Full-width visual"
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            padding: 0,
            margin: 0,
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3.2 / 1",
                minHeight: 200,
                overflow: "hidden",
                background: "#061832",
              }}
            >
              <img
                src={`${BASE}/img-lp-loan.png`}
                alt="Loan servicing platform"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <style>{`
              @media (max-width: 639px) {
                .smb-lp-trust-ribbon {
                  flex-direction: column !important;
                  align-items: stretch !important;
                }
                .smb-lp-trust-ribbon > div:not(:last-child) {
                  border-right: none !important;
                  border-bottom: 1px solid rgba(255,255,255,0.18);
                  padding-bottom: 18px !important;
                  margin-bottom: 2px;
                }
                .smb-lp-trust-ribbon > div:last-child {
                  border-bottom: none !important;
                  padding-bottom: 2px !important;
                }
              }
            `}</style>
            <div
              style={{
                width: "100%",
                background: "#41A0DC",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="smb-lp-trust-ribbon"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                  flexWrap: "wrap",
                  maxWidth: 1100,
                  margin: "0 auto",
                  padding: "0 clamp(18px, 4vw, 32px)",
                }}
              >
                {["12-week avg. delivery", "Live portfolios in production", "10+ years in financial software"].map((item, idx, arr) => (
                  <div
                    key={item}
                    style={{
                      flex: "1 1 200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 12,
                      padding: "18px 18px",
                      borderRight: idx < arr.length - 1 ? "1px solid rgba(255,255,255,0.22)" : "none",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, opacity: 0.95 }}>
                      <circle cx="8" cy="8" r="7.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                      <path d="M4.5 8.2l2.3 2.2 4.7-4.5" stroke="#F5F8FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      style={{
                        fontSize: "clamp(15px, 1.5vw, 17px)",
                        fontWeight: 600,
                        color: "#F5F8FC",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.35,
                        textAlign: "center" as const,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — ref: "We Foster Growth Across All Business Sectors"
            Left: heading + big metric numbers stacked
            Right: dark cards with stats/info
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="why-luby"
          style={{ background: "#FFFFFF", padding: "clamp(80px, 10vw, 120px) 24px", borderTop: "1px solid rgba(6,24,50,0.06)" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }} className="smb-reveal">
            <div className="smb-sec5-grid" style={{ display: "flex", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>
              {/* LEFT — heading + big metrics */}
              <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(65,160,220,0.2)", background: "rgba(65,160,220,0.06)", marginBottom: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#41A0DC", letterSpacing: "0.06em", textTransform: "uppercase" }}>Why Luby</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#061832", marginBottom: 20 }}>
                  Custom loan servicing used to mean long timelines.{" "}
                  <span style={{ color: "#41A0DC" }}>AI changed that.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16, maxWidth: 460 }}>
                  But building fast isn&apos;t the hard part. In financial services, the complexity lives in the details: regulatory workflows, risk logic, payment behavior, and LMS integrations that don&apos;t behave the way the documentation suggests.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 16, maxWidth: 460 }}>
                  Luby brings over a decade of experience building financial systems across lending, payments, and banking infrastructure, combined with AI-accelerated development to move faster without cutting corners.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6B8099", marginBottom: 0, maxWidth: 460 }}>
                  Every month on a platform that doesn&apos;t fit your borrowers is a month of preventable delinquency.
                </p>
              </div>

              {/* RIGHT — info cards */}
              <div style={{ flex: "1 1 45%", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    title: "10+ years in financial software",
                    body: "Lending, payments, and banking systems built for regulated institutions in the U.S. and Latin America. Experience that shows up where most platforms fail in production.",
                    iconPaths: [
                      "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
                      "M12 6v6l4 2",
                    ],
                  },
                  {
                    title: "Built for regulated environments",
                    body: "SBA 7(a), 504, Dodd-Frank 1071, ECOA, audit trails, designed in from day one, not added later.",
                    iconPaths: [
                      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                    ],
                  },
                  {
                    title: "Proven in production",
                    body: "IrisLoan runs on LoanPro, processing real payments across a live portfolio. Sunwest\u2019s platform launched at peak demand and drove 40% growth.",
                    iconPaths: [
                      "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                      "M22 4 12 14.01l-3-3",
                    ],
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    style={{
                      background: "#F9FAFB",
                      border: "1px solid rgba(6,24,50,0.08)",
                      borderRadius: 16,
                      padding: "28px",
                    }}
                  >
                    {/* icon + title inline */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: "#061832",
                          border: "1px solid rgba(65,160,220,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#41A0DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {card.iconPaths.map((d, i) => (
                            <path key={i} d={d} />
                          ))}
                        </svg>
                      </div>
                      <h3 style={{ fontSize: 15, fontWeight: 600, color: "#061832", margin: 0, lineHeight: 1.3 }}>
                        {card.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B8099", margin: 0 }}>
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .smb-sec5-grid { flex-direction: column !important; }
            }
          `}</style>
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — INTEGRATIONS (dark, scrolling pills)
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          style={{
            background: "#061832",
            padding: "clamp(60px, 8vw, 90px) 24px",
            overflow: "hidden",
          }}
        >
          <style>{`
            @keyframes smb-scroll-left  { from { transform: translateX(0); }   to { transform: translateX(-50%); } }
            @keyframes smb-scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          `}</style>

          <div style={{ maxWidth: 1100, margin: "0 auto 48px", textAlign: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7DC4EB", marginBottom: 14 }}>Integrations</p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#F5F8FC", marginBottom: 12 }}>
              Your stack.{" "}
              <span style={{ color: "#7DC4EB" }}>Your processors. Your call.</span>
            </h2>
          </div>

          {[
            { bg: "rgba(65,160,220,0.07)", border: "rgba(65,160,220,0.2)", items: ["LoanPro", "LendAPI", "Peach Finance", "Canopy"], dir: "left", speed: "60s" },
            { bg: "rgba(125,196,235,0.06)", border: "rgba(125,196,235,0.18)", items: ["Moov", "J.P. Morgan Payments", "Stripe", "Dwolla"], dir: "right", speed: "50s" },
            { bg: "rgba(91,184,224,0.06)", border: "rgba(91,184,224,0.18)", items: ["Experian", "TransUnion", "Equifax", "Plaid", "DocuSign"], dir: "left", speed: "65s" },
          ].map((row) => (
            <div key={row.dir + row.speed} style={{ marginBottom: 14, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0 auto 0 0", width: 80, background: "linear-gradient(to right, #061832, transparent)", zIndex: 1, pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: "0 0 0 auto", width: 80, background: "linear-gradient(to left, #061832, transparent)", zIndex: 1, pointerEvents: "none" }} />
              <div style={{ display: "flex", width: "max-content", gap: 10, animation: `smb-scroll-${row.dir} ${row.speed} linear infinite` }}>
                {[...row.items, ...row.items, ...row.items, ...row.items, ...row.items, ...row.items, ...row.items, ...row.items].map((item, idx) => (
                  <div key={idx} style={{ display: "inline-flex", alignItems: "center", padding: "9px 18px", background: row.bg, border: `1px solid ${row.border}`, borderRadius: 999, flexShrink: 0, whiteSpace: "nowrap" as const }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#D7DEE6" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 — HOW IT WORKS (4 steps, timeline)
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="how-it-works"
          style={{
            background: "#F5F8FC",
            padding: "clamp(80px, 10vw, 120px) 24px clamp(48px, 6vw, 72px)",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }} className="smb-reveal">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(65,160,220,0.2)", background: "rgba(65,160,220,0.06)", marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#41A0DC", letterSpacing: "0.06em", textTransform: "uppercase" }}>How it works</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#061832", marginBottom: 0 }}>
                From friction audit to production
                <br />
                <span style={{ color: "#41A0DC" }}>without a vendor in the middle</span>
              </h2>
            </div>

            <style>{`
              .smb-how-card {
                background: #ffffff;
                border: 1px solid rgba(6, 24, 50, 0.08);
                border-radius: 16px;
                padding: clamp(20px, 3vw, 32px);
                position: relative;
                overflow: hidden;
                transition:
                  background 0.22s ease,
                  border-color 0.22s ease,
                  box-shadow 0.22s ease,
                  transform 0.22s ease;
              }
              .smb-how-card:hover {
                background: linear-gradient(165deg, rgba(65, 160, 220, 0.14) 0%, rgba(65, 160, 220, 0.06) 45%, rgba(255, 255, 255, 0.96) 100%);
                border-color: rgba(65, 160, 220, 0.45);
                box-shadow: 0 12px 40px rgba(65, 160, 220, 0.18);
                transform: translateY(-3px);
              }
              .smb-how-card:hover .smb-how-card__title {
                color: #061832;
              }
              .smb-how-card:hover .smb-how-card__body {
                color: #4b5d6e;
              }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 20 }}>
              {[
                { num: "01", title: "Discovery & Friction Mapping", sub: "Week 1", body: "We audit your current borrower journey end-to-end — from payment portal to support queue. You walk away with a clear map of where borrowers disengage and where delinquency risk concentrates." },
                { num: "02", title: "Platform Design", sub: "Weeks 1–2", body: "Our lending UX specialists design the borrower portal around your credit model — payment flows, notification triggers, SBA compliance requirements, and your brand." },
                { num: "03", title: "Engineering & LMS Integration", sub: "Continuous sprints", body: "We build and integrate — connecting your LMS (LoanPro, LendAPI, or others), payment processors, and data providers. Every sprint ships working software against real loan data." },
                { num: "04", title: "Launch & Measurement", sub: "Structured exit", body: "We launch against a live portfolio segment, measure delinquency rate and support ticket volume, and hand off the codebase — fully documented, fully owned by your team." },
              ].map((step) => (
                <div key={step.num} className="smb-how-card">
                  <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, color: "#41A0DC", background: "rgba(65,160,220,0.1)", padding: "3px 10px", borderRadius: 100, marginBottom: 16, letterSpacing: "0.06em" }}>
                    {step.sub}
                  </span>
                  <h3 className="smb-how-card__title" style={{ fontSize: 16, fontWeight: 600, color: "#061832", marginBottom: 10, lineHeight: 1.3, transition: "color 0.22s ease" }}>
                    {step.title}
                  </h3>
                  <p className="smb-how-card__body" style={{ fontSize: 13, lineHeight: 1.75, color: "#6B8099", margin: 0, transition: "color 0.22s ease" }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="#contact" className="smb-btn-primary">
                Get a Friction Audit
              </a>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 — CLIENTS (bg alinhado ao FAQ)
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="clients"
          style={{ background: "#F5F8FC", padding: "clamp(28px, 3.5vw, 40px) 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }} className="smb-reveal">
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.1, color: "#061832", marginBottom: 16 }}>
              Companies that{" "}
              <span style={{ color: "#41A0DC" }}>modernized with Luby</span>
            </h2>
            <p
              className="smb-clients-subtitle"
              style={{ fontSize: 15, lineHeight: 1.75, color: "#7A8FA3", margin: "0 auto 36px", padding: "0 12px" }}
            >
              And many other teams that evolved critical financial systems without disrupting operations.
            </p>

            <style>{`
              @keyframes smb-logo-marquee-x {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .smb-clients-subtitle {
                max-width: 1100px;
              }
              @media (min-width: 640px) {
                .smb-clients-subtitle {
                  white-space: nowrap;
                }
              }
              .smb-logo-marquee-wrap {
                overflow: hidden;
                width: 100%;
                max-width: 1100px;
                margin: 0 auto;
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              }
              .smb-logo-marquee-track {
                display: flex;
                width: max-content;
                gap: 48px;
                animation: smb-logo-marquee-x 50s linear infinite;
              }
              .smb-logo-marquee-track:hover {
                animation-play-state: paused;
              }
              .smb-logo-marquee-item {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px 0;
                min-height: 72px;
              }
              .smb-logo-marquee-item img {
                max-height: 64px;
                max-width: 180px;
                width: auto;
                height: auto;
                object-fit: contain;
                opacity: 0.62;
                filter: grayscale(0.15);
              }
              @media (prefers-reduced-motion: reduce) {
                .smb-logo-marquee-track {
                  animation: none;
                  flex-wrap: wrap;
                  justify-content: center;
                  width: 100% !important;
                  max-width: 900px;
                  margin: 0 auto;
                  row-gap: 20px;
                  column-gap: 32px;
                }
                .smb-logo-marquee-item:nth-child(n + 13) {
                  display: none;
                }
                .smb-logo-marquee-wrap {
                  overflow: visible;
                  mask-image: none;
                  -webkit-mask-image: none;
                }
              }
            `}</style>
            <div
              className="smb-logo-marquee-wrap"
              role="region"
              aria-label={`Client logos: ${SMB_CLIENT_LOGOS.join(", ")}`}
            >
              <div className="smb-logo-marquee-track">
                {[...SMB_CLIENT_LOGOS, ...SMB_CLIENT_LOGOS].map((name, i) => (
                  <div key={`${name}-${i}`} className="smb-logo-marquee-item">
                    <img src={`${BASE}/logos/clients/${name}.png`} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9 — FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <SmbFAQ />


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10 — CONTACT FORM
        ═══════════════════════════════════════════════════════════════════ */}
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
