import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import type { MD3Theme } from "react-native-paper";
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "@libs/constants";
import type { AppTheme } from "@libs/interface";
import type { MD3ThemeExtension, SatoshiThemeColors } from "@libs/types";
import { isCustomThemeDefinition } from "./theme.utils";

/**
 * @description Resuelve la paleta satoshi efectiva de un tema. Los temas
 * integrados usan las paletas por defecto y los personalizados usan la
 * paleta registrada por el consumidor.
 * @param theme Tema activo.
 * @returns Paleta de colores del tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
function resolveThemePalette(theme: AppTheme): SatoshiThemeColors {
  if (isCustomThemeDefinition(theme)) {
    return theme.colors;
  }

  return theme.name === "dark" ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
}

/**
 * @description Crea el tema MD3 de react-native-paper equivalente al tema
 * satoshi activo para que los componentes de Paper compartan la paleta del
 * ThemeProvider.
 * @param theme Tema activo de la libreria.
 * @returns Tema MD3 listo para PaperProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function createPaperTheme(theme: AppTheme): MD3Theme {
  const palette = resolveThemePalette(theme);
  const baseTheme =
    palette.colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: palette.primary,
      onPrimary: palette.primaryContent,
      secondary: palette.secondary,
      onSecondary: palette.secondaryContent,
      tertiary: palette.accent,
      onTertiary: palette.accentContent,
      error: palette.error,
      onError: palette.errorContent,
      background: palette.base100,
      onBackground: palette.baseContent,
      surface: palette.base100,
      onSurface: palette.baseContent,
      surfaceVariant: palette.base200,
      onSurfaceVariant: palette.baseContent,
      outline: palette.base300,
      inverseSurface: palette.neutral,
      inverseOnSurface: palette.neutralContent,
      neutral: palette.neutral,
      onNeutral: palette.neutralContent,
      info: palette.info,
      onInfo: palette.infoContent,
      success: palette.success,
      onSuccess: palette.successContent,
      warning: palette.warning,
      onWarning: palette.warningContent,
    } as MD3Theme["colors"] & MD3ThemeExtension,
  };
}
