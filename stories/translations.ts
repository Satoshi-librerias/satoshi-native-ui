import type { TranslationCatalog } from "@libs";

/**
 * @description Catalogo de traducciones compartido por las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STORY_TRANSLATIONS: TranslationCatalog = {
  es: {
    greeting: "Hola Satoshi",
    common: {
      save: "Guardar",
      cancel: "Cancelar",
      search: "Buscar",
      searchPlaceholder: "Buscar...",
    },
    menu: { open: "Abrir menu", close: "Cerrar menu" },
    navigation: { ariaLabel: "Navegacion principal" },
    molecules: {
      pagination: "Paginacion",
      nextPage: "Pagina siguiente",
      previousPage: "Pagina anterior",
    },
    light: { name: "Claro", description: "Tema claro predeterminado" },
    dark: { name: "Oscuro", description: "Tema oscuro" },
    marca: { name: "Marca", description: "Tema personalizado" },
  },
  en: {
    greeting: "Hello Satoshi",
    common: {
      save: "Save",
      cancel: "Cancel",
      search: "Search",
      searchPlaceholder: "Search...",
    },
    menu: { open: "Open menu", close: "Close menu" },
    navigation: { ariaLabel: "Main navigation" },
    molecules: {
      pagination: "Pagination",
      nextPage: "Next page",
      previousPage: "Previous page",
    },
    light: { name: "Light", description: "Default light theme" },
    dark: { name: "Dark", description: "Dark theme" },
    marca: { name: "Brand", description: "Custom theme" },
  },
};
