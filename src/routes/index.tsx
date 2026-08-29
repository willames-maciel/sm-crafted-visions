import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Hammer, Ruler, Sparkles, Handshake } from "lucide-react";

import { Hero } from "@/components/secoes/Hero";
import { Reveal } from "@/components/marca/Reveal";
import { ProcessTimeline } from "@/components/secoes/ProcessTimeline";
import { Testimonials } from "@/components/secoes/Testimonials";
import { CTA } from "@/components/secoes/CTA";
import { ProjectCard } from "@/components/projetos/ProjectCard";
import { ProjectGallery } from "@/components/projetos/ProjectGallery";
import { projetosMock } from "@/data/projetos";
import type { Projeto } from "@/models/projeto";
import oficina from "@/assets/oficina.jpg";

const titulo = "Marcenaria São Mateus | Móveis Planejados em Canindé — CE";
const descricao =
  "Móveis planejados e sob medida em MDF com fabricação própria. Cozinhas, closets, painéis e home office em Canindé e em todo o Ceará.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Index,
});

const diferenciais = [
  {
    icone: Ruler,
    titulo: "Projeto sob medida",
    texto: "Cada peça é desenhada para o seu espaço, sua rotina e o jeito que você usa a casa.",
  },
  {
    icone: Hammer,
    titulo: "Fabricação própria",
    texto: "Produzimos na nossa marcenaria: controle total de prazo, acabamento e qualidade.",
  },
  {
    icone: Sparkles,
    titulo: "Acabamento impecável",
    texto: "MDF de primeira linha, ferragens com amortecimento e detalhes que aparecem no uso diário.",
  },
  {
    icone: Handshake,
    titulo: "Atendimento próximo",
    texto: "Da primeira conversa à instalação, você fala sempre com quem executa o projeto.",
  },
];

function Index() {
  const [selecionado, setSelecionado] = useState<Projeto | null>(null);
  const destaques = projetosMock.filter((p) => p.destaque).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Nossa essência */}
      <section className="bg-background py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-bordo">Nossa essência</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl linha-dourada">
              Marcenaria artesanal com precisão de indústria
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A Marcenaria São Mateus nasceu do ofício de transformar chapas de MDF em ambientes com identidade.
              Unimos desenho técnico, seleção criteriosa de materiais e mão de obra experiente para entregar
              móveis planejados que duram e envelhecem bem.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Trabalhamos com poucos projetos por vez — porque acabamento não se acelera. É assim que garantimos
              alinhamento perfeito, encaixe firme e um resultado que você sente ao abrir cada porta.
            </p>
            <Link to="/sobre" className="btn-base btn-bordo mt-10">
              Conheça a marcenaria
            </Link>
          </Reveal>

          <Reveal delay={140} className="relative">
            <img
              src={oficina}
              alt="Marceneiro trabalhando uma peça de madeira na oficina da Marcenaria São Mateus"
              width={1280}
              height={1600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-bordo px-8 py-6 text-areia sm:block">
              <p className="font-display text-4xl text-dourado">SM</p>
              <p className="mt-1 text-[0.6rem] tracking-[0.3em] uppercase">Feito à mão, medido ao milímetro</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-bordo">Por que nos escolher</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Quatro compromissos em cada projeto
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 90} className="bg-background">
                <div className="group h-full p-9 transition-colors duration-500 hover:bg-card">
                  <d.icone
                    className="h-7 w-7 text-dourado transition-transform duration-500 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 font-display text-2xl">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow text-bordo">Projetos em destaque</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Ambientes que ganharam personalidade
              </h2>
            </div>
            <Link to="/projetos" className="btn-base btn-bordo">
              Ver todos os projetos
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {destaques.map((p, i) => (
              <Reveal key={p.id} delay={i * 110}>
                <ProjectCard projeto={p} onSelecionar={setSelecionado} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <Testimonials />
      <CTA />

      <ProjectGallery projeto={selecionado} onFechar={() => setSelecionado(null)} />
    </>
  );
}
