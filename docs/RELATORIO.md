# Relatório Final do Projeto BookLog

## Identificação

Projeto: BookLog  
Disciplina: Interação Humano-Computador  
Grupo: Gabriel Nottoli Buck — RA: 10425384; Julia Andrade — RA: 10427828

## 1. Descrição do projeto

BookLog é um aplicativo mobile voltado para leitores que desejam organizar suas
leituras, registrar livros lidos, acompanhar livros em andamento, salvar livros
desejados, avaliar obras, escrever resenhas, visualizar recomendações e interagir
com outros leitores.

O projeto foi desenvolvido como protótipo acadêmico de Interação
Humano-Computador. A aplicação implementada é um front-end navegável em React
Native, Expo e TypeScript, com dados mockados locais. O objetivo é demonstrar os
fluxos principais, a organização da interface e decisões de usabilidade e
acessibilidade.

## 2. Ciclo de desenvolvimento

### 2.1 Análise de requisitos

O público-alvo do BookLog é formado por leitores frequentes, leitores casuais e
participantes de clubes de leitura. Durante a análise, foram identificadas as
seguintes necessidades:

- organizar livros por status de leitura;
- acompanhar progresso de leitura de forma rápida;
- encontrar novas obras por busca e recomendação;
- registrar avaliações e resenhas;
- participar de grupos de leitura;
- acessar uma interface mobile simples, clara e legível.

Requisitos funcionais principais:

- permitir cadastro e login visual do usuário;
- permitir busca de livros por título, autor ou gênero;
- permitir visualização de detalhes de livros;
- permitir adicionar livros à biblioteca pessoal;
- permitir marcar livros como quero ler, lendo ou lido;
- permitir registrar progresso de leitura;
- permitir avaliar e escrever resenhas;
- permitir visualizar feed de resenhas;
- permitir acessar perfil, grupos e configurações.

Requisitos não funcionais principais:

- interface adequada para mobile;
- navegação clara e consistente;
- textos objetivos e legíveis;
- contraste adequado;
- botões com área de toque confortável;
- código organizado em componentes reutilizáveis;
- estrutura preparada para futura integração com API.

### 2.2 Projeto

Na fase de projeto foram definidos personas, cenários de uso, tarefas principais,
protótipo de baixa fidelidade e telas necessárias para representar o fluxo do
BookLog.

As personas usadas foram Ana Souza, Lucas Ferreira e Marina Nottoli, representando
perfis diferentes de leitura: leitora frequente, leitor casual e participante de
clubes. Os cenários abordam registrar livro como lido, buscar recomendação,
publicar resenha, participar de grupo e acompanhar progresso.

O protótipo de baixa fidelidade foi representado por wireframes textuais e
complementado pelo protótipo visual no Figma. As telas definidas foram: Login,
Cadastro, Feed, Busca, Detalhes do Livro, Biblioteca, Resenha, Perfil, Grupos e
Configurações.

### 2.3 Implementação

A implementação foi feita como protótipo front-end usando:

- React Native;
- Expo;
- TypeScript;
- componentes reutilizáveis;
- dados mockados locais;
- navegação simulada com estado local;
- cuidados básicos de acessibilidade.

As telas implementadas estão em `src/screens`. Os componentes compartilhados estão
em `src/components`, incluindo botões acessíveis, cards de livros, cards de
resenha, card de progresso, container de tela, cabeçalho e estado vazio. Os dados
mockados estão em `src/data`, com livros, usuários, grupos e resenhas. As cores,
tipografia e espaçamentos estão em `src/styles`.

A acessibilidade aparece no código por meio de `accessibilityRole`,
`accessibilityLabel`, botões com altura mínima confortável, contraste entre fundo e
texto, textos legíveis e status descritos por texto além de cor.

### 2.4 Testes

Os testes previstos para esta entrega foram testes de navegação, testes visuais,
testes de clareza de interface e testes de acessibilidade básica.

Foram verificados os seguintes pontos:

- login e cadastro visual acessam o fluxo principal;
- abas inferiores permitem navegar entre as telas;
- busca apresenta lista de livros mockados;
- cards de livros abrem detalhes;
- biblioteca mostra seções lendo, lidos e quero ler;
- tela de resenha permite selecionar nota visualmente;
- perfil exibe estatísticas e atividades;
- grupos mostram livro atual, descrição e participantes;
- configurações reforçam acessibilidade;
- botões possuem rótulos de acessibilidade;
- textos e botões mantêm legibilidade no formato mobile.

## 3. Arquitetura do sistema

A arquitetura conceitual do BookLog é:

```text
Usuário → Aplicativo Mobile BookLog → Camada de Serviços/API → Banco de Dados
```

Nesta entrega, a camada de API e o banco de dados são representados de forma
conceitual. A aplicação usa dados mockados locais para simular livros, usuários,
resenhas e grupos. Essa abordagem permite demonstrar a experiência de uso sem
exigir backend, autenticação real ou persistência.

Em uma evolução futura, a camada mobile poderia consumir uma API REST ou GraphQL,
com autenticação, banco de dados, armazenamento de resenhas e sincronização entre
dispositivos.

## 4. Personas

### Ana Souza

Ana tem 22 anos, é universitária e leitora frequente. Ela lê vários livros ao
longo do semestre e precisa organizar histórico, progresso e resenhas. Usaria o
BookLog para registrar leituras, acompanhar páginas lidas e compartilhar opiniões.

### Lucas Ferreira

Lucas tem 27 anos e é leitor casual. Ele gosta de ler, mas costuma escolher livros
por recomendação. Precisa de sugestões simples e confiáveis. Usaria o BookLog para
buscar livros por gênero, ver avaliações e salvar títulos para ler depois.

### Marina Nottoli

Marina tem 31 anos e participa de clubes de leitura. Ela valoriza discussões,
recomendações e interação com outros leitores. Usaria o BookLog para acompanhar
grupos, publicar resenhas e participar de leituras coletivas.

## 5. Cenários

### Registrar livro como lido

Ana termina uma leitura e acessa sua biblioteca. Ela abre o livro, altera o status
para lido, avalia a obra e registra uma resenha curta. O resultado esperado é que o
livro apareça na seção de lidos e a resenha possa aparecer no feed.

### Buscar recomendação

Lucas quer escolher uma nova leitura. Ele abre a busca, filtra por gênero, compara
notas médias e salva um livro em quero ler. O resultado esperado é encontrar uma
opção clara sem precisar percorrer muitas telas.

### Publicar resenha

Ana acessa a tela de resenha, escolhe uma nota de 1 a 5, escreve um comentário
objetivo e publica. O resultado esperado é que a resenha fique disponível no feed.

### Participar de grupo

Marina acessa Grupos, consulta o livro atual de cada comunidade e entra em um grupo
de interesse. O resultado esperado é ter acesso a discussões e leituras coletivas.

### Acompanhar progresso

Ana abre a tela inicial e visualiza o card "Continuar lendo", com porcentagem,
páginas lidas e total de páginas. O resultado esperado é retomar a leitura com
rapidez.

## 6. Protótipo de baixa fidelidade

O protótipo de baixa fidelidade foi planejado com wireframes simples para organizar
hierarquia, fluxo e elementos essenciais antes da implementação visual. As telas
documentadas incluem Login, Cadastro, Feed, Busca, Detalhes do Livro, Biblioteca,
Resenha, Perfil, Grupos e Configurações.

Protótipo visual no Figma:
[BookLog mobile app design](https://www.figma.com/make/MmezgsSChpxSqihPPcEtjg/BookLog-mobile-app-design?t=CiGCEmiSitwMmyHb-1)

## 7. Principais telas

- Login: entrada visual do usuário com e-mail, senha, criação de conta e
  recuperação de senha.
- Cadastro: criação visual de perfil de leitor com nome, e-mail e senha.
- Feed: saudação, progresso de leitura e resenhas recentes da comunidade.
- Busca: campo de busca, filtros por título, autor e gênero, e lista de livros.
- Detalhes do Livro: capa visual, sinopse, nota média, status e ações.
- Biblioteca: livros organizados em lendo, lidos e quero ler.
- Resenha: seleção visual de nota, campo de texto e botão de publicação.
- Perfil: avatar visual, estatísticas, gêneros favoritos e atividades.
- Grupos: comunidades de leitura com livro atual e número de participantes.
- Configurações: acessibilidade, tema, fonte, notificações, privacidade e saída.

## 8. Explicação da implementação

A estrutura do projeto foi organizada da seguinte forma:

- `src/screens`: contém as telas principais do aplicativo.
- `src/components`: contém componentes reutilizáveis, como `AccessibleButton`,
  `BookCard`, `ReviewCard`, `ProgressCard`, `ScreenContainer`, `Header` e
  `EmptyState`.
- `src/data`: contém dados mockados de livros, usuários, resenhas e grupos.
- `src/styles`: centraliza cores, tipografia e espaçamentos.
- `src/types`: define os tipos TypeScript para livros, usuários, resenhas e
  grupos.
- `src/utils`: concentra utilidades de acessibilidade, como rótulos padronizados.
- `src/navigation`: implementa a navegação simulada por estado local.

O arquivo `src/navigation/AppNavigator.tsx` controla a tela ativa e o livro
selecionado. A navegação inferior permite acessar Início, Buscar, Biblioteca,
Grupos, Perfil e Ajustes. A busca e a biblioteca permitem abrir detalhes de um
livro. A tela de detalhes permite acessar a tela de resenha.

## 9. Principais dificuldades

As principais dificuldades do projeto foram:

- organizar várias funcionalidades sem poluir a interface;
- definir fluxos simples para busca, biblioteca, resenha e grupos;
- equilibrar rede social e organização pessoal de leitura;
- manter padronização visual entre todas as telas;
- representar acessibilidade de forma prática no protótipo;
- alinhar documentação, protótipo e implementação;
- limitar o escopo para uma entrega acadêmica sem backend real.

## 10. Uso de ferramentas de IA

Ferramentas de IA utilizadas:

- ChatGPT: apoio no brainstorm, estruturação de documentação, revisão textual,
  criação de personas, cenários e roteiro.
- Google NotebookLM: apoio na organização visual e orientação dos slides.
- Google Omni ou ferramenta equivalente: apoio no planejamento do vídeo de
  apresentação.
- GitHub Codex: apoio na estruturação do repositório, implementação assistida,
  organização dos arquivos e documentação técnica.

O grupo revisou e adaptou esses apoios, garantindo coerência com a proposta do
BookLog e com os requisitos da disciplina.

## 11. Links da entrega

| Material | Link |
| --- | --- |
| Repositório | [github.com/GabrielBuck/IHC](https://github.com/GabrielBuck/IHC) |
| Protótipo no Figma | [BookLog mobile app design](https://www.figma.com/make/MmezgsSChpxSqihPPcEtjg/BookLog-mobile-app-design?t=CiGCEmiSitwMmyHb-1) |
| Vídeo |  |
