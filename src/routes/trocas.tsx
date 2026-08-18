import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarClock, Inbox, MapPin, Star } from "lucide-react";
import { getHabilidade, rotuloFormato, trocas } from "@/data/mock";
import type { Troca } from "@/data/types";
import { StatusBadge } from "@/components/tempojusto/StatusBadge";

export const Route = createFileRoute("/trocas")({
  head: () => ({ meta: [{ title: "Minhas trocas — TempoJusto" }] }),
  component: MinhasTrocas,
});

const abas = [
  { id: "aguardando", rotulo: "Aguardando resposta" },
  { id: "proximas", rotulo: "Próximas" },
  { id: "concluidas", rotulo: "Concluídas" },
] as const;
type AbaId = (typeof abas)[number]["id"];

function CartaoTroca({ troca }: { troca: Troca }) {
  const habilidade = getHabilidade(troca.habilidadeId);
  return (
    <li className="card-soft p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h3 className="text-lg font-semibold">{habilidade?.titulo}</h3><p className="mt-1 text-sm text-muted-foreground">{troca.papel === "solicitante" ? `Você pediu ajuda para ${troca.contraparte}` : `Você vai ajudar ${troca.contraparte}`}</p></div>
        <StatusBadge status={troca.status} />
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <li className="inline-flex items-center gap-2"><CalendarClock className="size-4 text-accent" aria-hidden="true" />{troca.data}, {troca.horario}</li>
        <li className="inline-flex items-center gap-2"><MapPin className="size-4 text-accent" aria-hidden="true" />{rotuloFormato(troca.formato)}</li>
      </ul>
      {troca.observacao && <p className="mt-3 text-sm text-muted-foreground">{troca.observacao}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {troca.status === "aguardando" && <button type="button" className="min-h-11 rounded-lg border border-input px-4 text-sm font-semibold">Cancelar pedido</button>}
        {troca.status === "aceita" && <><button type="button" className="min-h-11 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground">Confirmar realização</button><button type="button" className="min-h-11 rounded-lg border border-input px-4 text-sm font-semibold">Propor novo horário</button></>}
        {troca.status === "reagendada" && <><button type="button" className="min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">Aceitar novo horário</button><button type="button" className="min-h-11 rounded-lg border border-input px-4 text-sm font-semibold">Recusar</button></>}
        {troca.status === "concluida" && !troca.avaliada && <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-highlight px-4 text-sm font-semibold text-highlight-foreground"><Star className="size-4" aria-hidden="true" />Avaliar {troca.contraparte}</button>}
        {troca.status === "concluida" && troca.avaliada && <p className="text-sm text-muted-foreground">Avaliação enviada. Obrigado por fechar o ciclo.</p>}
        {(troca.status === "recusada" || troca.status === "cancelada") && <Link to="/explorar" className="inline-flex min-h-11 items-center rounded-lg border border-input px-4 text-sm font-semibold">Procurar outra pessoa</Link>}
      </div>
    </li>
  );
}

function MinhasTrocas() {
  const [aba, setAba] = useState<AbaId>("aguardando");
  const grupos = useMemo(() => ({
    aguardando: trocas.filter((t) => t.status === "aguardando"),
    proximas: trocas.filter((t) => t.status === "aceita" || t.status === "reagendada"),
    concluidas: trocas.filter((t) => ["concluida", "recusada", "cancelada"].includes(t.status)),
  }), []);
  const lista = grupos[aba];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <header><h1 className="text-3xl font-bold md:text-4xl">Minhas trocas</h1><p className="mt-2 text-muted-foreground">Cada troca só vira Crédito-Hora depois que as duas pessoas confirmam que o encontro aconteceu.</p></header>
      <div role="tablist" aria-label="Situação das trocas" className="mt-6 flex flex-wrap gap-2">{abas.map((item) => {
        const ativa = aba === item.id;
        return <button key={item.id} type="button" role="tab" aria-selected={ativa} onClick={() => setAba(item.id)} className={`min-h-11 rounded-full border px-4 text-sm font-semibold ${ativa ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>{item.rotulo} ({grupos[item.id].length})</button>;
      })}</div>
      <section role="tabpanel" className="mt-6">
        {lista.length === 0 ? <div className="card-soft p-8 text-center"><Inbox className="mx-auto size-8 text-accent" aria-hidden="true" /><h2 className="mt-3 text-xl font-semibold">Nada por aqui ainda</h2><p className="mx-auto mt-2 max-w-md text-muted-foreground">Quando você pedir ou oferecer uma hora, ela aparece nesta lista.</p><Link to="/explorar" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">Encontrar ajuda</Link></div> : <ul className="space-y-4">{lista.map((t) => <CartaoTroca key={t.id} troca={t} />)}</ul>}
      </section>
    </div>
  );
}
