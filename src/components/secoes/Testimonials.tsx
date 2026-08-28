import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/marca/Reveal";
import { depoimentosMock } from "@/data/projetos";

export function Testimonials() {
  const [indice, setIndice] = useState(0);
  const total = depoimentosMock.length;
  const atual = depoimentosMock[indice];

  return (
    <section className="bg-bordo-escuro py-28 text-areia">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-dourado">Quem já vive nossos projetos</p>
          <Quote className="mx-auto mt-8 h-8 w-8 text-dourado/60" aria-hidden="true" />
          <blockquote className="mt-8 min-h-[9rem] font-display text-2xl leading-snug sm:text-3xl">
            “{atual.texto}”
          </blockquote>
          <footer className="mt-8">
            <p className="text-sm tracking-[0.18em] text-dourado uppercase">{atual.nome}</p>
            <p className="mt-2 text-xs text-areia/60">
              {atual.cidade} {atual.projeto ? `· ${atual.projeto}` : ""}
            </p>
          </footer>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => setIndice((i) => (i - 1 + total) % total)}
              className="border border-areia/25 p-3 transition-colors hover:border-dourado hover:text-dourado"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
              {depoimentosMock.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={i === indice}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setIndice(i)}
                  className={`h-px w-8 transition-all duration-500 ${i === indice ? "bg-dourado" : "bg-areia/25"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => setIndice((i) => (i + 1) % total)}
              className="border border-areia/25 p-3 transition-colors hover:border-dourado hover:text-dourado"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
