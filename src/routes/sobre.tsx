import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/marca/Reveal";
import { ContadorAnimado } from "@/components/marca/ContadorAnimado";
import { ProcessTimeline } from "@/components/secoes/ProcessTimeline";
import { CTA } from "@/components/secoes/CTA";
import { empresa, estatisticas } from "@/config/empresa";
import oficina from "@/assets/oficina.jpg";
import sala from "@/assets/projeto-sala.jpg";

const titulo = "Sobre Nós | Marcenaria São Mateus — Móveis Sob Medida";
const descricao =
  "Conheça a história, os valores e a filosofia da Marcenaria São Mateus: projetos sob medida, fabricação própria e atenção obsessiva aos detalhes.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: SobrePage,
});

const valores = [
  {
    titulo: "Atendimento personalizado",
    texto: "Um projeto por cliente, com acompanhamento direto de quem desenha e de quem fabrica.",
  },
  {
    titulo: "Projetos sob medida",
    texto: "Nada de módulos prontos: cada medida sai do seu ambiente, do seu pé-direito, do seu uso.",
  },
  {
    titulo: "Fabricação própria",
    texto: "Marcenaria completa, com controle de prazo, corte, usinagem e montagem dentro de casa.",
  },
  {
    titulo: "Qualidade dos materiais",
    texto: "MDF de primeira linha, fitas de borda resistentes e ferragens com garantia de fabricante.",
  },
  {
    titulo: "Atenção aos detalhes",
    texto: "Alinhamento de frentes, veio contínuo, folgas iguais. O detalhe é o que separa bom de excelente.",
  },
  {
    titulo: "Compromisso com o cliente",
    texto: "Prazo combinado é prazo cumprido — e o pós-instalação faz parte do serviço.",
  },
];

function SobrePage() {
  return (
    <>
      <section className="bg-bordo-escuro pt-40 pb-24 text-areia sm:pt-48">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow anima-entrada text-dourado">Sobre nós</p>
          <h1 className="anima-entrada mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Mais que móveis. Criamos ambientes.
          </h1>
          <p className="anima-entrada mt-8 max-w-2xl text-sm leading-relaxed text-areia/75 sm:text-base">
            Somos uma marcenaria de {empresa.cidade}, no {empresa.estado}, dedicada a móveis planejados em MDF
            para quem valoriza acabamento, funcionalidade e um resultado com personalidade.
          </p>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={oficina}
              alt="Detalhe do trabalho manual em madeira na oficina da Marcenaria São Mateus"
              width={1280}
              height={1600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-bordo">Nossa história</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl linha-dourada">
              O ofício antes da pressa
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A Marcenaria São Mateus começou pequena, com uma bancada, poucas ferramentas e a convicção de que
              móvel bom é aquele que resolve a vida de quem usa. Com o tempo, o maquinário cresceu, a equipe se
              formou e os projetos ficaram mais ambiciosos — mas o método continuou o mesmo: escutar, medir,
              desenhar e executar com cuidado.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hoje atendemos residências e espaços comerciais em todo o Ceará, sempre com fabricação própria e o
              mesmo padrão de acabamento que nos trouxe até aqui.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bordo py-24 text-areia">
        <img
          src={sala}
          alt=""
          aria-hidden="true"
          width={1280}
          height={960}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="relative mx-auto grid max-w-5xl gap-14 px-5 sm:grid-cols-3 sm:px-8">
          {estatisticas.map((e) => (
            <ContadorAnimado key={e.rotulo} valor={e.valor} sufixo={e.sufixo} rotulo={e.rotulo} />
          ))}
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-bordo">Nossos valores</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              O que sustenta cada entrega
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 70} className="bg-background">
                <div className="h-full border-l-2 border-transparent p-9 transition-all duration-500 hover:border-dourado hover:bg-secondary">
                  <h3 className="font-display text-2xl">{v.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <CTA titulo="Pronto para tirar o projeto do papel?" />
    </>
  );
}
