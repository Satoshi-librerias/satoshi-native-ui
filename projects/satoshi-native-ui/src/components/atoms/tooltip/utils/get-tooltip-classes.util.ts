import {
  TOOLTIP_BASE_CLASS,
  TOOLTIP_VARIANT_CLASSES,
} from "../constants/tooltip.constants";
import type { TooltipClassOptions } from "../types/tooltip.types";

/**
 * @description Compone las clases del tooltip segun su configuracion.
 * @param options Opciones visuales del tooltip.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getTooltipClasses(options: TooltipClassOptions): string {
  const classes: readonly string[] = [
    TOOLTIP_BASE_CLASS,
    TOOLTIP_VARIANT_CLASSES[options.variant],
    options.className ?? "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
