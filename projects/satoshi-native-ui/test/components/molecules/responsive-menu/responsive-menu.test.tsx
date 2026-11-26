import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";
import type { ReactElement } from "react";
import { Text } from "react-native";

import { ResponsiveMenu } from "@components";
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

describe("ResponsiveMenu", () => {
  it("hides the panel while closed", () => {
    render(
      withProviders(
        <ResponsiveMenu isOpen={false}>
          <Text>Contenido</Text>
        </ResponsiveMenu>,
      ),
    );

    expect(screen.queryByText("Contenido")).toBeNull();
  });

  it("shows the panel content when open", () => {
    render(
      withProviders(
        <ResponsiveMenu isOpen={true}>
          <Text>Contenido</Text>
        </ResponsiveMenu>,
      ),
    );

    expect(screen.getByText("Contenido")).toBeTruthy();
  });

  it("invokes onToggle when the trigger is pressed in controlled mode", () => {
    const onToggle = jest.fn();

    render(
      withProviders(
        <ResponsiveMenu isOpen={false} onToggle={onToggle}>
          <Text>Contenido</Text>
        </ResponsiveMenu>,
      ),
    );

    fireEvent.press(screen.getByRole("button"));

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("toggles the panel internally in uncontrolled mode", () => {
    render(
      withProviders(
        <ResponsiveMenu>
          <Text>Contenido</Text>
        </ResponsiveMenu>,
      ),
    );

    const trigger = screen.getByRole("button");

    fireEvent.press(trigger);

    expect(screen.getByText("Contenido")).toBeTruthy();

    fireEvent.press(trigger);

    expect(screen.queryByText("Contenido")).toBeNull();
  });
});
