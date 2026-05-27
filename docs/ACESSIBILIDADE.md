# Acessibilidade

O BookLog aplica acessibilidade básica no código e no desenho da interface. O foco
é tornar a navegação mobile mais legível, previsível e confortável.

## Contraste

A paleta foi definida com fundo claro, texto escuro e cor primária de alto
contraste. As cores principais estão em `src/styles/colors.ts`.

## Textos legíveis

Os tamanhos de texto foram centralizados em `src/styles/typography.ts`. A interface
usa títulos, subtítulos, corpo e legendas com hierarquia clara.

## Botões grandes

O componente `AccessibleButton` define altura mínima de 48 pixels, padding interno
e contraste adequado. Isso reduz erros de toque em dispositivos móveis.

## Labels de acessibilidade

Botões e ações principais possuem `accessibilityLabel`, incluindo login, cadastro,
busca, adicionar livro, publicar resenha, abrir detalhes e configurações.

## Ícones e texto

O protótipo não depende exclusivamente de ícones. Os botões e abas usam texto claro,
evitando ambiguidade para usuários que não reconhecem símbolos.

## Status sem depender apenas de cor

Os status de livros aparecem como texto: "Lendo", "Lido" e "Quero ler". A cor é
apenas apoio visual, não a única forma de compreensão.

## Organização visual

As telas usam cards, espaçamento consistente, cabeçalhos objetivos e navegação
inferior fixa após o login. Isso reduz a carga cognitiva e torna o app previsível.

## Linguagem simples

Os textos de botões e descrições usam termos diretos, como "Entrar", "Buscar",
"Adicionar à biblioteca" e "Publicar resenha".

## Opções futuras

A tela Configurações apresenta opções planejadas para:

- aumento de fonte;
- tema claro ou escuro;
- controle de notificações;
- privacidade do perfil.

Essas opções reforçam a preocupação com personalização e inclusão em versões
futuras.

## Onde aparece no projeto

- `src/components/AccessibleButton.tsx`
- `src/navigation/AppNavigator.tsx`
- `src/utils/accessibility.ts`
- `src/screens/SettingsScreen.tsx`
- `src/styles/colors.ts`
- `src/styles/typography.ts`
