import type { ReactElement } from "react";
import { ThemeProvider, TranslateProvider } from "@libs";
import { THEMES } from "@test/fixtures/theme.fixtures";
import { TEST_TRANSLATIONS } from "@test/fixtures/translations.fixtures";

/**
 * @description Envuelve el arbol con los providers de la libreria para las
 * pruebas de componentes que consumen el tema o las traducciones.
 * @param children Arbol a envolver.
 * @returns Arbol con providers.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function withProviders(children: ReactElement): ReactElement {
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
