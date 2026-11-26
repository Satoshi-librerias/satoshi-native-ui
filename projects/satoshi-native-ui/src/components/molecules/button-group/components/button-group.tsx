import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import {
  getButtonGroupClasses,
  getButtonGroupItemClasses,
} from "../utils/get-button-group-classes.util";
import type { ButtonGroupProps } from "../types/button-group.types";

/**
 * @description Renderiza el grupo de botones con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.items Botones configurados.
 * @param props.selectedId Identificador del boton seleccionado.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onSelect Callback ejecutado al seleccionar un boton.
 * @returns Grupo de botones listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ButtonGroupView = memo(function ButtonGroupView({
  items,
  selectedId,
  variant,
  size,
  ariaLabel,
  className,
  onSelect,
}: Required<Pick<ButtonGroupProps, "variant" | "size" | "className">> &
  Pick<
    ButtonGroupProps,
    "items" | "selectedId" | "ariaLabel" | "onSelect"
  >): JSX.Element {
  const handleSelect = useCallback(
    (id: string): void => {
      onSelect?.(id);
    },
    [onSelect],
  );

  return (
    <View accessibilityLabel={ariaLabel} className={className}>
      <View className={getButtonGroupClasses({ size })}>
        {items.map((item) => (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: item.id === selectedId }}
            className={getButtonGroupItemClasses({
              isActive: item.id === selectedId,
              size,
              variant,
            })}
            key={item.id}
            onPress={(): void => handleSelect(item.id)}
          >
            <Text>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
});

/**
 * @description Grupo de botones unidos con seleccion, variantes y tamanos
 * y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.items Botones configurados.
 * @param props.selectedId Identificador del boton seleccionado.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onSelect Callback ejecutado al seleccionar un boton.
 * @returns Grupo de botones listo para renderizar.
 * @example
 * <ButtonGroup
 *   items={[
 *     { id: "day", label: t("filters.day") },
 *     { id: "week", label: t("filters.week") },
 *   ]}
 *   selectedId={range}
 *   onSelect={setRange}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ButtonGroup: FC<ButtonGroupProps> = memo(
  function ButtonGroup(props): JSX.Element {
    return (
      <ButtonGroupView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        items={props.items}
        onSelect={props.onSelect}
        selectedId={props.selectedId}
        size={props.size ?? "md"}
        variant={props.variant ?? "neutral"}
      />
    );
  },
);

export default ButtonGroup;
