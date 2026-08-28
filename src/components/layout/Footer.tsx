import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Monograma } from "@/components/marca/Monograma";
import { empresa, linkWhatsApp } from "@/config/empresa";

export function Footer() {
  return (
    <footer className="bg-bordo-escuro text-areia/75">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Monograma className="h-11 w-11 text-dourado" />
            <span className="leading-tight">
              <span className="block font-display text-xl text-areia">Marcenaria São Mateus</span>
              <span className="block text-[0.6rem] tracking-[0.3em] text-dourado/80 uppercase">
                {empresa.assinatura}
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Móveis planejados e sob medida em MDF, projetados e fabricados com marcenaria própria em{" "}
            {empresa.cidade}, {empresa.estado}.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="eyebrow text-dourado">Navegação</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { r: "Início", p: "/" },
              { r: "Sobre Nós", p: "/sobre" },
              { r: "Projetos", p: "/projetos" },
              { r: "Contato", p: "/contato" },
            ].map((l) => (
              <li key={l.p}>
                <Link to={l.p} className="transition-colors hover:text-dourado">
                  {l.r}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-dourado">Contato</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-dourado"
              >
                <Phone className="h-4 w-4 text-dourado" aria-hidden="true" /> WhatsApp {empresa.telefone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${empresa.email}`}
                className="flex items-center gap-3 transition-colors hover:text-dourado"
              >
                <Mail className="h-4 w-4 text-dourado" aria-hidden="true" /> {empresa.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-dourado" aria-hidden="true" /> {empresa.endereco}
            </li>
          </ul>
          <div className="mt-7 flex gap-3">
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Marcenaria São Mateus"
              className="border border-areia/20 p-3 transition-colors hover:border-dourado hover:text-dourado"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={empresa.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Marcenaria São Mateus"
              className="border border-areia/20 p-3 transition-colors hover:border-dourado hover:text-dourado"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-areia/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs tracking-wide sm:px-8">
          © {new Date().getFullYear()} Marcenaria São Mateus — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
