import type {
  ButtonGroupSize,
  ButtonGroupVariant,
} from "../types/button-group.types";

/**
 * @description Define las clases por variante del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_VARIANT_CLASSES: Record<ButtonGroupVariant, string> =
  {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
    neutral: "bg-neutral text-neutral-content",
    ghost: "bg-transparent text-base-content",
  };

/**
 * @description Define las clases por tamano del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_SIZE_CLASSES: Record<ButtonGroupSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

/**
 * @description Define la clase base del grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_BASE_CLASS = "flex-row items-center gap-1";

/**
 * @description Define la clase del boton activo del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_ACTIVE_CLASS = "font-bold underline";
