import type { TextareaSize, TextareaVariant } from "../types/textarea.types";

/**
 * @description Define las clases por variante del textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_VARIANT_CLASSES: Record<TextareaVariant, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  accent: "border-accent",
  neutral: "border-neutral",
  ghost: "border-transparent bg-base-200",
};

/**
 * @description Define las clases por tamano del textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_SIZE_CLASSES: Record<TextareaSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

/**
 * @description Define la clase base compartida por todos los textareas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_BASE_CLASS =
  "w-full rounded-xl border bg-base-100 text-base-content";

/**
 * @description Define el numero de filas por defecto del area de texto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_DEFAULT_ROWS = 3;
