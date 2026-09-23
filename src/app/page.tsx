import type { Metadata } from "next";
import { BarraFixa } from "@/components/layout/BarraFixa";
import { PaginaHubsLojista } from "@/components/lp-trafego/PaginaHubsLojista";
import { HUBS, LP_ID, PAGINA_LOJISTA } from "@/config/lp";
import { ativoDaLanding } from "@/lib/landing";

/**
 * A página de hubs, na raiz do domínio, como landing completa.
 *
 * É ela que o anúncio de lojista recebe. Quem já sabe a vocação clica no card
 * do hub e cai na página escrita para ela; quem ainda não sabe desce, encontra
 * os argumentos das três vocações e converte aqui, informando a vocação no
 * formulário. A copy é `PAGINA_LOJISTA`, a mesma que roda no site.
 */
async function carregar() {
  const ativo = await ativoDaLanding();
  return { ativo, publico: PAGINA_LOJISTA(ativo) };
}

export async function generateMetadata(): Promise<Metadata> {
  const { publico } = await carregar();
  return {
    title: publico.seo.title,
    description: publico.seo.description,
    openGraph: {
      title: publico.seo.title,
      description: publico.seo.description,
      images: [{ url: publico.hero.imagem, width: 1200, height: 630 }],
    },
  };
}

export default async function Page() {
  const { ativo, publico } = await carregar();
  return (
    <>
      <PaginaHubsLojista
        ativo={ativo}
        hubs={HUBS}
        publico={publico}
        lpOrigem={LP_ID}
      />
      <BarraFixa
        whatsappNumero={ativo.whatsappNumero}
        whatsappMensagem={publico.whatsapp}
        rotuloForm="Ver unidades"
      />
    </>
  );
}
