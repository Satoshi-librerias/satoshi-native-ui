import {
  PROGRESS_BASE_CLASS,
  PROGRESS_VARIANT_CLASSES,
} from "../constants/progress.constants";
import type { ProgressClassOptions } from "../types/progress.types";

/**
 * @description Compone las clases del progress segun su configuracion.
 * @param _options Opciones visuales del progress.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getProgressClasses(_options: ProgressClassOptions): string {
  const classes: readonly string[] = [PROGRESS_BASE_CLASS];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases de la barra de relleno del progress.
 * @param options Opciones visuales del progress.
 * @param options.variant Variante visual.
 * @returns Clases de la barra de relleno.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getProgressFillClasses(options: ProgressClassOptions): string {
  return PROGRESS_VARIANT_CLASSES[options.variant];
}
