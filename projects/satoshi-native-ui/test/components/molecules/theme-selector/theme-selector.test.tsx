import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import type { ReactElement } from "react";

import { ThemeSelector } from "@components";
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

describe("ThemeSelector", () => {
  it("renders the trigger with the active theme name", () => {
    render(withProviders(<ThemeSelector />));

    expect(screen.getByText("light.name")).toBeTruthy();
  });

  it("opens the panel and lists the available themes", () => {
    render(withProviders(<ThemeSelector />));

    fireEvent.press(screen.getByRole("button"));

    expect(screen.getByText("dark.name")).toBeTruthy();
    expect(screen.getByText("brand.name")).toBeTruthy();
  });

  it("prioritizes the selected theme first in the list", () => {
    render(withProviders(<ThemeSelector />));

    fireEvent.press(screen.getByRole("button"));

    const options = screen.getAllByRole("menuitem");

    expect(options[0]?.props.accessibilityLabel).toBe("light.name");
  });

  it("closes the panel through the close action", () => {
    render(withProviders(<ThemeSelector />));

    fireEvent.press(screen.getByRole("button"));
    fireEvent.press(screen.getByLabelText("Cerrar"));

    expect(screen.queryByText("dark.name")).toBeNull();
  });
});
