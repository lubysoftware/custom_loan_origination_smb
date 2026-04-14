"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Stat =
  | { kind: "plus"; end: number; label: string }
  | { kind: "range"; min: number; max: number; label: string };

const STATS: Stat[] = [
  { kind: "plus", end: 10, label: "years in financial software" },
  { kind: "plus", end: 500, label: "projects delivered" },
  { kind: "plus", end: 100, label: "senior engineers" },
  { kind: "range", min: 3, max: 5, label: "average speed boost with AI" },
];

function useCountTo(
  target: number,
  active: boolean,
  options: { durationMs: number; delayMs: number; skip: boolean }
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (options.skip) {
      setValue(target);
      return;
    }
    setValue(0);
    const startAt = performance.now() + options.delayMs;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;
      if (now < startAt) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const t = Math.min(elapsed / options.durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1 && !cancelled) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [target, active, options.durationMs, options.delayMs, options.skip]);

  return value;
}

export default function SmbStatCounters() {
  const blockRef = useRef<HTMLDivElement>(null);
  const inView = useInView(blockRef, { once: true, margin: "-12% 0px" });
  const reduceMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 20 };
  const shown = { opacity: 1, y: 0 };
  const enter = reduceMotion ? shown : hidden;

  return (
    <div
      ref={blockRef}
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        textAlign: "center",
        background: "#061832",
        border: "1px solid rgba(65,160,220,0.1)",
        borderRadius: 24,
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)",
      }}
    >
      <motion.h2
        initial={enter}
        animate={reduceMotion || inView ? shown : hidden}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#F5F8FC",
          marginBottom: 16,
        }}
      >
        Connecting lenders{" "}
        <span style={{ color: "#7DC4EB" }}>through technology</span>
      </motion.h2>

      <motion.p
        className="smb-stat-sub"
        initial={enter}
        animate={reduceMotion || inView ? shown : hidden}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.06, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: "rgba(215,222,230,0.55)",
          margin: "0 auto 48px",
          whiteSpace: "nowrap",
        }}
      >
        Our commitment to building financial software that works in production.
      </motion.p>

      <div className="smb-stats-row" style={{ display: "flex", justifyContent: "center" }}>
        {STATS.map((stat, i) => (
          <StatCell
            key={stat.label}
            stat={stat}
            index={i}
            total={STATS.length}
            inView={inView}
            reduceMotion={!!reduceMotion}
          />
        ))}
      </div>
      <style>{`
        @media (max-width: 767px) {
          .smb-stats-row { flex-wrap: wrap !important; }
          .smb-stats-row > div { flex: 0 0 50% !important; border-right: none !important; }
          .smb-stat-sub { white-space: normal !important; }
        }
      `}</style>
    </div>
  );
}

function StatCell({
  stat,
  index,
  total,
  inView,
  reduceMotion,
}: {
  stat: Stat;
  index: number;
  total: number;
  inView: boolean;
  reduceMotion: boolean;
}) {
  const delay = 0.1 + index * 0.09;
  const duration = 1400;
  const skip = reduceMotion;
  const opts = { durationMs: duration, delayMs: delay * 1000, skip };

  if (stat.kind === "plus") {
    return (
      <PlusStat
        end={stat.end}
        label={stat.label}
        index={index}
        total={total}
        inView={inView}
        opts={opts}
        reduceMotion={reduceMotion}
      />
    );
  }
  return (
    <RangeStat
      min={stat.min}
      max={stat.max}
      label={stat.label}
      index={index}
      total={total}
      inView={inView}
      opts={opts}
      reduceMotion={reduceMotion}
    />
  );
}

function PlusStat({
  end,
  label,
  index,
  total,
  inView,
  opts,
  reduceMotion,
}: {
  end: number;
  label: string;
  index: number;
  total: number;
  inView: boolean;
  opts: { durationMs: number; delayMs: number; skip: boolean };
  reduceMotion: boolean;
}) {
  const n = useCountTo(end, inView, opts);
  const delay = 0.1 + index * 0.09;
  const cellHidden = { opacity: 0, y: 28 };
  const cellShown = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? cellShown : cellHidden}
      animate={reduceMotion || inView ? cellShown : cellHidden}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        flex: 1,
        textAlign: "center",
        padding: "8px 0",
        borderRight: index < total - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <p
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: 10,
          letterSpacing: "-0.03em",
          color: "#F5F8FC",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
        <span style={{ color: "#41A0DC" }}>+</span>
      </p>
      <p style={{ fontSize: 13, color: "rgba(215,222,230,0.5)", margin: 0, lineHeight: 1.4 }}>{label}</p>
    </motion.div>
  );
}

function RangeStat({
  min,
  max,
  label,
  index,
  total,
  inView,
  opts,
  reduceMotion,
}: {
  min: number;
  max: number;
  label: string;
  index: number;
  total: number;
  inView: boolean;
  opts: { durationMs: number; delayMs: number; skip: boolean };
  reduceMotion: boolean;
}) {
  const nMin = useCountTo(min, inView, opts);
  const nMax = useCountTo(max, inView, opts);
  const delay = 0.1 + index * 0.09;
  const cellHidden = { opacity: 0, y: 28 };
  const cellShown = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? cellShown : cellHidden}
      animate={reduceMotion || inView ? cellShown : cellHidden}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        flex: 1,
        textAlign: "center",
        padding: "8px 0",
        borderRight: index < total - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <p
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: 10,
          letterSpacing: "-0.03em",
          color: "#F5F8FC",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {nMin}–{nMax}
        <span style={{ color: "#41A0DC" }}>×</span>
      </p>
      <p style={{ fontSize: 13, color: "rgba(215,222,230,0.5)", margin: 0, lineHeight: 1.4 }}>{label}</p>
    </motion.div>
  );
}
