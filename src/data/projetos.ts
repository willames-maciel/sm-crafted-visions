import type { CategoriaProjeto, Depoimento, EtapaProcesso, Projeto } from "@/models/projeto";

import cozinhaBordo from "@/assets/hero-cozinha.jpg";
import cozinhaClara from "@/assets/projeto-cozinha2.jpg";
import quarto from "@/assets/projeto-quarto.jpg";
import painel from "@/assets/projeto-painel.jpg";
import homeOffice from "@/assets/projeto-homeoffice.jpg";
import sala from "@/assets/projeto-sala.jpg";
import comercial from "@/assets/projeto-comercial.jpg";

export const categorias: Array<"Todos" | CategoriaProjeto> = [
  "Todos",
  "Cozinhas",
  "Quartos",
  "Painéis",
  "Home Office",
  "Salas",
  "Comerciais",
];

/**
 * Dados mockados. Quando a Marcenaria API estiver disponível, basta
 * substituir o retorno do serviço em src/services/projetos.service.ts.
 */
export const projetosMock: Projeto[] = [
  {
    id: "cozinha-bordo-caninde",
    titulo: "Cozinha Bordô Assinada",
    descricao:
      "Cozinha planejada em MDF com laca bordô acetinada, marcenaria de piso ao teto e integração com a área gourmet. Cada módulo foi desenhado a partir da rotina da família, priorizando circulação e acesso rápido aos utensílios do dia a dia.",
    categoria: "Cozinhas",
    localizacao: "Canindé — CE",
    imagemPrincipal: cozinhaBordo,
    imagens: [cozinhaBordo, cozinhaClara, painel],
    materiais: ["MDF laca acetinada", "Perfis em alumínio dourado", "Bancada em quartzito", "Ferragens com amortecedor"],
    iluminacao: "Fitas de LED 3000K embutidas em nichos e sob os aéreos",
    caracteristicas: ["Torre quente integrada", "Ilha com apoio para refeições", "Adega e cristaleira iluminadas"],
    destaque: true,
  },
  {
    id: "closet-nogueira",
    titulo: "Closet Nogueira",
    descricao:
      "Closet em canto com portas de vidro reeded, gavetas internas com divisórias e iluminação automatizada por sensor de presença. Um projeto pensado para organização silenciosa e acabamento impecável.",
    categoria: "Quartos",
    localizacao: "Fortaleza — CE",
    imagemPrincipal: quarto,
    imagens: [quarto, homeOffice, sala],
    materiais: ["MDF padrão nogueira", "Vidro temperado", "Puxadores embutidos", "Corrediças telescópicas"],
    iluminacao: "LED com sensor de presença em cabideiros e nichos",
    caracteristicas: ["Aproveitamento total do canto", "Sapateira ventilada", "Módulo de gavetas com veludo"],
    destaque: true,
  },
  {
    id: "painel-ripado-sala",
    titulo: "Painel Ripado com Backlight",
    descricao:
      "Painel de TV em réguas de madeira natural com iluminação indireta e rack suspenso. O contraste com a parede bordô cria profundidade e valoriza o pé-direito do ambiente.",
    categoria: "Painéis",
    localizacao: "Canindé — CE",
    imagemPrincipal: painel,
    imagens: [painel, sala, cozinhaBordo],
    materiais: ["Réguas em MDF ripado", "Rack suspenso amadeirado", "Passagem de cabos oculta"],
    iluminacao: "Backlight quente atrás do painel e sob o rack",
    caracteristicas: ["Rack suspenso", "Nicho para equipamentos", "Instalação sem furos aparentes"],
    destaque: true,
  },
  {
    id: "home-office-curvo",
    titulo: "Home Office Curvo",
    descricao:
      "Marcenaria contínua com estante curva, bancada de trabalho e armários fechados. Solução completa para quem trabalha em casa sem abrir mão da estética do ambiente.",
    categoria: "Home Office",
    localizacao: "Sobral — CE",
    imagemPrincipal: homeOffice,
    imagens: [homeOffice, quarto, comercial],
    materiais: ["MDF amadeirado", "Prateleiras com fita LED", "Gavetas com trilho oculto"],
    iluminacao: "Perfil de LED em cada prateleira e sobre a bancada",
    caracteristicas: ["Estante curva sob medida", "Bancada com passa-fios", "Armários fechados para arquivo"],
    destaque: false,
  },
  {
    id: "sala-estar-classica",
    titulo: "Buffet de Sala em Freijó",
    descricao:
      "Buffet sob medida em freijó com pés metálicos, desenhado para o espaço exato da parede e para os objetos de decoração da cliente.",
    categoria: "Salas",
    localizacao: "Quixadá — CE",
    imagemPrincipal: sala,
    imagens: [sala, painel, cozinhaClara],
    materiais: ["MDF padrão freijó", "Pés em metal escovado", "Portas com dobradiça slow motion"],
    iluminacao: "Iluminação de cena com spots direcionáveis",
    caracteristicas: ["Medidas exatas do vão", "Interior com prateleiras reguláveis", "Acabamento nas quatro faces"],
    destaque: false,
  },
  {
    id: "loja-madeira-nobre",
    titulo: "Ambiente Comercial em Madeira Nobre",
    descricao:
      "Projeto comercial com balcão de atendimento, expositores iluminados e copa integrada. Marcenaria robusta, pensada para alto fluxo e manutenção simples.",
    categoria: "Comerciais",
    localizacao: "Fortaleza — CE",
    imagemPrincipal: comercial,
    imagens: [comercial, homeOffice, cozinhaBordo],
    materiais: ["MDF padrão nogueira", "Vidro nas vitrines", "Tampo em superfície sólida"],
    iluminacao: "LED linear nas vitrines e sancas de teto",
    caracteristicas: ["Balcão curvo de atendimento", "Expositores com vidro", "Copa integrada"],
    destaque: false,
  },
  {
    id: "cozinha-clara-compacta",
    titulo: "Cozinha Clara Compacta",
    descricao:
      "Cozinha em U com acabamento branco fosco e detalhes em madeira clara. Um exercício de aproveitamento máximo em poucos metros quadrados.",
    categoria: "Cozinhas",
    localizacao: "Canindé — CE",
    imagemPrincipal: cozinhaClara,
    imagens: [cozinhaClara, cozinhaBordo, sala],
    materiais: ["MDF branco fosco", "Detalhes em carvalho", "Metais dourados", "Bancada em quartzo"],
    iluminacao: "Perfil de LED sob os armários aéreos",
    caracteristicas: ["Layout em U", "Aéreos até o teto", "Coifa embutida"],
    destaque: true,
  },
];

export const depoimentosMock: Depoimento[] = [
  {
    id: "1",
    nome: "Ana Cristina M.",
    cidade: "Canindé — CE",
    projeto: "Cozinha planejada",
    texto:
      "Do primeiro desenho à instalação, tudo foi conduzido com muito cuidado. A cozinha ficou exatamente como imaginei — e o acabamento superou o que eu esperava.",
  },
  {
    id: "2",
    nome: "Rodrigo e Paula",
    cidade: "Fortaleza — CE",
    projeto: "Closet e painel",
    texto:
      "O que mais nos marcou foi a atenção aos detalhes. Eles pensaram em coisas que nós nem tínhamos considerado, e o prazo foi cumprido à risca.",
  },
  {
    id: "3",
    nome: "Marcos Vinícius",
    cidade: "Sobral — CE",
    projeto: "Home office",
    texto:
      "Fabricação própria faz diferença. Móvel firme, encaixe perfeito e um atendimento que continuou existindo depois da entrega.",
  },
];

export const processoEtapas: EtapaProcesso[] = [
  { numero: "01", titulo: "Conversa", descricao: "Entendemos suas necessidades e ideias." },
  { numero: "02", titulo: "Projeto", descricao: "Desenvolvemos uma solução personalizada para seu ambiente." },
  { numero: "03", titulo: "Orçamento", descricao: "Apresentamos os detalhes e condições do projeto." },
  { numero: "04", titulo: "Fabricação", descricao: "Produzimos os móveis com atenção aos detalhes." },
  { numero: "05", titulo: "Instalação", descricao: "Realizamos a instalação e finalizamos o ambiente." },
];
