import type {
  ThemeSelectorMessages,
  ThemeSelectorTranslations,
} from "../types/theme-selector.types";

/**
 * @description Resuelve una clave de traduccion configurable.
 * @param key Clave configurada por el consumidor.
 * @param fallback Clave por defecto.
 * @param translate Funcion de traduccion del contexto.
 * @returns Texto traducido.
 * @author Steveen Cues
 * @version 1.0.0
 */
const resolveTranslation = (
  key: string | undefined,
  fallback: string,
  translate: (key: string) => string,
): string => translate(key ?? fallback);

/**
 * @description Resuelve la etiqueta accesible del selector de temas.
 * @param translations Claves configuradas por el consumidor.
 * @param translate Funcion de traduccion del contexto.
 * @returns Etiqueta accesible resuelta.
 * @author Steveen Cues
 * @version 1.0.0
 */
const resolveSelectLabel = (
  translations: ThemeSelectorTranslations | undefined,
  translate: (key: string) => string,
): string =>
  resolveTranslation(translations?.select, "theme.select", translate);

/**
 * @description Traduce los mensajes configurables del selector de temas.
 * @param translations Claves configuradas por el consumidor.
 * @param label Clave del titulo configurada.
 * @param placeholder Clave del placeholder configurada.
 * @param translate Funcion de traduccion del contexto.
 * @returns Mensajes resueltos del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const translateThemeSelectorMessages = (
  translations: ThemeSelectorTranslations | undefined,
  label: string,
  placeholder: string,
  translate: (key: string) => string,
): ThemeSelectorMessages => ({
  title: resolveTranslation(translations?.title, label, translate),
  select: resolveSelectLabel(translations, translate),
  selected: resolveTranslation(
    translations?.selected,
    "theme.selected",
    translate,
  ),
  searchPlaceholder: resolveTranslation(
    translations?.searchPlaceholder,
    placeholder,
    translate,
  ),
  empty: resolveTranslation(translations?.empty, "theme.empty", translate),
  of: resolveTranslation(translations?.of, "theme.of", translate),
  results: resolveTranslation(
    translations?.results,
    "theme.results",
    translate,
  ),
  close: resolveTranslation(translations?.close, "theme.close", translate),
});
