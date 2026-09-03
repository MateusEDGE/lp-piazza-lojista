import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarraFixa } from "@/components/layout/BarraFixa";
import { PaginaLpTrafego } from "@/components/lp-trafego/PaginaLpTrafego";
import { HUBS, LP_ID, hubDe } from "@/config/lp";
import { ativoDaLanding } from "@/lib/landing";

/**
 * A landing de um hub.
 *
 * Uma rota de um nível só, porque o domínio inteiro é deste empreendimento e
 * deste público: `/gastronomia` em vez de
 * `/empreendimentos/<ativo>/lojista/gastronomia`. O anúncio de cada vocação
 * aponta direto para a sua, e a página de hubs continua sendo a porta de quem
 * chega sem saber qual procura.
 */
export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

// Fora dos hubs cadastrados não existe página nenhuma, e é melhor 404 do que
// uma landing montada com copy vazia.
export const dynamicParams = false;

type Props = { params: Promise<{ hub: string }> };

async function carregar(hub: string) {
  const definicao = hubDe(hub);
  if (!definicao) return null;
  const ativo = await ativoDaLanding();
  return { ativo, publico: definicao.montar(ativo) };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hub } = await params;
  const dados = await carregar(hub);
  if (!dados) return {};
  const { publico } = dados;
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

export default async function Page({ params }: Props) {
  const { hub } = await params;
  const dados = await carregar(hub);
  if (!dados) notFound();
  const { ativo, publico } = dados;

  return (
    <>
      <PaginaLpTrafego ativo={ativo} publico={publico} lpOrigem={LP_ID} />
      <BarraFixa
        whatsappNumero={ativo.whatsappNumero}
        whatsappMensagem={publico.whatsapp}
        rotuloForm="Ver unidades"
      />
    </>
  );
}
