import { StyleSheet, Text, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ProgressCard } from "../components/ProgressCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book } from "../types/Book";
import { accessibilityLabels } from "../utils/accessibility";

interface BookDetailsScreenProps {
  book: Book;
  onReview: () => void;
}

export function BookDetailsScreen({ book, onReview }: BookDetailsScreenProps) {
  return (
    <ScreenContainer>
      <Header
        title="Detalhes do livro"
        subtitle="Consulte informações, status e ações rápidas para sua biblioteca."
      />

      <View style={styles.hero}>
        <View style={[styles.cover, { backgroundColor: book.coverColor }]}>
          <Text style={styles.coverText}>{book.title.slice(0, 2).toUpperCase()}</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.rating}>Nota média {book.averageRating.toFixed(1)}/5</Text>
          <Text style={styles.status}>Status: {statusText(book.status)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sinopse</Text>
        <Text style={styles.text}>{book.synopsis}</Text>
      </View>

      <ProgressCard book={book} />

      <View style={styles.actions}>
        <AccessibleButton
          accessibilityLabel={accessibilityLabels.addBookButton}
          onPress={() => undefined}
          title="Adicionar à biblioteca"
        />
        <AccessibleButton
          accessibilityLabel="Abrir tela para escrever resenha"
          onPress={onReview}
          title="Escrever resenha"
          variant="ghost"
        />
      </View>
    </ScreenContainer>
  );
}

function statusText(status: Book["status"]) {
  if (status === "lendo") {
    return "Lendo";
  }

  if (status === "lido") {
    return "Lido";
  }

  return "Quero ler";
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md
  },
  cover: {
    alignItems: "center",
    borderRadius: 8,
    height: 144,
    justifyContent: "center",
    width: 96
  },
  coverText: {
    color: colors.surface,
    fontSize: typography.title,
    fontWeight: "900"
  },
  summary: {
    flex: 1,
    gap: spacing.xs
  },
  title: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: "900"
  },
  author: {
    color: colors.mutedText,
    fontSize: typography.body
  },
  rating: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: "800"
  },
  status: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: "700"
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.xs,
    padding: spacing.md
  },
  cardTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  text: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 22
  },
  actions: {
    gap: spacing.sm
  }
});
