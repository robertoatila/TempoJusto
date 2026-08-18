import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownLeft, ArrowUpRight, Clock, Info } from "lucide-react";
import { movimentos, saldoCreditos } from "@/data/mock";

export const Route = createFileRoute("/carteira")({
  head: () => ({ meta: [{ title: "Carteira de tempo — TempoJusto" }] }),
  component: Carteira,
});

function Carteira() {
  const recebidas = movimentos.filter((m) => m.tipo === "recebido").length;
  const usadas = movimentos.filter((m) => m.tipo === "utilizado").length;
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <header><h1 className="text-3xl font-bold md:text-4xl">Carteira de tempo</h1><p className="mt-2 max-w-2xl text-muted-foreground">Aqui você acompanha as horas que ofereceu e as que recebeu da comunidade.</p></header>

      <section aria-labelledby="disponivel" className="card-soft mt-6 bg-[image:var(--gradient-hero)] p-6 text-primary-foreground">
        <h2 id="disponivel" className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">Seu tempo disponível</h2>
        <p className="mt-2 flex items-baseline gap-3"><span className="font-display text-5xl font-bold">{saldoCreditos}h</span><span className="text-lg">Créditos-Hora</span></p>
        <p className="mt-3 max-w-xl text-sm text-primary-foreground/90">Isso significa que você pode pedir {saldoCreditos} hora{saldoCreditos === 1 ? "" : "s"} de ajuda agora. Créditos-Hora não são dinheiro: eles só existem quando alguém dedica tempo a outra pessoa.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row"><Link to="/explorar" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-highlight px-5 text-base font-semibold text-highlight-foreground">Encontrar ajuda</Link><Link to="/oferecer" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-primary-foreground/70 px-5 text-base font-semibold">Oferecer uma habilidade</Link></div>
      </section>

      <section aria-labelledby="resumo" className="mt-6 grid gap-4 sm:grid-cols-2">
        <h2 id="resumo" className="sr-only">Resumo das horas</h2>
        <div className="card-soft flex items-center gap-3 p-5"><ArrowUpRight className="size-6 text-accent" aria-hidden="true" /><p><span className="block font-display text-2xl font-bold">{recebidas}h</span><span className="text-sm text-muted-foreground">horas que você ofereceu</span></p></div>
        <div className="card-soft flex items-center gap-3 p-5"><ArrowDownLeft className="size-6 text-primary" aria-hidden="true" /><p><span className="block font-display text-2xl font-bold">{usadas}h</span><span className="text-sm text-muted-foreground">horas de ajuda que você recebeu</span></p></div>
      </section>

      <section aria-labelledby="historico" className="mt-10"><h2 id="historico" className="text-2xl font-bold">Histórico de tempo</h2><ul className="mt-4 space-y-3">{movimentos.map((m) => {
        const recebido = m.tipo === "recebido"; const Icone = recebido ? ArrowUpRight : ArrowDownLeft;
        return <li key={m.id} className="card-soft flex items-center justify-between gap-4 p-4"><span className="flex items-center gap-3"><span className={`flex size-10 items-center justify-center rounded-full ${recebido ? "bg-secondary text-accent" : "bg-surface-warm text-primary"}`}><Icone className="size-5" aria-hidden="true" /></span><span><span className="block font-semibold">{m.descricao}</span><span className="block text-sm text-muted-foreground">{m.data} · {recebido ? "você ajudou" : "você recebeu ajuda"}</span></span></span><span className="whitespace-nowrap font-display text-lg font-bold">{m.horas > 0 ? "+" : "−"}{Math.abs(m.horas)}h</span></li>;
      })}</ul></section>

      <aside className="card-soft mt-8 flex items-start gap-3 bg-surface-warm p-5"><Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" /><p className="text-sm"><span className="font-semibold">Como o tempo é registrado: </span>uma hora vale um Crédito-Hora, independentemente da habilidade. O registro só acontece depois que as duas pessoas confirmam o encontro.</p></aside>
      <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground"><Clock className="size-4" aria-hidden="true" />Dados demonstrativos desta primeira versão.</p>
    </div>
  );
}
