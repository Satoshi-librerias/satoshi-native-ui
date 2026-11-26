import type { ProgressVariant } from "../types/progress.types";

/**
 * @description Define las clases por variante del progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_VARIANT_CLASSES: Record<ProgressVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

/**
 * @description Define la clase base compartida por todos los progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_BASE_CLASS =
  "h-2 w-full overflow-hidden rounded-full bg-base-200";

/**
 * @description Define el valor maximo por defecto del progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_DEFAULT_MAX = 100;
