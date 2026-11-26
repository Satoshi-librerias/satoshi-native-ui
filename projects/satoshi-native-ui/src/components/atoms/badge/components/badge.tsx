import { memo } from "react";
import type { FC, JSX } from "react";
import { Badge as PaperBadge } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import type { BadgeProps } from "../types/badge.types";

/**
 * @description Define la altura del badge por tamano en unidades de densidad.
 * @author Steveen Cues
 * @version 2.0.0
 */
const BADGE_HEIGHT_SM = 18;
const BADGE_HEIGHT_MD = 22;
const BADGE_HEIGHT_LG = 26;

/**
 * @description Define la altura del badge por tamano.
 * @author Steveen Cues
 * @version 2.0.0
 */
const BADGE_HEIGHT: Record<NonNullable<BadgeProps["size"]>, number> = {
  sm: BADGE_HEIGHT_SM,
  md: BADGE_HEIGHT_MD,
  lg: BADGE_HEIGHT_LG,
};

/**
 * @description Renderiza el badge con las propiedades ya resueltas sobre el
 * nucleo de react-native-paper.
 * @param props Propiedades del badge.
 * @param props.children Contenido del badge.
 * @param props.variant Variante visual del badge.
 * @param props.size Tamano del badge.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del badge.
 * @param props.className Clases adicionales configuradas.
 * @returns Badge listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const BadgeView = memo(function BadgeView({
  children,
  variant,
  size,
  isOutlined,
  ariaLabel,
  className,
}: Required<Pick<BadgeProps, "variant" | "size" | "isOutlined" | "className">> &
  Pick<BadgeProps, "children" | "ariaLabel">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  return (
    <PaperBadge
      accessibilityLabel={ariaLabel}
      className={className}
      style={{
        backgroundColor: isOutlined
          ? "transparent"
          : getVariantColor(theme, variant),
        height: BADGE_HEIGHT[size],
      }}
      theme={theme}
    >
      {typeof children === "string" || typeof children === "number"
        ? children
        : undefined}
    </PaperBadge>
  );
});

/**
 * @description Etiqueta compacta para estados, contadores y categorias
 * construida sobre el nucleo de react-native-paper.
 * @param props Propiedades del badge.
 * @param props.children Contenido del badge.
 * @param props.variant Variante visual del badge.
 * @param props.size Tamano del badge.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del badge.
 * @param props.className Clases adicionales configuradas.
 * @returns Badge listo para renderizar.
 * @example
 * <Badge variant="success" size="sm">Activo</Badge>
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Badge: FC<BadgeProps> = memo(function Badge(props): JSX.Element {
  return (
    <BadgeView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      isOutlined={props.isOutlined ?? false}
      size={props.size ?? "md"}
      variant={props.variant ?? "primary"}
    >
      {props.children}
    </BadgeView>
  );
});

export default Badge;
