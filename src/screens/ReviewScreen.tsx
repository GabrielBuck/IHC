import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import { accessibilityLabels } from "../utils/accessibility";

interface ReviewScreenProps {
  bookTitle: string;
  onPublish: () => void;
}

export function ReviewScreen({ bookTitle, onPublish }: ReviewScreenProps) {
  const [rating, setRating] = useState(4);

  return (
    <ScreenContainer>
      <Header
        title="Nova resenha"
        subtitle={`Compartilhe sua opinião sobre ${bookTitle}.`}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Nota</Text>
        <View style={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Pressable
              accessibilityLabel={`Selecionar nota ${value} de 5`}
              accessibilityRole="button"
              key={value}
              onPress={() => setRating(value)}
              style={[
                styles.ratingButton,
                value <= rating && styles.ratingButtonActive
              ]}
            >
              <Text
                style={[
                  styles.ratingText,
                  value <= rating && styles.ratingTextActive
                ]}
              >
                {value}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Texto da resenha</Text>
        <TextInput
          accessibilityLabel="Campo de texto da resenha"
          multiline
          placeholder="Escreva uma resenha curta e objetiva."
          placeholderTextColor={colors.mutedText}
          style={styles.textArea}
        />
      </View>

      <AccessibleButton
        accessibilityLabel={accessibilityLabels.publishReviewButton}
        onPress={onPublish}
        title="Publicar resenha"
      />

      <Text style={styles.note}>
        Após a publicação, a resenha aparecerá no feed da comunidade BookLog.
      </Text>
    </ScreenContainer>
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
  label: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  ratingRow: {
    flexDirection: "row",
    gap: spacing.sm
  },
  ratingButton: {
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  ratingButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  ratingText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  ratingTextActive: {
    color: colors.surface
  },
  textArea: {
    color: colors.text,
    fontSize: typography.body,
    minHeight: 140,
    textAlignVertical: "top"
  },
  note: {
    color: colors.mutedText,
    fontSize: typography.small,
    lineHeight: 20
  }
});
