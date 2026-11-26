import type { TranslationCatalog } from "@libs";

/**
 * @description Catalogo de traducciones compartido por las pruebas.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const TEST_TRANSLATIONS: TranslationCatalog = {
  es: {
    greeting: "Hola",
    nested: { key: "Valor anidado" },
    welcome: "Bienvenido {{name}}",
    menu: { open: "Abrir menu", close: "Cerrar menu" },
    navigation: { ariaLabel: "Navegacion principal" },
    language: {
      select: "Seleccionar idioma",
      listLabel: "Idiomas disponibles",
      searchPlaceholder: "Buscar idioma...",
      empty: "No se encontraron idiomas.",
      selected: "Idioma seleccionado",
    },
    theme: {
      title: "Temas",
      select: "Seleccionar tema",
      selected: "Tema seleccionado",
      searchPlaceholder: "Buscar tema...",
      empty: "No se encontraron temas.",
      of: "de",
      results: "resultados",
      close: "Cerrar",
    },
    molecules: {
      pagination: "Paginacion",
      nextPage: "Pagina siguiente",
      previousPage: "Pagina anterior",
    },
  },
  en: {
    greeting: "Hello",
    nested: { key: "Nested value" },
    menu: { open: "Open menu", close: "Close menu" },
    navigation: { ariaLabel: "Main navigation" },
    language: {
      select: "Select language",
      listLabel: "Available languages",
      searchPlaceholder: "Search language...",
      empty: "No languages found.",
      selected: "Selected language",
    },
    theme: {
      title: "Themes",
      select: "Select theme",
      selected: "Selected theme",
      searchPlaceholder: "Search theme...",
      empty: "No themes found.",
      of: "of",
      results: "results",
      close: "Close",
    },
    molecules: {
      pagination: "Pagination",
      nextPage: "Next page",
      previousPage: "Previous page",
    },
  },
};
