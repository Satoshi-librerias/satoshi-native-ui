import {
  SWITCH_BASE_CLASS,
  SWITCH_SIZE_CLASSES,
  SWITCH_VARIANT_CLASSES,
} from "../constants/switch.constants";
import type { SwitchClassOptions } from "../types/switch.types";

/**
 * @description Compone las clases del switch segun su configuracion.
 * @param options Opciones visuales del switch.
 * @param options.variant Variante visual.
 * @param options.size Tamano del switch.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSwitchClasses(options: SwitchClassOptions): string {
  const classes: readonly string[] = [
    SWITCH_BASE_CLASS,
    SWITCH_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases del switch activado.
 * @param options Opciones visuales del switch.
 * @param options.variant Variante visual.
 * @param options.isChecked Indica si el switch esta activado.
 * @returns Clase de fondo o cadena vacia.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSwitchCheckedClass(
  options: SwitchClassOptions & { readonly isChecked: boolean },
): string {
  return options.isChecked ? SWITCH_VARIANT_CLASSES[options.variant] : "";
}
