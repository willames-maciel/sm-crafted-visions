import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Projeto } from "@/models/projeto";
import { linkWhatsApp } from "@/config/empresa";

interface ProjectGalleryProps {
  projeto: Projeto | null;
  onFechar: () => void;
}

/** Modal fullscreen com galeria, descrição e ficha técnica do projeto. */
export function ProjectGallery({ projeto, onFechar }: ProjectGalleryProps) {
  const [indice, setIndice] = useState(0);

  useEffect(() => setIndice(0), [projeto?.id]);

  useEffect(() => {
    if (!projeto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
      if (e.key === "ArrowRight") setIndice((i) => (i + 1) % projeto.imagens.length);
      if (e.key === "ArrowLeft") setIndice((i) => (i - 1 + projeto.imagens.length) % projeto.imagens.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [projeto, onFechar]);

  if (!projeto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={projeto.titulo}
      className="fixed inset-0 z-[60] overflow-y-auto bg-bordo-escuro/97 backdrop-blur-sm anima-entrada"
    >
      <button
        type="button"
        onClick={onFechar}
        aria-label="Fechar galeria"
        className="fixed top-5 right-5 z-10 border border-areia/25 p-3 text-areia transition-colors hover:border-dourado hover:text-dourado sm:top-8 sm:right-8"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:py-24">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
            <img
              key={projeto.imagens[indice]}
              src={projeto.imagens[indice]}
              alt={`${projeto.titulo} — imagem ${indice + 1}`}
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover anima-entrada"
            />
            {projeto.imagens.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Imagem anterior"
                  onClick={() => setIndice((i) => (i - 1 + projeto.imagens.length) % projeto.imagens.length)}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-bordo-escuro/70 p-3 text-areia transition-colors hover:text-dourado"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Próxima imagem"
                  onClick={() => setIndice((i) => (i + 1) % projeto.imagens.length)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-bordo-escuro/70 p-3 text-areia transition-colors hover:text-dourado"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {projeto.imagens.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ver imagem ${i + 1}`}
                className={`aspect-[4/3] overflow-hidden border transition-all duration-500 ${
                  i === indice ? "border-dourado" : "border-transparent opacity-55 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${i + 1} do projeto ${projeto.titulo}`}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="text-areia">
          <p className="eyebrow text-dourado">{projeto.categoria}</p>
          <h2 className="mt-5 font-display text-4xl leading-tight">{projeto.titulo}</h2>
          <p className="mt-2 text-xs tracking-[0.2em] text-areia/60 uppercase">{projeto.localizacao}</p>
          <p className="mt-7 text-sm leading-relaxed text-areia/80">{projeto.descricao}</p>

          {projeto.caracteristicas?.length ? (
            <div className="mt-9">
              <h3 className="eyebrow text-dourado">Características</h3>
              <ul className="mt-4 space-y-2 text-sm text-areia/80">
                {projeto.caracteristicas.map((c) => (
                  <li key={c} className="border-b border-areia/10 pb-2">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {projeto.materiais?.length ? (
            <div className="mt-9">
              <h3 className="eyebrow text-dourado">Materiais</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {projeto.materiais.map((m) => (
                  <li key={m} className="border border-areia/20 px-3 py-1.5 text-xs text-areia/80">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {projeto.iluminacao ? (
            <div className="mt-9">
              <h3 className="eyebrow text-dourado">Iluminação</h3>
              <p className="mt-3 text-sm text-areia/80">{projeto.iluminacao}</p>
            </div>
          ) : null}

          <a
            href={linkWhatsApp(`Olá! Gostaria de um projeto parecido com "${projeto.titulo}".`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-dourado mt-10 w-full"
          >
            Quero um projeto assim
          </a>
        </div>
      </div>
    </div>
  );
}
