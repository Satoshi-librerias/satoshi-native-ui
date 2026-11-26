import type { BadgeSize, BadgeVariant } from "../types/badge.types";

/**
 * @description Define las clases por variante del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  neutral: "bg-neutral text-neutral-content",
  info: "bg-info text-info-content",
  success: "bg-success text-success-content",
  warning: "bg-warning text-warning-content",
  error: "bg-error text-error-content",
};

/**
 * @description Define las clases por tamano del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

/**
 * @description Define la clase base compartida por todos los badges.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_BASE_CLASS =
  "items-center justify-center self-start rounded-full font-medium";

/**
 * @description Define la clase que activa el estilo con borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_OUTLINED_CLASS = "border border-current bg-transparent";
