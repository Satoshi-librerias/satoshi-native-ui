/**
 * @description Define las variantes visuales disponibles para el tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TooltipVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define las propiedades del tooltip reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TooltipProps {
  readonly children: React.ReactNode;
  readonly message: string;
  readonly placement?: "top" | "bottom" | "left" | "right";
  readonly variant?: TooltipVariant;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TooltipClassOptions {
  readonly variant: NonNullable<TooltipProps["variant"]>;
}
