import { StyleSheet, Text, View } from "react-native";

import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Review } from "../types/Review";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.user}>{review.userName}</Text>
          <Text style={styles.book}>{review.bookTitle}</Text>
        </View>
        <Text accessibilityLabel={`Nota ${review.rating} de 5`} style={styles.rating}>
          {review.rating}/5
        </Text>
      </View>
      <Text style={styles.excerpt}>{review.excerpt}</Text>
      <Text style={styles.date}>{review.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.md
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between"
  },
  user: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  book: {
    color: colors.mutedText,
    fontSize: typography.small
  },
  rating: {
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: "800"
  },
  excerpt: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 22
  },
  date: {
    color: colors.mutedText,
    fontSize: typography.caption
  }
});
