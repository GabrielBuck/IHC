import type { Review } from "../types/Review";

export const reviews: Review[] = [
  {
    id: "review-1",
    userName: "Ana Souza",
    bookTitle: "A Biblioteca da Meia-Noite",
    rating: 4,
    excerpt:
      "A leitura funciona bem para refletir sobre escolhas e expectativas. A linguagem é simples e envolvente.",
    createdAt: "Hoje"
  },
  {
    id: "review-2",
    userName: "Lucas Ferreira",
    bookTitle: "Jogos Vorazes",
    rating: 5,
    excerpt:
      "A narrativa prende desde o começo e apresenta uma crítica social fácil de acompanhar.",
    createdAt: "Ontem"
  },
  {
    id: "review-3",
    userName: "Marina Nottoli",
    bookTitle: "Frankenstein",
    rating: 5,
    excerpt:
      "Um clássico que continua atual pela forma como discute responsabilidade, solidão e reconhecimento.",
    createdAt: "2 dias atrás"
  },
  {
    id: "review-4",
    userName: "Clara Andrade",
    bookTitle: "Dom Casmurro",
    rating: 4,
    excerpt:
      "A força do livro está na ambiguidade do narrador e na quantidade de interpretações possíveis.",
    createdAt: "3 dias atrás"
  }
];
