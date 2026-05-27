import { StyleSheet, Text, TextInput, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import { accessibilityLabels } from "../utils/accessibility";

interface LoginScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

export function LoginScreen({ onLogin, onRegister }: LoginScreenProps) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.brandBox}>
        <Text style={styles.brand}>BookLog</Text>
        <Text style={styles.subtitle}>Organize leituras e compartilhe resenhas.</Text>
      </View>

      <Header
        title="Entrar"
        subtitle="Acesse seu perfil para acompanhar livros lidos, leituras em andamento e recomendações."
      />

      <View style={styles.form}>
        <TextInput
          accessibilityLabel="Campo de e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor={colors.mutedText}
          style={styles.input}
        />
        <TextInput
          accessibilityLabel="Campo de senha"
          placeholder="Senha"
          placeholderTextColor={colors.mutedText}
          secureTextEntry
          style={styles.input}
        />
        <AccessibleButton
          accessibilityLabel={accessibilityLabels.loginButton}
          onPress={onLogin}
          title="Entrar"
        />
        <AccessibleButton
          accessibilityLabel={accessibilityLabels.registerButton}
          onPress={onRegister}
          title="Criar conta"
          variant="ghost"
        />
      </View>

      <Text accessibilityRole="link" style={styles.link}>
        Esqueci minha senha
      </Text>

      <Text style={styles.description}>
        O BookLog é um protótipo mobile para leitores registrarem progresso,
        avaliarem livros, escreverem resenhas e encontrarem comunidades de leitura.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center"
  },
  brandBox: {
    gap: spacing.xs
  },
  brand: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: "900"
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: typography.body
  },
  form: {
    gap: spacing.sm
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text,
    fontSize: typography.body,
    minHeight: 48,
    paddingHorizontal: spacing.md
  },
  link: {
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: "700",
    textAlign: "center"
  },
  description: {
    color: colors.mutedText,
    fontSize: typography.small,
    lineHeight: 20
  }
});
