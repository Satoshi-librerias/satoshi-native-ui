import type { AppTheme } from "@libs";

/**
 * @description Filtra los temas por nombre o descripcion traducidos.
 * @param themes Temas disponibles.
 * @param search Texto de busqueda.
 * @param translate Funcion de traduccion del contexto.
 * @returns Temas coincidentes con la busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const filterThemes = (
  themes: readonly AppTheme[],
  search: string,
  translate: (key: string) => string,
): readonly AppTheme[] => {
  const normalizedSearch = search.trim().toLocaleLowerCase();

  if (normalizedSearch.length === 0) {
    return themes;
  }

  return themes.filter((availableTheme: AppTheme): boolean => {
    const name = translate(availableTheme.manifest.name).toLocaleLowerCase();

    const description = translate(
      availableTheme.manifest.description,
    ).toLocaleLowerCase();

    return (
      name.includes(normalizedSearch) || description.includes(normalizedSearch)
    );
  });
};
