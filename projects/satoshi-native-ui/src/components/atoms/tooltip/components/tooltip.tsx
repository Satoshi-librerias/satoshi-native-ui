import { memo } from "react";
import type { FC, JSX } from "react";
import { Tooltip as PaperTooltip } from "react-native-paper";
import { View } from "react-native";
import { useTheme } from "@libs/hooks";
import { getTooltipClasses } from "../utils/get-tooltip-classes.util";
import type { TooltipProps } from "../types/tooltip.types";

/**
 * @description Renderiza el tooltip con las propiedades ya resueltas sobre
 * el nucleo de react-native-paper.
 * @param props Propiedades del tooltip.
 * @param props.children Contenido que activa el tooltip.
 * @param props.message Mensaje mostrado al activar el tooltip.
 * @param props.variant Variante visual del tooltip.
 * @param props.className Clases adicionales configuradas.
 * @returns Tooltip listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const TooltipView = memo(function TooltipView({
  children,
  message,
  variant,
  className,
}: Required<Pick<TooltipProps, "variant" | "className">> &
  Pick<TooltipProps, "children" | "message">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  return (
    <PaperTooltip theme={theme} title={message}>
      <View className={getTooltipClasses({ className, variant })}>
        {children as JSX.Element}
      </View>
    </PaperTooltip>
  );
});

/**
 * @description Mensaje flotante construido sobre el nucleo de
 * react-native-paper con variantes.
 * @param props Propiedades del tooltip.
 * @param props.children Contenido que activa el tooltip.
 * @param props.message Mensaje mostrado al activar el tooltip.
 * @param props.placement Posicion del tooltip.
 * @param props.variant Variante visual del tooltip.
 * @param props.className Clases adicionales configuradas.
 * @returns Tooltip listo para renderizar.
 * @example
 * <Tooltip message="Guardar cambios" placement="top">
 *   <Button>Guardar</Button>
 * </Tooltip>
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Tooltip: FC<TooltipProps> = memo(
  function Tooltip(props): JSX.Element {
    return (
      <TooltipView
        className={props.className ?? ""}
        message={props.message}
        variant={props.variant ?? "neutral"}
      >
        {props.children}
      </TooltipView>
    );
  },
);

export default Tooltip;
