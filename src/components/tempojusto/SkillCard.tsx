import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Monitor, Users } from "lucide-react";
import type { Habilidade } from "@/data/types";
import { getCategoria, getPessoa, rotuloFormato } from "@/data/mock";
import { Rating } from "./Rating";

export function SkillCard({ habilidade }: { habilidade: Habilidade }) {
  const pessoa = getPessoa(habilidade.pessoaId);
  const categoria = getCategoria(habilidade.categoria);
  const FormatoIcone = habilidade.formato === "remoto" ? Monitor : habilidade.formato === "presencial" ? MapPin : Users;

  return (
    <article className="card-soft flex h-full flex-col gap-4 p-5 transition-shadow hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
          {categoria?.nome}
        </span>
        <Rating nota={pessoa.nota} total={habilidade.avaliacoes.length} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          <Link to="/servico/$id" params={{ id: habilidade.id }} className="rounded after:absolute after:inset-0">
            {habilidade.titulo}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">Oferecido por {pessoa.primeiroNome}, {pessoa.idade} anos</p>
      </div>
      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground">
        <li className="inline-flex items-center gap-1.5"><FormatoIcone className="size-4 text-accent" aria-hidden="true" />{rotuloFormato(habilidade.formato)}</li>
        <li className="inline-flex items-center gap-1.5"><Clock className="size-4 text-accent" aria-hidden="true" />{habilidade.duracaoHoras}h por encontro</li>
        <li className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-accent" aria-hidden="true" />{habilidade.regiao}</li>
      </ul>
      <Link to="/servico/$id" params={{ id: habilidade.id }} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90" tabIndex={-1} aria-hidden="true">
        Ver disponibilidade
      </Link>
    </article>
  );
}
