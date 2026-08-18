import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Clapperboard, HandHeart, Handshake, Languages, Laptop, Music, Scissors, ShieldCheck, Sprout, Wrench } from "lucide-react";
import { categorias, habilidades, saldoCreditos } from "@/data/mock";
import { SkillCard } from "@/components/tempojusto/SkillCard";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TempoJusto — Seu tempo também tem valor" },
    { name: "description", content: "Banco comunitário de tempo: 1 hora de ajuda vale 1 Crédito-Hora. Ofereça uma habilidade, ajude alguém e use seu tempo quando precisar." },
  ] }),
  component: Home,
});

const iconesCategoria = { Laptop, Languages, Wrench, Scissors, Clapperboard, Sprout, Music } as const;
const passos = [
  { titulo: "Ofereça", texto: "Publique uma habilidade que você tem vontade de compartilhar." },
  { titulo: "Ajude", texto: "Combine o horário e dedique uma hora a quem precisa." },
  { titulo: "Ganhe", texto: "Depois da confirmação das duas pessoas, você recebe 1 Crédito-Hora." },
  { titulo: "Use", texto: "Peça ajuda com o que você precisa aprender ou resolver." },
];

function Home() {
  const destaques = habilidades.slice(0, 3);
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium"><HandHeart className="size-4" aria-hidden="true" />Banco comunitário de tempo</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">TempoJusto — Seu tempo também tem valor.</h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/90">Aqui as pessoas trocam horas de ajuda, não dinheiro. Você ensina o que sabe, recebe Créditos-Hora e usa quando precisar de apoio de alguém da sua comunidade.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/explorar" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-highlight px-6 text-base font-semibold text-highlight-foreground transition-transform hover:scale-[1.02]">Encontrar uma habilidade<ArrowRight className="size-5" aria-hidden="true" /></Link>
              <Link to="/oferecer" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-primary-foreground/70 px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">Oferecer meu tempo</Link>
            </div>
          </div>
          <div className="card-soft bg-card p-6 text-foreground">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Como o tempo circula</h2>
            <ol className="mt-4 space-y-3">
              {[
                { rotulo: "1h ajudando alguém", detalhe: "Você compartilha uma habilidade" },
                { rotulo: "+1 Crédito-Hora", detalhe: "Registrado após a confirmação das duas pessoas" },
                { rotulo: "1h recebendo ajuda", detalhe: "Você usa o crédito com outra pessoa" },
              ].map((item, i) => (
                <li key={item.rotulo} className="flex items-start gap-3 rounded-xl bg-surface-warm p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <span><span className="block font-semibold">{item.rotulo}</span><span className="block text-sm text-muted-foreground">{item.detalhe}</span></span>
                </li>
              ))}
            </ol>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />Créditos-Hora só circulam entre pessoas diferentes e não podem ser comprados nem vendidos.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="painel" className="mx-auto w-full max-w-6xl px-4 py-10">
        <h2 id="painel" className="sr-only">Seu painel</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card-soft flex flex-col justify-between gap-3 p-5">
            <p className="text-sm font-medium text-muted-foreground">Seu tempo disponível</p>
            <p className="flex items-baseline gap-2"><span className="font-display text-4xl font-bold text-primary">{saldoCreditos}h</span><span className="text-sm text-muted-foreground">Créditos-Hora</span></p>
            <Link to="/carteira" className="text-sm font-semibold text-accent underline underline-offset-4">Ver carteira de tempo</Link>
          </div>
          <Link to="/explorar" className="card-soft flex flex-col gap-2 p-5 transition-shadow hover:shadow-[var(--shadow-lift)]"><Handshake className="size-6 text-accent" aria-hidden="true" /><span className="text-lg font-semibold">Encontrar ajuda</span><span className="text-sm text-muted-foreground">Veja quem tem tempo para ajudar perto de você.</span></Link>
          <Link to="/oferecer" className="card-soft flex flex-col gap-2 p-5 transition-shadow hover:shadow-[var(--shadow-lift)]"><Clock className="size-6 text-accent" aria-hidden="true" /><span className="text-lg font-semibold">Oferecer uma habilidade</span><span className="text-sm text-muted-foreground">Publique em quatro passos simples.</span></Link>
        </div>
      </section>

      <section aria-labelledby="como-funciona" className="bg-card py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 id="como-funciona" className="text-3xl font-bold">Como funciona</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Quatro passos, sempre entre pessoas diferentes. Uma hora vale uma hora, seja qual for a habilidade.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, i) => <li key={passo.titulo} className="card-soft p-5"><span className="flex size-9 items-center justify-center rounded-full bg-secondary font-bold text-primary">{i + 1}</span><h3 className="mt-3 text-lg font-semibold">{passo.titulo}</h3><p className="mt-1 text-sm text-muted-foreground">{passo.texto}</p></li>)}
          </ol>
        </div>
      </section>

      <section aria-labelledby="categorias" className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 id="categorias" className="text-3xl font-bold">Categorias da comunidade</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((categoria) => {
            const Icone = iconesCategoria[categoria.icone as keyof typeof iconesCategoria];
            return <li key={categoria.id}><Link to="/explorar" search={{ categoria: categoria.id }} className="card-soft flex min-h-24 items-start gap-3 p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"><Icone className="size-6 shrink-0 text-accent" aria-hidden="true" /><span><span className="block font-semibold">{categoria.nome}</span><span className="block text-sm text-muted-foreground">{categoria.descricao}</span></span></Link></li>;
          })}
        </ul>
      </section>

      <section aria-labelledby="destaques" className="bg-card py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><h2 id="destaques" className="text-3xl font-bold">Habilidades disponíveis agora</h2><p className="mt-2 text-muted-foreground">Pessoas com uma hora livre nos próximos dias.</p></div><Link to="/explorar" className="font-semibold text-accent underline underline-offset-4">Ver todas as habilidades</Link></div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{destaques.map((habilidade) => <li key={habilidade.id} className="relative"><SkillCard habilidade={habilidade} /></li>)}</ul>
        </div>
      </section>
    </>
  );
}
