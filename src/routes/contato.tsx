import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Facebook, Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/marca/Reveal";
import { empresa, linkWhatsApp } from "@/config/empresa";
import type { SolicitacaoOrcamento } from "@/models/projeto";

const titulo = "Contato | Marcenaria São Mateus — Solicite seu Orçamento";
const descricao =
  "Fale com a Marcenaria São Mateus e solicite um orçamento de móveis planejados sob medida em Canindé e em todo o Ceará.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: ContatoPage,
});

const tiposProjeto = [
  "Cozinha planejada",
  "Quarto / closet",
  "Painel de TV",
  "Home office",
  "Sala de estar",
  "Ambiente comercial",
  "Outro",
];

const estadoInicial: SolicitacaoOrcamento = {
  nome: "",
  whatsapp: "",
  email: "",
  tipoProjeto: tiposProjeto[0],
  mensagem: "",
};

const campoClasse =
  "w-full border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-dourado";

function ContatoPage() {
  const [form, setForm] = useState<SolicitacaoOrcamento>(estadoInicial);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const texto = [
      "Olá! Gostaria de solicitar um orçamento.",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `E-mail: ${form.email}`,
      `Tipo de projeto: ${form.tipoProjeto}`,
      `Mensagem: ${form.mensagem}`,
    ].join("\n");

    // Futuramente: POST para a Marcenaria API. Hoje encaminhamos ao WhatsApp.
    window.open(linkWhatsApp(texto), "_blank", "noopener,noreferrer");
    toast.success("Abrimos o WhatsApp com o seu pedido. Retornamos em breve!");
  };

  const contatos = [
    { icone: MessageCircle, rotulo: "WhatsApp", valor: empresa.telefone, href: linkWhatsApp() },
    { icone: Phone, rotulo: "Telefone", valor: empresa.telefone, href: `tel:+55${empresa.whatsapp.slice(2)}` },
    { icone: Mail, rotulo: "E-mail", valor: empresa.email, href: `mailto:${empresa.email}` },
    { icone: MapPin, rotulo: "Localização", valor: empresa.endereco },
    { icone: Clock, rotulo: "Atendimento", valor: empresa.horario },
  ];

  return (
    <>
      <section className="bg-bordo-escuro pt-40 pb-20 text-areia sm:pt-48">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow anima-entrada text-dourado">Contato</p>
          <h1 className="anima-entrada mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Vamos transformar seu espaço?
          </h1>
          <p className="anima-entrada mt-8 max-w-2xl text-sm leading-relaxed text-areia/75 sm:text-base">
            Envie os detalhes do seu ambiente. Respondemos com as próximas etapas e agendamos a visita de
            medição.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={enviar} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="eyebrow text-bordo">
                    Nome
                  </label>
                  <input
                    id="nome"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className={`${campoClasse} mt-3`}
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="eyebrow text-bordo">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    required
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder="(85) 90000-0000"
                    className={`${campoClasse} mt-3`}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="eyebrow text-bordo">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@email.com"
                    className={`${campoClasse} mt-3`}
                  />
                </div>
                <div>
                  <label htmlFor="tipo" className="eyebrow text-bordo">
                    Tipo de projeto
                  </label>
                  <select
                    id="tipo"
                    value={form.tipoProjeto}
                    onChange={(e) => setForm({ ...form, tipoProjeto: e.target.value })}
                    className={`${campoClasse} mt-3`}
                  >
                    {tiposProjeto.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="eyebrow text-bordo">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={6}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Conte um pouco sobre o ambiente, as medidas aproximadas e o que você imagina."
                  className={`${campoClasse} mt-3 resize-none`}
                />
              </div>

              <button type="submit" className="btn-base btn-bordo w-full sm:w-auto">
                Solicitar orçamento
              </button>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-secondary p-9">
              <h2 className="font-display text-3xl linha-dourada">Fale direto com a marcenaria</h2>
              <ul className="mt-9 space-y-6">
                {contatos.map((c) => (
                  <li key={c.rotulo} className="flex gap-4">
                    <c.icone className="mt-1 h-5 w-5 shrink-0 text-dourado" aria-hidden="true" />
                    <div>
                      <p className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                        {c.rotulo}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm transition-colors hover:text-bordo"
                        >
                          {c.valor}
                        </a>
                      ) : (
                        <p className="text-sm">{c.valor}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex gap-3">
                <a
                  href={empresa.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Marcenaria São Mateus"
                  className="border border-border p-3 transition-colors hover:border-dourado hover:text-bordo"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={empresa.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Marcenaria São Mateus"
                  className="border border-border p-3 transition-colors hover:border-dourado hover:text-bordo"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
