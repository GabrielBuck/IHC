import { StyleSheet, Text, View } from "react-native";

import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book } from "../types/Book";

interface ProgressCardProps {
  book: Book;
}

export function ProgressCard({ book }: ProgressCardProps) {
  const progress = Math.round((book.pagesRead / book.pages) * 100);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Continuar lendo</Text>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.meta}>
        {progress}% concluido • {book.pagesRead} de {book.pages} paginas
      </Text>
      <View
        accessibilityLabel={`Progresso de leitura: ${progress} por cento`}
        accessibilityRole="progressbar"
        style={styles.progressTrack}
      >
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    gap: spacing.sm,
    padding: spacing.md
  },
  label: {
    color: "#F7D7DD",
    fontSize: typography.small,
    fontWeight: "700"
  },
  title: {
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: "800"
  },
  meta: {
    color: colors.surface,
    fontSize: typography.small
  },
  progressTrack: {
    backgroundColor: "#B96672",
    borderRadius: 999,
    height: 10,
    overflow: "hidden"
  },
  progressFill: {
    backgroundColor: colors.surface,
    borderRadius: 999,
    height: "100%"
  }
});
