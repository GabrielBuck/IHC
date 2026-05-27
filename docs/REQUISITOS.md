# Requisitos do BookLog

## Requisitos funcionais

| ID | Requisito | Prioridade | Evidência no protótipo |
| --- | --- | --- | --- |
| RF01 | Permitir cadastro e login visual do usuário. | Alta | Telas Login e Cadastro |
| RF02 | Permitir busca de livros por título, autor ou gênero. | Alta | Tela Busca |
| RF03 | Permitir visualizar detalhes de um livro. | Alta | Tela Detalhes do Livro |
| RF04 | Permitir adicionar livro à biblioteca pessoal. | Alta | Botão em Detalhes do Livro |
| RF05 | Permitir marcar livro como "quero ler", "lendo" ou "lido". | Alta | Cards e Biblioteca |
| RF06 | Permitir registrar progresso de leitura. | Média | Card Continuar lendo |
| RF07 | Permitir avaliar livros. | Alta | Tela Resenha |
| RF08 | Permitir escrever resenhas. | Alta | Tela Resenha |
| RF09 | Permitir visualizar feed de resenhas. | Média | Tela Início |
| RF10 | Permitir acessar perfil do usuário. | Média | Tela Perfil |
| RF11 | Permitir visualizar grupos de leitura. | Média | Tela Grupos |
| RF12 | Permitir acessar configurações de acessibilidade. | Média | Tela Configurações |

## Requisitos não funcionais

| ID | Requisito | Justificativa | Evidência no protótipo |
| --- | --- | --- | --- |
| RNF01 | Interface simples e adequada para mobile. | Facilitar uso em telas pequenas. | Layout em cards e navegação inferior |
| RNF02 | Navegação clara e consistente. | Reduzir esforço cognitivo. | Abas fixas após login |
| RNF03 | Textos objetivos e legíveis. | Melhorar compreensão das ações. | Tipografia centralizada em `src/styles` |
| RNF04 | Contraste adequado. | Apoiar leitura e acessibilidade visual. | Paleta definida em `colors.ts` |
| RNF05 | Botões com área de toque confortável. | Evitar erros de toque. | `AccessibleButton` com altura mínima |
| RNF06 | Código organizado em componentes reutilizáveis. | Facilitar manutenção. | Pasta `src/components` |
| RNF07 | Estrutura preparada para futura integração com API. | Permitir evolução do produto. | Separação entre telas, dados e tipos |
| RNF08 | Dados mockados para demonstração acadêmica. | Simular uso sem backend real. | Pasta `src/data` |

## Escopo da entrega

A entrega atual implementa um protótipo front-end acadêmico, sem backend real,
autenticação funcional ou banco de dados. A proposta é demonstrar fluxos,
usabilidade, acessibilidade básica e organização de interface.
