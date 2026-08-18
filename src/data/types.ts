export type Formato = "presencial" | "remoto" | "hibrido";

export type CategoriaId =
  | "informatica"
  | "idiomas"
  | "reparos"
  | "costura"
  | "audiovisual"
  | "jardinagem"
  | "musica";

export interface Categoria {
  id: CategoriaId;
  nome: string;
  descricao: string;
  icone: string;
}

export interface Avaliacao {
  id: string;
  autor: string;
  nota: number;
  comentario: string;
  data: string;
}

export interface Pessoa {
  id: string;
  primeiroNome: string;
  idade: number;
  bio: string;
  regiaoAproximada: string;
  emailVerificado: boolean;
  nota: number;
  trocasConcluidas: number;
  membroDesde: string;
  preferenciasAcessibilidade: string[];
  habilidadesOferecidas: string[];
  habilidadesBuscadas: string[];
}

export interface Habilidade {
  id: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaId;
  formato: Formato;
  duracaoHoras: number;
  regiao: string;
  disponibilidade: string[];
  acessibilidade: string[];
  pessoaId: string;
  avaliacoes: Avaliacao[];
}

export type StatusTroca =
  | "aguardando"
  | "aceita"
  | "reagendada"
  | "recusada"
  | "concluida"
  | "cancelada";

export interface Troca {
  id: string;
  habilidadeId: string;
  papel: "solicitante" | "prestador";
  contraparte: string;
  status: StatusTroca;
  data: string;
  horario: string;
  formato: Formato;
  observacao?: string;
  avaliada?: boolean;
}

export interface MovimentoTempo {
  id: string;
  descricao: string;
  horas: number;
  data: string;
  tipo: "recebido" | "utilizado";
}
