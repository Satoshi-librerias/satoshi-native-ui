/**
 * @description Define las variantes visuales disponibles para el spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SpinnerVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles para el spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SpinnerSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del spinner reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SpinnerProps {
  readonly ariaLabel?: string;
  readonly variant?: SpinnerVariant;
  readonly size?: SpinnerSize;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SpinnerClassOptions {
  readonly variant: NonNullable<SpinnerProps["variant"]>;
  readonly size: NonNullable<SpinnerProps["size"]>;
}
