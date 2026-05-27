export type BookStatus = "lendo" | "lido" | "quero_ler";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  averageRating: number;
  status: BookStatus;
  pages: number;
  pagesRead: number;
  coverColor: string;
  publishedYear: number;
}
