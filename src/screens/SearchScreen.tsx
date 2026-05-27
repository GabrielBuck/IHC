import { StyleSheet, Text, TextInput, View } from "react-native";

import { BookCard } from "../components/BookCard";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { books } from "../data/books";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book } from "../types/Book";
import { accessibilityLabels } from "../utils/accessibility";

interface SearchScreenProps {
  onSelectBook: (book: Book) => void;
}

export function SearchScreen({ onSelectBook }: SearchScreenProps) {
  return (
    <ScreenContainer>
      <Header
        title="Buscar"
        subtitle="Encontre livros por título, autor ou gênero e adicione à sua biblioteca."
      />

      <TextInput
        accessibilityLabel={accessibilityLabels.searchInput}
        placeholder="Buscar livros"
        placeholderTextColor={colors.mutedText}
        style={styles.searchInput}
      />

      <View style={styles.filters}>
        <Text style={styles.filter}>Título</Text>
        <Text style={styles.filter}>Autor</Text>
        <Text style={styles.filter}>Gênero</Text>
      </View>

      <View style={styles.list}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} onPress={onSelectBook} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text,
    fontSize: typography.body,
    minHeight: 48,
    paddingHorizontal: spacing.md
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  filter: {
    backgroundColor: "#F4E7EA",
    borderRadius: 999,
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: "700",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  list: {
    gap: spacing.sm
  }
});
