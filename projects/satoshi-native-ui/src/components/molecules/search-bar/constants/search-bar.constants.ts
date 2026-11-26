import type { SearchBarSize } from "../types/search-bar.types";

/**
 * @description Define las clases por tamano de la barra.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_SIZE_CLASSES: Record<SearchBarSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

/**
 * @description Define la clase del icono de busqueda del boton de envio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_ICON_CLASS = "h-4 w-4";

/**
 * @description Define la etiqueta accesible por defecto del boton de envio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_SUBMIT_LABEL = "Buscar";
