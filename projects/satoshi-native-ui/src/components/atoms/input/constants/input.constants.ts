import type { InputSize, InputVariant } from "../types/input.types";

/**
 * @description Define las clases por variante del input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_VARIANT_CLASSES: Record<InputVariant, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  accent: "border-accent",
  neutral: "border-neutral",
  ghost: "border-transparent bg-base-200",
};

/**
 * @description Define las clases por tamano del input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_SIZE_CLASSES: Record<InputSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

/**
 * @description Define la clase base compartida por todos los inputs.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_BASE_CLASS =
  "w-full rounded-xl border bg-base-100 text-base-content";
