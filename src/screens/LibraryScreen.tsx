import { StyleSheet, Text, View } from "react-native";

import { BookCard } from "../components/BookCard";
import { EmptyState } from "../components/EmptyState";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { books } from "../data/books";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book, BookStatus } from "../types/Book";

interface LibraryScreenProps {
  onSelectBook: (book: Book) => void;
}

const sections: { title: string; status: BookStatus }[] = [
  { title: "Lendo", status: "lendo" },
  { title: "Lidos", status: "lido" },
  { title: "Quero ler", status: "quero_ler" }
];

export function LibraryScreen({ onSelectBook }: LibraryScreenProps) {
  return (
    <ScreenContainer>
      <Header
        title="Biblioteca"
        subtitle="Acompanhe seus livros por status e progresso de leitura."
      />

      {sections.map((section) => {
        const sectionBooks = books.filter((book) => book.status === section.status);

        return (
          <View key={section.status} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {sectionBooks.length > 0 ? (
              sectionBooks.map((book) => (
                <BookCard key={book.id} book={book} onPress={onSelectBook} />
              ))
            ) : (
              <EmptyState
                title="Nenhum livro nesta seção"
                message="Use a busca para adicionar novos livros à sua biblioteca."
              />
            )}
          </View>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.sm
  },
  sectionTitle: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: "800"
  }
});
