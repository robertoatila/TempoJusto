import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertCircle, Check, CheckCircle2 } from "lucide-react";
import { categorias, disponibilidades, formatos, recursosAcessibilidade, regioes } from "@/data/mock";

export const Route = createFileRoute("/oferecer")({
  head: () => ({ meta: [{ title: "Oferecer uma habilidade — TempoJusto" }] }),
  component: Oferecer,
});

const etapas = ["O que você pode oferecer", "Como funciona", "Quando está disponível", "Revisar e publicar"];

type Form = {
  titulo: string;
  categoria: string;
  descricao: string;
  formato: string;
  duracao: string;
  regiao: string;
  disponibilidade: string[];
  acessibilidade: string[];
};

type Erros = Partial<Record<keyof Form, string>>;

const inicial: Form = { titulo: "", categoria: "", descricao: "", formato: "", duracao: "1", regiao: "", disponibilidade: [], acessibilidade: [] };

function Oferecer() {
  const [etapa, setEtapa] = useState(0);
  const [form, setForm] = useState<Form>(inicial);
  const [erros, setErros] = useState<Erros>({});
  const [publicado, setPublicado] = useState(false);

  function alternar(campo: "disponibilidade" | "acessibilidade", valor: string) {
    setForm((f) => ({ ...f, [campo]: f[campo].includes(valor) ? f[campo].filter((v) => v !== valor) : [...f[campo], valor] }));
  }

  function validar() {
    const novos: Erros = {};
    if (etapa === 0) {
      if (form.titulo.trim().length < 8) novos.titulo = "Escreva um título com pelo menos 8 caracteres.";
      if (!form.categoria) novos.categoria = "Escolha uma categoria.";
    }
    if (etapa === 1) {
      if (form.descricao.trim().length < 30) novos.descricao = "Explique a ajuda com pelo menos 30 caracteres.";
      if (!form.formato) novos.formato = "Escolha o formato do encontro.";
    }
    if (etapa === 2) {
      if (form.disponibilidade.length === 0) novos.disponibilidade = "Selecione pelo menos um período.";
      if (!form.regiao) novos.regiao = "Escolha sua região aproximada.";
    }
    setErros(novos);
    return Object.keys(novos).length === 0;
  }

  const campoClasse = "min-h-12 w-full rounded-lg border border-input bg-card px-3 text-base";
  const Erro = ({ id, mensagem }: { id: string; mensagem?: string }) => mensagem ? <p id={id} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-destructive"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{mensagem}</p> : null;

  if (publicado) {
    return <div className="mx-auto w-full max-w-2xl px-4 py-16"><div className="card-soft p-8 text-center" role="status"><CheckCircle2 className="mx-auto size-10 text-accent" aria-hidden="true" /><h1 className="mt-4 text-3xl font-bold">Habilidade publicada</h1><p className="mt-2 text-muted-foreground">“{form.titulo}” já pode ser encontrada por quem precisa. Você recebe Créditos-Hora quando a troca for confirmada pelas duas pessoas.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/perfil" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 font-semibold text-primary-foreground">Ver no meu perfil</Link><Link to="/explorar" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-input px-5 font-semibold">Explorar habilidades</Link></div></div></div>;
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <header><h1 className="text-3xl font-bold md:text-4xl">Oferecer uma habilidade</h1><p className="mt-2 text-muted-foreground">Quatro passos curtos. Você pode voltar e ajustar tudo antes de publicar.</p></header>

      <nav aria-label="Etapas do formulário" className="mt-6"><ol className="grid gap-2 sm:grid-cols-4">{etapas.map((titulo, i) => <li key={titulo} aria-current={i === etapa ? "step" : undefined} className={`rounded-xl border p-3 text-sm ${i === etapa ? "border-primary bg-secondary font-semibold text-primary" : i < etapa ? "border-accent bg-card text-foreground" : "border-border bg-card text-muted-foreground"}`}><span className="flex items-center gap-2">{i < etapa ? <Check className="size-4 text-accent" aria-hidden="true" /> : <span aria-hidden="true">{i + 1}.</span>}{titulo}</span></li>)}</ol></nav>

      <form className="card-soft mt-6 p-6" noValidate onSubmit={(e) => { e.preventDefault(); if (etapa === 3) setPublicado(true); else if (validar()) setEtapa((v) => v + 1); }}>
        <p className="text-sm font-medium text-muted-foreground">Passo {etapa + 1} de 4</p>
        <h2 className="mt-1 text-2xl font-bold">{etapas[etapa]}</h2>

        <div className="mt-6 space-y-6">
          {etapa === 0 && <>
            <div><label htmlFor="titulo" className="mb-1.5 block font-semibold">Título da habilidade</label><input id="titulo" className={campoClasse} value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} aria-invalid={!!erros.titulo} aria-describedby={erros.titulo ? "erro-titulo" : undefined} /><Erro id="erro-titulo" mensagem={erros.titulo} /></div>
            <div><label htmlFor="categoria" className="mb-1.5 block font-semibold">Categoria</label><select id="categoria" className={campoClasse} value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })}><option value="">Selecione uma categoria</option>{categorias.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select><Erro id="erro-categoria" mensagem={erros.categoria} /></div>
          </>}

          {etapa === 1 && <>
            <div><label htmlFor="descricao" className="mb-1.5 block font-semibold">Como funciona a sua hora de ajuda</label><textarea id="descricao" rows={5} className="w-full rounded-lg border border-input bg-card p-3 text-base" value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} /><Erro id="erro-descricao" mensagem={erros.descricao} /></div>
            <fieldset><legend className="mb-2 font-semibold">Formato do encontro</legend><div className="space-y-2">{formatos.map((f) => <label key={f.id} className="flex min-h-11 items-center gap-3 rounded-lg border border-border p-3"><input type="radio" name="formato" value={f.id} checked={form.formato === f.id} onChange={(e) => setForm({ ...form, formato: e.target.value })} className="size-5" />{f.rotulo}</label>)}</div><Erro id="erro-formato" mensagem={erros.formato} /></fieldset>
            <div><label htmlFor="duracao" className="mb-1.5 block font-semibold">Duração</label><select id="duracao" className={campoClasse} value={form.duracao} onChange={(e) => setForm({ ...form, duracao: e.target.value })}><option value="1">1 hora (1 Crédito-Hora)</option><option value="2">2 horas (2 Créditos-Hora)</option></select></div>
          </>}

          {etapa === 2 && <>
            <fieldset><legend className="mb-2 font-semibold">Quando você tem tempo livre</legend><div className="grid gap-2 sm:grid-cols-2">{disponibilidades.map((d) => <label key={d.id} className="flex min-h-11 items-center gap-3 rounded-lg border border-border p-3"><input type="checkbox" checked={form.disponibilidade.includes(d.id)} onChange={() => alternar("disponibilidade", d.id)} className="size-5" />{d.rotulo}</label>)}</div><Erro id="erro-disponibilidade" mensagem={erros.disponibilidade} /></fieldset>
            <div><label htmlFor="regiao" className="mb-1.5 block font-semibold">Região aproximada</label><select id="regiao" className={campoClasse} value={form.regiao} onChange={(e) => setForm({ ...form, regiao: e.target.value })}><option value="">Selecione sua região</option>{regioes.map((r) => <option key={r} value={r}>{r}</option>)}</select><Erro id="erro-regiao" mensagem={erros.regiao} /></div>
            <fieldset><legend className="mb-2 font-semibold">Recursos de acessibilidade (opcional)</legend><div className="grid gap-2 sm:grid-cols-2">{recursosAcessibilidade.map((r) => <label key={r.id} className="flex min-h-11 items-center gap-3 rounded-lg border border-border p-3"><input type="checkbox" checked={form.acessibilidade.includes(r.id)} onChange={() => alternar("acessibilidade", r.id)} className="size-5" />{r.rotulo}</label>)}</div></fieldset>
          </>}

          {etapa === 3 && <dl className="divide-y divide-border">{[
            ["Título", form.titulo], ["Categoria", categorias.find((c) => c.id === form.categoria)?.nome ?? "—"], ["Descrição", form.descricao], ["Formato", formatos.find((f) => f.id === form.formato)?.rotulo ?? "—"], ["Duração", `${form.duracao} hora(s)`], ["Região", form.regiao],
          ].map(([termo, valor]) => <div key={termo} className="grid gap-1 py-3 sm:grid-cols-[160px_1fr]"><dt className="font-semibold">{termo}</dt><dd>{valor}</dd></div>)}</dl>}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">{etapa > 0 && <button type="button" onClick={() => setEtapa((v) => v - 1)} className="min-h-12 rounded-xl border border-input px-5 font-semibold">Voltar</button>}<button type="submit" className="min-h-12 rounded-xl bg-primary px-6 font-semibold text-primary-foreground">{etapa === 3 ? "Publicar habilidade" : "Continuar"}</button></div>
      </form>
    </div>
  );
}
