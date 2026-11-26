import type { AppTheme } from "@libs";

/**
 * @description Coloca el tema seleccionado primero sin eliminar ni duplicar
 * temas.
 * @param themes Temas filtrados.
 * @param selectedTheme Tema activo.
 * @returns Temas ordenados con el activo primero.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const prioritizeSelectedTheme = (
  themes: readonly AppTheme[],
  selectedTheme: AppTheme,
): readonly AppTheme[] => {
  const matchingTheme = themes.find(
    (availableTheme: AppTheme): boolean =>
      availableTheme.name === selectedTheme.name,
  );

  const remainingThemes = themes.filter(
    (availableTheme: AppTheme): boolean =>
      availableTheme.name !== selectedTheme.name,
  );

  return matchingTheme
    ? [matchingTheme, ...remainingThemes]
    : [selectedTheme, ...remainingThemes];
};
