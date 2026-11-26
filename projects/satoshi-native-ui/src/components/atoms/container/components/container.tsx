import type { FC, JSX } from "react";
import { View } from "react-native";
import { getContainerClasses } from "../utils/get-container-classes.util";
import type { ContainerProps } from "../types/container.types";

/**
 * @description Contenedor que controla el ancho, la distribucion y el
 * espaciado del contenido con enfoque mobile-first.
 * @param props Propiedades del contenedor.
 * @param props.children Contenido del contenedor.
 * @param props.maxWidth Ancho maximo del contenido.
 * @param props.align Alineacion de los elementos.
 * @param props.direction Direccion del flujo.
 * @param props.gap Espaciado entre elementos.
 * @param props.className Clases adicionales configuradas.
 * @param props.sectionSpacing Espaciado vertical semantico para secciones.
 * @param props.padding Escala de relleno responsive.
 * @returns Contenedor semantico con estilos responsive.
 * @example
 * <Container maxWidth="lg" align="between" padding="md">
 *   <Logo src={logo} alt={t("common.brandAlt")} />
 *   <Navigation items={items} />
 * </Container>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Container: FC<ContainerProps> = ({
  children,
  maxWidth = "xl",
  align = "between",
  direction = "row",
  gap = "md",
  padding = "md",
  sectionSpacing,
  className = "",
}): JSX.Element => {
  const classes = getContainerClasses({
    maxWidth,
    align,
    direction,
    gap,
    padding,
    sectionSpacing,
  });

  return <View className={`${classes} ${className}`.trim()}>{children}</View>;
};

export default Container;
