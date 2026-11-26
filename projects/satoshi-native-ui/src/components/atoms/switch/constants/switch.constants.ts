import type { SwitchSize, SwitchVariant } from "../types/switch.types";

/**
 * @description Define las dimensiones por tamano del switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_SIZE_CLASSES: Record<SwitchSize, string> = {
  xs: "h-4 w-8",
  sm: "h-5 w-10",
  md: "h-6 w-12",
  lg: "h-7 w-14",
};

/**
 * @description Define la clase base compartida por todos los switches.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_BASE_CLASS = "rounded-full border border-base-300";

/**
 * @description Define las clases por variante del switch activado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_VARIANT_CLASSES: Record<SwitchVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
};
