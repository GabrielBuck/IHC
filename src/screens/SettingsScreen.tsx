import { StyleSheet, Text, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

const settings = [
  {
    title: "Tema claro",
    value: "Ativo",
    description: "Mantém contraste alto entre fundo e texto."
  },
  {
    title: "Aumentar fonte",
    value: "Disponível",
    description: "Opção planejada para ampliar textos em versões futuras."
  },
  {
    title: "Notificações",
    value: "Leituras e grupos",
    description: "Avisos sobre progresso, resenhas e discussões."
  },
  {
    title: "Privacidade",
    value: "Perfil público controlado",
    description: "Usuário escolhe o que aparece no feed."
  }
];

export function SettingsScreen() {
  return (
    <ScreenContainer>
      <Header
        title="Configurações"
        subtitle="Preferências de acessibilidade, leitura, notificações e privacidade."
      />

      <View style={styles.accessibilityCard}>
        <Text style={styles.accessibilityTitle}>Acessibilidade</Text>
        <Text style={styles.accessibilityText}>
          O protótipo usa botões grandes, contraste adequado, textos legíveis e
          rótulos de acessibilidade em ações importantes.
        </Text>
      </View>

      {settings.map((item) => (
        <View key={item.title} style={styles.settingCard}>
          <View style={styles.settingHeader}>
            <Text style={styles.settingTitle}>{item.title}</Text>
            <Text style={styles.settingValue}>{item.value}</Text>
          </View>
          <Text style={styles.settingDescription}>{item.description}</Text>
        </View>
      ))}

      <AccessibleButton
        accessibilityLabel="Sair da conta do BookLog"
        onPress={() => undefined}
        title="Sair da conta"
        variant="danger"
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  accessibilityCard: {
    backgroundColor: "#F4E7EA",
    borderRadius: 8,
    gap: spacing.xs,
    padding: spacing.md
  },
  accessibilityTitle: {
    color: colors.primary,
    fontSize: typography.subtitle,
    fontWeight: "900"
  },
  accessibilityText: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 22
  },
  settingCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.xs,
    padding: spacing.md
  },
  settingHeader: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between"
  },
  settingTitle: {
    color: colors.text,
    flex: 1,
    fontSize: typography.body,
    fontWeight: "800"
  },
  settingValue: {
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: "800"
  },
  settingDescription: {
    color: colors.mutedText,
    fontSize: typography.small,
    lineHeight: 20
  }
});
