import { StyleSheet, Text, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { users } from "../data/users";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

export function ProfileScreen() {
  const user = users[0];

  return (
    <ScreenContainer>
      <Header
        title="Perfil"
        subtitle="Resumo de leitura, preferências e atividades recentes."
      />

      <View style={styles.profileCard}>
        <View accessibilityLabel="Avatar placeholder do usuário" style={styles.avatar}>
          <Text style={styles.avatarText}>AS</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.role}>{user.role}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{user.booksRead}</Text>
          <Text style={styles.statLabel}>livros lidos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{user.reviewsCount}</Text>
          <Text style={styles.statLabel}>resenhas</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gêneros favoritos</Text>
        <View style={styles.tags}>
          {user.favoriteGenres.map((genre) => (
            <Text key={genre} style={styles.tag}>
              {genre}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Últimas atividades</Text>
        {user.activities.map((activity) => (
          <Text key={activity} style={styles.activity}>
            {activity}
          </Text>
        ))}
      </View>

      <AccessibleButton
        accessibilityLabel="Editar perfil de leitor"
        onPress={() => undefined}
        title="Editar perfil"
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md
  },
  avatar: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: 64,
    justifyContent: "center",
    width: 64
  },
  avatarText: {
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: "900"
  },
  profileInfo: {
    flex: 1,
    gap: spacing.xs
  },
  name: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: "900"
  },
  role: {
    color: colors.mutedText,
    fontSize: typography.small
  },
  stats: {
    flexDirection: "row",
    gap: spacing.sm
  },
  statCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: spacing.md
  },
  statNumber: {
    color: colors.primary,
    fontSize: typography.title,
    fontWeight: "900"
  },
  statLabel: {
    color: colors.mutedText,
    fontSize: typography.small
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.md
  },
  cardTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: "800"
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  tag: {
    backgroundColor: "#F4E7EA",
    borderRadius: 999,
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: "700",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  activity: {
    color: colors.text,
    fontSize: typography.small,
    lineHeight: 20
  }
});
