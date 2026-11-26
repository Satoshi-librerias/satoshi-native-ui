import {
  CHECKBOX_BASE_CLASS,
  CHECKBOX_SIZE_CLASSES,
  CHECKBOX_VARIANT_CLASSES,
} from "../constants/checkbox.constants";
import type { CheckboxClassOptions } from "../types/checkbox.types";

/**
 * @description Compone las clases del checkbox segun su configuracion.
 * @param options Opciones visuales del checkbox.
 * @param options.variant Variante visual.
 * @param options.size Tamano del checkbox.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCheckboxClasses(options: CheckboxClassOptions): string {
  const classes: readonly string[] = [
    CHECKBOX_BASE_CLASS,
    CHECKBOX_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases del checkbox marcado.
 * @param options Opciones visuales del checkbox.
 * @param options.variant Variante visual.
 * @param options.isChecked Indica si el checkbox esta marcado.
 * @returns Clase de fondo o cadena vacia.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCheckboxCheckedClass(
  options: CheckboxClassOptions & { readonly isChecked: boolean },
): string {
  return options.isChecked ? CHECKBOX_VARIANT_CLASSES[options.variant] : "";
}
