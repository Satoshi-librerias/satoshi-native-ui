import {
  RADIO_BASE_CLASS,
  RADIO_SIZE_CLASSES,
  RADIO_VARIANT_CLASSES,
} from "../constants/radio.constants";
import type { RadioClassOptions } from "../types/radio.types";

/**
 * @description Compone las clases del radio segun su configuracion.
 * @param options Opciones visuales del radio.
 * @param options.variant Variante visual.
 * @param options.size Tamano del radio.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getRadioClasses(options: RadioClassOptions): string {
  const classes: readonly string[] = [
    RADIO_BASE_CLASS,
    RADIO_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases del radio seleccionado.
 * @param options Opciones visuales del radio.
 * @param options.variant Variante visual.
 * @param options.isChecked Indica si el radio esta seleccionado.
 * @returns Clase de fondo o cadena vacia.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getRadioCheckedClass(
  options: RadioClassOptions & { readonly isChecked: boolean },
): string {
  return options.isChecked ? RADIO_VARIANT_CLASSES[options.variant] : "";
}
