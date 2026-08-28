import { depoimentosMock, processoEtapas, projetosMock } from "@/data/projetos";
import type { Depoimento, EtapaProcesso, Projeto } from "@/models/projeto";

/**
 * Camada de acesso a dados.
 *
 * Hoje devolve dados mockados. Para integrar com a Marcenaria API
 * (Spring Boot), basta trocar o corpo destas funções por chamadas HTTP,
 * por exemplo:
 *
 *   const res = await fetch(`${API_BASE_URL}/projetos`);
 *   return (await res.json()) as Projeto[];
 *
 * A interface pública (assinatura das funções) permanece a mesma, então
 * nenhum componente precisa ser alterado.
 */

export const API_BASE_URL = "/api"; // futura base da Marcenaria API

export async function listarProjetos(): Promise<Projeto[]> {
  return projetosMock;
}

export async function listarProjetosDestaque(): Promise<Projeto[]> {
  return projetosMock.filter((p) => p.destaque);
}

export async function obterProjeto(id: string): Promise<Projeto | undefined> {
  return projetosMock.find((p) => p.id === id);
}

export async function listarDepoimentos(): Promise<Depoimento[]> {
  return depoimentosMock;
}

export async function listarEtapasProcesso(): Promise<EtapaProcesso[]> {
  return processoEtapas;
}

export const projetosQueryOptions = {
  queryKey: ["projetos"] as const,
  queryFn: listarProjetos,
};
