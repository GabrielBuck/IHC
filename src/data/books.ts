import type { Book } from "../types/Book";

export const books: Book[] = [
  {
    id: "book-1",
    title: "A Biblioteca da Meia-Noite",
    author: "Matt Haig",
    genre: "Ficção contemporânea",
    synopsis:
      "Uma leitora acompanha a jornada de Nora Seed por possibilidades de vida, escolhas e recomeços.",
    averageRating: 4.4,
    status: "lendo",
    pages: 308,
    pagesRead: 184,
    coverColor: "#8B1E2D",
    publishedYear: 2020
  },
  {
    id: "book-2",
    title: "Jogos Vorazes",
    author: "Suzanne Collins",
    genre: "Distopia",
    synopsis:
      "Katniss Everdeen participa de uma competição brutal em uma sociedade marcada por desigualdade e controle.",
    averageRating: 4.6,
    status: "lido",
    pages: 374,
    pagesRead: 374,
    coverColor: "#5F121E",
    publishedYear: 2008
  },
  {
    id: "book-3",
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Clássico",
    synopsis:
      "Um romance sobre criação, responsabilidade e isolamento, considerado uma das bases da ficção científica.",
    averageRating: 4.5,
    status: "quero_ler",
    pages: 280,
    pagesRead: 0,
    coverColor: "#2E7D32",
    publishedYear: 1818
  },
  {
    id: "book-4",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasia",
    synopsis:
      "Bilbo Bolseiro sai de sua rotina para participar de uma aventura com anões, mapas e desafios inesperados.",
    averageRating: 4.7,
    status: "lendo",
    pages: 336,
    pagesRead: 112,
    coverColor: "#F9A825",
    publishedYear: 1937
  },
  {
    id: "book-5",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Clássico brasileiro",
    synopsis:
      "Bentinho narra memórias, ciúmes e dúvidas em uma das obras mais debatidas da literatura brasileira.",
    averageRating: 4.3,
    status: "lido",
    pages: 256,
    pagesRead: 256,
    coverColor: "#C62828",
    publishedYear: 1899
  },
  {
    id: "book-6",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    genre: "Sátira política",
    synopsis:
      "Uma fábula política sobre poder, linguagem e manipulação em uma fazenda governada pelos próprios animais.",
    averageRating: 4.6,
    status: "lido",
    pages: 152,
    pagesRead: 152,
    coverColor: "#1F1F1F",
    publishedYear: 1945
  },
  {
    id: "book-7",
    title: "O Conto da Aia",
    author: "Margaret Atwood",
    genre: "Distopia",
    synopsis:
      "Uma narrativa sobre controle social, direitos e resistência em uma sociedade autoritária.",
    averageRating: 4.4,
    status: "quero_ler",
    pages: 368,
    pagesRead: 0,
    coverColor: "#666666",
    publishedYear: 1985
  },
  {
    id: "book-8",
    title: "Pequeno Manual Antirracista",
    author: "Djamila Ribeiro",
    genre: "Não ficção",
    synopsis:
      "Um guia objetivo com reflexões e ações para reconhecer e combater práticas racistas no cotidiano.",
    averageRating: 4.8,
    status: "quero_ler",
    pages: 136,
    pagesRead: 0,
    coverColor: "#2E7D32",
    publishedYear: 2019
  }
];
