import { ArrowUpRight } from "lucide-react";
import type { Projeto } from "@/models/projeto";

interface ProjectCardProps {
  projeto: Projeto;
  onSelecionar: (projeto: Projeto) => void;
  prioridade?: boolean;
}

export function ProjectCard({ projeto, onSelecionar, prioridade = false }: ProjectCardProps) {
  return (
    <article className="group relative">
      <button
        type="button"
        onClick={() => onSelecionar(projeto)}
        className="block w-full text-left"
        aria-label={`Ver detalhes do projeto ${projeto.titulo}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={projeto.imagemPrincipal}
            alt={`${projeto.titulo} — móveis planejados em ${projeto.localizacao ?? "Ceará"}`}
            width={1280}
            height={960}
            loading={prioridade ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-bordo)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
          <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-6 text-xs tracking-[0.22em] text-areia uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Ver projeto <ArrowUpRight className="h-4 w-4 text-dourado" aria-hidden="true" />
          </span>
          <span className="absolute top-5 left-5 bg-background/90 px-3 py-1.5 text-[0.6rem] tracking-[0.22em] text-bordo uppercase">
            {projeto.categoria}
          </span>
        </div>
        <div className="pt-5">
          <h3 className="font-display text-2xl transition-colors duration-500 group-hover:text-bordo">
            {projeto.titulo}
          </h3>
          <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">{projeto.localizacao}</p>
        </div>
      </button>
    </article>
  );
}
