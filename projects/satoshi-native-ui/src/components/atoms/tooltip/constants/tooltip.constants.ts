import type { TooltipVariant } from "../types/tooltip.types";

/**
 * @description Define las clases por variante del tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLTIP_VARIANT_CLASSES: Record<TooltipVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  neutral: "bg-neutral text-neutral-content",
};

/**
 * @description Define la clase base compartida por todos los tooltips.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLTIP_BASE_CLASS = "rounded-lg px-2 py-1 text-xs";
