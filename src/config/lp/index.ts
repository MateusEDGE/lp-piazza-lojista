/**
 * A landing de lojista do empreendimento, e como se chega nela.
 *
 * Este projeto recebe tráfego pago de um público só, num domínio só, então as
 * rotas são curtas: o anúncio aponta para o domínio e pronto.
 *
 *   /                     a página de hubs, que o anúncio recebe
 *   /<hub>                a landing de cada vocação
 *
 * A copy abaixo é a mesma que roda em nexamalls.com.br, copiada de
 * `src/config/lps-piazza/` por `scripts/gerar-lp.mjs`. Os números dela
 * não estão escritos aqui: vêm do Keystatic, do cadastro do empreendimento, do
 * mesmo jeito que no site.
 */

import type { MontarPublico } from "@/components/lp-trafego/types";
import { saude } from "./saude";
import { servicos } from "./servicos";
import { gastronomia } from "./gastronomia";

/** O empreendimento desta landing, como o CMS o conhece. */
export const SLUG = "piazza-nicomedes";

/**
 * A página deste empreendimento no site institucional.
 *
 * É o único link para fora que a landing oferece, no rodapé, e existe porque
 * quem vai responder a um anúncio de imóvel comercial pesquisa a empresa antes.
 * Vale como sinal de confiança para o visitante e para as plataformas de
 * anúncio, que penalizam página sem dono identificável.
 */
export const PAGINA_NO_SITE = `${
  process.env.NEXT_PUBLIC_SITE_NEXA ?? "https://nexamalls.com.br"
}/empreendimentos/${SLUG}`;

/**
 * Um hub: uma vocação do empreendimento, com a página que fala com ela.
 *
 * O card na página de hubs sai daqui, e `montar` é a copy da landing daquela
 * vocação, escrita sobre os dados que o CMS devolve do ativo.
 */
export type HubLojista = {
  slug: string;
  /** em que andar este hub fica, como aparece no card */
  pavimento: string;
  categoria: string;
  /** a razão de clicar, em uma linha */
  chamada: string;
  /** legenda da foto da galeria do CMS que ilustra o card */
  legendaFoto: string;
  /**
   * Arte própria do hub, que ganha da galeria do CMS quando existe.
   *
   * A galeria é do empreendimento inteiro, e serve enquanto os hubs são
   * recortes do mesmo prédio (é o caso do Piazza, onde cada pavimento tem a sua
   * foto). Quando o hub é um conceito e não um pedaço do imóvel, como no hub de
   * serviços do Uberlândia Shopping, todos os cards acabavam com a mesma foto
   * da fachada do shopping. Aqui entra a fachada desenhada para cada segmento.
   */
  imagem?: string;
  montar: MontarPublico;
};

/**
 * Os três hubs, na mesma ordem da seção de hubs da página do empreendimento:
 * do pavimento mais alto para o mais baixo.
 */
export const HUBS: readonly HubLojista[] = [
  {
    slug: "saude",
    pavimento: "Primeiro Pavimento",
    categoria: "Saúde e bem-estar",
    chamada:
      "Clínicas, consultórios e studios, num andar inteiro dedicado a saúde e bem-estar.",
    legendaFoto: "Galeria de acesso",
    montar: saude,
  },
  {
    slug: "servicos",
    pavimento: "Térreo",
    categoria: "Serviços",
    chamada:
      "Operações de conveniência e serviço, que trazem o mesmo cliente toda semana.",
    legendaFoto: "Lojas no térreo",
    montar: servicos,
  },
  {
    slug: "gastronomia",
    pavimento: "Semi-enterrado",
    categoria: "Gastronomia",
    chamada:
      "Restaurantes e cafés na praça ativa, com fluxo à noite e no fim de semana.",
    legendaFoto: "Praça de alimentação",
    montar: gastronomia,
  },
];

/** O hub de um caminho da URL, ou nulo quando o caminho não é de nenhum. */
export function hubDe(slug: string): HubLojista | null {
  return HUBS.find((h) => h.slug === slug) ?? null;
}

/**
 * A landing do investidor deste ativo, que mora em outro domínio.
 *
 * Dentro do site as duas portas eram vizinhas e o link entre elas era relativo.
 * Separadas em dois projetos, o caminho relativo apontaria para uma rota que
 * não existe aqui. Vazia, a variável esconde o convite: a página de hubs
 * prefere não oferecer a saída a oferecer uma porta fechada.
 */
export const URL_INVESTIDOR = process.env.NEXT_PUBLIC_URL_INVESTIDOR ?? "";
