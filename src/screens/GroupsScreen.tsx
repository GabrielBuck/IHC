import { StyleSheet, Text, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { groups } from "../data/groups";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

export function GroupsScreen() {
  return (
    <ScreenContainer>
      <Header
        title="Grupos"
        subtitle="Participe de leituras coletivas e acompanhe discussões por tema."
      />

      {groups.map((group) => (
        <View key={group.id} style={styles.card}>
          <Text style={styles.name}>{group.name}</Text>
          <Text style={styles.currentBook}>Livro atual: {group.currentBook}</Text>
          <Text style={styles.description}>{group.description}</Text>
          <Text style={styles.participants}>
            {group.participants} participantes ativos
          </Text>
          <AccessibleButton
            accessibilityLabel={`Entrar no grupo ${group.name}`}
            onPress={() => undefined}
            title="Entrar no grupo"
            variant="ghost"
          />
        </View>
      ))}
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
  name: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: "900"
  },
  currentBook: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: "800"
  },
  description: {
    color: colors.text,
    fontSize: typography.small,
    lineHeight: 20
  },
  participants: {
    color: colors.mutedText,
    fontSize: typography.small
  }
});
