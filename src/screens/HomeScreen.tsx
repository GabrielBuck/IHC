import { StyleSheet, Text, View } from "react-native";

import { Header } from "../components/Header";
import { ProgressCard } from "../components/ProgressCard";
import { ReviewCard } from "../components/ReviewCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { books } from "../data/books";
import { reviews } from "../data/reviews";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

export function HomeScreen() {
  const currentBook = books.find((book) => book.status === "lendo") ?? books[0];

  return (
    <ScreenContainer>
      <Header
        title="Olá, Ana"
        subtitle="Veja seu progresso e as resenhas recentes da comunidade."
      />

      <ProgressCard book={currentBook} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feed de resenhas</Text>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </View>
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
