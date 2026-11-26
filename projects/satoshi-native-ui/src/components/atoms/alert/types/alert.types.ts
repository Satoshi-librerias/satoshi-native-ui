/**
 * @description Define las variantes visuales disponibles para el alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";

/**
 * @description Define las propiedades del alert reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AlertProps {
  readonly children: React.ReactNode;
  readonly variant?: AlertVariant;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AlertClassOptions {
  readonly variant: NonNullable<AlertProps["variant"]>;
}
