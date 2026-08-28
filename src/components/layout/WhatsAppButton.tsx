import { MessageCircle } from "lucide-react";
import { linkWhatsApp } from "@/config/empresa";

export function WhatsAppButton() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Marcenaria São Mateus"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-bordo px-4 py-4 text-areia shadow-[var(--shadow-elegante)] transition-all duration-500 hover:bg-bordo-escuro sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="h-6 w-6 text-dourado" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden text-[0.7rem] tracking-[0.2em] whitespace-nowrap uppercase transition-all duration-500 group-hover:max-w-[10rem]">
        Fale conosco
      </span>
    </a>
  );
}
