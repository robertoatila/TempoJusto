# TempoJusto — Apresentação ampla

## 1. Capa

**TempoJusto — Seu tempo também tem valor.**

Banco comunitário de tempo para trocar ajuda, conhecimento e habilidades com segurança, acessibilidade e confiança.

## 2. O contexto

Todos têm algo a ensinar. Nem todos conseguem acessar ajuda quando precisam.

Ideias-chave:

- tempo como recurso comunitário;
- saberes simples do cotidiano;
- rede de apoio que pode circular melhor.

## 3. O problema

O problema não é só falta de serviço. É falta de conexão confiável, acessível e justa entre quem sabe ajudar e quem precisa de apoio.

Principais barreiras:

- financeira;
- falta de rede;
- baixa confiança.

## 4. Ideia central

O TempoJusto funciona como um banco comunitário de tempo.

Fluxo resumido:

1. uma pessoa ajuda por 1 hora;
2. recebe 1 Crédito-Hora;
3. usa esse crédito para receber 1 hora de ajuda de outra pessoa.

## 5. O que é e o que não é

É:

- rede de apoio local;
- sistema de troca de horas;
- projeto de inclusão e colaboração;
- ferramenta de organização comunitária.

Não é:

- fintech;
- criptomoeda;
- investimento;
- marketplace agressivo;
- venda de serviços pagos.

## 6. Público-alvo

- estudantes;
- jovens em formação;
- trabalhadores;
- autônomos;
- aposentados;
- comunidade local.

## 7. Personas

### Lucas, 17

Estudante técnico. Oferece ajuda com informática básica e quer praticar inglês.

### Helena, 64

Costureira experiente. Oferece costura e ajustes e precisa de apoio digital.

## 8. Fluxo completo da troca

1. Perfil;
2. oferta;
3. busca;
4. solicitação;
5. agenda;
6. confirmação;
7. crédito;
8. avaliação.

Regra crítica: o Crédito-Hora só é movimentado após confirmação das duas pessoas.

## 9. Arquitetura da experiência

Telas públicas:

- Início;
- Explorar;
- Detalhe de Serviço.

Telas autenticadas:

- Oferecer;
- Minhas Trocas;
- Carteira de Tempo;
- Perfil.

## 10. O que a primeira versão precisa mostrar

- Home com proposta clara;
- busca e filtros;
- detalhe do serviço;
- publicação guiada;
- status das trocas;
- carteira de tempo;
- perfil com reputação e segurança.

## 11. Modelo de Créditos-Hora

Entrada: +1h quando o usuário ajuda alguém.

Disponível: saldo de tempo para solicitar ajuda.

Saída: -1h quando o usuário recebe ajuda.

Sem compra, venda, juros ou cotação.

## 12. Segurança e confiança

- E-mail verificado;
- localização aproximada;
- confirmação dupla;
- avaliações bidirecionais;
- denúncia e bloqueio;
- regras de convivência.

## 13. Acessibilidade

Acessibilidade é requisito de arquitetura.

Pontos essenciais:

- semântica;
- navegação por teclado;
- contraste;
- mensagens de erro associadas;
- respeito a redução de movimento.

## 14. Primeiro MVP funcional

O MVP deve validar:

- conta;
- oferta;
- descoberta;
- troca;
- tempo;
- avaliação.

Critério de sucesso: uma pessoa consegue oferecer uma hora, outra consegue solicitar, ambas confirmam e o histórico de tempo atualiza corretamente.

## 15. Base técnica planejada

Frontend:

- TanStack Start;
- TypeScript;
- Tailwind/shadcn;
- Lucide Icons.

Backend:

- Supabase Auth;
- PostgreSQL;
- RLS por usuário;
- triggers para créditos.

Domínio:

- profiles;
- skills;
- exchanges;
- time_movements;
- reviews.

## 16. Impacto esperado

- inclusão;
- autonomia;
- colaboração;
- pertencimento.

Resultado desejado: menos isolamento, mais troca de conhecimento e mais confiança comunitária.

## 17. Próximos passos

1. Ideação ampla e apresentação;
2. protótipo ajustado ao discurso;
3. backend real e autenticação;
4. testes de usabilidade e acessibilidade;
5. moderação, notificações e painel de impacto.

## 18. Encerramento

Quando uma comunidade reconhece o valor do tempo, ela descobre que todo mundo tem algo para ensinar e algo para aprender.
