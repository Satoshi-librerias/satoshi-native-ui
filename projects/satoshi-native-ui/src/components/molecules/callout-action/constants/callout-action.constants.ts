import type { CalloutActionVariant } from "../types/callout-action.types";

/**
 * @description Define las clases por variante del aviso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_VARIANT_CLASSES: Record<
  CalloutActionVariant,
  string
> = {
  info: "bg-info/20",
  success: "bg-success/20",
  warning: "bg-warning/20",
  error: "bg-error/20",
  neutral: "bg-base-200",
};

/**
 * @description Define la clase base del aviso con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_BASE_CLASS =
  "flex-row items-center gap-3 rounded-2xl p-4";

/**
 * @description Define la clase del mensaje del aviso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_MESSAGE_CLASS = "min-w-0 flex-1";

/**
 * @description Define el tamano del boton de accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_BUTTON_SIZE = "sm" as const;
