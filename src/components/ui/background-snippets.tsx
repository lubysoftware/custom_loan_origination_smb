/**
 * Fundo decorativo da hero: brilho azul na base + leve vignette (estilos inline
 * para não depender do JIT do Tailwind no build).
 */
export function HeroBackgroundDecor() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: [
            "radial-gradient(ellipse 130% 75% at 50% 115%, rgba(125,196,235,0.42) 0%, rgba(65,160,220,0.18) 35%, transparent 62%)",
            "radial-gradient(ellipse 90% 65% at 50% 38%, transparent 0%, rgba(6,24,50,0.45) 78%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
