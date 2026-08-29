# São Mateus Design Studio

Crie um site institucional moderno, elegante, sofisticado e altamente interativo para a Marcenaria São Mateus, empresa especializada em móveis planejados e móveis sob medida em MDF.

O site deve transmitir uma imagem de empresa premium, confiável, moderna e artesanal, valorizando os projetos, os detalhes dos acabamentos e a experiência do cliente.

IDENTIDADE VISUAL

Utilize como referência a identidade visual da Marcenaria São Mateus:

Bordô profundo: #6B0D15

Bordô escuro: #3A0A0C

Dourado sofisticado: #C7943E

Branco/off-white

Tons naturais de madeira

Tipografia moderna, elegante e altamente legível

Design minimalista e sofisticado

Bastante espaço em branco

Imagens grandes e impactantes

Utilize o monograma geométrico “SM” como elemento visual da marca, acompanhado de:

MARCENARIA SÃO MATEUS
MÓVEIS PROJETADOS

Não criar uma identidade visual genérica. A página deve parecer uma marca real de marcenaria de alto padrão.

OBJETIVO

Criar uma experiência digital que:

Apresente a Marcenaria São Mateus.

Mostre os projetos realizados.

Transmita qualidade e profissionalismo.

Permita que o visitante conheça o processo de trabalho.

Facilite o contato pelo WhatsApp.

Estimule o visitante a solicitar um orçamento.

Seja preparada para futuramente consumir dados da API do sistema ERP da Marcenaria São Mateus.

ESTRUTURA DO SITE

Criar as seguintes páginas:

1. HOME

Criar um Hero em tela cheia com uma fotografia sofisticada de um ambiente planejado, preferencialmente cozinha, sala, quarto ou painel de alto padrão.

Sobre a imagem, apresentar:

MARCENARIA SÃO MATEUS

Móveis projetados para transformar espaços.

Texto complementar:

“Projetamos e produzimos móveis sob medida que unem funcionalidade, sofisticação e personalidade para cada ambiente.”

Botões:

CONHEÇA NOSSOS PROJETOS

SOLICITAR ORÇAMENTO

Adicionar animações suaves de entrada.

Criar também:

seção “Nossa essência”;

seção de diferenciais;

projetos em destaque;

processo de trabalho;

depoimentos;

chamada final para orçamento.

2. SOBRE NÓS

Criar uma página institucional elegante.

Título:

Mais que móveis. Criamos ambientes.

Apresentar a história, os valores e a filosofia da Marcenaria São Mateus.

Destacar:

atendimento personalizado;

projetos sob medida;

fabricação própria;

qualidade dos materiais;

atenção aos detalhes;

acabamento;

compromisso com o cliente.

Criar uma seção visual com números/estatísticas animadas, deixando os valores facilmente editáveis posteriormente.

Exemplo:

+500 Projetos realizados

+10 Anos de experiência

100% Dedicação em cada projeto

Não inventar números definitivos; deixar esses dados configuráveis.

3. PROJETOS

Criar uma galeria premium e interativa.

Categorias:

Todos

Cozinhas

Quartos

Painéis

Home Office

Salas

Comerciais

Cada projeto deve possuir:

imagem principal;

título;

localização;

categoria;

descrição;

materiais utilizados;

informações adicionais.

Criar cards com efeitos modernos de hover.

Ao clicar em um projeto, abrir uma página ou modal detalhado contendo:

galeria de fotos;

descrição;

características do projeto;

materiais;

iluminação;

localização.

A galeria deve possuir transições suaves e suporte a imagens em alta resolução.

4. CONTATO

Criar uma página de contato elegante e objetiva.

Título:

Vamos transformar seu espaço?

Criar formulário com:

Nome

WhatsApp

E-mail

Tipo de projeto

Mensagem

Botão:

SOLICITAR ORÇAMENTO

Também apresentar:

WhatsApp;

telefone;

e-mail;

localização;

redes sociais.

Adicionar botão flutuante de WhatsApp em todas as páginas.

PROCESSO DE TRABALHO

Criar uma seção visual mostrando:

01 — CONVERSA

Entendemos suas necessidades e ideias.

02 — PROJETO

Desenvolvemos uma solução personalizada para seu ambiente.

03 — ORÇAMENTO

Apresentamos os detalhes e condições do projeto.

04 — FABRICAÇÃO

Produzimos os móveis com atenção aos detalhes.

05 — INSTALAÇÃO

Realizamos a instalação e finalizamos o ambiente.

Utilizar animações suaves durante o scroll.

EXPERIÊNCIA E INTERAÇÃO

O site deve ser altamente interativo, mas sem exageros.

Utilizar:

animações suaves;

fade-in;

slide-in;

parallax discreto;

hover nos projetos;

transições entre páginas;

carrosséis;

galeria fullscreen;

números animados;

menu responsivo;

botão WhatsApp flutuante;

microinterações nos botões;

indicador visual de scroll.

Evitar animações excessivas que prejudiquem a performance.

HEADER

Criar um header sofisticado.

Desktop:

SM | MARCENARIA SÃO MATEUS

INÍCIO
SOBRE NÓS
PROJETOS
CONTATO

Botão destacado:

SOLICITAR ORÇAMENTO

O header deve ser transparente sobre o Hero e assumir fundo sólido ao rolar a página.

No mobile, utilizar menu hamburger com animação elegante.

FOOTER

Criar footer premium contendo:

MARCENARIA SÃO MATEUS

Móveis Projetados

Links:

Início

Sobre Nós

Projetos

Contato

Contato:

WhatsApp

E-mail

localização

Adicionar redes sociais.

Adicionar copyright:

© Marcenaria São Mateus — Todos os direitos reservados.

RESPONSIVIDADE

O site deve ser totalmente responsivo para:

desktop;

notebook;

tablet;

smartphone.

Priorizar experiência mobile.

As imagens devem se adaptar corretamente sem deformação.

TECNOLOGIA

Utilizar uma arquitetura moderna e organizada.

Preferencialmente:

Angular

TypeScript

SCSS

componentes reutilizáveis

Angular Router

arquitetura modular

responsividade

lazy loading quando apropriado

Criar componentes reutilizáveis para:

Header

Footer

Hero

ProjectCard

ProjectGallery

CTA

WhatsAppButton

Testimonials

ProcessTimeline

FUTURA INTEGRAÇÃO COM ERP

Estruturar o projeto pensando em futura integração com a Marcenaria API, desenvolvida em Spring Boot.

Os projetos exibidos na página devem futuramente poder ser carregados através de uma API.

Criar models/interfaces preparados para algo como:

interface Projeto {

  id: string;

  titulo: string;

  descricao: string;

  categoria: string;

  localizacao?: string;

  imagemPrincipal: string;

  imagens: string[];

  materiais?: string[];

  destaque: boolean;

}

Não criar backend agora.

Utilizar dados mockados inicialmente, mas separar claramente os dados da interface para facilitar a substituição futura por chamadas HTTP à API.

SEO

Implementar:

títulos adequados;

meta descriptions;

Open Graph;

URLs amigáveis;

textos semânticos;

headings organizados;

alt text nas imagens;

boa acessibilidade.

Criar identidade textual voltada para pesquisas relacionadas a:

marcenaria, móveis planejados, móveis sob medida, marcenaria em Canindé, móveis planejados no Ceará.

PERFORMANCE

Priorizar:

carregamento rápido;

lazy loading de imagens;

imagens responsivas;

animações otimizadas;

baixo uso de JavaScript desnecessário.

IMPORTANTE

Não criar uma landing page genérica de template.

O resultado deve parecer o site oficial de uma marcenaria brasileira premium, com forte presença visual de madeira, móveis planejados, arquitetura e interiores.

O design deve transmitir:

sofisticação + confiança + qualidade + exclusividade + personalidade.

A experiência deve fazer o visitante pensar:

“Quero fazer meu projeto com a Marcenaria São Mateus.”

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sm-crafted-visions.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/98e6565b-1ba5-4f9f-b64e-7b21858ef26a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
