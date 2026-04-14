"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroBackgroundDecor } from "@/components/ui/background-snippets";

export default function SmbHeroSection({ basePath }: { basePath: string }) {
  const reduce = useReducedMotion();
  const soft = { duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      style={{
        position: "relative",
        background: "#061832",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(72px, 11vw, 104px) 24px 0",
        overflow: "hidden",
      }}
    >
      <HeroBackgroundDecor />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1050, width: "100%" }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...soft, delay: reduce ? 0 : 0 }}
          style={{ display: "inline-flex", alignItems: "center", padding: "6px 16px", borderRadius: 100, border: "1px solid rgba(65,160,220,0.25)", background: "rgba(65,160,220,0.08)", marginBottom: 32 }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, color: "#7DC4EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Custom Loan Origination for SMB Lenders
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...soft, delay: reduce ? 0 : 0.07 }}
          style={{
            fontSize: "clamp(32px, 5vw, 62px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#F5F8FC",
            margin: "0 0 24px",
          }}
        >
          Your off-the-shelf origination platform{" "}
          <span style={{ color: "#7DC4EB" }}>is costing you applications.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...soft, delay: reduce ? 0 : 0.14 }}
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            lineHeight: 1.7,
            color: "rgba(215,222,230,0.7)",
            margin: "0 auto 22px",
            maxWidth: 720,
          }}
        >
          Generic tools create friction. Friction kills conversion. We build custom loan origination platforms for SMB and SBA lenders — integrated with your systems, designed for your credit model, and&nbsp;fully&nbsp;under&nbsp;your&nbsp;control.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...soft, delay: reduce ? 0 : 0.21 }}
          style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 64 }}
        >
          <a href="#contact" className="smb-btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
            Schedule a Call
          </a>
          <a href="#how-it-works" className="smb-btn-ghost" style={{ padding: "14px 28px", fontSize: 15 }}>
            See How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...soft, delay: reduce ? 0 : 0.28 }}
        style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 780, marginBottom: -140, marginTop: -16 }}
      >
        <div
          className="smb-hero-mockup"
          style={{
            borderRadius: 16,
            overflow: "hidden",
            transition: "transform 0.3s ease",
            cursor: "default",
          }}
        >
          <style>{`
            .smb-hero-mockup:hover {
              transform: translateY(-12px) !important;
            }
          `}</style>
          <img
            src={`${basePath}/originationmockup.png`}
            alt="Application mockup"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transform: "scale(1.06)",
              transformOrigin: "center center",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
