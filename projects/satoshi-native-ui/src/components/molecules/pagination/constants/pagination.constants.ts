import type {
  PaginationSize,
  PaginationVariant,
} from "../types/pagination.types";

/**
 * @description Define las clases por variante de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_VARIANT_CLASSES: Record<PaginationVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
};

/**
 * @description Define las clases por tamano de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_SIZE_CLASSES: Record<PaginationSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-2.5 text-lg",
};

/**
 * @description Define la clase base de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_BASE_CLASS = "flex-row items-center gap-1";

/**
 * @description Define la clase del boton de pagina activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_ACTIVE_CLASS = "font-bold underline";

/**
 * @description Define el limite de hermanos visibles por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_DEFAULT_SIBLINGS = 1;
