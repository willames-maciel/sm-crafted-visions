import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/marca/Reveal";
import { linkWhatsApp } from "@/config/empresa";

interface CTAProps {
  titulo?: string;
  texto?: string;
}

export function CTA({
  titulo = "Vamos transformar seu espaço?",
  texto = "Conte o que você imagina para o seu ambiente. Desenhamos, fabricamos e instalamos o móvel sob medida certo para a sua rotina.",
}: CTAProps) {
  return (
    <section className="bg-[image:var(--gradient-bordo)] py-28 text-areia">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow text-dourado">Orçamento sem compromisso</p>
        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">{titulo}</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-areia/80 sm:text-base">{texto}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-base btn-dourado">
            Solicitar orçamento
          </a>
          <Link to="/projetos" className="btn-base btn-contorno">
            Ver projetos
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
