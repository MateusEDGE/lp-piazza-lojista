import type { MontarPublico } from "@/components/lp-trafego/types";
import { foto } from "./comum";

/**
 * A copy da página de lojista, que fala com as três vocações de uma vez.
 *
 * Até 23/09/2026 a página de lojista era só uma porta: três cards, um por hub,
 * e nada mais. Servia para quem já sabia o que procurava e falhava como destino
 * de anúncio: o Meta manda gente que ainda não se identificou com hub nenhum,
 * e essa pessoa não tinha argumento nem formulário sem dar mais um clique.
 * Pedido do Mateus: a página passa a ser uma landing completa, com o
 * encaminhamento para os hubs preservado logo depois do hero.
 *
 * A copy junta o que cada hub tem de mais forte, sem repetir a página de
 * nenhum deles: um card de benefício por pavimento e as dúvidas que valem para
 * qualquer operação. O que é específico de um hub (franquia, consultório,
 * horário) fica na página dele.
 *
 * **Tudo curto, de propósito** (revisão do Mateus em 23/09/2026: a página é
 * de captação e as copies estavam longas). Card de benefício é uma frase;
 * resposta de dúvida, no máximo duas. `dor` e `pavimentos` existem porque o
 * contrato pede, mas esta página não monta essas seções: os pavimentos são os
 * hubs, que os cards já mostram com foto.
 *
 * O campo que qualifica o lead aqui é a vocação, em lista fechada: é o que o
 * comercial precisa saber primeiro para escolher a planta que vai enviar, e é
 * o que a pessoa ainda não tinha dito ao chegar por esta página.
 */
export const lojista: MontarPublico = (a) => ({
  slug: "lojista",
  rotulo: "Para quem quer abrir uma operação",
  hero: {
    titulo: "Abra a sua operação no",
    acento: a.nome,
    subtitulo: `Gastronomia, serviços e saúde na Av. Nicomedes Alves dos Santos. Mais de 30 operações, ${a.vagas} vagas e metade do empreendimento já comercializada.`,
    cta: "Ver as unidades disponíveis",
    imagem: foto(a, "Fachada e mix de lojas"),
  },
  provas: [
    { valor: a.vagas, label: "vagas de estacionamento" },
    { valor: a.operacoes, label: "operações no mix" },
    { valor: a.construcao, label: "de área construída" },
    { valor: a.comercializado, label: "de ancoragem antes da obra" },
  ],
  dor: {
    rotulo: "O problema real",
    titulo: "Um grande negócio no endereço errado.",
    paragrafos: [
      "Produto, marca e atendimento não bastam quando o ponto não acompanha.",
    ],
    virada: `O ${a.nome} reúne localização, operações complementares e público compatível.`,
  },
  beneficios: {
    rotulo: "Por que abrir aqui",
    titulo: "Um endereço que trabalha pelo seu negócio",
    itens: [
      {
        dado: `${a.vagas} vagas`,
        titulo: "Fácil de chegar, fácil de voltar",
        texto: "Estacionamento próprio para quem visita, retira pedidos ou usa os serviços.",
      },
      {
        dado: "Semi-enterrado",
        titulo: "Gastronomia com praça ativa",
        texto: "Movimento no almoço, à noite e no fim de semana.",
      },
      {
        dado: "Térreo",
        titulo: "Serviços que trazem recorrência",
        texto: "O mesmo cliente passa pela sua fachada toda semana.",
      },
      {
        dado: "Primeiro Pavimento",
        titulo: "Um andar inteiro de saúde",
        texto: "Clínicas e consultórios que se complementam e indicam pacientes.",
      },
      {
        dado: `${a.operacoes} operações`,
        titulo: "Mix curado, sem concorrente ao lado",
        texto: "Número definido de operações por segmento.",
      },
      {
        dado: "Fase de comercialização",
        titulo: "Você escolhe primeiro",
        texto: "Metragem, posição e layout definidos antes da obra.",
      },
    ],
  },
  pavimentos: [
    {
      pavimento: "Primeiro Pavimento",
      categoria: "Saúde e bem-estar",
      detalhe: "Clínicas, consultórios e studios",
      destaque: false,
    },
    {
      pavimento: "Térreo",
      categoria: "Serviços",
      detalhe: "Operações do dia a dia da região",
      destaque: false,
    },
    {
      pavimento: "Semi-enterrado",
      categoria: "Gastronomia",
      detalhe: "Praça ativa, restaurantes e cafés",
      destaque: false,
    },
  ],
  imagemPavimentos: foto(a, "Lojas no térreo"),
  ficha: {
    titulo: "O ativo em números",
    itens: [
      { label: "Terreno", valor: a.terreno },
      { label: "Área construída", valor: a.construcao },
      { label: "Operações comerciais", valor: a.operacoes },
      { label: "Vagas", valor: a.vagas },
      { label: "Ancoragem antes da obra", valor: a.comercializado },
      { label: "Vocações", valor: "3 pavimentos" },
      { label: "Status", valor: "Em comercialização" },
      { label: "Endereço", valor: a.enderecoCurto },
    ],
  },
  faq: {
    titulo: "Perguntas frequentes",
    itens: [
      {
        pergunta: "Em qual pavimento fica o meu segmento?",
        resposta:
          "Gastronomia no semi-enterrado, serviços no térreo e saúde no primeiro pavimento. Informe a sua vocação no formulário e o time indica as unidades livres no andar certo.",
      },
      {
        pergunta: "Quais metragens estão disponíveis?",
        resposta:
          "Metragens variadas, e a disponibilidade muda toda semana. O time envia a planta com as unidades livres no mesmo dia.",
      },
      {
        pergunta: "O meu segmento já está no mix?",
        resposta:
          "Cada segmento tem número definido de operações, sem concorrentes diretos lado a lado. Informe o seu e receba a resposta: livre, em negociação ou encerrado.",
      },
      {
        pergunta: "Por que aqui e não em shopping ou ponto de rua?",
        resposta:
          "Custo de ocupação menor que o de shopping, horário definido por você e estacionamento próprio, com mais de 30 vizinhos gerando fluxo para a sua porta.",
      },
      {
        pergunta: "Dá para adaptar a unidade para a minha operação?",
        resposta:
          "Sim. Quem entra antes da obra define layout e instalações com o time técnico, sem reforma depois da entrega.",
      },
      {
        pergunta: "Quem está por trás do empreendimento?",
        resposta:
          "A Nexa Malls: 18 anos de experiência, 5 strip malls desenvolvidos e mais de 400 imóveis comerciais locados. No Piazza ela é a incorporadora e cuida da comercialização e da gestão.",
      },
      {
        pergunta: "Como funciona para reservar uma unidade?",
        resposta:
          "Você informa segmento e metragem, recebe a planta com as unidades livres e as condições, e formaliza a reserva. Sem custo e sem compromisso.",
      },
    ],
  },
  form: {
    titulo: "Receba a planta com as unidades livres",
    texto:
      "Diga a vocação da sua operação e receba a planta do pavimento certo, com as unidades livres e as condições desta fase.",
    campo: {
      label: "Qual é a vocação da sua operação?",
      rotuloLead: "Vocação",
      opcoes: ["Gastronomia", "Serviços", "Saúde e bem-estar", "Ainda não sei"],
    },
    botao: "Quero as unidades disponíveis",
  },
  fechamento: {
    titulo: "Grande parte do Piazza já foi",
    acento: "comercializado.",
    texto: "Cada segmento tem vagas limitadas no mix. Garanta o seu espaço!",
    cta: "Falar com o time agora",
  },
  whatsapp: `Olá! Vim pela página do ${a.nome} e quero abrir uma operação. Podem me enviar as unidades disponíveis?`,
  seo: {
    title: "Ponto comercial em Uberlândia | Piazza Nicomedes",
    description:
      "Gastronomia, serviços e saúde na Av. Nicomedes Alves dos Santos. Mais de 30 operações, 134 vagas e 50% de ancoragem antes da obra. Veja as unidades disponíveis.",
  },
});
