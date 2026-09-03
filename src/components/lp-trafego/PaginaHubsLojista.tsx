import Image from "next/image";
import Link from "next/link";
import { CoverImage } from "@/components/lp/heroes/CoverImage";
import { LpThemeProvider } from "@/components/lp/LpThemeProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { NexaBackdrop } from "@/components/ui/NexaBackdrop";
import { PinIcon } from "@/components/ui/PinIcon";
import { SectionShell } from "@/components/ui/SectionShell";
import { SeloIlustrativo } from "@/components/ui/SeloIlustrativo";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { foto } from "@/config/lp/comum";
import { URL_INVESTIDOR, type HubLojista } from "@/config/lp";
import { ProvasHero } from "./ProvasHero";
import type { AtivoLp } from "./types";
import { altFoto } from "@/lib/empreendimentos";

/**
 * A porta do lojista: os três hubs, e uma página para cada um.
 *
 * Existe porque "abrir uma operação" quer dizer coisas diferentes para um
 * restaurante, uma ótica e uma clínica. Mandar os três para a mesma landing
 * obrigaria a copy a falar com todo mundo, que é o mesmo que não falar com
 * ninguém. Aqui a pessoa se identifica em um card e cai numa página escrita
 * para ela.
 *
 * A página é curta de propósito: ela não argumenta, ela encaminha. Todo o
 * argumento está do outro lado do clique.
 */
export function PaginaHubsLojista({
  ativo,
  hubs,
}: {
  ativo: AtivoLp;
  hubs: readonly HubLojista[];
}) {
  /* Sem `base`: neste projeto o domínio é do empreendimento, e o caminho
     de cada hub tem um nível só. No site ele é
     `/empreendimentos/<ativo>/lojista/<hub>`. */

  /**
   * O rótulo e a frase contam quantos hubs existem, em vez de dizer "três".
   *
   * O Piazza tem três, e são três andares; o Uberlândia Shopping tem cinco, e
   * todos no mesmo piso. Um número escrito à mão aqui vira mentira no segundo
   * empreendimento, e "pavimento" vira mentira junto.
   */
  const CARDINAL: Record<number, string> = {
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
  };
  const porExtenso = CARDINAL[hubs.length] ?? String(hubs.length);
  const rotuloHubs = `Os ${porExtenso} hubs`;
  const fraseHubs = `São ${porExtenso} vocações diferentes, e cada uma recebe um tipo de operação.`;

  return (
    <LpThemeProvider accent={ativo.accent}>
      {/* `--corte` é a altura da diagonal que separa o herói da seção
          seguinte. Vive aqui porque os dois precisam dela: uma para se
          recortar, o outro para tirar o selo de baixo do corte. */}
      <main className="relative isolate bg-nexa-deep [--corte:clamp(2rem,5vw,5.5rem)]">
        <NexaBackdrop estatico />

        {/* O mesmo hero das landings: tela cheia, capa homogênea e os números
            em cards soltos à direita. Ver HeroLpTrafego — as duas telas são a
            primeira coisa que o tráfego pago vê, e precisam ser a mesma coisa. */}
        <section className="relative isolate overflow-hidden bg-nexa-ink text-white">
          <CoverImage src={foto(ativo, "Fachada e mix de lojas")} />
          {/* Junto da linha, do lado em que a foto sobra. A folga de 1rem
              é o que impede a diagonal de comer a base do texto: o selo tem
              cerca de 190px de largura, e nesse trecho a linha já subiu
              alguns pixels. */}
          <SeloIlustrativo className="bottom-4 left-4 right-auto md:bottom-4 md:right-auto" />

          <div className="container-wide relative z-[2] flex min-h-svh flex-col justify-center pb-20 pt-32 md:pb-24 md:pt-36">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
              <div className="max-w-2xl">
                <Reveal delay={0.06}>
                  <h1 className="heading-nexa text-[clamp(2rem,5.2vw,3.6rem)]">
                    Abra a sua operação no{" "}
                    <span className="text-lp-accent">{ativo.nome}</span>.
                  </h1>
                </Reveal>
                <Reveal delay={0.18}>
                  <p className="mt-6 flex items-start gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    <PinIcon className="mt-0.5 size-4 shrink-0 text-lp-accent" />
                    {ativo.endereco}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.26} className="lg:shrink-0">
                <ProvasHero
                  provas={[
                    { valor: ativo.vagas, label: "vagas de estacionamento" },
                    { valor: ativo.operacoes, label: "operações no mix" },
                    { valor: ativo.construcao, label: "de área construída" },
                    {
                      valor: ativo.comercializado,
                      label: "de ancoragem antes da obra",
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CORTE DIAGONAL entre o herói e esta seção.
            Quem desenha a diagonal é a própria seção, recortada: ela sobe por
            cima do herói e tem o canto superior direito removido, então o que
            aparece na fatia é a foto do herói de verdade. A alternativa seria
            desenhar um triângulo claro sobre o herói, mas aí a cor do triângulo
            teria de imitar o fundo desta seção — que é degradê com brilhos, não
            cor chapada — e a emenda apareceria.

            O ângulo é raso de propósito. A diagonal de 45° da marca é a da
            treliça, que vive dentro da seção; repetida na largura da tela ela
            teria mais de mil pixels de altura. O que se herda aqui é a direção.

            São dois cortes, e os dois saem desta mesma seção: o de cima desce
            da direita para a esquerda (por isso a foto do herói sobra à
            esquerda, e o selo de imagem ilustrativa foi para lá), e o de baixo
            desce da esquerda para a direita, em espelho. O de baixo não podia
            vir da seção seguinte: ela é transparente, e quem pinta o escuro é o
            fundo fixo da página — não haveria o que recortar. Recortando o
            rodapé desta, o escuro aparece por baixo e a emenda é perfeita,
            porque é o mesmo fundo que a seção de baixo mostra.

            A cunha de baixo cai sobre a folga do rodapé (4rem no celular, 6rem
            no desktop, contra 5,5rem de corte no máximo) e, do lado esquerdo,
            sobre espaço vazio: os cards ficam à direita, onde o corte é zero. */}
        <SectionShell
          tone="light"
          compacto
          className="mt-[calc(var(--corte)*-1)] [clip-path:polygon(0_var(--corte),100%_0,100%_100%,0_calc(100%-var(--corte)))]"
        >
          {/* Um respiro da altura do corte em cima e outro embaixo.
              O de cima devolve o espaço que a subida da seção consumiu. O de
              baixo existe para a composição ficar simétrica: sem ele o conteúdo
              parava a 8px da cunha inferior de um lado, enquanto sobravam 96px
              do outro. Com os dois, a folga até cada diagonal é a mesma nas duas
              pontas — 96px no lado fechado, 184px no aberto —, e o conteúdo fica
              centrado entre os cortes, que é o que eles existem para emoldurar. */}
          <div aria-hidden className="h-[var(--corte)]" />

          {/* Título à esquerda, hubs numa coluna à direita: o mesmo arranjo do
              herói, onde a promessa fica à esquerda e os números empilham ao
              lado. Os cards ficam menores porque, em coluna, o que interessa é
              comparar os três de relance, não contemplar cada foto. */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <p className="label-editorial text-lp-accent">
                  {rotuloHubs}
                </p>
                <h2 className="display-editorial mt-4 text-nexa-ink">
                  Qual é a vocação da sua operação?
                </h2>
                {/* O texto veio do herói: ele explica como escolher, e escolher
                    é o que se faz aqui, ao lado dos cards. No herói ele ficava
                    a uma tela de distância da decisão. */}
                <p className="mt-6 max-w-md text-[17px] leading-relaxed text-nexa-soft">
                  {fraseHubs} Escolha o hub da sua para ver as unidades
                  disponíveis, as condições desta fase e por que o endereço
                  funciona para o seu segmento.
                </p>
              </Reveal>
            </div>

            <ul className="space-y-3">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Reveal delay={0.08 + i * 0.08}>
                    <Tilt className="group/hub" grau={10} escala={1.02}>
                      <Link
                        href={`/${hub.slug}`}
                        className="flex flex-col overflow-hidden rounded-[var(--radius-brand)] border border-nexa-ink/8 bg-white shadow-[0_14px_36px_-26px_rgba(14,20,48,0.45)] transition-[border-color,box-shadow] duration-300 group-hover/hub:border-lp-accent group-hover/hub:shadow-[0_22px_48px_-22px_rgba(14,20,48,0.5)] motion-reduce:transition-none sm:flex-row"
                      >
                        <span className="relative block shrink-0 overflow-hidden sm:w-[12.5rem]">
                          <Image
                            src={hub.imagem || foto(ativo, hub.legendaFoto)}
                            alt={altFoto(ativo.nome, hub.categoria)}
                            width={600}
                            height={450}
                            sizes="(min-width: 640px) 200px, 100vw"
                            // As fachadas entram ampliadas, e não só
                            // reposicionadas. A caixa do card é mais larga que
                            // alta em relação à foto (255x170 contra 200x170
                            // depois de cobrir), então sobra corte na
                            // horizontal e **nenhum na vertical**: a altura
                            // inteira cabe, o letreiro fica do tamanho de um
                            // grão e ainda aparece piso, teto e as lojas
                            // vizinhas. Ampliar com a origem acima do centro é
                            // o que descarta essas bordas e deixa na caixa o
                            // que importa, que é o nome e a porta.
                            className={`aspect-[16/9] w-full object-cover transition-transform duration-500 motion-reduce:transition-none sm:aspect-auto sm:h-full ${
                              hub.imagem
                                ? "origin-[50%_34%] scale-[1.5] group-hover/hub:scale-[1.56] motion-reduce:group-hover/hub:scale-[1.5]"
                                : "group-hover/hub:scale-[1.04] motion-reduce:group-hover/hub:scale-100"
                            }`}
                          />
                          <SeloIlustrativo />
                        </span>

                        <span className="flex flex-1 flex-col p-5">
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexa-mist">
                            {hub.pavimento}
                          </span>
                          <span className="heading-nexa mt-1.5 text-[1.25rem] text-nexa-ink">
                            {hub.categoria}
                          </span>
                          <span className="mt-2 flex-1 text-[14px] leading-relaxed text-nexa-soft">
                            {hub.chamada}
                          </span>
                          <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-lp-accent">
                            Ver as unidades
                            <span
                              aria-hidden
                              className="transition-transform duration-300 group-hover/hub:translate-x-1 motion-reduce:transition-none"
                            >
                              →
                            </span>
                          </span>
                        </span>
                      </Link>
                    </Tilt>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden className="h-[var(--corte)]" />
        </SectionShell>

        {/* Sem o fio do topo: quem separa esta seção da anterior é a
            diagonal recortada no rodapé dela, e uma linha reta atravessando a
            cunha desmentia o corte. */}
        <SectionShell tone="none" compacto semFio>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="display-editorial text-white">
                Ainda em dúvida sobre o{" "}
                <span className="text-lp-accent">hub certo?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/80">
                Conte para o time o que você opera e receba a planta com as
                unidades ainda livres, a posição de cada uma e as condições desta
                fase. Sem custo e sem compromisso.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex justify-center">
                {/* Branco com texto azul: é o único botão desta seção, e sobre
                    o azul-noite do fundo o azul sólido quase não se destacava.
                    A variante é a mesma do herói das páginas de empreendimento. */}
                <WhatsAppCTA
                  numero={ativo.whatsappNumero}
                  mensagem={`Olá! Vim pela página do ${ativo.nome} e quero abrir uma operação. Podem me ajudar a entender qual hub faz sentido?`}
                  variant="knock"
                  tamanho="grande"
                >
                  Falar com o time
                </WhatsAppCTA>
              </div>
            </Reveal>
            {/* O convite para a landing do investidor só aparece quando
                existe uma: dentro do site as duas portas eram vizinhas e o
                link era relativo, mas nem todo empreendimento tem a segunda.
                Villa Viseu e Uberlândia Shopping operam cheios, e o que se
                comercializa neles é locação de unidade, não cota. Oferecer a
                porta ali levava a um 404. */}
            {URL_INVESTIDOR ? (
              <Reveal delay={0.24}>
                <p className="mt-8 text-[15px] text-white/60">
                  Você quer investir, e não operar?{" "}
                  {/* Outro domínio, então aba nova: quem veio para operar não
                      perde a página que estava lendo. */}
                  <a
                    href={URL_INVESTIDOR}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lp-accent underline-offset-4 hover:underline"
                  >
                    Veja a página do investidor
                  </a>
                  .
                </p>
              </Reveal>
            ) : null}
          </div>
        </SectionShell>
      </main>
    </LpThemeProvider>
  );
}
