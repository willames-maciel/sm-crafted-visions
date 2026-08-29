import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/marca/Reveal";
import { ProjectCard } from "@/components/projetos/ProjectCard";
import { ProjectGallery } from "@/components/projetos/ProjectGallery";
import { CTA } from "@/components/secoes/CTA";
import { categorias, projetosMock } from "@/data/projetos";
import type { CategoriaProjeto, Projeto } from "@/models/projeto";

const titulo = "Projetos | Marcenaria São Mateus — Móveis Planejados";
const descricao =
  "Galeria de projetos da Marcenaria São Mateus: cozinhas planejadas, quartos, painéis, home office, salas e ambientes comerciais em MDF sob medida.";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  const [filtro, setFiltro] = useState<"Todos" | CategoriaProjeto>("Todos");
  const [selecionado, setSelecionado] = useState<Projeto | null>(null);

  // Fonte de dados mockada — futuramente virá da Marcenaria API.
  const projetos = projetosMock;
  const filtrados = useMemo(
    () => (filtro === "Todos" ? projetos : projetos.filter((p) => p.categoria === filtro)),
    [filtro, projetos],
  );

  return (
    <>
      <section className="bg-bordo-escuro pt-40 pb-20 text-areia sm:pt-48">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow anima-entrada text-dourado">Portfólio</p>
          <h1 className="anima-entrada mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Projetos realizados
          </h1>
          <p className="anima-entrada mt-8 max-w-2xl text-sm leading-relaxed text-areia/75 sm:text-base">
            Cozinhas, closets, painéis e ambientes comerciais executados com marcenaria própria. Clique em um
            projeto para ver a galeria completa e a ficha técnica.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filtrar projetos por categoria">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filtro === c}
                onClick={() => setFiltro(c)}
                className={`border px-5 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-400 ${
                  filtro === c
                    ? "border-bordo bg-bordo text-areia"
                    : "border-border text-muted-foreground hover:border-dourado hover:text-bordo"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <ProjectCard projeto={p} onSelecionar={setSelecionado} prioridade={i < 3} />
              </Reveal>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              Ainda não temos projetos publicados nesta categoria. Fale conosco no WhatsApp para ver mais.
            </p>
          )}
        </div>
      </section>

      <CTA titulo="Seu ambiente pode ser o próximo" />

      <ProjectGallery projeto={selecionado} onFechar={() => setSelecionado(null)} />
    </>
  );
}
