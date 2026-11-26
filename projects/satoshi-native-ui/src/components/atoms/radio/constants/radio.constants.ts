import type { RadioSize, RadioVariant } from "../types/radio.types";

/**
 * @description Define las dimensiones por tamano del radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_SIZE_CLASSES: Record<RadioSize, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

/**
 * @description Define las clases base compartidas por todos los radios.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_BASE_CLASS =
  "items-center justify-center rounded-full border border-base-300";

/**
 * @description Define las clases por variante del radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_VARIANT_CLASSES: Record<RadioVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
};
