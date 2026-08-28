/**
 * Contratos de dados preparados para a futura integração com a
 * Marcenaria API (Spring Boot). Hoje as implementações usam dados
 * mockados, mas a interface consumida pela UI já é esta.
 */

export type CategoriaProjeto =
  | "Cozinhas"
  | "Quartos"
  | "Painéis"
  | "Home Office"
  | "Salas"
  | "Comerciais";

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  localizacao?: string;
  imagemPrincipal: string;
  imagens: string[];
  materiais?: string[];
  iluminacao?: string;
  caracteristicas?: string[];
  destaque: boolean;
}

export interface Depoimento {
  id: string;
  nome: string;
  cidade: string;
  texto: string;
  projeto?: string;
}

export interface EtapaProcesso {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface Estatistica {
  valor: number;
  sufixo: string;
  rotulo: string;
}

export interface SolicitacaoOrcamento {
  nome: string;
  whatsapp: string;
  email: string;
  tipoProjeto: string;
  mensagem: string;
}
