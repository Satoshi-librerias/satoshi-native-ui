import type { SatoshiThemeColors } from "@libs/types";

/**
 * @description Paleta del tema claro integrado. Debe mantenerse
 * sincronizada con el bloque [data-theme="light"] de libs/styles/global.css.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LIGHT_THEME_COLORS: SatoshiThemeColors = {
  colorScheme: "light",
  primary: "#570df8",
  primaryContent: "#ffffff",
  secondary: "#f000b8",
  secondaryContent: "#ffffff",
  accent: "#37cdbe",
  accentContent: "#16302d",
  neutral: "#3d4451",
  neutralContent: "#ffffff",
  base100: "#ffffff",
  base200: "#f2f2f2",
  base300: "#e5e6e6",
  baseContent: "#1d2939",
  info: "#00b5ff",
  infoContent: "#ffffff",
  success: "#00a96e",
  successContent: "#ffffff",
  warning: "#ffbe00",
  warningContent: "#1d2939",
  error: "#ff6f70",
  errorContent: "#1d2939",
};

/**
 * @description Paleta del tema oscuro integrado. Debe mantenerse
 * sincronizada con el bloque [data-theme="dark"] de libs/styles/global.css.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DARK_THEME_COLORS: SatoshiThemeColors = {
  colorScheme: "dark",
  primary: "#8b5cf6",
  primaryContent: "#faf5ff",
  secondary: "#ec4899",
  secondaryContent: "#fdf2f8",
  accent: "#22d3ee",
  accentContent: "#083344",
  neutral: "#1e293b",
  neutralContent: "#e2e8f0",
  base100: "#1d232a",
  base200: "#191e24",
  base300: "#15191e",
  baseContent: "#cbd5e1",
  info: "#38bdf8",
  infoContent: "#082f49",
  success: "#34d399",
  successContent: "#064e3b",
  warning: "#fbbf24",
  warningContent: "#451a03",
  error: "#f87171",
  errorContent: "#450a0a",
};
