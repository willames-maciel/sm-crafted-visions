import { Reveal } from "@/components/marca/Reveal";
import { processoEtapas } from "@/data/projetos";

export function ProcessTimeline() {
  return (
    <section className="bg-secondary py-28" id="processo">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-bordo">Processo de trabalho</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl linha-dourada">
            Do primeiro café à última dobradiça
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {processoEtapas.map((etapa, i) => (
            <Reveal as="li" key={etapa.numero} delay={i * 90} className="group bg-background">
              <div className="h-full border-t-2 border-transparent p-8 transition-all duration-500 group-hover:border-dourado group-hover:bg-card">
                <span className="font-display text-5xl text-dourado/70 transition-colors duration-500 group-hover:text-bordo">
                  {etapa.numero}
                </span>
                <h3 className="mt-6 text-xs font-medium tracking-[0.24em] text-bordo uppercase">{etapa.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{etapa.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
