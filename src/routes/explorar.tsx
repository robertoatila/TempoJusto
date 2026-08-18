import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categorias, disponibilidades, formatos, habilidades, recursosAcessibilidade, regioes } from "@/data/mock";
import { SkillCard } from "@/components/tempojusto/SkillCard";

type Busca = { categoria?: string | undefined; q?: string | undefined };

export const Route = createFileRoute("/explorar")({
  validateSearch: (search: Record<string, unknown>): Busca => ({
    categoria: typeof search["categoria"] === "string" ? (search["categoria"] as string) : undefined,
    q: typeof search["q"] === "string" ? (search["q"] as string) : undefined,
  }),
  head: () => ({ meta: [{ title: "Explorar habilidades — TempoJusto" }, { name: "description", content: "Busque habilidades e filtre por categoria, disponibilidade, formato, região e acessibilidade." }] }),
  component: Explorar,
});

function Explorar() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/explorar" });
  const [termo, setTermo] = useState(search.q ?? "");
  const [categoria, setCategoria] = useState(search.categoria ?? "todas");
  const [formato, setFormato] = useState("todos");
  const [regiao, setRegiao] = useState("todas");
  const [disponibilidade, setDisponibilidade] = useState("todas");
  const [acessibilidade, setAcessibilidade] = useState("todos");

  const resultados = useMemo(() => {
    const t = termo.trim().toLowerCase();
    return habilidades.filter((h) => {
      const combinaTermo = t === "" || h.titulo.toLowerCase().includes(t) || h.descricao.toLowerCase().includes(t);
      const combinaCategoria = categoria === "todas" || h.categoria === categoria;
      const combinaFormato = formato === "todos" || h.formato === formato || h.formato === "hibrido";
      const combinaRegiao = regiao === "todas" || h.regiao === regiao;
      const combinaDisponibilidade = disponibilidade === "todas" || h.disponibilidade.includes(disponibilidade);
      const combinaAcessibilidade = acessibilidade === "todos" || h.acessibilidade.includes(acessibilidade);
      return combinaTermo && combinaCategoria && combinaFormato && combinaRegiao && combinaDisponibilidade && combinaAcessibilidade;
    });
  }, [termo, categoria, formato, regiao, disponibilidade, acessibilidade]);

  function limpar() {
    setTermo(""); setCategoria("todas"); setFormato("todos"); setRegiao("todas"); setDisponibilidade("todas"); setAcessibilidade("todos");
    navigate({ search: { q: undefined, categoria: undefined } });
  }

  const selectClasse = "min-h-11 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground";

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold md:text-4xl">Encontrar ajuda</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Procure uma habilidade e veja a disponibilidade de cada pessoa. Toda troca custa Créditos-Hora, nunca dinheiro.</p>
      </header>

      <form role="search" className="card-soft mt-6 p-5" onSubmit={(e) => { e.preventDefault(); navigate({ search: { q: termo || undefined, categoria: categoria === "todas" ? undefined : categoria } }); }}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="busca" className="mb-1.5 block text-sm font-semibold">O que você precisa aprender ou resolver?</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input id="busca" type="search" value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Ex.: inglês, celular, barra de calça" className="min-h-12 w-full rounded-lg border border-input bg-card pl-11 pr-3 text-base placeholder:text-muted-foreground" />
            </div>
          </div>
          <button type="submit" className="min-h-12 self-end rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground">Buscar</button>
        </div>

        <fieldset className="mt-6">
          <legend className="mb-3 inline-flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal className="size-4 text-accent" aria-hidden="true" />Filtros</legend>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div><label htmlFor="f-categoria" className="mb-1.5 block text-sm font-medium">Categoria</label><select id="f-categoria" className={selectClasse} value={categoria} onChange={(e) => setCategoria(e.target.value)}><option value="todas">Todas as categorias</option>{categorias.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></div>
            <div><label htmlFor="f-disponibilidade" className="mb-1.5 block text-sm font-medium">Disponibilidade</label><select id="f-disponibilidade" className={selectClasse} value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)}><option value="todas">Qualquer horário</option>{disponibilidades.map((d) => <option key={d.id} value={d.id}>{d.rotulo}</option>)}</select></div>
            <div><label htmlFor="f-formato" className="mb-1.5 block text-sm font-medium">Formato</label><select id="f-formato" className={selectClasse} value={formato} onChange={(e) => setFormato(e.target.value)}><option value="todos">Presencial ou remoto</option>{formatos.filter((f) => f.id !== "hibrido").map((f) => <option key={f.id} value={f.id}>{f.rotulo}</option>)}</select></div>
            <div><label htmlFor="f-regiao" className="mb-1.5 block text-sm font-medium">Região aproximada</label><select id="f-regiao" className={selectClasse} value={regiao} onChange={(e) => setRegiao(e.target.value)}><option value="todas">Todas as regiões</option>{regioes.map((r) => <option key={r} value={r}>{r}</option>)}</select></div>
            <div><label htmlFor="f-acessibilidade" className="mb-1.5 block text-sm font-medium">Recursos de acessibilidade</label><select id="f-acessibilidade" className={selectClasse} value={acessibilidade} onChange={(e) => setAcessibilidade(e.target.value)}><option value="todos">Qualquer recurso</option>{recursosAcessibilidade.map((r) => <option key={r.id} value={r.id}>{r.rotulo}</option>)}</select></div>
          </div>
        </fieldset>

        <button type="button" onClick={limpar} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-input px-4 text-sm font-semibold"><X className="size-4" aria-hidden="true" />Limpar filtros</button>
      </form>

      <p aria-live="polite" className="mt-8 text-sm font-medium text-muted-foreground">{resultados.length === 0 ? "Nenhuma habilidade encontrada com esses filtros." : `${resultados.length} ${resultados.length > 1 ? "habilidades disponíveis" : "habilidade disponível"} para troca.`}</p>

      {resultados.length === 0 ? (
        <div className="card-soft mt-4 p-8 text-center"><h2 className="text-xl font-semibold">Sem resultados por enquanto</h2><p className="mx-auto mt-2 max-w-md text-muted-foreground">Tente remover um filtro ou buscar com outra palavra.</p><button type="button" onClick={limpar} className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">Limpar filtros</button></div>
      ) : (
        <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{resultados.map((h) => <li key={h.id} className="relative"><SkillCard habilidade={h} /></li>)}</ul>
      )}
    </div>
  );
}
