import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { getAccordionItemClasses } from "../utils/get-accordion-item-classes.util";
import {
  ACCORDION_ITEM_CONTENT_CLASS,
  ACCORDION_ITEM_TITLE_CLASS,
} from "../constants/accordion-item.constants";
import type { AccordionItemProps } from "../types/accordion-item.types";

/**
 * @description Renderiza el elemento de acordeon con las propiedades
 * resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del acordeon.
 * @param props.children Contenido colapsable.
 * @param props.isOpen Indica si el acordeon esta abierto.
 * @param props.isDisabled Indica si el acordeon esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del acordeon.
 * @param props.className Clases adicionales configuradas.
 * @param props.onToggle Callback ejecutado al cambiar el estado.
 * @returns Elemento de acordeon listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const AccordionItemView = memo(function AccordionItemView({
  title,
  children,
  isOpen,
  isDisabled,
  ariaLabel,
  className,
  onToggle,
}: Required<
  Pick<AccordionItemProps, "title" | "isOpen" | "isDisabled" | "className">
> &
  Pick<
    AccordionItemProps,
    "children" | "ariaLabel" | "onToggle"
  >): JSX.Element {
  const handleToggle = useCallback((): void => {
    onToggle?.(!isOpen);
  }, [isOpen, onToggle]);

  return (
    <View
      accessibilityLabel={ariaLabel}
      className={`${getAccordionItemClasses({ isDisabled, isOpen })} ${className}`.trim()}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen, disabled: isDisabled }}
        disabled={isDisabled}
        onPress={handleToggle}
        className="flex-row items-center justify-between p-4"
      >
        <Text className={ACCORDION_ITEM_TITLE_CLASS}>{title}</Text>
        <Text className="text-base-content/60">
          {isOpen ? "\u25B4" : "\u25BE"}
        </Text>
      </Pressable>

      {isOpen && (
        <View className="px-4 pb-4">
          <Text className={ACCORDION_ITEM_CONTENT_CLASS}>{children}</Text>
        </View>
      )}
    </View>
  );
});

/**
 * @description Elemento de acordeon accesible que colapsa contenido bajo
 * un titulo, con estado controlado y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo visible del acordeon.
 * @param props.children Contenido colapsable.
 * @param props.isOpen Estado controlado del acordeon; por defecto cerrado.
 * @param props.isDisabled Indica si el acordeon no puede abrirse.
 * @param props.ariaLabel Etiqueta accesible del acordeon.
 * @param props.className Clases adicionales configuradas.
 * @param props.onToggle Callback ejecutado al cambiar el estado.
 * @returns Elemento de acordeon listo para renderizar.
 * @example
 * <AccordionItem
 *   title={t("faq.shipping")}
 *   isOpen={openId === "shipping"}
 *   onToggle={(isOpen): void => setOpenId(isOpen ? "shipping" : undefined)}
 * >
 *   {t("faq.shippingAnswer")}
 * </AccordionItem>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AccordionItem: FC<AccordionItemProps> = memo(
  function AccordionItem(props): JSX.Element {
    return (
      <AccordionItemView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        isDisabled={props.isDisabled ?? false}
        isOpen={props.isOpen ?? false}
        onToggle={props.onToggle}
        title={props.title}
      >
        {props.children}
      </AccordionItemView>
    );
  },
);

export default AccordionItem;
