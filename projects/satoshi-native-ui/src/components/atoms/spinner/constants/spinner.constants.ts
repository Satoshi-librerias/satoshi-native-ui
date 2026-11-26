import type { SpinnerSize, SpinnerVariant } from "../types/spinner.types";

/**
 * @description Define las clases por variante del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_VARIANT_CLASSES: Record<SpinnerVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
};

/**
 * @description Define las dimensiones por tamano del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_SIZE_CLASSES: Record<SpinnerSize, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

/**
 * @description Define la clase base compartida por todos los spinners.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_BASE_CLASS = "";
