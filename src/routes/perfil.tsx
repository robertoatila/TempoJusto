import { createFileRoute, Link } from "@tanstack/react-router";
import { Accessibility, BadgeCheck, CalendarClock, MapPin, Shield, Star } from "lucide-react";
import { habilidades, usuarioAtual, trocas } from "@/data/mock";
import { Rating } from "@/components/tempojusto/Rating";

export const Route = createFileRoute("/perfil")({ head: () => ({ meta: [{ title: "Meu perfil — TempoJusto" }] }), component: Perfil });

function Perfil() {
  const pessoa = usuarioAtual;
  const minhas = habilidades.filter((h) => h.pessoaId === pessoa.id);
  const avaliacoes = minhas.flatMap((h) => h.avaliacoes);
  const concluidas = trocas.filter((t) => t.status === "concluida").length;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <header className="card-soft flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-3xl font-bold text-primary" aria-hidden="true">{pessoa.primeiroNome.charAt(0)}</span>
        <div>
          <h1 className="text-3xl font-bold">{pessoa.primeiroNome}, {pessoa.idade} anos</h1>
          <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" aria-hidden="true" />{pessoa.regiaoAproximada} (região aproximada) · Na comunidade desde {pessoa.membroDesde}</p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <li><Rating nota={pessoa.nota} total={avaliacoes.length} /></li>
            <li className="inline-flex items-center gap-1.5"><CalendarClock className="size-4 text-accent" aria-hidden="true" />{pessoa.trocasConcluidas} trocas concluídas</li>
            {pessoa.emailVerificado && <li className="inline-flex items-center gap-1.5 font-medium text-accent"><BadgeCheck className="size-4" aria-hidden="true" />E-mail verificado</li>}
          </ul>
        </div>
      </header>

      <p className="mt-6 max-w-2xl text-foreground">{pessoa.bio}</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link to="/oferecer" className="min-h-12 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Oferecer uma habilidade</Link><Link to="/carteira" className="min-h-12 rounded-xl border border-input px-5 py-3 font-semibold">Ver carteira de tempo</Link></div>

      <section aria-labelledby="habilidades" className="mt-10"><h2 id="habilidades" className="text-2xl font-bold">Habilidades que ofereço</h2>{minhas.length === 0 ? <div className="card-soft mt-4 p-6"><p className="text-muted-foreground">Você ainda não publicou nenhuma habilidade.</p></div> : <ul className="mt-4 space-y-3">{minhas.map((h) => <li key={h.id} className="card-soft p-5"><h3 className="text-lg font-semibold"><Link to="/servico/$id" params={{ id: h.id }} className="underline-offset-4 hover:underline">{h.titulo}</Link></h3><p className="mt-1 text-sm text-muted-foreground">{h.duracaoHoras}h por encontro · {h.regiao}</p></li>)}</ul>}</section>

      <section aria-labelledby="quero-aprender" className="mt-10"><h2 id="quero-aprender" className="text-2xl font-bold">O que quero aprender</h2><ul className="mt-4 flex flex-wrap gap-2">{pessoa.habilidadesBuscadas.map((h) => <li key={h} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{h}</li>)}</ul></section>

      <section aria-labelledby="disponibilidade-perfil" className="mt-10"><h2 id="disponibilidade-perfil" className="text-2xl font-bold">Minha disponibilidade</h2><p className="mt-2 text-muted-foreground">Tardes e noites durante a semana, e sábados de manhã.</p></section>

      <section aria-labelledby="acessibilidade-perfil" className="mt-10"><h2 id="acessibilidade-perfil" className="text-2xl font-bold">Preferências de acessibilidade</h2>{pessoa.preferenciasAcessibilidade.length === 0 ? <p className="mt-2 text-muted-foreground">Nenhuma preferência informada.</p> : <ul className="mt-3 space-y-2">{pessoa.preferenciasAcessibilidade.map((p) => <li key={p} className="flex items-center gap-2"><Accessibility className="size-4 text-accent" aria-hidden="true" />{p}</li>)}</ul>}</section>

      <section aria-labelledby="avaliacoes-perfil" className="mt-10"><h2 id="avaliacoes-perfil" className="text-2xl font-bold">Avaliações que recebi ({avaliacoes.length})</h2><ul className="mt-4 space-y-3">{avaliacoes.map((a) => <li key={a.id} className="card-soft p-4"><div className="flex flex-wrap items-center justify-between gap-2"><p className="font-semibold">{a.autor}</p><Rating nota={a.nota} /></div><p className="mt-2 text-sm">{a.comentario}</p><p className="mt-1 text-xs text-muted-foreground">{a.data}</p></li>)}</ul><p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground"><Star className="size-4" aria-hidden="true" />As avaliações são bidirecionais: você avalia e é avaliado a cada troca concluída ({concluidas} até agora).</p></section>

      <section aria-labelledby="privacidade" className="card-soft mt-10 flex items-start gap-3 bg-surface-warm p-5"><Shield className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" /><div><h2 id="privacidade" className="text-lg font-semibold">Seus dados ficam protegidos</h2><p className="mt-1 text-sm">Mostramos apenas o primeiro nome e a região aproximada. Telefone, endereço e sobrenome não aparecem no perfil público.</p><Link to="/convivencia" className="mt-3 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Ler as regras de convivência</Link></div></section>
    </div>
  );
}
