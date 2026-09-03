import { waLink } from "./whatsapp";

/**
 * Lead das landing pages de tráfego pago.
 *
 * O ponto único de integração com o CRM é `registrarLead`. Enquanto a
 * integração não existe, o formulário entrega o lead qualificado no WhatsApp do
 * comercial — a página converte desde o primeiro dia e nada fica pendurado
 * esperando back-end. Quando o CRM entrar, basta preencher a função: o
 * formulário não muda, e a entrega no WhatsApp pode continuar como redundância
 * ou sair, conforme o time preferir.
 */
export type Lead = {
  nome: string;
  telefone: string;
  email: string;
  /** resposta do campo que qualifica o público (nome do negócio, perfil de investidor) */
  qualificacao: string;
  /** como essa resposta é anunciada ao comercial: "Negócio", "Perfil" */
  qualificacaoLabel: string;
  /** qual das landing pages originou o lead */
  publico: string;
  empreendimento: string;
  /** parâmetros de campanha capturados da URL do anúncio */
  origem: Origem;
};

export type Origem = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  /** identificador do clique no Google Ads */
  gclid?: string;
  /** identificador do clique no Meta Ads */
  fbclid?: string;
  /** página em que o lead foi preenchido */
  pagina?: string;
};

const CHAVES_ORIGEM = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

/**
 * Lê os parâmetros de campanha da URL.
 *
 * O anúncio traz a marcação na query string; ela é lida no envio e viaja junto
 * do lead, para a atribuição já estar pronta no dia em que o CRM entrar. Roda
 * só no cliente — no servidor devolve objeto vazio.
 */
export function capturarOrigem(): Origem {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const origem: Origem = { pagina: window.location.pathname };
  for (const chave of CHAVES_ORIGEM) {
    const valor = params.get(chave);
    if (valor) origem[chave] = valor;
  }
  return origem;
}

/**
 * Mensagem que o lead envia ao comercial, já qualificada.
 *
 * O texto é escrito na primeira pessoa porque quem aparece enviando é o próprio
 * lead. A linha de campanha só entra quando há marcação na URL, e serve para o
 * comercial saber de qual anúncio a pessoa veio antes de responder.
 */
export function montarMensagemLead(lead: Lead): string {
  const linhas = [
    `Olá! Vim pelo site da Nexa Malls e quero falar com o time sobre o ${lead.empreendimento}.`,
    "",
    `Nome: ${lead.nome}`,
    `Telefone: ${lead.telefone}`,
  ];
  if (lead.email) linhas.push(`E-mail: ${lead.email}`);
  if (lead.qualificacao)
    linhas.push(`${lead.qualificacaoLabel}: ${lead.qualificacao}`);
  if (lead.origem.utm_campaign) {
    linhas.push("", `(campanha: ${lead.origem.utm_campaign})`);
  }
  return linhas.join("\n");
}

/** Link do WhatsApp já com o lead qualificado dentro da mensagem. */
export function linkLead(lead: Lead, whatsappNumero: string): string {
  return waLink(whatsappNumero, montarMensagemLead(lead));
}

/**
 * Ponto único de integração com o CRM. Hoje não faz nada.
 *
 * Para ligar: troque o corpo por um `fetch` para uma route handler em
 * `src/app/api/`, que é quem deve falar com o CRM — assim a credencial fica no
 * servidor e não vai para o navegador. O objeto `Lead` já carrega nome,
 * telefone, e-mail, a qualificação do público de origem e a marcação de
 * campanha: é o payload completo, não falta nada a coletar.
 *
 * Chamada sem `await` pelo formulário, de propósito. O envio do lead nunca pode
 * esperar rede: a janela do WhatsApp abre no mesmo gesto do clique (se abrisse
 * depois de um `await`, o bloqueador de pop-up do navegador a barraria) e o
 * registro corre por fora. Falha de CRM fica no console — perder o registro é
 * ruim, perder o lead é pior.
 */
export function registrarLead(lead: Lead): void {
  void lead;
}
