import { memo } from "react";
import type { FC, JSX } from "react";
import { View } from "react-native";
import { getToolbarClasses } from "../utils/get-toolbar-classes.util";
import type { ToolbarProps } from "../types/toolbar.types";

/**
 * @description Renderiza la barra de herramientas con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.start Contenido alineado a la izquierda.
 * @param props.end Contenido alineado a la derecha.
 * @param props.variant Variante visual.
 * @param props.ariaLabel Etiqueta accesible de la barra.
 * @param props.className Clases adicionales configuradas.
 * @returns Barra de herramientas lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ToolbarView = memo(function ToolbarView({
  start,
  end,
  variant,
  ariaLabel,
  className,
}: Required<Pick<ToolbarProps, "variant" | "className">> &
  Pick<ToolbarProps, "start" | "end" | "ariaLabel">): JSX.Element {
  return (
    <View
      accessibilityLabel={ariaLabel}
      accessibilityRole="toolbar"
      className={`${getToolbarClasses({ variant })} ${className}`.trim()}
    >
      <View className="flex min-w-0 flex-row items-center gap-2">{start}</View>

      <View className="flex min-w-0 flex-row items-center gap-2">{end}</View>
    </View>
  );
});

/**
 * @description Barra de herramientas con contenido inicial y final,
 * variantes y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.start Contenido alineado a la izquierda.
 * @param props.end Contenido alineado a la derecha.
 * @param props.variant Variante visual (bordered, filled, ghost).
 * @param props.ariaLabel Etiqueta accesible de la barra.
 * @param props.className Clases adicionales configuradas.
 * @returns Barra de herramientas lista para renderizar.
 * @example
 * <Toolbar
 *   start={<SearchBar placeholder={t("common.search")} />}
 *   end={<ButtonGroup items={viewItems} selectedId={view} />}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Toolbar: FC<ToolbarProps> = memo(
  function Toolbar(props): JSX.Element {
    return (
      <ToolbarView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        end={props.end}
        start={props.start}
        variant={props.variant ?? "bordered"}
      />
    );
  },
);

export default Toolbar;
