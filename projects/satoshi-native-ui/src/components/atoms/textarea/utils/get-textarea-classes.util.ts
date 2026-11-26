import {
  TEXTAREA_BASE_CLASS,
  TEXTAREA_SIZE_CLASSES,
  TEXTAREA_VARIANT_CLASSES,
} from "../constants/textarea.constants";
import type { TextareaClassOptions } from "../types/textarea.types";

/**
 * @description Compone las clases del textarea segun su configuracion.
 * @param options Opciones visuales del textarea.
 * @param options.variant Variante visual.
 * @param options.size Tamano del textarea.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getTextareaClasses(options: TextareaClassOptions): string {
  const classes: readonly string[] = [
    TEXTAREA_BASE_CLASS,
    TEXTAREA_VARIANT_CLASSES[options.variant],
    TEXTAREA_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
