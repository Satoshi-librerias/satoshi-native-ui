import type { AvatarGroupSize } from "../types/avatar-group.types";

/**
 * @description Define las clases de tamano del avatar interno.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_GROUP_SIZE_CLASSES: Record<AvatarGroupSize, string> = {
  xs: "h-8 w-8",
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

/**
 * @description Define la clase base del grupo de avatares.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_GROUP_BASE_CLASS = "flex-row items-center";

/**
 * @description Define la clase de anillo compartida por cada avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_GROUP_RING_CLASS = "border-2 border-base-100";

/**
 * @description Define las clases del avatar que muestra el contador de
 * miembros ocultos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_GROUP_HIDDEN_CLASS =
  "bg-neutral text-neutral-content text-xs";

/**
 * @description Define el numero maximo de avatares visibles por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_GROUP_DEFAULT_MAX = 4;
