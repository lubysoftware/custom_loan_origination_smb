"use client";

import { motion, useReducedMotion } from "framer-motion";

const wrapStyle = { maxWidth: 1100, margin: "0 auto" } as const;

/**
 * Bloco com entrada suave ao entrar na viewport (substitui smb-reveal neste trecho).
 */
export default function SmbMotionReveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div style={wrapStyle}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={wrapStyle}
    >
      {children}
    </motion.div>
  );
}
