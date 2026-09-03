import type { Metadata } from "next";
import { PaginaHubsLojista } from "@/components/lp-trafego/PaginaHubsLojista";
import { HUBS } from "@/config/lp";
import { ativoDaLanding } from "@/lib/landing";

/**
 * A página de hubs, na raiz do domínio.
 *
 * É ela que o anúncio de lojista recebe. "Abrir uma operação" quer dizer coisas
 * diferentes para um restaurante, uma ótica e uma clínica, e mandar os três
 * para a mesma landing obrigaria a copy a falar com todo mundo, que é o mesmo
 * que não falar com ninguém. Aqui a pessoa se identifica em um card e cai numa
 * página escrita para ela.
 *
 * A página é curta de propósito: ela não argumenta, ela encaminha. Todo o
 * argumento está do outro lado do clique.
 */

/** O número por extenso, para a descrição não afirmar "três" onde são cinco. */
const CARDINAL: Record<number, string> = {
  2: "Duas",
  3: "Três",
  4: "Quatro",
  5: "Cinco",
  6: "Seis",
};

export async function generateMetadata(): Promise<Metadata> {
  const ativo = await ativoDaLanding();
  const vocacoes = HUBS.map((h) => h.categoria.toLowerCase());
  const lista =
    vocacoes.length > 1
      ? `${vocacoes.slice(0, -1).join(", ")} e ${vocacoes.at(-1)}`
      : vocacoes[0];
  const titulo = `Abra a sua operação no ${ativo.nome} | Nexa Malls`;
  const descricao = `${
    CARDINAL[HUBS.length] ?? HUBS.length
  } vocações no mesmo endereço: ${lista}. Escolha o hub da sua operação e veja as unidades disponíveis no ${ativo.nome}, em ${ativo.cidade}.`;

  return {
    title: titulo,
    description: descricao,
    openGraph: {
      title: titulo,
      description: descricao,
      images: [
        {
          url: ativo.galeria[0]?.src ?? "/brand/og-default.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page() {
  const ativo = await ativoDaLanding();
  return <PaginaHubsLojista ativo={ativo} hubs={HUBS} />;
}
