export interface User {
  id: string;
  name: string;
  role: string;
  favoriteGenres: string[];
  booksRead: number;
  reviewsCount: number;
  activities: string[];
}
