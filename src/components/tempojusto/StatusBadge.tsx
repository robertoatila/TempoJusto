import { AlertCircle, CalendarClock, CheckCircle2, Clock3, RotateCcw, XCircle } from "lucide-react";
import type { StatusTroca } from "@/data/types";
import { rotulosStatus } from "@/data/mock";

const estilos: Record<StatusTroca, { classe: string; Icone: typeof Clock3 }> = {
  aguardando: { classe: "bg-surface-warm text-foreground border-highlight", Icone: Clock3 },
  aceita: { classe: "bg-secondary text-accent border-accent", Icone: CalendarClock },
  reagendada: { classe: "bg-secondary text-primary border-primary", Icone: RotateCcw },
  recusada: { classe: "bg-muted text-foreground border-border", Icone: XCircle },
  concluida: { classe: "bg-accent text-accent-foreground border-accent", Icone: CheckCircle2 },
  cancelada: { classe: "bg-muted text-foreground border-border", Icone: AlertCircle },
};

export function StatusBadge({ status }: { status: StatusTroca }) {
  const { classe, Icone } = estilos[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${classe}`}>
      <Icone className="size-3.5" aria-hidden="true" />
      {rotulosStatus[status]}
    </span>
  );
}
