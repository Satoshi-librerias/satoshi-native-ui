import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "@libs/constants";
import type { MD3Theme } from "react-native-paper";
import type { ThemeColorToken } from "@libs/types";

/**
 * @description Obtiene el color del token Satoshi segun el esquema de color
 * del tema MD3 activo de react-native-paper.
 * @param theme Tema MD3 activo.
 * @param token Token de color Satoshi solicitado.
 * @returns Color hexadecimal del token en el esquema activo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSatoshiColor(
  theme: MD3Theme,
  token: ThemeColorToken,
): string {
  const palette = theme.dark ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;

  return palette[token];
}
