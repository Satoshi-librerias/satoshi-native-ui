import { memo } from "react";
import type { FC, JSX } from "react";
import { Surface, Text } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import type { AlertProps } from "../types/alert.types";

/**
 * @description Renderiza la alerta con las propiedades ya resueltas sobre
 * el nucleo de react-native-paper.
 * @param props Propiedades de la alerta.
 * @param props.children Contenido de la alerta.
 * @param props.variant Variante visual de la alerta.
 * @param props.className Clases adicionales configuradas.
 * @returns Alerta lista para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const AlertView = memo(function AlertView({
  children,
  variant,
  className,
}: Required<Pick<AlertProps, "variant" | "className">> &
  Pick<AlertProps, "children">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const contentColor =
    variant === "neutral"
      ? theme.colors.onSurface
      : getVariantColor(theme, variant);

  return (
    <Surface
      accessibilityRole="alert"
      className={`rounded-xl p-4 ${className}`.trim()}
      elevation={0}
      theme={theme}
    >
      <Text style={{ color: contentColor }}>{children}</Text>
    </Surface>
  );
});

/**
 * @description Mensaje destacado para feedback del usuario construido sobre
 * el nucleo de react-native-paper con variantes semanticas.
 * @param props Propiedades de la alerta.
 * @param props.children Contenido de la alerta.
 * @param props.variant Variante visual de la alerta.
 * @param props.className Clases adicionales configuradas.
 * @returns Alerta lista para renderizar.
 * @example
 * <Alert variant="success">Operacion exitosa</Alert>
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Alert: FC<AlertProps> = memo(function Alert(props): JSX.Element {
  return (
    <AlertView
      className={props.className ?? ""}
      variant={props.variant ?? "info"}
    >
      {props.children}
    </AlertView>
  );
});

export default Alert;
