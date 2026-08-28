/** Dados institucionais editáveis em um único lugar. */
export const empresa = {
  nome: "Marcenaria São Mateus",
  assinatura: "Móveis Projetados",
  telefone: "(85) 99999-0000",
  whatsapp: "5585999990000",
  email: "contato@marcenariasaomateus.com.br",
  cidade: "Canindé",
  estado: "Ceará",
  endereco: "Canindé — Ceará, Brasil",
  instagram: "https://instagram.com/marcenariasaomateus",
  facebook: "https://facebook.com/marcenariasaomateus",
  horario: "Segunda a sexta, 8h às 18h · Sábado, 8h às 12h",
} as const;

export const mensagemWhatsApp =
  "Olá! Vim pelo site da Marcenaria São Mateus e gostaria de solicitar um orçamento.";

export const linkWhatsApp = (mensagem: string = mensagemWhatsApp) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;

/** Números institucionais — ajuste livremente. */
export const estatisticas = [
  { valor: 500, sufixo: "+", rotulo: "Projetos realizados" },
  { valor: 10, sufixo: "+", rotulo: "Anos de experiência" },
  { valor: 100, sufixo: "%", rotulo: "Dedicação em cada projeto" },
];
