import type { AlertVariant } from "../types/alert.types";

/**
 * @description Define las clases por variante del alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ALERT_VARIANT_CLASSES: Record<AlertVariant, string> = {
  info: "bg-info/20 text-info-content",
  success: "bg-success/20 text-success-content",
  warning: "bg-warning/20 text-warning-content",
  error: "bg-error/20 text-error-content",
  neutral: "bg-base-200 text-base-content",
};

/**
 * @description Define la clase base compartida por todos los alerts.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ALERT_BASE_CLASS = "rounded-xl p-4";
