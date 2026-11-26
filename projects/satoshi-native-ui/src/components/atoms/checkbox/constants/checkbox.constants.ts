import type { CheckboxSize, CheckboxVariant } from "../types/checkbox.types";

/**
 * @description Define las dimensiones por tamano del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_SIZE_CLASSES: Record<CheckboxSize, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

/**
 * @description Define las clases base compartidas por todos los checkboxs.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_BASE_CLASS =
  "items-center justify-center rounded border border-base-300";

/**
 * @description Define las clases por variante del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_VARIANT_CLASSES: Record<CheckboxVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
};
