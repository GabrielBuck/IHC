import type { User } from "../types/User";

export const users: User[] = [
  {
    id: "user-1",
    name: "Ana Souza",
    role: "Universitária e leitora frequente",
    favoriteGenres: ["Ficção contemporânea", "Distopia", "Clássicos"],
    booksRead: 42,
    reviewsCount: 18,
    activities: [
      "Atualizou o progresso de A Biblioteca da Meia-Noite",
      "Publicou uma resenha sobre Dom Casmurro",
      "Entrou no grupo Clube de Distopias"
    ]
  },
  {
    id: "user-2",
    name: "Lucas Ferreira",
    role: "Leitor casual",
    favoriteGenres: ["Fantasia", "Suspense", "Não ficção"],
    booksRead: 12,
    reviewsCount: 5,
    activities: [
      "Salvou O Hobbit para leitura",
      "Avaliou Jogos Vorazes com 5 estrelas"
    ]
  },
  {
    id: "user-3",
    name: "Marina Nottoli",
    role: "Participante de clubes de leitura",
    favoriteGenres: ["Literatura brasileira", "Ficção científica", "Distopia"],
    booksRead: 58,
    reviewsCount: 26,
    activities: [
      "Criou uma discussão em Mulheres na Literatura",
      "Recomendou Frankenstein para o grupo"
    ]
  },
  {
    id: "user-4",
    name: "Clara Andrade",
    role: "Leitora de clássicos",
    favoriteGenres: ["Clássico", "Romance", "Ensaio"],
    booksRead: 34,
    reviewsCount: 14,
    activities: ["Concluiu Frankenstein"]
  },
  {
    id: "user-5",
    name: "Rafael Buck",
    role: "Leitor de fantasia e distopias",
    favoriteGenres: ["Fantasia", "Distopia"],
    booksRead: 21,
    reviewsCount: 9,
    activities: ["Entrou em Leituras de Fantasia"]
  }
];
