import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book, BookStatus } from "../types/Book";
import { accessibilityLabels } from "../utils/accessibility";

interface BookCardProps {
  book: Book;
  onPress?: (book: Book) => void;
}

const statusLabels: Record<BookStatus, string> = {
  lendo: "Lendo",
  lido: "Lido",
  quero_ler: "Quero ler"
};

export function BookCard({ book, onPress }: BookCardProps) {
  const progress = Math.round((book.pagesRead / book.pages) * 100);

  return (
    <Pressable
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityLabel={`${accessibilityLabels.openBookDetails}: ${book.title}`}
      onPress={() => onPress?.(book)}
      style={({ pressed }) => [styles.card, pressed && onPress && styles.pressed]}
    >
      <View style={[styles.cover, { backgroundColor: book.coverColor }]}>
        <Text style={styles.coverText}>{book.title.slice(0, 2).toUpperCase()}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>
        <Text style={styles.meta}>
          {book.genre} • {book.publishedYear}
        </Text>
        <View style={styles.row}>
          <Text style={styles.badge}>{statusLabels[book.status]}</Text>
          <Text style={styles.rating}>Nota {book.averageRating.toFixed(1)}</Text>
        </View>
        <Text style={styles.progressText}>
          Progresso: {progress}% ({book.pagesRead}/{book.pages} paginas)
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md
  },
  pressed: {
    opacity: 0.86
  },
  cover: {
    alignItems: "center",
    borderRadius: 6,
    height: 96,
    justifyContent: "center",
    width: 64
  },
  coverText: {
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: "800"
  },
  content: {
    flex: 1,
    gap: spacing.xs
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  author: {
    color: colors.mutedText,
    fontSize: typography.small
  },
  meta: {
    color: colors.mutedText,
    fontSize: typography.caption
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  badge: {
    backgroundColor: "#F4E7EA",
    borderRadius: 999,
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: "700",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs
  },
  rating: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: "700"
  },
  progressText: {
    color: colors.mutedText,
    fontSize: typography.caption
  }
});
