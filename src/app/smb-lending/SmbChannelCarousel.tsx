"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ChannelUnlockCard = {
  title: string;
  body: string;
};

const arrowBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  flexShrink: 0,
  borderRadius: "50%",
  border: "1px solid rgba(6,24,50,0.08)",
  background: "#FFFFFF",
  color: "#061832",
  cursor: "pointer",
  boxShadow: "0 1px 2px rgba(6,24,50,0.04)",
  transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
} as const;

export default function SmbChannelCarousel({ cards }: { cards: readonly ChannelUnlockCard[] }) {
  const [i, setI] = useState(0);
  const n = cards.length;
  const touchStartX = useRef<number | null>(null);
  const go = useCallback(
    (d: number) => {
      setI((prev) => (prev + d + n) % n);
    },
    [n]
  );

  const current = cards[i];

  return (
    <div style={{ width: "100%", maxWidth: 680, margin: "0 auto" }}>
      <div
        className="smb-channel-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(8px, 2vw, 16px)",
        }}
      >
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          style={arrowBtn}
          className="smb-channel-arrow"
        >
          <ChevronLeft size={22} strokeWidth={1.75} aria-hidden />
        </button>

        <div
          style={{
            flex: "1 1 auto",
            minWidth: 0,
            maxWidth: 560,
          }}
        >
          <div
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(dx) < 48) return;
              go(dx > 0 ? -1 : 1);
            }}
            key={current.title}
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              border: "1px solid rgba(6,24,50,0.07)",
              boxShadow: "0 4px 6px -1px rgba(6,24,50,0.04), 0 20px 40px -12px rgba(6,24,50,0.1)",
              overflow: "hidden",
              animation: "smb-channel-fade 0.35s ease-out",
            }}
          >
            <div style={{ padding: "clamp(26px, 4vw, 36px) clamp(22px, 4vw, 40px)" }}>
              <h3
                style={{
                  fontSize: "clamp(18px, 2.4vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  color: "#7DC4EB",
                  margin: "0 0 14px",
                }}
              >
                {current.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#6B8099",
                  margin: 0,
                }}
              >
                {current.body}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          style={arrowBtn}
          className="smb-channel-arrow"
        >
          <ChevronRight size={22} strokeWidth={1.75} aria-hidden />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginTop: 24,
        }}
      >
        {cards.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === i ? "true" : undefined}
            onClick={() => setI(idx)}
            style={{
              width: idx === i ? 28 : 9,
              height: 9,
              borderRadius: 100,
              border: "none",
              background: idx === i ? "#41A0DC" : "rgba(6,24,50,0.12)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes smb-channel-fade {
          from { opacity: 0.85; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button.smb-channel-arrow:hover {
          background: #F8FAFC;
          border-color: rgba(6,24,50,0.12);
          box-shadow: 0 4px 12px rgba(6,24,50,0.06);
        }
        button.smb-channel-arrow:active {
          transform: scale(0.97);
        }
        @media (max-width: 520px) {
          .smb-channel-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
          }
          .smb-channel-row .smb-channel-arrow {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
