# Requisitos iniciais do TempoJusto

## Requisitos funcionais

- Permitir cadastro e login por e-mail/senha.
- Permitir criação e edição de perfil.
- Exibir apenas dados públicos mínimos: primeiro nome, bio, região aproximada e habilidades.
- Permitir publicar uma habilidade/serviço.
- Permitir buscar e filtrar habilidades.
- Permitir visualizar detalhe de uma habilidade.
- Permitir solicitar uma troca de 1 hora.
- Permitir aceitar, recusar, cancelar ou reagendar uma troca.
- Permitir confirmar realização da troca pelas duas partes.
- Registrar movimento de Crédito-Hora somente após confirmação dupla.
- Permitir avaliação bidirecional após troca concluída.
- Permitir denúncia e bloqueio em evolução futura.

## Requisitos não funcionais

- Interface responsiva em 360 px, 390 px, tablet e desktop.
- Carregamento leve e navegação curta.
- Linguagem clara e humana.
- Componentes reutilizáveis.
- Dados mockados centralizados enquanto não houver backend real.
- Backend futuro com Supabase.
- Segurança por políticas RLS.
- Separação entre dados públicos e privados.

## Requisitos de acessibilidade

- HTML semântico.
- Hierarquia correta de headings.
- Landmarks.
- Skip link.
- Navegação completa por teclado.
- Foco visível.
- Contraste adequado.
- Labels em todos os campos.
- Mensagens de erro associadas aos campos.
- Informação nunca dependente apenas de cor.
- Áreas clicáveis adequadas.
- Suporte a leitores de tela.
- Respeito a `prefers-reduced-motion`.

## Requisitos de segurança e confiança

- Não expor endereço completo publicamente.
- Não expor sobrenome, telefone ou dados sensíveis no perfil público.
- Usar localização aproximada.
- Confirmar e-mail.
- Registrar histórico de trocas.
- Usar avaliação bidirecional.
- Impedir movimentação indevida de Créditos-Hora.
- Garantir que créditos só sejam gerados quando uma troca real for confirmada.

## Regras de domínio

- 1 hora de contribuição = 1 Crédito-Hora.
- Créditos-Hora não são dinheiro.
- Créditos-Hora não podem ser comprados ou vendidos.
- A troca deve ocorrer entre pessoas diferentes.
- A movimentação de crédito exige confirmação das duas partes.
