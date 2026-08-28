import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCozinha from "@/assets/hero-cozinha.jpg";
import { linkWhatsApp } from "@/config/empresa";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bordo-escuro">
      <img
        src={heroCozinha}
        alt="Cozinha planejada sob medida em MDF com acabamento bordô e detalhes dourados"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0) scale(1.08)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bordo-escuro/92 via-bordo-escuro/70 to-bordo-escuro/25" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-28 sm:px-8">
        <div className="max-w-2xl text-areia">
          <p className="eyebrow anima-entrada text-dourado" style={{ animationDelay: "120ms" }}>
            Marcenaria São Mateus · {"Canindé"} — Ceará
          </p>
          <h1
            className="anima-entrada mt-7 font-display text-5xl leading-[1.05] sm:text-7xl"
            style={{ animationDelay: "240ms" }}
          >
            Móveis projetados para transformar espaços.
          </h1>
          <p
            className="anima-entrada mt-7 max-w-xl text-sm leading-relaxed text-areia/80 sm:text-base"
            style={{ animationDelay: "380ms" }}
          >
            Projetamos e produzimos móveis sob medida que unem funcionalidade, sofisticação e personalidade para
            cada ambiente.
          </p>
          <div
            className="anima-entrada mt-11 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "520ms" }}
          >
            <Link to="/projetos" className="btn-base btn-dourado">
              Conheça nossos projetos
            </Link>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-base btn-contorno">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] tracking-[0.3em] text-areia/60 uppercase">Role</span>
        <span className="relative block h-14 w-px overflow-hidden bg-areia/20">
          <span
            className="absolute inset-x-0 h-6 bg-dourado"
            style={{ animation: "rola-indicador 2.4s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
