import { memo } from "react";
import type { FC, JSX } from "react";
import { Card as PaperCard, Text } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getCardClasses } from "../utils/get-card-classes.util";
import type { CardProps } from "../types/card.types";

/**
 * @description Renderiza la tarjeta con las propiedades ya resueltas sobre
 * el nucleo de react-native-paper.
 * @param props Propiedades de la tarjeta.
 * @param props.children Contenido de la tarjeta.
 * @param props.variant Variante visual de la tarjeta.
 * @param props.className Clases adicionales configuradas.
 * @returns Tarjeta lista para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const CardView = memo(function CardView({
  children,
  variant,
  className,
}: Required<Pick<CardProps, "variant" | "className">> &
  Pick<CardProps, "children">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  return (
    <PaperCard
      className={`${getCardClasses({ variant })} ${className}`.trim()}
      theme={theme}
    >
      <PaperCard.Content>
        <Text>{children}</Text>
      </PaperCard.Content>
    </PaperCard>
  );
});

/**
 * @description Contenedor de contenido con fondo, borde y sombra
 * construido sobre el nucleo de react-native-paper.
 * @param props Propiedades de la tarjeta.
 * @param props.children Contenido de la tarjeta.
 * @param props.variant Variante visual de la tarjeta.
 * @param props.className Clases adicionales configuradas.
 * @returns Tarjeta lista para renderizar.
 * @example
 * <Card variant="base" className="p-4 md:p-6">Contenido</Card>
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Card: FC<CardProps> = memo(function Card(props): JSX.Element {
  return (
    <CardView
      className={props.className ?? ""}
      variant={props.variant ?? "base"}
    >
      {props.children}
    </CardView>
  );
});

export default Card;
