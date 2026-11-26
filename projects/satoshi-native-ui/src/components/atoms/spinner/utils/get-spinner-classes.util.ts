import {
  SPINNER_BASE_CLASS,
  SPINNER_SIZE_CLASSES,
  SPINNER_VARIANT_CLASSES,
} from "../constants/spinner.constants";
import type { SpinnerClassOptions } from "../types/spinner.types";

/**
 * @description Compone las clases del spinner segun su configuracion.
 * @param options Opciones visuales del spinner.
 * @param options.variant Variante visual.
 * @param options.size Tamano del spinner.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSpinnerClasses(options: SpinnerClassOptions): string {
  const classes: readonly string[] = [
    SPINNER_BASE_CLASS,
    SPINNER_VARIANT_CLASSES[options.variant],
    SPINNER_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
