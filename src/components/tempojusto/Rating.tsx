import { Star } from "lucide-react";

export function Rating({ nota, total }: { nota: number; total?: number }) {
  const texto = `Nota ${nota.toFixed(1).replace(".", ",")} de 5${
    total !== undefined ? `, com base em ${total} avaliações` : ""
  }`;
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
      <Star className="size-4 fill-highlight text-highlight" aria-hidden="true" />
      <span aria-hidden="true">
        {nota.toFixed(1).replace(".", ",")}
        {total !== undefined ? ` (${total})` : ""}
      </span>
      <span className="sr-only">{texto}</span>
    </span>
  );
}
