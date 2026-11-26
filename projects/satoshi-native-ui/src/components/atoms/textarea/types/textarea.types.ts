/**
 * @description Define las variantes visuales disponibles para el textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TextareaVariant =
  "primary" | "secondary" | "accent" | "neutral" | "ghost";

/**
 * @description Define los tamanos disponibles para el textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TextareaSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del textarea reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TextareaProps {
  readonly value?: string;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly ariaLabel?: string;
  readonly rows?: number;
  readonly onChange?: (value: string) => void;
  readonly variant?: TextareaVariant;
  readonly size?: TextareaSize;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TextareaClassOptions {
  readonly variant: NonNullable<TextareaProps["variant"]>;
  readonly size: NonNullable<TextareaProps["size"]>;
}
