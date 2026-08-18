import type { Avaliacao, Categoria, Habilidade, MovimentoTempo, Pessoa, StatusTroca, Troca, Formato } from "./types";

export const categorias: Categoria[] = [
  { id: "informatica", nome: "Informática", descricao: "Computador, celular e internet", icone: "Laptop" },
  { id: "idiomas", nome: "Idiomas", descricao: "Conversação e estudo", icone: "Languages" },
  { id: "reparos", nome: "Pequenos reparos", descricao: "Consertos domésticos simples", icone: "Wrench" },
  { id: "costura", nome: "Costura", descricao: "Ajustes, barras e consertos", icone: "Scissors" },
  { id: "audiovisual", nome: "Edição de vídeo", descricao: "Vídeos, cortes e legendas", icone: "Clapperboard" },
  { id: "jardinagem", nome: "Jardinagem", descricao: "Plantas, hortas e vasos", icone: "Sprout" },
  { id: "musica", nome: "Música", descricao: "Instrumentos e prática", icone: "Music" },
];

export const formatos: { id: Formato; rotulo: string }[] = [
  { id: "presencial", rotulo: "Presencial" },
  { id: "remoto", rotulo: "Remoto" },
  { id: "hibrido", rotulo: "Presencial ou remoto" },
];

export const recursosAcessibilidade = [
  { id: "libras", rotulo: "Comunicação em Libras" },
  { id: "ritmo-proprio", rotulo: "Explicação em ritmo próprio" },
  { id: "local-acessivel", rotulo: "Local sem escadas" },
  { id: "material-ampliado", rotulo: "Material com letra ampliada" },
  { id: "legendas", rotulo: "Chamadas com legendas" },
  { id: "audio-descricao", rotulo: "Descrição em áudio" },
];

export const disponibilidades = [
  { id: "manha", rotulo: "Manhãs" },
  { id: "tarde", rotulo: "Tardes" },
  { id: "noite", rotulo: "Noites" },
  { id: "fim-de-semana", rotulo: "Fins de semana" },
];

export const regioes = ["Centro", "Zona Norte", "Zona Sul", "Zona Leste", "Zona Oeste", "Online"];

export const pessoas: Pessoa[] = [
  {
    id: "lucas", primeiroNome: "Lucas", idade: 17,
    bio: "Estudante do técnico. Gosto de resolver problemas de computador e quero praticar inglês para o intercâmbio.",
    regiaoAproximada: "Zona Norte", emailVerificado: true, nota: 4.9, trocasConcluidas: 12,
    membroDesde: "Março de 2026", preferenciasAcessibilidade: ["Explicação em ritmo próprio"],
    habilidadesOferecidas: ["Ajuda com informática", "Organização de arquivos"], habilidadesBuscadas: ["Conversação em inglês"],
  },
  {
    id: "helena", primeiroNome: "Helena", idade: 64,
    bio: "Costuro há 40 anos. Ajudo com ajustes de roupa e estou aprendendo a usar melhor o celular.",
    regiaoAproximada: "Centro", emailVerificado: true, nota: 5, trocasConcluidas: 27,
    membroDesde: "Janeiro de 2026", preferenciasAcessibilidade: ["Material com letra ampliada", "Local sem escadas"],
    habilidadesOferecidas: ["Costura e ajustes"], habilidadesBuscadas: ["Apoio digital"],
  },
  {
    id: "marina", primeiroNome: "Marina", idade: 29,
    bio: "Professora de inglês. Adoro conversar sobre viagens e cultura.", regiaoAproximada: "Zona Sul",
    emailVerificado: true, nota: 4.8, trocasConcluidas: 18, membroDesde: "Fevereiro de 2026",
    preferenciasAcessibilidade: ["Chamadas com legendas"], habilidadesOferecidas: ["Conversação em inglês"], habilidadesBuscadas: ["Jardinagem"],
  },
  {
    id: "joao", primeiroNome: "João", idade: 45,
    bio: "Faço pequenos reparos em casa desde sempre. Prefiro ensinar junto, mão na massa.", regiaoAproximada: "Zona Leste",
    emailVerificado: true, nota: 4.7, trocasConcluidas: 9, membroDesde: "Abril de 2026",
    preferenciasAcessibilidade: [], habilidadesOferecidas: ["Pequenos reparos domésticos"], habilidadesBuscadas: ["Edição de vídeo"],
  },
  {
    id: "rafa", primeiroNome: "Rafa", idade: 23,
    bio: "Edito vídeos para projetos comunitários e coletivos culturais.", regiaoAproximada: "Online",
    emailVerificado: true, nota: 4.6, trocasConcluidas: 6, membroDesde: "Maio de 2026",
    preferenciasAcessibilidade: ["Chamadas com legendas"], habilidadesOferecidas: ["Edição de vídeo"], habilidadesBuscadas: ["Música"],
  },
  {
    id: "dona-neide", primeiroNome: "Neide", idade: 58,
    bio: "Cuido de hortas comunitárias no bairro e ensino quem quiser começar.", regiaoAproximada: "Zona Oeste",
    emailVerificado: true, nota: 4.9, trocasConcluidas: 21, membroDesde: "Janeiro de 2026",
    preferenciasAcessibilidade: ["Explicação em ritmo próprio"], habilidadesOferecidas: ["Jardinagem e hortas"], habilidadesBuscadas: ["Costura"],
  },
  {
    id: "caio", primeiroNome: "Caio", idade: 34,
    bio: "Toco violão há 15 anos. Ensino os primeiros acordes com muita paciência.", regiaoAproximada: "Centro",
    emailVerificado: false, nota: 4.5, trocasConcluidas: 4, membroDesde: "Junho de 2026",
    preferenciasAcessibilidade: [], habilidadesOferecidas: ["Aulas de violão"], habilidadesBuscadas: ["Pequenos reparos"],
  },
];

const av = (id: string, autor: string, nota: number, comentario: string, data: string): Avaliacao => ({ id, autor, nota, comentario, data });

export const habilidades: Habilidade[] = [
  {
    id: "informatica-basica", titulo: "Ajuda com informática no dia a dia",
    descricao: "Ajudo a resolver problemas comuns do computador e do celular: instalar aplicativos, organizar arquivos, configurar e-mail, deixar o aparelho mais rápido e usar videochamadas com tranquilidade. Explico passo a passo, sem pressa, e anoto o resumo no final.",
    categoria: "informatica", formato: "hibrido", duracaoHoras: 1, regiao: "Zona Norte",
    disponibilidade: ["tarde", "noite"], acessibilidade: ["ritmo-proprio", "material-ampliado"], pessoaId: "lucas",
    avaliacoes: [av("a1", "Helena", 5, "Muito paciente. Aprendi a usar a câmera do celular sem medo.", "Julho de 2026"), av("a2", "Neide", 5, "Resolveu meu e-mail em 40 minutos e ainda explicou de novo.", "Junho de 2026")],
  },
  {
    id: "ingles-conversacao", titulo: "Conversação em inglês para começar a falar",
    descricao: "Uma hora de conversa guiada em inglês, do nível iniciante ao intermediário. Escolhemos um tema, eu corrijo com gentileza e envio uma lista de palavras depois do encontro.",
    categoria: "idiomas", formato: "remoto", duracaoHoras: 1, regiao: "Online", disponibilidade: ["manha", "noite"], acessibilidade: ["legendas"], pessoaId: "marina",
    avaliacoes: [av("a3", "Lucas", 5, "Saí falando mais do que imaginava na primeira hora.", "Julho de 2026")],
  },
  {
    id: "reparos-domesticos", titulo: "Pequenos reparos domésticos",
    descricao: "Troca de tomada, torneira pingando, prateleira solta, dobradiça de porta. Levo as ferramentas e ensino como fazer sozinho da próxima vez.",
    categoria: "reparos", formato: "presencial", duracaoHoras: 1, regiao: "Zona Leste", disponibilidade: ["fim-de-semana"], acessibilidade: ["local-acessivel"], pessoaId: "joao",
    avaliacoes: [av("a4", "Rafa", 5, "Consertou e explicou tudo. Ótima troca.", "Maio de 2026")],
  },
  {
    id: "costura-ajustes", titulo: "Costura: ajustes, barras e consertos",
    descricao: "Faço barra de calça, ajuste de cintura, troca de zíper e conserto de rasgos. Também ensino a fazer o ponto básico à mão para quem quiser aprender.",
    categoria: "costura", formato: "presencial", duracaoHoras: 1, regiao: "Centro", disponibilidade: ["manha", "tarde"], acessibilidade: ["local-acessivel", "ritmo-proprio"], pessoaId: "helena",
    avaliacoes: [av("a5", "Marina", 5, "Ficou perfeito e ainda tomei um café ouvindo histórias.", "Julho de 2026"), av("a6", "Caio", 5, "Salvou minha camisa preferida.", "Junho de 2026")],
  },
  {
    id: "edicao-video", titulo: "Edição de vídeo para projetos e portfólio",
    descricao: "Ajudo a montar cortes, colocar legendas, ajustar áudio e exportar vídeos para redes sociais. Podemos editar juntos na chamada.",
    categoria: "audiovisual", formato: "remoto", duracaoHoras: 1, regiao: "Online", disponibilidade: ["noite", "fim-de-semana"], acessibilidade: ["legendas", "audio-descricao"], pessoaId: "rafa",
    avaliacoes: [av("a7", "João", 4, "Aprendi a legendar meus vídeos sozinho.", "Junho de 2026")],
  },
  {
    id: "jardinagem-horta", titulo: "Começar uma horta em casa",
    descricao: "Escolha de vasos, terra, mudas e cuidados de rega. Também ajudo a recuperar plantas que estão sofrendo.",
    categoria: "jardinagem", formato: "hibrido", duracaoHoras: 1, regiao: "Zona Oeste", disponibilidade: ["manha", "fim-de-semana"], acessibilidade: ["ritmo-proprio"], pessoaId: "dona-neide",
    avaliacoes: [av("a8", "Marina", 5, "Minha horta de temperos está viva graças a ela.", "Julho de 2026")],
  },
  {
    id: "violao-iniciante", titulo: "Primeiros acordes no violão",
    descricao: "Uma hora para aprender a postura, afinação e os primeiros acordes. Tenho violão extra para usar no encontro.",
    categoria: "musica", formato: "presencial", duracaoHoras: 1, regiao: "Centro", disponibilidade: ["tarde", "noite"], acessibilidade: [], pessoaId: "caio",
    avaliacoes: [av("a9", "Rafa", 4, "Muito didático e sem pressa.", "Julho de 2026")],
  },
];

export const usuarioAtual: Pessoa = pessoas[0]!;

export const trocas: Troca[] = [
  { id: "t1", habilidadeId: "ingles-conversacao", papel: "solicitante", contraparte: "Marina", status: "aguardando", data: "22 de agosto", horario: "19h00", formato: "remoto", observacao: "Pedido enviado há 2 dias." },
  { id: "t2", habilidadeId: "costura-ajustes", papel: "solicitante", contraparte: "Helena", status: "aceita", data: "25 de agosto", horario: "10h00", formato: "presencial", observacao: "Endereço exato é compartilhado no dia anterior." },
  { id: "t3", habilidadeId: "informatica-basica", papel: "prestador", contraparte: "Neide", status: "reagendada", data: "27 de agosto", horario: "15h00", formato: "presencial", observacao: "Novo horário sugerido por Neide, aguardando sua confirmação." },
  { id: "t4", habilidadeId: "informatica-basica", papel: "prestador", contraparte: "Helena", status: "concluida", data: "2 de agosto", horario: "14h00", formato: "presencial", avaliada: true },
  { id: "t5", habilidadeId: "ingles-conversacao", papel: "solicitante", contraparte: "Marina", status: "concluida", data: "28 de julho", horario: "19h00", formato: "remoto", avaliada: false },
  { id: "t6", habilidadeId: "violao-iniciante", papel: "solicitante", contraparte: "Caio", status: "recusada", data: "18 de julho", horario: "20h00", formato: "presencial", observacao: "Caio estava sem agenda naquela semana." },
  { id: "t7", habilidadeId: "jardinagem-horta", papel: "solicitante", contraparte: "Neide", status: "cancelada", data: "10 de julho", horario: "09h00", formato: "presencial", observacao: "Cancelada por você por causa da chuva." },
];

export const movimentos: MovimentoTempo[] = [
  { id: "m1", descricao: "Ajuda com informática", horas: 1, data: "2 de agosto", tipo: "recebido" },
  { id: "m2", descricao: "Aula de inglês", horas: -1, data: "28 de julho", tipo: "utilizado" },
  { id: "m3", descricao: "Ajuda com informática", horas: 1, data: "21 de julho", tipo: "recebido" },
  { id: "m4", descricao: "Organização de arquivos", horas: 1, data: "14 de julho", tipo: "recebido" },
  { id: "m5", descricao: "Conserto de barra de calça", horas: -1, data: "6 de julho", tipo: "utilizado" },
  { id: "m6", descricao: "Ajuda com informática", horas: 1, data: "29 de junho", tipo: "recebido" },
];

export const saldoCreditos = movimentos.reduce((total, m) => total + m.horas, 0);

export const rotulosStatus: Record<StatusTroca, string> = {
  aguardando: "Aguardando resposta", aceita: "Aceita", reagendada: "Reagendada", recusada: "Recusada", concluida: "Troca concluída", cancelada: "Cancelada",
};

export function getPessoa(id: string): Pessoa { return pessoas.find((p) => p.id === id) ?? usuarioAtual; }
export function getHabilidade(id: string): Habilidade | undefined { return habilidades.find((h) => h.id === id); }
export function getCategoria(id: string): Categoria | undefined { return categorias.find((c) => c.id === id); }
export function rotuloFormato(f: Formato): string { return formatos.find((x) => x.id === f)?.rotulo ?? f; }
export function rotuloDisponibilidade(id: string): string { return disponibilidades.find((d) => d.id === id)?.rotulo ?? id; }
export function rotuloAcessibilidade(id: string): string { return recursosAcessibilidade.find((r) => r.id === id)?.rotulo ?? id; }
