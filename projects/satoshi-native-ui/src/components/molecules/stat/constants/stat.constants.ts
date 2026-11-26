import type { StatVariant } from "../types/stat.types";

/**
 * @description Define las clases por variante de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_VARIANT_CLASSES: Record<StatVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  neutral: "",
};

/**
 * @description Define la clase base de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_BASE_CLASS =
  "rounded-2xl border border-base-300 bg-base-100 p-4";

/**
 * @description Define la clase del titulo de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_TITLE_CLASS = "text-sm text-base-content/60";

/**
 * @description Define la clase del valor de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_VALUE_CLASS = "text-2xl font-bold";

/**
 * @description Define la clase de la descripcion de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_DESCRIPTION_CLASS = "text-xs text-base-content/60";
