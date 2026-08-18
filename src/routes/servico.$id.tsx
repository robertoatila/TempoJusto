import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Accessibility, BadgeCheck, CalendarClock, Clock, Flag, MapPin, ShieldAlert } from "lucide-react";
import { getCategoria, getHabilidade, getPessoa, rotuloAcessibilidade, rotuloDisponibilidade, rotuloFormato } from "@/data/mock";
import { Rating } from "@/components/tempojusto/Rating";

export const Route = createFileRoute("/servico/$id")({
  loader: ({ params }) => {
    const habilidade = getHabilidade(params.id);
    if (!habilidade) throw notFound();
    return { habilidade };
  },
  head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.habilidade.titulo} — TempoJusto` : "Habilidade não encontrada — TempoJusto" }] }),
  notFoundComponent: HabilidadeNaoEncontrada,
  component: DetalheServico,
});

function HabilidadeNaoEncontrada() {
  return <div className="mx-auto max-w-xl px-4 py-20 text-center"><h1 className="text-2xl font-bold">Essa habilidade não está mais disponível</h1><p className="mt-2 text-muted-foreground">Ela pode ter sido despublicada por quem ofereceu.</p><Link to="/explorar" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">Voltar para Explorar</Link></div>;
}

function DetalheServico() {
  const { habilidade } = Route.useLoaderData();
  const pessoa = getPessoa(habilidade.pessoaId);
  const categoria = getCategoria(habilidade.categoria);
  const [solicitado, setSolicitado] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <nav aria-label="Trilha de navegação" className="text-sm text-muted-foreground"><ol className="flex flex-wrap items-center gap-2"><li><Link to="/explorar" className="underline underline-offset-4">Explorar</Link></li><li aria-hidden="true">/</li><li>{categoria?.nome}</li></ol></nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
        <article>
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{categoria?.nome}</span>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{habilidade.titulo}</h1>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li className="inline-flex items-center gap-2"><Clock className="size-4 text-accent" aria-hidden="true" />{habilidade.duracaoHoras} hora por encontro = {habilidade.duracaoHoras} Crédito-Hora</li>
            <li className="inline-flex items-center gap-2"><MapPin className="size-4 text-accent" aria-hidden="true" />{rotuloFormato(habilidade.formato)} · {habilidade.regiao}</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold">Sobre esta ajuda</h2><p className="mt-2 max-w-2xl text-foreground">{habilidade.descricao}</p>
          <h2 className="mt-8 text-xl font-semibold">Disponibilidade</h2><ul className="mt-3 flex flex-wrap gap-2">{habilidade.disponibilidade.map((d) => <li key={d} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm"><CalendarClock className="size-4 text-accent" aria-hidden="true" />{rotuloDisponibilidade(d)}</li>)}</ul>
          <h2 className="mt-8 text-xl font-semibold">Acessibilidade</h2>{habilidade.acessibilidade.length > 0 ? <ul className="mt-3 space-y-2">{habilidade.acessibilidade.map((a) => <li key={a} className="flex items-center gap-2 text-sm"><Accessibility className="size-4 text-accent" aria-hidden="true" />{rotuloAcessibilidade(a)}</li>)}</ul> : <p className="mt-2 text-sm text-muted-foreground">Nenhum recurso informado. Você pode combinar necessidades específicas na conversa.</p>}
          <h2 className="mt-8 text-xl font-semibold">Avaliações ({habilidade.avaliacoes.length})</h2><ul className="mt-3 space-y-3">{habilidade.avaliacoes.map((a) => <li key={a.id} className="card-soft p-4"><div className="flex flex-wrap items-center justify-between gap-2"><p className="font-semibold">{a.autor}</p><Rating nota={a.nota} /></div><p className="mt-2 text-sm text-foreground">{a.comentario}</p><p className="mt-1 text-xs text-muted-foreground">{a.data}</p></li>)}</ul>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="card-soft p-5">
            <h2 className="text-lg font-semibold">Quem oferece</h2>
            <div className="mt-3 flex items-center gap-3"><span className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-primary" aria-hidden="true">{pessoa.primeiroNome.charAt(0)}</span><div><p className="font-semibold">{pessoa.primeiroNome}, {pessoa.idade} anos</p><p className="text-sm text-muted-foreground">{pessoa.regiaoAproximada} (região aproximada)</p></div></div>
            <ul className="mt-4 space-y-2 text-sm"><li className="flex items-center gap-2"><Rating nota={pessoa.nota} total={pessoa.trocasConcluidas} /></li>{pessoa.emailVerificado && <li className="flex items-center gap-2 text-accent"><BadgeCheck className="size-4" aria-hidden="true" /><span className="font-medium">E-mail verificado</span></li>}</ul>
            <p className="mt-4 text-sm text-muted-foreground">O endereço exato só é compartilhado depois que as duas pessoas confirmam o encontro.</p>
          </div>

          <div className="card-soft p-5">
            {solicitado ? <div role="status" className="rounded-xl bg-secondary p-4"><p className="font-semibold text-primary">Pedido enviado</p><p className="mt-1 text-sm text-foreground">{pessoa.primeiroNome} vai responder em breve. Acompanhe em Minhas trocas.</p><Link to="/trocas" className="mt-3 inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">Ir para Minhas trocas</Link></div> : <><p className="text-sm text-muted-foreground">Ao solicitar, você usa 1 Crédito-Hora quando a troca for concluída pelas duas pessoas.</p><button type="button" onClick={() => setSolicitado(true)} className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-accent px-5 text-base font-semibold text-accent-foreground">Solicitar 1 hora</button></>}
            <ul className="mt-4 space-y-2 text-sm"><li><button type="button" className="inline-flex min-h-11 items-center gap-2 text-muted-foreground underline underline-offset-4"><Flag className="size-4" aria-hidden="true" />Denunciar este anúncio</button></li><li><Link to="/convivencia" className="inline-flex min-h-11 items-center gap-2 text-muted-foreground underline underline-offset-4"><ShieldAlert className="size-4" aria-hidden="true" />Regras de convivência</Link></li></ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
