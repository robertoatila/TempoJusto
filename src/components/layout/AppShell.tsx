import { Link } from "@tanstack/react-router";
import { Clock, Compass, Home, PlusCircle, Repeat, User } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/explorar", label: "Explorar", icon: Compass },
  { to: "/oferecer", label: "Oferecer", icon: PlusCircle },
  { to: "/trocas", label: "Minhas trocas", icon: Repeat },
  { to: "/perfil", label: "Perfil", icon: User },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Pular para o conteúdo principal
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 rounded-md" aria-label="TempoJusto, página inicial">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold text-primary">TempoJusto</span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    activeProps={{
                      className: "inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold bg-secondary text-primary underline underline-offset-8 decoration-2",
                      "aria-current": "page",
                    }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/carteira" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface-warm px-3 py-2 text-sm font-semibold text-primary">
            <Clock className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Carteira de tempo</span>
            <span className="sm:hidden">Tempo</span>
          </Link>
        </div>
      </header>

      <main id="conteudo" className="flex-1 pb-24 md:pb-0">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          <p className="font-display text-base font-semibold text-primary">TempoJusto — Seu tempo também tem valor.</p>
          <p className="mt-2 max-w-2xl">Banco comunitário de tempo. Cada hora de ajuda vale 1 Crédito-Hora, sempre entre pessoas diferentes. Créditos-Hora não são dinheiro e não podem ser comprados nem vendidos.</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/convivencia" className="underline underline-offset-4">Regras de convivência</Link></li>
            <li><Link to="/perfil" className="underline underline-offset-4">Sua conta</Link></li>
          </ul>
          <p className="mt-6 text-xs">Projeto acadêmico de Usabilidade, Design de Interação e Acessibilidade Digital.</p>
        </div>
      </footer>

      <nav aria-label="Navegação principal (mobile)" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card md:hidden">
        <ul className="mx-auto flex max-w-md items-stretch justify-between px-1 py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to} className="flex-1">
                <Link
                  to={item.to}
                  className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 py-1 text-[11px] font-medium text-muted-foreground"
                  activeProps={{
                    className: "flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 py-1 text-[11px] font-bold text-primary bg-secondary",
                    "aria-current": "page",
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  <span className="text-center leading-tight">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
