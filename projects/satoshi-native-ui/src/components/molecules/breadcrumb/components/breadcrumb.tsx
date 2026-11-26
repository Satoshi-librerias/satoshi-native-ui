import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { getBreadcrumbClasses } from "../utils/get-breadcrumb-classes.util";
import {
  BREADCRUMB_CURRENT_CLASS,
  BREADCRUMB_SEPARATOR_CLASS,
} from "../constants/breadcrumb.constants";
import type { BreadcrumbProps } from "../types/breadcrumb.types";

/**
 * @description Renderiza la ruta de navegacion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.items Elementos de la ruta.
 * @param props.ariaLabel Etiqueta accesible de la ruta.
 * @param props.className Clases adicionales configuradas.
 * @returns Ruta de navegacion lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const BreadcrumbView = memo(function BreadcrumbView({
  items,
  ariaLabel,
  className,
}: Required<Pick<BreadcrumbProps, "items" | "className">> &
  Pick<BreadcrumbProps, "ariaLabel">): JSX.Element {
  return (
    <View
      accessibilityLabel={ariaLabel}
      accessibilityRole="header"
      className={getBreadcrumbClasses({ className })}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <View
            className="flex-row items-center gap-1"
            key={`${item.label}-${index.toString()}`}
          >
            {index > 0 && <Text className={BREADCRUMB_SEPARATOR_CLASS}>/</Text>}
            <Text
              accessibilityRole={isLast ? "text" : "link"}
              aria-current={isLast ? "page" : undefined}
              className={isLast ? BREADCRUMB_CURRENT_CLASS : undefined}
            >
              {item.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
});

/**
 * @description Ruta de navegacion jerarquica con clases responsive de
 * NativeWind. El ultimo elemento se marca como pagina actual.
 * @param props Propiedades de la molecula.
 * @param props.items Elementos de la ruta con etiqueta y enlace opcional.
 * @param props.ariaLabel Etiqueta accesible de la ruta.
 * @param props.className Clases adicionales configuradas.
 * @returns Ruta de navegacion lista para renderizar.
 * @example
 * <Breadcrumb
 *   items={[
 *     { label: t("nav.home"), href: "/" },
 *     { label: t("nav.settings"), href: "/settings" },
 *     { label: t("nav.profile") },
 *   ]}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Breadcrumb: FC<BreadcrumbProps> = memo(
  function Breadcrumb(props): JSX.Element {
    return (
      <BreadcrumbView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        items={props.items}
      />
    );
  },
);

export default Breadcrumb;
