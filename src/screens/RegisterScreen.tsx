import { StyleSheet, Text, TextInput, View } from "react-native";

import { AccessibleButton } from "../components/AccessibleButton";
import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import { accessibilityLabels } from "../utils/accessibility";

interface RegisterScreenProps {
  onRegister: () => void;
  onBackToLogin: () => void;
}

export function RegisterScreen({
  onRegister,
  onBackToLogin
}: RegisterScreenProps) {
  return (
    <ScreenContainer style={styles.container}>
      <Header
        title="Criar conta"
        subtitle="Monte seu perfil de leitor para salvar livros, acompanhar progresso e participar de grupos."
      />

      <View style={styles.form}>
        <TextInput
          accessibilityLabel="Campo de nome"
          placeholder="Nome"
          placeholderTextColor={colors.mutedText}
          style={styles.input}
        />
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
          accessibilityLabel={accessibilityLabels.registerButton}
          onPress={onRegister}
          title="Cadastrar"
        />
        <AccessibleButton
          accessibilityLabel="Voltar para tela de login"
          onPress={onBackToLogin}
          title="Já tenho conta"
          variant="ghost"
        />
      </View>

      <Text style={styles.note}>
        O cadastro visual representa a entrada do usuário no ecossistema do BookLog,
        sem autenticação real nesta entrega acadêmica.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center"
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
  note: {
    color: colors.mutedText,
    fontSize: typography.small,
    lineHeight: 20
  }
});
