import { render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import type { ReactElement } from "react";

import { Header } from "@components";
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

describe("Header", () => {
  it("renders the logo brand when configured", () => {
    render(
      withProviders(
        <Header
          logo={{ src: "logo.png", alt: "Satoshi" }}
          showNavigation={false}
        />,
      ),
    );

    expect(screen.getByLabelText("Satoshi")).toBeTruthy();
  });

  it("renders the navigation items when configured", () => {
    render(
      withProviders(
        <Header
          navigationItems={[
            { label: "Inicio", href: "/" },
            { label: "Acerca", href: "/about" },
          ]}
        />,
      ),
    );

    expect(screen.getByText("Inicio")).toBeTruthy();
    expect(screen.getByText("Acerca")).toBeTruthy();
  });

  it("hides the navigation when showNavigation is false", () => {
    render(
      withProviders(
        <Header
          showNavigation={false}
          navigationItems={[{ label: "Inicio", href: "/" }]}
        />,
      ),
    );

    expect(screen.queryByText("Inicio")).toBeNull();
  });
});
