import { ThemeContext } from "@libs/contexts";
import { useContext, useMemo } from "react";
import type { MD3Theme } from "react-native-paper";
import type { ThemeContextValue } from "@libs/interface";
import { createPaperTheme } from "@libs/utils";

/**
 * @description Define el resultado del hook de temas de la libreria.
 * Expone el tema satoshi activo y su equivalente MD3 de react-native-paper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseThemeResult extends ThemeContextValue {
  readonly paperTheme: MD3Theme;
}

/**
 * @description Permite consultar y modificar el tema activo y obtiene el
 * tema MD3 de react-native-paper equivalente para los componentes del
 * nucleo de Paper.
 * @returns El contexto de temas con el tema MD3 resuelto.
 * @throws Error si se utiliza fuera de ThemeProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useTheme(): UseThemeResult {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  const paperTheme = useMemo<MD3Theme>(
    (): MD3Theme => createPaperTheme(context.theme),
    [context.theme],
  );

  return { ...context, paperTheme };
}
