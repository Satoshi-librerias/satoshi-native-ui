import type { ButtonSize, ButtonVariant } from "../types/button.types";

/**
 * @description Define las clases por variante del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
  ghost: "bg-transparent",
  link: "bg-transparent",
};

/**
 * @description Define las clases de texto por variante del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_TEXT_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "text-primary-content",
  secondary: "text-secondary-content",
  accent: "text-accent-content",
  neutral: "text-neutral-content",
  ghost: "text-base-content",
  link: "text-primary",
};

/**
 * @description Define las clases por tamano del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

/**
 * @description Define las clases base compartidas por todos los botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_BASE_CLASS = "items-center justify-center rounded-xl";

/**
 * @description Define la clase que activa el estilo con borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_OUTLINED_CLASS = "border border-current bg-transparent";

/**
 * @description Define la clase que expande el boton al ancho disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_FULL_WIDTH_CLASS = "w-full";

/**
 * @description Define la clase de opacidad del boton deshabilitado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_DISABLED_CLASS = "opacity-50";
