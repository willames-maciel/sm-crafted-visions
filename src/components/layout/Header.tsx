import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monograma } from "@/components/marca/Monograma";
import { empresa, linkWhatsApp } from "@/config/empresa";
import { cn } from "@/lib/utils";

const navegacao = [
  { rotulo: "Início", para: "/" },
  { rotulo: "Sobre Nós", para: "/sobre" },
  { rotulo: "Projetos", para: "/projetos" },
  { rotulo: "Contato", para: "/contato" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const heroTransparente = pathname === "/";

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  const solido = rolou || !heroTransparente || aberto;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solido
          ? "bg-bordo-escuro/95 py-3 shadow-[0_1px_0_0_color-mix(in_oklab,var(--dourado)_25%,transparent)] backdrop-blur-md"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3 text-areia" aria-label={empresa.nome}>
          <Monograma className="h-9 w-9 text-dourado transition-transform duration-500 group-hover:rotate-3" />
          <span className="hidden leading-tight sm:block">
            <span className="block eyebrow text-areia">Marcenaria São Mateus</span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-dourado/80 uppercase">
              {empresa.assinatura}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <Link
              key={item.para}
              to={item.para}
              className="relative eyebrow text-areia/85 transition-colors hover:text-dourado"
              activeProps={{ className: "text-dourado" }}
              activeOptions={{ exact: item.para === "/" }}
            >
              {item.rotulo}
            </Link>
          ))}
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-base btn-dourado">
            Solicitar orçamento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="text-areia lg:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          {aberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden",
          aberto ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pt-6 pb-8 sm:px-8" aria-label="Navegação mobile">
          {navegacao.map((item, i) => (
            <Link
              key={item.para}
              to={item.para}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="border-b border-areia/10 py-4 font-display text-2xl text-areia transition-colors hover:text-dourado"
              activeProps={{ className: "text-dourado" }}
              activeOptions={{ exact: item.para === "/" }}
            >
              {item.rotulo}
            </Link>
          ))}
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-dourado mt-6 w-full"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
