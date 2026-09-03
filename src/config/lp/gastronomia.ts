import type { MontarPublico } from "@/components/lp-trafego/types";
import { FAQ_COMO_RESERVAR, FAQ_QUEM_ESTA_ATRAS, foto } from "./comum";

/**
 * A copy da landing de gastronomia.
 *
 * Revisão de 18/08/2026 (documento de alterações aprovado por Paulo): a voz da
 * página ficou mais institucional e menos confrontativa, e duas regras passaram
 * a valer para todo texto novo — nada de travessão, e nenhum superlativo
 * absoluto sobre o endereço ("um dos pontos mais disputados", não "o ponto mais
 * disputado").
 */
export const gastronomia: MontarPublico = (a) => ({
  slug: "gastronomia",
  rotulo: "Para operações gastronômicas",
  hero: {
    titulo: "Abra o seu restaurante em",
    acento: "um dos pontos mais disputados de Uberlândia",
    subtitulo: `O ${a.nome} reúne mais de 30 operações sendo um dos pavimentos dedicado à gastronomia. Metade do empreendimento foi comercializada antes de a obra começar.`,
    cta: "Ver as unidades disponíveis",
    // a mesma da seção de pavimentos, por pedido do cliente: o fundo do hero
    // segue o andar de que a página fala
    imagem: foto(a, "Praça de alimentação"),
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
      "Uma boa operação pode ter produto, marca, atendimento e público. Mas, quando está em um ponto que não acompanha essa qualidade, parte do seu potencial fica para trás.",
    ],
    virada: `O ${a.nome} nasce justamente dessa lógica: reunir localização estratégica, operações complementares e um público compatível com negócios que querem crescer.`,
  },
  beneficios: {
    rotulo: "Por que funciona para alimentação",
    titulo: "Um ponto desenhado para quem vive de fluxo",
    itens: [
      {
        dado: `${a.vagas} vagas`,
        titulo: "Conforto e facilidade para o cliente.",
        texto: `Chegar, estacionar e acessar a operação com facilidade também faz parte da experiência. O Piazza conta com ${a.vagas} vagas de estacionamento, trazendo mais comodidade para quem visita, retira pedidos ou utiliza os serviços do empreendimento. Mais facilidade para chegar. Mais motivos para ficar.`,
      },
      {
        dado: "Semi-enterrado",
        titulo: "Praça gastronômica, não loja solta",
        texto:
          "A praça do Piazza é o andar da alimentação: o cliente chega para comer e escolhe ali, na hora. Você divide um fluxo que já existe em vez de gastar mídia sozinho para trazer gente até a porta.",
      },
      {
        dado: `${a.operacoes} operações`,
        titulo: "Mix curado e complementar",
        texto:
          "A Nexa encontra o mix por vocação, não por ordem de chegada. Cada segmento tem um número definido de operações.",
      },
      {
        dado: "Serviços e saúde",
        titulo: "Fluxo que promove o seu negócio",
        texto:
          "Os pavimentos acima concentram serviços, saúde e bem-estar, que geram fluxo recorrente ao seu negócio.",
      },
      {
        dado: "Av. Nicomedes Alves dos Santos",
        titulo: "Endereço nobre, movimento o dia inteiro",
        texto:
          "Um dos corredores mais valorizados e movimentados de Uberlândia, com visibilidade de fachada para quem passa de carro todos os dias.",
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
      pavimento: "Semi-enterrado",
      categoria: "Gastronomia",
      detalhe: "Praça ativa, restaurantes e cafés: o andar da sua operação",
      destaque: true,
    },
    {
      pavimento: "Térreo",
      categoria: "Serviços",
      detalhe: "Operações do dia a dia que trazem o mesmo cliente toda semana",
      destaque: false,
    },
    {
      pavimento: "Primeiro Pavimento",
      categoria: "Saúde e bem-estar",
      detalhe:
        "Clínicas, consultórios e studios, com gente no prédio o dia todo",
      destaque: false,
    },
  ],
  imagemPavimentos: foto(a, "Praça de alimentação"),
  ficha: {
    titulo: "O ativo em números",
    itens: [
      { label: "Terreno", valor: a.terreno },
      { label: "Área construída", valor: a.construcao },
      { label: "Operações comerciais", valor: a.operacoes },
      { label: "Vagas", valor: a.vagas },
      { label: "Ancoragem antes da obra", valor: a.comercializado },
      { label: "Praça gastronômica", valor: "Semi-enterrado" },
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
          "As unidades do pavimento gastronômico têm metragens diferentes, e a disponibilidade muda de semana para semana, porque metade do empreendimento já foi comercializada. O time envia a planta com as unidades livres e as metragens exatas no mesmo dia do seu contato.",
      },
      {
        pergunta: "O meu segmento já está no mix?",
        resposta:
          "É a primeira coisa que verificamos. O mix do Piazza é montado por vocação, com número definido de operações por segmento: quando fecha, fecha. Informe o seu segmento no formulário e você recebe a resposta direta: livre, em negociação ou encerrado.",
      },
      {
        pergunta: "Por que aqui e não em um shopping?",
        resposta:
          "Em shopping você paga aluguel, condomínio e fundo de promoção, e ainda cumpre horário obrigatório todos os dias. Um hub de conveniência tem custo de ocupação menor, operação mais leve e cliente que estaciona e chega direto na sua porta, sem percorrer corredor.",
      },
      {
        pergunta: "Trabalho com franquia. Vocês atendem redes?",
        resposta:
          "Sim. A Nexa já entregou mais de 30 operações build to suit e tem no portfólio de marcas atendidas nomes como McDonald's, Madero, Burger King e Popeyes. Com franquia o processo costuma ser mais rápido, porque o padrão de implantação da rede já está definido.",
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
      placeholder: "Como o seu negócio se chama",
    },
    botao: "Quero as unidades disponíveis",
  },
  fechamento: {
    titulo: "Grande parte do Piazza já foi",
    acento: "comercializado.",
    texto:
      "As unidades de alimentação são as mais disputadas, por isso, entre em contato e garanta o seu espaço!",
    cta: "Falar com o time agora",
  },
  whatsapp: `Olá! Vim pela página do ${a.nome} e quero abrir uma operação de alimentação. Podem me enviar as unidades disponíveis?`,
  seo: {
    title: "Ponto para restaurante em Uberlândia | Piazza Nicomedes",
    description:
      "Praça gastronômica com 134 vagas e mais de 30 operações na Av. Nicomedes Alves dos Santos. 50% de ancoragem antes da obra. Veja as unidades disponíveis.",
  },
});
