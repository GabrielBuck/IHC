# BookLog

![React Native](https://img.shields.io/badge/React%20Native-0.74-61DAFB)
![Expo](https://img.shields.io/badge/Expo-51-000020)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![IHC](https://img.shields.io/badge/IHC-Projeto%20Acad%C3%AAmico-8B1E2D)

BookLog é um protótipo acadêmico mobile para leitores organizarem leituras,
registrarem progresso, salvarem livros desejados, avaliarem obras, escreverem
resenhas, visualizarem recomendações e interagirem com grupos de leitura.

A implementação deste repositório é um front-end em React Native com Expo,
TypeScript e dados mockados locais. O foco da entrega é demonstrar decisões de
Interação Humano-Computador, acessibilidade básica, fluxo navegável e organização
do projeto.

## Integrantes

- Gabriel Nottoli Buck — RA: 10425384
- Julia Andrade — RA: 10427828

## Links da entrega

- Repositório GitHub: [inserir link do repositório]
- Protótipo no Figma: [inserir link do protótipo]
- Vídeo de apresentação: [inserir link do vídeo]
- Relatório final: [docs/RELATORIO.md](docs/RELATORIO.md)
- Roteiro do vídeo: [docs/ROTEIRO_VIDEO.md](docs/ROTEIRO_VIDEO.md)
- Checklist de entrega: [docs/CHECKLIST_ENTREGA.md](docs/CHECKLIST_ENTREGA.md)

## Funcionalidades principais

- Login e cadastro visual de usuário.
- Feed com resenhas recentes.
- Busca de livros por título, autor ou gênero.
- Visualização de detalhes de livros.
- Biblioteca pessoal com status: lendo, lido e quero ler.
- Registro visual de progresso de leitura.
- Tela para avaliação e publicação de resenha.
- Perfil de leitor com estatísticas e atividades.
- Grupos de leitura com livro atual e participantes.
- Configurações com foco em acessibilidade.

## Telas implementadas

- Login
- Cadastro
- Início/feed
- Busca
- Detalhes do Livro
- Biblioteca
- Resenha
- Perfil
- Grupos
- Configurações

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Dados mockados locais
- Componentes reutilizáveis
- Navegação simulada com estado local

## Como rodar o projeto

```bash
npm install
npm run start
```

Com o Expo iniciado, é possível abrir o protótipo no emulador, dispositivo físico
com Expo Go ou navegador usando:

```bash
npm run web
```

## Estrutura do repositório

```text
IHC/
  docs/                 Documentação acadêmica da entrega
  src/
    components/         Componentes reutilizáveis
    data/               Dados mockados
    navigation/         Navegação simulada
    screens/            Telas do aplicativo
    styles/             Cores, tipografia e espaçamento
    types/              Tipos TypeScript
    utils/              Utilidades de acessibilidade
  assets/               Arquivos de apoio visual
```

## Acessibilidade

O protótipo aplica contraste adequado, textos legíveis, botões com área de toque
confortável, `accessibilityLabel` em ações importantes, `accessibilityRole` em
botões e abas, e status descritos por texto além de cor. A tela de Configurações
também apresenta opções planejadas de aumento de fonte e tema.

## Documentação

- [Relatório final](docs/RELATORIO.md)
- [Requisitos](docs/REQUISITOS.md)
- [Personas](docs/PERSONAS.md)
- [Cenários e tarefas](docs/CENARIOS_E_TAREFAS.md)
- [Arquitetura](docs/ARQUITETURA.md)
- [Acessibilidade](docs/ACESSIBILIDADE.md)
- [Testes](docs/TESTES.md)
- [Uso de IA](docs/USO_DE_IA.md)
- [Protótipo de baixa fidelidade](docs/PROTOTIPO_BAIXA_FIDELIDADE.md)
- [Roteiro do vídeo](docs/ROTEIRO_VIDEO.md)
- [Checklist de entrega](docs/CHECKLIST_ENTREGA.md)

## Uso de IA

Foram usadas ferramentas de IA como apoio ao brainstorm, estruturação textual,
organização do repositório, geração assistida de código e revisão de documentação.
O conteúdo foi revisado e adaptado pelo grupo. A declaração completa está em
[docs/USO_DE_IA.md](docs/USO_DE_IA.md).

## Status do projeto

Protótipo acadêmico front-end concluído para demonstração da proposta de IHC. A
arquitetura está preparada para evolução futura com API, banco de dados e
autenticação real.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte [LICENSE](LICENSE).
