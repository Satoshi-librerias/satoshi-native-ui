import type { AvatarVariant } from "../types/avatar.types";

/**
 * @description Define las clases por variante del avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_VARIANT_CLASSES: Record<AvatarVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  neutral: "bg-neutral text-neutral-content",
};

/**
 * @description Define la clase base compartida por todos los avatars.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AVATAR_BASE_CLASS =
  "h-12 w-12 items-center justify-center overflow-hidden rounded-full";
