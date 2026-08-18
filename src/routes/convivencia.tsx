import { createFileRoute, Link } from "@tanstack/react-router";
import { Ban, Flag, HeartHandshake, Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/convivencia")({
  head: () => ({ meta: [{ title: "Regras de convivência — TempoJusto" }] }),
  component: Convivencia,
});

const regras = [
  { icone: HeartHandshake, titulo: "Uma hora vale uma hora", texto: "Todas as habilidades têm o mesmo valor de tempo. Créditos-Hora não são dinheiro e não podem ser comprados, vendidos ou trocados por produtos." },
  { icone: ShieldCheck, titulo: "Confirmação das duas pessoas", texto: "Uma troca só é concluída quando quem ajudou e quem recebeu confirmam o encontro. Depois disso, as duas pessoas se avaliam." },
  { icone: Lock, titulo: "Dados sensíveis ficam ocultos", texto: "Perfis mostram apenas o primeiro nome e a região aproximada. Endereço completo e contato só são compartilhados após a confirmação do encontro." },
  { icone: Flag, titulo: "Denúncia simples", texto: "Qualquer anúncio, mensagem ou perfil pode ser denunciado. A equipe da comunidade analisa e responde." },
  { icone: Ban, titulo: "Bloqueio a qualquer momento", texto: "Ao bloquear alguém, essa pessoa deixa de ver seus anúncios e não consegue mais solicitar horas com você." },
];

function Convivencia() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold md:text-4xl">Regras de convivência</h1>
      <p className="mt-2 text-muted-foreground">Combinados simples para que a troca de tempo continue segura, respeitosa e acessível para todo mundo.</p>
      <ul className="mt-8 space-y-4">{regras.map((regra) => {
        const Icone = regra.icone;
        return <li key={regra.titulo} className="card-soft flex items-start gap-4 p-5"><Icone className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" /><div><h2 className="text-lg font-semibold">{regra.titulo}</h2><p className="mt-1 text-sm text-foreground">{regra.texto}</p></div></li>;
      })}</ul>
      <Link to="/explorar" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-primary px-5 font-semibold text-primary-foreground">Encontrar ajuda</Link>
    </div>
  );
}
