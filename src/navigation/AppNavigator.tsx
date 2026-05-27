import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { books } from "../data/books";
import { BookDetailsScreen } from "../screens/BookDetailsScreen";
import { GroupsScreen } from "../screens/GroupsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ReviewScreen } from "../screens/ReviewScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import type { Book } from "../types/Book";
import { accessibilityLabels } from "../utils/accessibility";

type ScreenName =
  | "login"
  | "register"
  | "home"
  | "search"
  | "details"
  | "library"
  | "review"
  | "profile"
  | "groups"
  | "settings";

const bottomTabs: {
  label: string;
  screen: ScreenName;
  accessibilityLabel: string;
}[] = [
  { label: "Início", screen: "home", accessibilityLabel: "Abrir feed inicial" },
  { label: "Buscar", screen: "search", accessibilityLabel: "Abrir busca de livros" },
  {
    label: "Biblioteca",
    screen: "library",
    accessibilityLabel: "Abrir biblioteca pessoal"
  },
  { label: "Grupos", screen: "groups", accessibilityLabel: "Abrir grupos de leitura" },
  { label: "Perfil", screen: "profile", accessibilityLabel: "Abrir perfil do usuário" },
  {
    label: "Ajustes",
    screen: "settings",
    accessibilityLabel: accessibilityLabels.openSettings
  }
];

export function AppNavigator() {
  const [activeScreen, setActiveScreen] = useState<ScreenName>("login");
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  function openBook(book: Book) {
    setSelectedBook(book);
    setActiveScreen("details");
  }

  function renderScreen() {
    switch (activeScreen) {
      case "login":
        return (
          <LoginScreen
            onLogin={() => setActiveScreen("home")}
            onRegister={() => setActiveScreen("register")}
          />
        );
      case "register":
        return (
          <RegisterScreen
            onBackToLogin={() => setActiveScreen("login")}
            onRegister={() => setActiveScreen("home")}
          />
        );
      case "search":
        return <SearchScreen onSelectBook={openBook} />;
      case "details":
        return (
          <BookDetailsScreen
            book={selectedBook}
            onReview={() => setActiveScreen("review")}
          />
        );
      case "library":
        return <LibraryScreen onSelectBook={openBook} />;
      case "review":
        return (
          <ReviewScreen
            bookTitle={selectedBook.title}
            onPublish={() => setActiveScreen("home")}
          />
        );
      case "profile":
        return <ProfileScreen />;
      case "groups":
        return <GroupsScreen />;
      case "settings":
        return <SettingsScreen />;
      case "home":
      default:
        return <HomeScreen />;
    }
  }

  const showBottomTabs = activeScreen !== "login" && activeScreen !== "register";

  return (
    <View style={styles.root}>
      <View style={styles.screen}>{renderScreen()}</View>
      {showBottomTabs ? (
        <View accessibilityRole="tablist" style={styles.bottomBar}>
          {bottomTabs.map((tab) => {
            const isActive = activeScreen === tab.screen;

            return (
              <Pressable
                accessibilityLabel={tab.accessibilityLabel}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                key={tab.screen}
                onPress={() => setActiveScreen(tab.screen)}
                style={[styles.tab, isActive && styles.activeTab]}
              >
                <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1
  },
  screen: {
    flex: 1
  },
  bottomBar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: spacing.xs,
    padding: spacing.sm
  },
  tab: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.sm
  },
  activeTab: {
    backgroundColor: "#F4E7EA"
  },
  tabText: {
    color: colors.mutedText,
    fontSize: typography.caption,
    fontWeight: "700",
    textAlign: "center"
  },
  activeTabText: {
    color: colors.primary
  }
});
