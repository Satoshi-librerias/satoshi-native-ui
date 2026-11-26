import type { ToolbarVariant } from "../types/toolbar.types";

/**
 * @description Define las clases por variante de la barra.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLBAR_VARIANT_CLASSES: Record<ToolbarVariant, string> = {
  bordered: "border border-base-300 bg-base-100",
  filled: "bg-base-200",
  ghost: "",
};

/**
 * @description Define la clase base de la barra de herramientas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLBAR_BASE_CLASS =
  "flex w-full flex-row flex-wrap items-center justify-between gap-2 rounded-2xl p-2 sm:p-3";
