import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import type { ReactElement } from "react";

import { LanguageSelector } from "@components";
import { ThemeProvider, TranslateProvider } from "@libs";
import { THEMES } from "@test/fixtures/theme.fixtures";
import { TEST_TRANSLATIONS } from "@test/fixtures/translations.fixtures";

/**
 * @description Envuelve el arbol con los providers de la libreria.
 * @param children Arbol a envolver.
 * @returns Arbol con providers.
 * @author Steveen Cues
 * @version 1.0.0
 */
function withProviders(children: ReactElement): ReactElement {
  return (
    <TranslateProvider
      translations={TEST_TRANSLATIONS}
      initialLanguage="es"
      fallbackLanguage="en"
      languageEncryptionKey="test-encryption-key"
    >
      <ThemeProvider themes={THEMES} initialTheme="light">
        {children}
      </ThemeProvider>
    </TranslateProvider>
  );
}

describe("LanguageSelector", () => {
  it("renders the trigger with the readable language name", () => {
    render(withProviders(<LanguageSelector />));

    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("opens the panel and lists the available languages", () => {
    render(withProviders(<LanguageSelector />));

    fireEvent.press(screen.getByRole("button"));

    expect(screen.getByText("es")).toBeTruthy();
    expect(screen.getByText("en")).toBeTruthy();
  });

  it("selects a language from the list", () => {
    render(withProviders(<LanguageSelector />));

    fireEvent.press(screen.getByRole("button"));
    fireEvent.press(screen.getByText("en"));

    expect(screen.queryByText("en")).toBeNull();
  });
});
