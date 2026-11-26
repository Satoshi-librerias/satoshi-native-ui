/**
 * @description Define las variantes visuales disponibles para el card.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type CardVariant =
  "primary" | "secondary" | "accent" | "neutral" | "base";

/**
 * @description Define las propiedades del card reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CardProps {
  readonly children: React.ReactNode;
  readonly variant?: CardVariant;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del card.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CardClassOptions {
  readonly variant: NonNullable<CardProps["variant"]>;
}
