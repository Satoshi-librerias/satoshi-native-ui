import type { CSS_THEME_TOKENS } from "@libs/constants/theme-css-variable.const";

/**
 * @description Define las claves disponibles para los colores del tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeColorToken = keyof typeof CSS_THEME_TOKENS;

/**
 * @description Define las claves extendidas que la libreria anade al tema
 * MD3 de react-native-paper para exponer la paleta satoshi completa
 * (superficies y contenidos de neutral, info, success y warning).
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface MD3ThemeExtension {
  readonly neutral: string;
  readonly onNeutral: string;
  readonly info: string;
  readonly onInfo: string;
  readonly success: string;
  readonly onSuccess: string;
  readonly warning: string;
  readonly onWarning: string;
}

/**
 * @description Define los colores que un tema personalizado utiliza.
 * La paleta replica los tokens semanticos de la libreria React original.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SatoshiThemeColors {
  readonly colorScheme: "light" | "dark";
  readonly primary: string;
  readonly primaryContent: string;
  readonly secondary: string;
  readonly secondaryContent: string;
  readonly accent: string;
  readonly accentContent: string;
  readonly neutral: string;
  readonly neutralContent: string;
  readonly base100: string;
  readonly base200: string;
  readonly base300: string;
  readonly baseContent: string;
  readonly info: string;
  readonly infoContent: string;
  readonly success: string;
  readonly successContent: string;
  readonly warning: string;
  readonly warningContent: string;
  readonly error: string;
  readonly errorContent: string;
}

/**
 * @description Define los nombres de los temas disponibles en la aplicacion.
 * Permite utilizar temas integrados y nombres personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ThemeName = "light" | "dark" | (string & {});
