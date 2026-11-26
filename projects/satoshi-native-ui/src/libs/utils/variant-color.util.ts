import type { MD3Theme } from "react-native-paper";

/**
 * @description Define las claves de color MD3 usadas por las variantes
 * semanticas de los componentes de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SatoshiVariantColor =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";

/**
 * @description Mapa de variantes semanticas a claves de la paleta MD3. Las
 * claves extendidas de la paleta satoshi se resuelven como texto libre.
 * @author Steveen Cues
 * @version 1.0.0
 */
const VARIANT_COLOR_KEYS: Record<SatoshiVariantColor, string> = {
  primary: "primary",
  secondary: "secondary",
  accent: "tertiary",
  neutral: "onSurfaceVariant",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

/**
 * @description Resuelve el color MD3 de una variante semantica del tema
 * activo de react-native-paper. Las claves extendidas de la paleta satoshi
 * (info, success, warning) se leen del tema cuando estan disponibles.
 * @param theme Tema MD3 activo.
 * @param variant Variante semantica solicitada.
 * @returns Color hexadecimal resuelto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getVariantColor(
  theme: MD3Theme,
  variant: SatoshiVariantColor,
): string {
  const colorKey = VARIANT_COLOR_KEYS[variant];
  const palette = theme.colors as unknown as Record<string, string>;

  return palette[colorKey] ?? theme.colors.primary;
}
