import type { DividerVariant } from "../types/divider.types";

/**
 * @description Define las clases por variante del separador.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DIVIDER_VARIANT_CLASSES: Record<DividerVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-base-300",
};

/**
 * @description Define la clase base compartida por todos los separadores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DIVIDER_BASE_CLASS = "self-center";
