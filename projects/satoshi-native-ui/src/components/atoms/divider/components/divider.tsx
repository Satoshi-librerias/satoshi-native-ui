import { memo } from "react";
import type { FC, JSX } from "react";
import { Divider as PaperDivider } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import type { DividerProps } from "../types/divider.types";

/**
 * @description Renderiza el separador con las propiedades ya resueltas
 * sobre el nucleo de react-native-paper.
 * @param props Propiedades del separador.
 * @param props.orientation Orientacion del separador.
 * @param props.variant Variante visual del separador.
 * @param props.className Clases adicionales configuradas.
 * @returns Separador listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const DividerView = memo(function DividerView({
  orientation,
  variant,
  className,
}: Required<
  Pick<DividerProps, "orientation" | "variant" | "className">
>): JSX.Element {
  const { paperTheme: theme } = useTheme();

  return (
    <PaperDivider
      className={className}
      style={{
        backgroundColor: getVariantColor(theme, variant),
        height: orientation === "vertical" ? "100%" : undefined,
        width: orientation === "vertical" ? 1 : undefined,
      }}
      theme={theme}
    />
  );
});

/**
 * @description Separador horizontal o vertical construido sobre el nucleo
 * de react-native-paper.
 * @param props Propiedades del separador.
 * @param props.orientation Orientacion del separador.
 * @param props.variant Variante visual del separador.
 * @param props.className Clases adicionales configuradas.
 * @returns Separador listo para renderizar.
 * @example
 * <Divider />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Divider: FC<DividerProps> = (props): JSX.Element => {
  return (
    <DividerView
      className={props.className ?? ""}
      orientation={props.orientation ?? "horizontal"}
      variant={props.variant ?? "neutral"}
    />
  );
};

export default Divider;
