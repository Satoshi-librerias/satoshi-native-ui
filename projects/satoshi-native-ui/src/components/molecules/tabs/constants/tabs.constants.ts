import type { TabsSize, TabsVariant } from "../types/tabs.types";

/**
 * @description Define las clases por variante de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_VARIANT_CLASSES: Record<TabsVariant, string> = {
  boxed: "rounded-xl bg-base-200 p-1",
  lifted: "",
  bordered: "border-b border-base-300",
  default: "",
};

/**
 * @description Define las clases por tamano de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_SIZE_CLASSES: Record<TabsSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

/**
 * @description Define la clase base de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_BASE_CLASS = "flex-row items-center";

/**
 * @description Define la clase de la pestana activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_ACTIVE_CLASS = "bg-base-100 font-semibold rounded-lg";
