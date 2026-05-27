import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface AccessibleButtonProps {
  title: string;
  onPress: () => void;
  accessibilityLabel: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}

export function AccessibleButton({
  title,
  onPress,
  accessibilityLabel,
  variant = "primary",
  disabled = false,
  style
}: AccessibleButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style
      ]}
    >
      <Text style={[styles.text, variant === "ghost" && styles.ghostText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.primaryDark
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: colors.border,
    borderWidth: 1
  },
  danger: {
    backgroundColor: colors.danger
  },
  disabled: {
    opacity: 0.5
  },
  pressed: {
    opacity: 0.85
  },
  text: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: "700"
  },
  ghostText: {
    color: colors.primary
  }
});
