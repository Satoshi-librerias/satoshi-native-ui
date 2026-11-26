import type { KbdSize, KbdVariant } from "../types/kbd.types";

/**
 * @description Define las clases por variante del kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_VARIANT_CLASSES: Record<KbdVariant, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  neutral: "bg-base-200 text-base-content",
};

/**
 * @description Define las clases por tamano del kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_SIZE_CLASSES: Record<KbdSize, string> = {
  xs: "px-1 py-0.5 text-xs",
  sm: "px-1.5 py-0.5 text-sm",
  md: "px-2 py-1 text-base",
  lg: "px-3 py-1.5 text-lg",
};

/**
 * @description Define la clase base compartida por todos los kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_BASE_CLASS = "items-center justify-center rounded-md";
