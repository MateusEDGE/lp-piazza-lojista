import type { MontarPublico } from "@/components/lp-trafego/types";
import { FAQ_COMO_RESERVAR, FAQ_QUEM_ESTA_ATRAS, foto } from "./comum";

/**
 * A copy da landing de saúde e bem-estar.
 *
 * Todo o texto da página está aqui: headline, dor, argumentos, ficha, dúvidas,
 * formulário e fechamento. Dá para reescrever uma headline e subir de novo sem
 * abrir componente nenhum, que é o ritmo de quem otimiza campanha. Os números
 * do ativo chegam pelo parâmetro `a`, lido do CMS.
 *
 * Revisão de 18/08/2026 (documento escrito sobre a LP de gastronomia e
 * replicado aqui): a voz ficou mais institucional e o pavimento mais alto
 * (hoje Primeiro Pavimento) passou a ser "Saúde e bem-estar".
 *
 * Revisão de 19/08/2026 (documento próprio desta página): o hero e o bloco de
 * dor ganharam texto escrito para esta página, no lugar do que veio replicado
 * de gastronomia, e o fechamento encurtou para uma linha. Atenção: a headline
 * afirma "o melhor endereço de Uberlândia", superlativo absoluto que o
 * documento de 18/08 tinha justamente pedido para remover da página de
 * gastronomia. As duas vieram aprovadas assim, e a mais recente prevalece aqui.
 */
export const saude: MontarPublico = (a) => ({
  slug: "saude",
  rotulo: "Para clínicas, consultórios e bem-estar",
  hero: {
    titulo: "Sua clínica no",
    acento: "melhor endereço de Uberlândia",
    subtitulo: `O ${a.nome} reúne mais de 30 operações sendo um dos pavimentos dedicado à saúde e ao bem-estar. Metade do empreendimento foi comercializada antes de a obra começar.`,
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
    rotulo: "A conta que ninguém faz",
    titulo: "Um bom atendimento começa antes da consulta.",
    paragrafos: [
      "A experiência do paciente começa no acesso, no estacionamento e na facilidade de chegar.",
      "Quanto menos atrito no caminho, melhor a experiência, e maior a chance de retorno.",
    ],
    virada: "No Piazza, conveniência também faz parte do atendimento.",
  },
  beneficios: {
    rotulo: "Por que funciona para saúde e bem-estar",
    titulo: "O endereço trabalhando a favor da sua agenda",
    itens: [
      {
        dado: `${a.vagas} vagas`,
        titulo: "Conforto e facilidade para o cliente.",
        texto: `Chegar, estacionar e acessar a operação com facilidade também faz parte da experiência. O Piazza conta com ${a.vagas} vagas de estacionamento, trazendo mais comodidade para quem visita, retira pedidos ou utiliza os serviços do empreendimento. Mais facilidade para chegar. Mais motivos para ficar.`,
      },
      {
        dado: "Fluxo do hub",
        titulo: "Fluxo que já vinha por outro motivo",
        texto:
          "A pessoa vem resolver, comprar ou comer e passa pela sua fachada. Um hub de conveniência entrega, todos os dias, a exposição que uma sala em edifício comercial nunca dá.",
      },
      {
        dado: "Primeiro Pavimento",
        titulo: "Vizinhança que encaminha paciente",
        texto:
          "Saúde e bem-estar ocupam um pavimento inteiro do Piazza. Segmentos que se complementam, e não se repetem, geram indicação cruzada dentro do mesmo endereço.",
      },
      {
        dado: "Mix curado",
        titulo: "Mix curado e complementar",
        texto:
          "A Nexa encontra o mix por vocação, não por ordem de chegada. Cada segmento tem um número definido de operações.",
      },
      {
        dado: "Av. Nicomedes Alves dos Santos",
        titulo: "Um endereço que trabalha pela sua marca",
        texto:
          "Um dos corredores mais nobres de Uberlândia entra no seu material, no seu perfil de buscas e na primeira impressão de todo paciente novo.",
      },
      {
        dado: "Fase de comercialização",
        titulo: "Você chega primeiro",
        texto:
          "Quem entra agora tem uma série de benefícios que podem potencializar o seu negócio como: metragem, posição e outros.",
      },
    ],
  },
  pavimentos: [
    {
      pavimento: "Primeiro Pavimento",
      categoria: "Saúde e bem-estar",
      detalhe: "Clínicas, consultórios e studios: o andar da sua operação",
      destaque: true,
    },
    {
      pavimento: "Térreo",
      categoria: "Serviços",
      detalhe: "Operações do dia a dia, gerando fluxo no horário comercial",
      destaque: false,
    },
    {
      pavimento: "Semi-enterrado",
      categoria: "Gastronomia",
      detalhe: "Praça ativa: movimento no almoço, à noite e no fim de semana",
      destaque: false,
    },
  ],
  imagemPavimentos: foto(a, "Fachada e mix de lojas"),
  ficha: {
    titulo: "O ativo em números",
    itens: [
      { label: "Terreno", valor: a.terreno },
      { label: "Área construída", valor: a.construcao },
      { label: "Operações comerciais", valor: a.operacoes },
      { label: "Vagas", valor: a.vagas },
      { label: "Ancoragem antes da obra", valor: a.comercializado },
      { label: "Saúde e bem-estar", valor: "Primeiro Pavimento" },
      { label: "Status", valor: "Em comercialização" },
      { label: "Endereço", valor: a.enderecoCurto },
    ],
  },
  faq: {
    titulo: "Perguntas frequentes",
    itens: [
      {
        pergunta: "Quais metragens estão disponíveis?",
        resposta:
          "As unidades têm metragens diferentes e a disponibilidade muda de semana para semana, porque metade do empreendimento já foi comercializada. O time envia a planta com as unidades livres e as metragens exatas no mesmo dia do seu contato.",
      },
      {
        pergunta: "Dá para adaptar a unidade para consultório?",
        resposta:
          "É exatamente a vantagem de entrar antes da obra. Layout, instalações e acabamento da sua unidade são tratados com o time técnico durante a comercialização, e não como reforma depois da entrega. Traga o seu programa de necessidades para a conversa.",
      },
      {
        pergunta: "Qual a diferença para um edifício médico?",
        resposta:
          "Edifício médico depende da própria saúde para gerar movimento: fora do horário de consulta, esvazia. Um hub de conveniência tem fluxo próprio o dia inteiro, gerado por gastronomia, serviços e bem-estar, e a sua fachada fica exposta a esse fluxo todos os dias.",
      },
      {
        pergunta: "O meu segmento já está ocupado?",
        resposta:
          "O mix tem número definido de operações por segmento, justamente para não colocar dois concorrentes diretos lado a lado. Informe a sua especialidade no formulário e você recebe a resposta direta: livre, em negociação ou encerrada.",
      },
      FAQ_QUEM_ESTA_ATRAS,
      FAQ_COMO_RESERVAR,
    ],
  },
  form: {
    titulo: "Receba a planta com as unidades livres",
    texto: "Entenda como o seu negócio pode fazer parte do Piazza.",
    campo: {
      label: "Qual o nome do seu negócio?",
      rotuloLead: "Negócio",
      placeholder: "Como a sua clínica se chama",
    },
    botao: "Quero as unidades disponíveis",
  },
  fechamento: {
    titulo: "Grande parte do Piazza já foi",
    acento: "comercializado.",
    texto: "Garanta o seu espaço!",
    cta: "Falar com o time agora",
  },
  whatsapp: `Olá! Vim pela página do ${a.nome} e quero abrir uma operação de saúde e bem-estar. Podem me enviar as unidades disponíveis?`,
  seo: {
    title: "Sala para clínica em Uberlândia | Piazza Nicomedes",
    description:
      "Pavimento de saúde e bem-estar com 134 vagas na Av. Nicomedes Alves dos Santos. Mix curado e 50% de ancoragem antes da obra. Veja as unidades disponíveis.",
  },
});
